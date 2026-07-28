#!/usr/bin/env bash
#
# Aplica las migraciones a Cloud SQL desde tu maquina.
#
#   ./deploy/gcp/migrar.sh
#
# Cloud SQL no acepta conexiones directas desde internet. Google da un
# proxy que abre un tunel autenticado: se levanta en un puerto local, Prisma
# se conecta ahi como si la base estuviera al lado, y el proxy se encarga
# del resto.
#
# Se corre a mano y no al desplegar: aplicar cambios de esquema mientras hay
# gente conectada es como se pierden datos.

set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$RAIZ"

source deploy/gcp/.env.gcp

: "${PROYECTO:?falta PROYECTO}"
: "${REGION:?falta REGION}"
: "${INSTANCIA_SQL:?falta INSTANCIA_SQL}"
: "${BD_USUARIO:?falta BD_USUARIO}"
: "${BD_CLAVE:?falta BD_CLAVE}"
: "${BD_NOMBRE:?falta BD_NOMBRE}"

CONEXION="${PROYECTO}:${REGION}:${INSTANCIA_SQL}"
PUERTO=5433   # 5433 y no 5432, para no chocar con la Postgres local de Docker

# ── El proxy ─────────────────────────────────────────────────────────────
BIN="deploy/gcp/cloud-sql-proxy"
[ "${OS:-}" = "Windows_NT" ] && BIN="${BIN}.exe"

if [ ! -f "$BIN" ]; then
  echo "── descargando el proxy de Cloud SQL ──"
  if [ "${OS:-}" = "Windows_NT" ]; then
    URL="https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.14.1/cloud-sql-proxy.x64.exe"
  else
    URL="https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.14.1/cloud-sql-proxy.linux.amd64"
  fi
  curl -fsSL -o "$BIN" "$URL"
  chmod +x "$BIN"
fi

echo "── abriendo el tunel a ${CONEXION} ──"
"./$BIN" "${CONEXION}" --port "${PUERTO}" &
PROXY_PID=$!
# Que el tunel se cierre pase lo que pase, tambien si algo falla en medio.
trap 'kill ${PROXY_PID} 2>/dev/null || true' EXIT

# Esperar a que acepte conexiones en vez de dormir a ciegas
for _ in $(seq 1 30); do
  if (echo > "/dev/tcp/127.0.0.1/${PUERTO}") 2>/dev/null; then break; fi
  sleep 1
done

export DATABASE_URL="postgresql://${BD_USUARIO}:${BD_CLAVE}@127.0.0.1:${PUERTO}/${BD_NOMBRE}"
export DIRECT_URL="${DATABASE_URL}"

echo ""
for SERVICIO in auth-service content-service learning-service; do
  echo "── migrando ${SERVICIO} ──"
  pnpm --filter "@cumbre/${SERVICIO}" db:migrate
done

echo ""
echo "── sembrando los usuarios demo ──"
pnpm --filter @cumbre/auth-service db:seed

echo ""
echo "════════════════════════════════════════════════════════════"
echo " Base lista."
echo ""
echo " Para crear las cuentas de una academia, con el tunel abierto:"
echo ""
echo "   node \"C:/VASTORIA SOLUTIONS SAC/academia/scripts/crear-usuarios-bryce.mjs\" \\"
echo "     | psql \"\${DATABASE_URL}\""
echo "════════════════════════════════════════════════════════════"
