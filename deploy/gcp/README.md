# Backend en Google Cloud

Los tres servicios en **Cloud Run** y la base en **Cloud SQL**, en la región
de **Santiago** — la más cercana a Perú de las que ofrece Google, unos 30 ms
desde Lima.

Un solo backend atiende a todas las instituciones: la separación es la
columna `tenant`, no infraestructura repetida.

---

## Antes de empezar

Hace falta el `gcloud` instalado y con sesión iniciada:

```bash
gcloud --version            # si no responde: cloud.google.com/sdk/docs/install
gcloud auth login
gcloud config set project TU-PROYECTO
```

Y Docker corriendo, para construir las imágenes.

## Los tres pasos

```bash
cp deploy/gcp/.env.gcp.example deploy/gcp/.env.gcp
nano deploy/gcp/.env.gcp        # completar PROYECTO y BD_CLAVE

./deploy/gcp/preparar.sh        # una sola vez: base de datos y registro
./deploy/gcp/migrar.sh          # esquema y usuarios demo
./deploy/gcp/desplegar.sh       # construir, subir y publicar
```

Al terminar, `desplegar.sh` imprime las tres URLs que hay que poner en las
variables de Vercel.

## Para publicar un cambio después

```bash
git pull
./deploy/gcp/desplegar.sh
```

Solo si hay migraciones nuevas, `./deploy/gcp/migrar.sh` antes.

---

## Decisiones que conviene conocer

**No se define `AUTH_SERVICE_PORT` ni sus equivalentes.** Los servicios
prefieren esa variable sobre `PORT`, y Cloud Run exige escuchar en el `PORT`
que él inyecta. Definirla hace que el contenedor escuche en el puerto
equivocado y el despliegue falle sin decir por qué.

**Los servicios quedan accesibles desde internet** (`--allow-unauthenticated`).
No es un descuido: ya validan el token de sesión en cada petición, y las
aplicaciones de Vercel les hablan desde fuera de Google. Poner la
autenticación de Cloud Run encima obligaría a mantener dos sistemas de
credenciales para el mismo control.

**Una instancia siempre viva** (`--min-instances 1`). Cloud Run puede bajar a
cero y no cobrar, pero entonces la primera petición tras un rato sin uso
tarda varios segundos. Un alumno que entra a las 7 de la mañana se comería
esa espera. Cuesta unos dólares al mes y los vale.

**Prisma se conecta por socket Unix.** Es como Cloud Run expone Cloud SQL. El
`host` va como parámetro de la URL y no en la parte del servidor: con un
socket no hay máquina a la que apuntar.

**Las migraciones se corren a mano**, con el proxy de Cloud SQL abriendo un
túnel desde tu máquina. Aplicar cambios de esquema mientras hay gente
conectada es como se pierden datos.

## Si algo falla

**El despliegue se queda esperando y expira** → casi siempre es el puerto.
Revisa que no hayas definido `AUTH_SERVICE_PORT`, `LEARNING_SERVICE_PORT` ni
`CONTENT_SERVICE_PORT` en las variables del servicio.

**`permission denied` al subir la imagen** → falta
`gcloud auth configure-docker REGION-docker.pkg.dev`. Lo hace `preparar.sh`,
pero si cambiaste de cuenta hay que repetirlo.

**El servicio arranca pero no llega a la base** → comprueba que el despliegue
lleve `--add-cloudsql-instances` con el nombre completo
`proyecto:region:instancia`, y que la URL de la base use
`?host=/cloudsql/...`.

**Ver qué está pasando dentro:**

```bash
gcloud run services logs read auth --region southamerica-west1 --limit 50
```

## Respaldos

Cloud SQL los hace solo, todos los días a la hora que fija `preparar.sh`.
Para comprobar que existen:

```bash
gcloud sql backups list --instance cumbre-db
```

Un respaldo que nunca se restauró no es un respaldo. Vale la pena probar una
restauración a una instancia de prueba antes de que haga falta de verdad.
