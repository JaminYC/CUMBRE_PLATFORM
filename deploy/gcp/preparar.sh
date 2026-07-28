#!/usr/bin/env bash
#
# Crea lo que hace falta UNA sola vez: la base de datos, el registro de
# imagenes y los permisos. Despues de esto, cada despliegue es
# `desplegar.sh`.
#
#   ./deploy/gcp/preparar.sh

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

gcloud config set project "${PROYECTO}"

echo "── activando los servicios que hacen falta ──"
gcloud services enable \
  run.googleapis.com \
  sqladmin.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com

echo ""
echo "── registro de imagenes ──"
gcloud artifacts repositories create cumbre \
  --repository-format=docker \
  --location="${REGION}" \
  --description="Imagenes de los servicios de la plataforma" \
  2>/dev/null || echo "   ya existia"

gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

echo ""
echo "── base de datos ──"
# db-f1-micro es el nivel mas chico. Alcanza para varias academias; si algun
# dia hace falta mas, se cambia el tamaño sin recrear nada.
gcloud sql instances create "${INSTANCIA_SQL}" \
  --database-version=POSTGRES_16 \
  --tier=db-f1-micro \
  --region="${REGION}" \
  --storage-size=10GB \
  --storage-auto-increase \
  --backup-start-time=07:00 \
  2>/dev/null || echo "   ya existia"

gcloud sql users create "${BD_USUARIO}" \
  --instance="${INSTANCIA_SQL}" \
  --password="${BD_CLAVE}" \
  2>/dev/null || echo "   el usuario ya existia"

gcloud sql databases create "${BD_NOMBRE}" \
  --instance="${INSTANCIA_SQL}" \
  2>/dev/null || echo "   la base ya existia"

echo ""
echo "════════════════════════════════════════════════════════════"
echo " Preparado. Ahora:"
echo ""
echo "   1. Migraciones:  ./deploy/gcp/migrar.sh"
echo "   2. Despliegue:   ./deploy/gcp/desplegar.sh"
echo "════════════════════════════════════════════════════════════"
