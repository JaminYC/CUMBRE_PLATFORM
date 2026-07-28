# web_portal

Puerta de entrada publica de CUMBRE.

## Purpose

`web_portal` unifica la experiencia de entrada sin mezclar `web_student`, `web_teacher` y `web_admin` en una sola app.

- landing page publica
- login centralizado
- redireccion por rol hacia la app correcta
- branding compartido como frente unico del producto

La arquitectura interna de apps por rol se mantiene intacta. El portal solo actua como front door y puente de sesion.

## Local role routing

El portal autentica contra `auth_service`, detecta `user.primaryRole` y luego:

- escribe la cookie de sesion de la app destino
- limpia cookies viejas de otras apps por rol
- redirige a `web_student`, `web_teacher` o `web_admin`

En local, las URLs por defecto son:

- `http://localhost:3000` portal
- `http://localhost:3100` student
- `http://localhost:3110` teacher
- `http://localhost:3111` admin
