# Backend en un VPS

Los tres servicios que la plataforma necesita —`auth`, `learning` y
`content`— más la base de datos y un proxy con HTTPS, en una sola máquina.

**Un backend atiende a todas las academias.** La separación entre ellas es
la columna `tenant` en la base, no infraestructura repetida: la academia
número diez no agrega ni un contenedor.

---

## Levantarlo en una máquina nueva

Hace falta un VPS con Docker (Ubuntu 22.04 o similar; 2 GB de RAM sobran) y
tres registros DNS de tipo A apuntando a su IP:

```
auth-api.TU-DOMINIO      → IP del VPS
learning-api.TU-DOMINIO  → IP del VPS
content-api.TU-DOMINIO   → IP del VPS
```

El DNS tiene que resolver **antes** de levantar el proxy: Caddy pide los
certificados al arrancar y falla si los dominios todavía no apuntan.

```bash
git clone https://github.com/JaminYC/CUMBRE_PLATFORM.git
cd CUMBRE_PLATFORM/deploy

cp .env.example .env
nano .env                 # completar dominio, correo y contraseña de la base

docker compose build
docker compose --profile migrate run --rm migrate
docker compose up -d
```

Comprobar:

```bash
docker compose ps                    # los cuatro en "healthy"
curl https://auth-api.TU-DOMINIO/health
```

## Sembrar las cuentas

```bash
# Usuarios demo de CUMBRE
docker compose run --rm --entrypoint sh auth \
  -c "cd /app/services/auth_service && node_modules/.bin/tsx prisma/seed.ts"

# Cuentas de una academia: generar el SQL y pasarlo por psql
node scripts/crear-usuarios-bryce.mjs | \
  docker compose exec -T postgres psql -U cumbre -d cumbre
```

## Operación diaria

```bash
docker compose logs -f auth          # seguir un servicio
docker compose ps                    # estado
docker compose restart learning      # reiniciar uno
docker compose pull && docker compose up -d   # actualizar
```

**Desplegar una versión nueva:**

```bash
git pull
docker compose build
docker compose --profile migrate run --rm migrate   # solo si hay migraciones
docker compose up -d
```

**Copia de seguridad de la base** — esto no es opcional, y conviene ponerlo
en un `cron` diario:

```bash
docker compose exec -T postgres pg_dump -U cumbre cumbre | gzip > respaldo-$(date +%F).sql.gz
```

## Decisiones que vale la pena conocer

**La base no expone puerto.** No hay `ports:` en el servicio `postgres`, así
que solo se llega a ella desde dentro de la red de Docker. Una Postgres con
el puerto abierto a internet se encuentra sola en cuestión de horas. Para
entrar desde fuera, un túnel SSH:

```bash
ssh -L 5432:localhost:5432 usuario@TU-VPS
```

**Las migraciones no corren solas.** Aplicar cambios de esquema mientras hay
gente conectada es como se pierden datos. Se invocan a mano con el perfil
`migrate`, antes de levantar el resto.

**Los servicios se hablan por la red interna** (`http://auth:3001`), no por
sus dominios públicos. Salir a internet para volver a entrar a la misma
máquina suma latencia y expone tráfico que no hace falta exponer.

**Las imágenes no llevan secretos dentro.** El `.dockerignore` excluye todos
los `.env`; las variables se inyectan al arrancar el contenedor. Una imagen
con credenciales las lleva consigo a donde vaya.

## Si algo falla

**Un servicio reinicia en bucle** → `docker compose logs SERVICIO --tail 50`.
Casi siempre es una variable que falta o la base que todavía no acepta
conexiones.

**Caddy no consigue certificado** → el DNS aún no propaga, o los puertos 80
y 443 están cerrados en el firewall del proveedor. Let's Encrypt necesita
alcanzar el puerto 80.

**`Cannot find module` al arrancar** → la imagen se construyó con un filtro
de pnpm incompleto. El filtro tiene que usar el **nombre** del paquete con
tres puntos (`@cumbre/auth-service...`), no la ruta: con la ruta pnpm
selecciona solo ese paquete y deja sin instalar las dependencias de las
librerías del workspace.
