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

# ─────────────────────────────────────────────────────────────────────────
# Se comprueba si cada recurso existe ANTES de crearlo.
#
# La version anterior usaba `crear 2>/dev/null || echo "ya existia"`, que
# oculta cualquier fallo y no solo el de recurso repetido. En la primera
# corrida real dijo "ya existia" tres veces cuando en verdad la base habia
# fallado, y termino anunciando que todo estaba listo.
# ─────────────────────────────────────────────────────────────────────────

echo ""
echo "── registro de imagenes ──"
if gcloud artifacts repositories describe cumbre --location="${REGION}" >/dev/null 2>&1; then
  echo "   ya existia"
else
  gcloud artifacts repositories create cumbre \
    --repository-format=docker \
    --location="${REGION}" \
    --description="Imagenes de los servicios de la plataforma"
fi

gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

echo ""
echo "── base de datos ──"
if gcloud sql instances describe "${INSTANCIA_SQL}" >/dev/null 2>&1; then
  echo "   ya existia"
else
  echo "   creando — tarda entre 5 y 10 minutos, no esta colgado"
  # `--edition=enterprise` es obligatorio: Cloud SQL toma Enterprise Plus por
  # defecto, y ahi el nivel db-f1-micro no existe. Sin esto falla con
  # "Invalid Tier (db-f1-micro) for (ENTERPRISE_PLUS) Edition".
  #
  # db-f1-micro es el mas chico. Alcanza para varias academias; si un dia
  # hace falta mas, se cambia el tamaño sin recrear nada.
  gcloud sql instances create "${INSTANCIA_SQL}" \
    --database-version=POSTGRES_16 \
    --edition=enterprise \
    --tier=db-f1-micro \
    --region="${REGION}" \
    --storage-size=10GB \
    --storage-auto-increase \
    --backup-start-time=07:00
fi

echo ""
echo "── usuario y base ──"
if gcloud sql users list --instance="${INSTANCIA_SQL}" --format="value(name)" 2>/dev/null | grep -qx "${BD_USUARIO}"; then
  echo "   el usuario ya existia"
else
  gcloud sql users create "${BD_USUARIO}" \
    --instance="${INSTANCIA_SQL}" \
    --password="${BD_CLAVE}"
fi

if gcloud sql databases list --instance="${INSTANCIA_SQL}" --format="value(name)" 2>/dev/null | grep -qx "${BD_NOMBRE}"; then
  echo "   la base ya existia"
else
  gcloud sql databases create "${BD_NOMBRE}" --instance="${INSTANCIA_SQL}"
fi

echo ""
echo "── permisos de la cuenta de servicio ──"
# Sin esto los servicios arrancan, responden /health y fallan al primer
# acceso a datos con un 500 opaco. El log de Cloud Run no lo dice: hay que
# ir a Cloud Logging para ver "missing permission cloudsql.instances.get".
NUMERO="$(gcloud projects describe "${PROYECTO}" --format='value(projectNumber)')"
CUENTA="${NUMERO}-compute@developer.gserviceaccount.com"

gcloud projects add-iam-policy-binding "${PROYECTO}" \
  --member="serviceAccount:${CUENTA}" \
  --role="roles/cloudsql.client" \
  --condition=None >/dev/null
echo "   ${CUENTA} puede usar Cloud SQL"

# Los servicios tienen que ser alcanzables desde fuera de Google: las
# aplicaciones de Vercel les hablan desde internet. En una organizacion
# nueva esto lo bloquea la politica de comparticion restringida por
# dominio, que hay que relajar para este proyecto.
if ! gcloud resource-manager org-policies describe \
      constraints/iam.allowedPolicyMemberDomains --project="${PROYECTO}" \
      --effective 2>/dev/null | grep -q "allValues: ALLOW"; then
  echo ""
  echo "   AVISO: la organizacion restringe a quien se pueden dar permisos."
  echo "   Los servicios no podran ser publicos y Vercel no los alcanzara."
  echo "   Hace falta el rol roles/orgpolicy.policyAdmin y luego:"
  echo ""
  echo "     printf 'constraint: constraints/iam.allowedPolicyMemberDomains\\nlistPolicy:\\n  allValues: ALLOW\\n' > /tmp/politica.yaml"
  echo "     gcloud resource-manager org-policies set-policy /tmp/politica.yaml --project=${PROYECTO}"
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo " Preparado. Ahora:"
echo ""
echo "   1. Migraciones:  ./deploy/gcp/migrar.sh"
echo "   2. Despliegue:   ./deploy/gcp/desplegar.sh"
echo "════════════════════════════════════════════════════════════"
