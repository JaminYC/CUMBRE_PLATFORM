#!/usr/bin/env bash
#
# Despliega los tres servicios a Cloud Run.
#
# Se corre desde la raiz del repositorio:
#   ./deploy/gcp/desplegar.sh
#
# Espera que `deploy/gcp/.env.gcp` exista con los valores del proyecto.
# La primera vez hay que correr `preparar.sh`, que crea la base de datos y
# el registro de imagenes.

set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$RAIZ"

if [ ! -f deploy/gcp/.env.gcp ]; then
  echo "Falta deploy/gcp/.env.gcp — copialo de .env.gcp.example y completalo."
  exit 1
fi

# shellcheck source=/dev/null
source deploy/gcp/.env.gcp

: "${PROYECTO:?falta PROYECTO}"
: "${REGION:?falta REGION}"
: "${INSTANCIA_SQL:?falta INSTANCIA_SQL}"
: "${BD_USUARIO:?falta BD_USUARIO}"
: "${BD_CLAVE:?falta BD_CLAVE}"
: "${BD_NOMBRE:?falta BD_NOMBRE}"

REGISTRO="${REGION}-docker.pkg.dev/${PROYECTO}/cumbre"
CONEXION="${PROYECTO}:${REGION}:${INSTANCIA_SQL}"

# Prisma se conecta por socket Unix, que es como Cloud Run expone Cloud SQL.
# El `host` va como parametro y no en la parte del servidor: con un socket no
# hay maquina a la que apuntar.
URL_BD="postgresql://${BD_USUARIO}:${BD_CLAVE}@localhost/${BD_NOMBRE}?host=/cloudsql/${CONEXION}"

echo "Proyecto : ${PROYECTO}"
echo "Region   : ${REGION}"
echo "Registro : ${REGISTRO}"
echo ""

# ── 1. Construir y subir ────────────────────────────────────────────────
for SERVICIO in auth_service content_service learning_service; do
  CORTO="${SERVICIO%_service}"
  echo "── construyendo ${CORTO} ──"
  docker build \
    -f deploy/Dockerfile.service \
    --build-arg "SERVICE=${SERVICIO}" \
    -t "${REGISTRO}/${CORTO}:latest" \
    .
  docker push "${REGISTRO}/${CORTO}:latest"
done

# ── 2. Desplegar ────────────────────────────────────────────────────────
#
# `--allow-unauthenticated` deja el servicio accesible desde internet. No es
# un descuido: los servicios ya validan el token de sesion en cada peticion,
# y las aplicaciones de Vercel les hablan desde fuera de Google. Poner
# autenticacion de Cloud Run encima obligaria a un segundo sistema de
# credenciales para el mismo control.
#
# NO se define AUTH_SERVICE_PORT ni sus equivalentes: los servicios los
# prefieren sobre PORT, y Cloud Run exige escuchar en el PORT que inyecta.

comun=(
  --project "${PROYECTO}"
  --region "${REGION}"
  --platform managed
  --allow-unauthenticated
  --add-cloudsql-instances "${CONEXION}"
  --set-env-vars "NODE_ENV=production,LOG_LEVEL=info,DATABASE_URL=${URL_BD},DIRECT_URL=${URL_BD}"
  # Una instancia siempre viva: sin esto la primera peticion tras un rato
  # sin uso tarda varios segundos, y un alumno que entra a las 7 a. m. se
  # come esa espera.
  --min-instances 1
  --max-instances 10
  --memory 512Mi
)

echo ""
echo "── desplegando auth ──"
gcloud run deploy auth \
  --image "${REGISTRO}/auth:latest" \
  "${comun[@]}" \
  --update-env-vars "PORTAL_URL=${PORTAL_URL:-}"

URL_AUTH="$(gcloud run services describe auth --project "${PROYECTO}" --region "${REGION}" --format 'value(status.url)')"
echo "auth -> ${URL_AUTH}"

echo ""
echo "── desplegando content ──"
gcloud run deploy content \
  --image "${REGISTRO}/content:latest" \
  "${comun[@]}" \
  --update-env-vars "AUTH_SERVICE_URL=${URL_AUTH}"

URL_CONTENT="$(gcloud run services describe content --project "${PROYECTO}" --region "${REGION}" --format 'value(status.url)')"
echo "content -> ${URL_CONTENT}"

echo ""
echo "── desplegando learning ──"
gcloud run deploy learning \
  --image "${REGISTRO}/learning:latest" \
  "${comun[@]}" \
  --update-env-vars "AUTH_SERVICE_URL=${URL_AUTH},CONTENT_SERVICE_URL=${URL_CONTENT}"

URL_LEARNING="$(gcloud run services describe learning --project "${PROYECTO}" --region "${REGION}" --format 'value(status.url)')"

echo ""
echo "════════════════════════════════════════════════════════════"
echo " Listo. Estas son las URLs para las variables de Vercel:"
echo ""
echo "   AUTH_SERVICE_URL      ${URL_AUTH}"
echo "   CONTENT_SERVICE_URL   ${URL_CONTENT}"
echo "   LEARNING_SERVICE_URL  ${URL_LEARNING}"
echo "════════════════════════════════════════════════════════════"
