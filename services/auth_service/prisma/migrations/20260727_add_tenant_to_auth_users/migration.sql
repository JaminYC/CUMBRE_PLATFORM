-- Separación por institución.
--
-- Sin esta columna, `listarUsuarios` devolvía todas las cuentas de la
-- plataforma: el administrador de una academia veía los usuarios de las
-- demás. El filtro se aplica siempre a partir del tenant de quien
-- consulta, no de un parámetro de la petición.
--
-- El valor por defecto "cumbre" deja intactas las cuentas ya existentes.

ALTER TABLE "auth_users" ADD COLUMN "tenant" TEXT NOT NULL DEFAULT 'cumbre';

-- Toda consulta de usuarios filtra por institución.
CREATE INDEX "auth_users_tenant_idx" ON "auth_users"("tenant");
