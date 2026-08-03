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

# El proxy usa las "credenciales predeterminadas de aplicacion", que son
# distintas de las de `gcloud auth login`. Se comprueba antes de intentar,
# porque el error que da si faltan no dice cual es el comando que lo arregla.
if ! gcloud auth application-default print-access-token >/dev/null 2>&1; then
  echo ""
  echo "Faltan las credenciales de aplicacion. Corre esto y vuelve a intentar:"
  echo ""
  echo "    gcloud auth application-default login"
  echo ""
  echo 'Es un login aparte del de "gcloud auth login": ese autentica el CLI,'
  echo 'este autentica a las librerias y al proxy de Cloud SQL.'
  exit 1
fi

echo "── abriendo el tunel a ${CONEXION} ──"
"./$BIN" "${CONEXION}" --port "${PUERTO}" &
PROXY_PID=$!
# Que el tunel se cierre pase lo que pase, tambien si algo falla en medio.
trap 'kill ${PROXY_PID} 2>/dev/null || true' EXIT

# Esperar a que acepte conexiones en vez de dormir a ciegas.
#
# Si no levanta hay que ABORTAR, no seguir: la version anterior continuaba y
# lanzaba las migraciones contra una base inalcanzable, con lo que el error
# que veias era "no puedo conectar a 127.0.0.1" en vez del motivo real.
LISTO=0
for _ in $(seq 1 30); do
  if (echo > "/dev/tcp/127.0.0.1/${PUERTO}") 2>/dev/null; then LISTO=1; break; fi
  # Si el proxy ya murio, no tiene sentido seguir esperando.
  if ! kill -0 "${PROXY_PID}" 2>/dev/null; then break; fi
  sleep 1
done

if [ "$LISTO" -ne 1 ]; then
  echo ""
  echo "El tunel no llego a abrirse. Revisa el error del proxy arriba."
  exit 1
fi

export DATABASE_URL="postgresql://${BD_USUARIO}:${BD_CLAVE}@127.0.0.1:${PUERTO}/${BD_NOMBRE}"
export DIRECT_URL="${DATABASE_URL}"

echo ""
# tutor-engine entra en la lista aunque no sea un servicio.
#
# Tiene su propio esquema de Prisma —las sesiones y los turnos de conversacion
# del tutor— y se habia quedado fuera. El sintoma no aparecia hasta usar el
# tutor de verdad en produccion:
#
#   The table `public.tutor_turns` does not exist in the current database.
#
# El flujo de GitHub Actions si lo migraba; este guion no. Dos listas de lo
# mismo en dos sitios, y solo una estaba completa.
for SERVICIO in auth-service content-service learning-service tutor-engine; do
  echo "── migrando ${SERVICIO} ──"
  pnpm --filter "@cumbre/${SERVICIO}" db:migrate
done

echo ""
# Se siembran los TRES, no solo auth.
#
# Antes solo corria el de auth, asi que en produccion habia cuentas pero ni
# un tema ni una ruta de aprendizaje. El sintoma no era un error: el panel
# del alumno respondia 200 y la lista de temas devolvia {"items":[],"total":0}.
# Todo "funcionaba" y no habia nada dentro.
#
# Los tres son idempotentes: usan upsert sobre IDs fijos y solo borran los
# registros placeholder viejos. No tocan las cuentas de ninguna institucion.
for SERVICIO in auth-service learning-service content-service; do
  echo "── sembrando ${SERVICIO} ──"
  pnpm --filter "@cumbre/${SERVICIO}" db:seed
done

echo ""
# El temario oficial de la UNSA y el banco de preguntas.
#
# Van aparte de las semillas de demostracion porque son dato real, y en este
# orden porque las preguntas cuelgan de los temas: sembrarlas antes las
# descarta todas por "tema desconocido" sin dar ningun error.
#
# Estaban SOLO en .github/workflows/production-migrations.yml, que apunta a la
# infraestructura anterior —Supabase, con DATABASE_URL y DIRECT_URL separados
# por el pooler— y que nunca llego a ejecutarse. La misma trampa que ya conto
# el comentario de arriba sobre el tutor: dos listas de lo mismo en dos sitios
# y solo una completa. Aqui la de verdad es esta.
for SEMILLA in temario preguntas; do
  echo "── sembrando ${SEMILLA} ──"
  pnpm --filter "@cumbre/learning-service" "db:seed:${SEMILLA}"
done

echo ""
echo "════════════════════════════════════════════════════════════"
echo " Base lista."
echo ""
echo " Para crear las cuentas de una academia, con el tunel abierto:"
echo ""
echo "   node \"C:/VASTORIA SOLUTIONS SAC/academia/scripts/crear-usuarios-bryce.mjs\" \\"
echo "     | psql \"\${DATABASE_URL}\""
echo "════════════════════════════════════════════════════════════"
