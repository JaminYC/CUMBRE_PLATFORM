# Reunión del 28 de julio de 2026 — documento completo

Las tres piezas de esta carpeta corresponden a la misma reunión y están unidas aquí:

| Pieza | Archivo original | Duración / tamaño |
|---|---|---|
| Grabación principal | `2026-07-28 19-53-31.mp4` | 02:31:56 |
| Nota de voz (encargo) | `WhatsApp Audio 2026-07-29 at 2.57.17 AM.mp4` | 00:05:50 |
| Notas de pizarra | `Lunes 27 de Julio_260729_025650.pdf` | 4 páginas |

Las dos piezas de audio se transcribieron en local con faster-whisper large-v3, en español. El PDF son notas manuscritas sin texto seleccionable; se leyeron como imagen y se pasaron a texto a mano.

> Las transcripciones son automáticas. Pueden contener errores en nombres propios, cifras y terminología técnica. Conviene verificar cualquier dato antes de usarlo en una decisión.

---

## Índice

1. [Decisiones y acuerdos](#1-decisiones-y-acuerdos) — lo que se cerró
2. [Notas de pizarra](#2-notas-de-pizarra-pdf) — el PDF pasado a texto
3. [Nota de voz](#3-nota-de-voz) — el encargo, dictado aparte
4. [Transcripción completa](#4-transcripción-completa) — las 2h 32m

---

## 1. Decisiones y acuerdos

### 1.1 Cómo se etiquetan las preguntas

Se descartó el modelo de **competencias** y se adoptó **curso → tema**.

Cada pregunta lleva **un solo tema predominante**. Si toca dos, se queda con el dominante. El razonamiento fue doble: un modelo de lenguaje etiquetando competencias alucina y ensucia los datos —"acierta el 80%, y para cazar ese 20% tendrías que leer pregunta por pregunta, y son miles"—, y para el alumno *"estás fallando en triángulos"* es más accionable que una competencia abstracta.

En la conversación se usó la palabra **"grafo"** durante buena parte de la reunión, pero a mitad de camino se aclaró y se cambió el vocabulario: *"vamos a llamarle temas, porque grafos ya me he confundido"*. Un "grafo" en esta reunión = **un tema del temario de un curso**.

### 1.2 Motor secuencial — la regla central

- Los temas de un curso están **ordenados**; se avanza en secuencia.
- **3 respuestas correctas al hilo** desbloquean el siguiente tema.
- Se discutieron 4 y 5. Se cerró en **3**, con la idea de subirlo si se ve que resulta fácil. Se mencionó dejarlo configurable por nivel del test (fácil / medio / difícil = 2 / 3 / 4 al hilo), pero se dejó fuera del alcance inmediato.
- El avance **se persiste en base de datos**. Sin eso, al refrescar el alumno vuelve a sumas y restas y nunca progresa.
- Se guarda además: preguntas totales por tema, aciertos, fallos y porcentaje real.

### 1.3 La "isla" — pantalla intermedia

Pantalla completa entre bloques de preguntas. Sirve para dos cosas:

**Cuando el alumno se atasca.** Umbral de **10 preguntas** en un mismo tema sin haberlo pasado. Al **siguiente error después de esas 10**, aparece la isla con:
- Ver solucionario (de las preguntas anteriores)
- Continuar intentando
- Saltar al siguiente tema y reforzarlo después

El salto es **siempre una acción manual del alumno**, nunca automática. La lógica es deliberada: *"vamos a premiar la perfección; hasta que no lo hagas perfecto no pasas — a menos que tú mismo, rompiendo tu orgullo, digas siguiente tema"*. El módulo está pensado para el que está **cerca de ingresar**, no para el que falla todo; para ese habrá otro módulo aparte.

**Cuando el alumno avanza bien.** La misma isla al completar el tema, mostrando las estadísticas de la corrida y "¿quieres seguir practicando?".

El botón de solucionario va **siempre visible, sin condicional**. Se decidió así explícitamente porque favorece al alumno y simplifica el código.

### 1.4 Modo foco

El alumno elige **uno o más temas** y solo recibe preguntas de esos. No es secuencial: se queda en el tema hasta que él decida salir.

En modo foco, la isla aparece **cada 5 preguntas**, mostrando el avance ("vas 3 de 5", "vas 17 de 20") con mensajes de refuerzo.

### 1.5 Interfaz del alumno

El principio rector, repetido varias veces: **mínimo número de clics**. La referencia explícita es Duolingo — *"entras, pones jugar, y listo, ya te bombardea"*. Y: *"no vas a ser un campus virtual"*.

Al entrar a un curso, **dos botones**: `Clase` y `Prueba` (se barajó "Estudio"; quedó en discusión el nombre final).

En `Prueba`, un desplegable con dos modos:
- **Modo secuencial** (por defecto): si es la primera vez arranca en el tema 1; si hay avance, retoma donde se quedó.
- **Modo personalizado**: elige el/los temas a profundizar.

Dentro de la pregunta, arriba: **Ver recursos** (abre el PDF del tema actual) y **Cambiar tema**.

Dashboard de inicio: minimalista. Se pidió quitar los quizzes de la pantalla de inicio —se ven dentro de los cursos— y dejar **Progreso por curso**.

### 1.6 Módulo Quiz — separado del motor secuencial

Es otra cosa y usa el mismo motor de preguntas por debajo (*"ese módulo de lanzar preguntas tienes que hacerlo genérico"*).

Configuración mínima: **qué cursos** y **cuántas preguntas en total**. Nada de temas. Aleatorio.

*"El alumno no se va a dedicar a personalizar. Lánzale aleatorio total."*

Encima, botones de acceso rápido por grandes grupos: **Foco Matemáticas / Foco Lenguaje / Foco Ciencias**, y abajo un "100% personalizado".

El solucionario del quiz se ve **al final**, nunca durante — *"si lo ve en cada pregunta le va a ganar el bicho"*.

### 1.7 Quiz en aula (tipo Kahoot)

Para usar en clase. El profesor necesita ver **dos números**: cuántos alumnos entraron y, de esos, cuántos ya respondieron la pregunta actual. Con eso sabe cuándo cortar y pasar a la siguiente.

**No requiere cuenta de usuario.** Que cada uno ponga su nombre y ya.

**Descartado en esta reunión:** el sistema de monitoreo y bloqueo de distracciones que aparece dibujado en las notas de pizarra. Dos razones:

1. *"Tenemos que tratar a los alumnos como gentecita. Si no pueden autocontrolarse, eso no se soluciona bloqueando, se soluciona conversando."* Es una charla de concientización que da el profesor, no una función del software. Y en academia, a diferencia de colegio, el que no quiere estudiar simplemente no estudia.
2. Cada permiso extra que pide la app alarga la aprobación en la Play Store.

### 1.8 Estadísticas

Cada corrida ("estudio enfocado en tal curso") termina con **una tabla, sin gráficos**:

- Por tema: preguntas correctas / incorrectas / en blanco
- Tiempo promedio por pregunta
- Tiempo esperado por pregunta

**Semáforo de tiempo** por pregunta: verde / amarillo / rojo según se resuelva dentro, cerca o fuera del tiempo esperado. La velocidad importa porque es un factor real en el examen de admisión.

El histórico es un dashboard aparte; cada corrida queda guardada.

**Para el profesor: dato ya procesado, no consolidado crudo.** Lo único que va a usar es *"qué temas están fallando sus alumnos"*. El detalle por alumno puede existir, pero no es el foco.

Las estadísticas se dejaron para después — *"eso déjamelo en mi cancha"*.

### 1.9 Banco de preguntas

- ~10 temas por curso, ~100 preguntas por tema.
- Selección **aleatoria sin repetición** dentro de la sesión (la analogía usada fue el draft de Dota: lo que ya salió no vuelve a salir hasta agotar la bolsa).
- Al agotarse las 100, se refresca.
- Señal de alerta operativa: si se detecta que alumnos están llegando al tope y repitiendo preguntas, se inyectan preguntas frescas.

### 1.10 Dependencia de IA — limitarla

Postura explícita: **quitar dependencia de llamadas a API**.

*"El último caso es el API. Depender del API para cada cosa, no."*

La lógica de avance es un **script con criterio fijo**, no una consulta al modelo por cada respuesta del alumno. El uso de IA queda reservado para el mapeo general destinado al gerente/administrativo. Razón adicional: control de créditos.

### 1.11 Web antes que app

Se va a **web primero**. *"Lo que tiene menos resistencia al cambio es la página web, un link."* Aunque instalar la app tome poco, la mayoría prefiere probar en el navegador. Después, desde la web, incentivar la descarga.

Se descartó de plano la versión de escritorio: **solo celular**.

### 1.12 Diseño visual

Referencia directa: **la app del BCP**. Grupo Bryce comparte paleta con el BCP —*"tienes la aplicación del fucking BCP para hacer tu frontend"*—, con destellos de naranja/amarillo ajustables.

Sobre **carga esquelética** (skeleton loading): sirve para la primera entrada a la página, no como patrón general.

### 1.13 Usuarios y acceso

- **Supabase Auth**, entrada con Google/Gmail. *"Es lo más fácil, es lo más seguro, te ahorras muchas cosas."*
- Credenciales iniciales: usuario = nombre y apellido; contraseña = **código del alumno**.
- **Cambio de contraseña forzado** en el primer ingreso.
- Pedir correo electrónico al crear la cuenta, para recuperación.
- Las cuentas son **por ciclo/semestre**. Hace falta contemplar **desactivación** de cuentas de alumnos que dejan de estar activos.
- Se exploró la idea de entrar por **QR / carné**, buscando el punto de equilibrio entre seguridad y facilidad de acceso. Quedó abierto.

### 1.14 Alcance, plazo y prioridades

**Plazo: 10 días.** Para el motor secuencial se habló de 2 días.

Orden de prioridad, tal como se cerró:

1. **Motor de preguntas** — el principal. Lanzar una pregunta desde la base de datos. *"Eso es lo que necesito, todo lo demás es extra."*
2. **Flujo de trabajo** documentado: desde el banco de preguntas en bruto hasta las preguntas dentro del sistema. Él pasa las preguntas, entran por ese flujo, quedan en la aplicación.
3. **Quizzes**
4. **Usuarios y módulo de usuarios**
5. Estadísticas — después
6. **CUMBRE como producto vendible — pospuesto.** *"Olvídate de eso. Es algo que vende, pero es yuca, mucho tiempo. Yo necesito que esto esté bien depurado."*

Se acordó explícitamente que si no alcanza el tiempo, se avisa hasta dónde se llegó y el otro continúa desde ahí.

### 1.15 Insumos comprometidos

Se comprometió a entregar:
- El **vademécum** de la universidad
- **Cursos con sus temarios** (que definen los temas/niveles)

Los temarios se **cargan por código, no por interfaz**: *"año tras año no cambia, y si cambia me avisan y lo cambiamos en el código"*. Ni el alumno ni el profesor los suben.

### 1.16 Ideas de negocio surgidas

**Los datos de la academia como producto para el colegio.** Las preguntas y temas que la academia ya tiene mapeados como difíciles pueden usarse para reforzar directamente en secundaria. Se marcó como argumento de venta: *"a cualquier gerente que sea inteligente se le va a ocurrir — lo que tengo en mi academia son datos que puedo usar en la secundaria"*.

**Charla a profesores** para presentar la plataforma.

### 1.17 Puntos abiertos

- Nombre definitivo del segundo botón: `Prueba` vs `Estudio`
- Métrica de progreso que no se agote: no puede ser un 100% que se completa y se acaba — *"tiene que ser algo infinito"*. Se descartó "nivel 1, 2, 3". Quedó pendiente.
- Acceso por QR/carné
- Nombre de las corridas de estudio (hoy "estudio enfocado en tal curso")

### Tramos no relacionados con el proyecto

Entre **[01:06:37]** y **[01:23:00]** aproximadamente hay una pausa larga: una llamada familiar, conversación sobre un gato y una exploración de Duolingo en vivo. También hay fragmentos de publicidad que se colaron en la grabación (alrededor de [01:12:10], [02:26:26] y [02:30:09]).

---

## 2. Notas de pizarra (PDF)

Transcripción de las 4 páginas manuscritas de `Lunes 27 de Julio_260729_025650.pdf`. Se respeta la estructura del dibujo; los signos de interrogación marcan lo que no se lee con certeza.

### Página 1 — Estructura de empresa y alcance de CUMBRE

**Vastoria** → Empresa Software → **CUMBRE**
- Landing Page
- FLOW QA/QC

**Jamin** (áreas):
- IA + Software
- Research → Tesis, Microscopy, Star Tracker
- Mechanical → Industrial
- Electrical
- Languages → Inglés–Chino, Alemán–Francés, Español
- Influencer ~ Photographer

**① Redesign FLOW – VASTORIA**
- POMELLI → Rebranding
- DESKTOP → VASTORIA
- APP MÓVIL / PÁGINA WEB → FLOW

**② CUMBRE**
- ① **Market Place** → $500 / Módulos

**Modelos de aprendizaje:**
- Mastery Learning
- Modelos K-12
- Aprendizaje por Competencias (CBL)

*(Nota: el modelo por competencias aparece aquí como candidato, y es exactamente lo que se descartó en la reunión grabada — ver 1.1.)*

**Flujo dibujado:** Estudiante → Profesor → Admin, con estándares, feedback, horario 8AM–6PM, cursos (Matemática: Aritmética, Álgebra…; Lenguaje: Literatura…), tipo de pregunta, banco de datos, IA, resultado por pregunta.

**Distracciones (Sistema para evitar distracciones):**
- ① Monitoreo de clase → quiz, estado, preguntas
- ② Celular → permisos para saber si están en la aplicación
- Tabla de resultados → Gamificación → cada usuario XP → Progreso / Títulos
- Panel administrativo → identificaciones, capacidades flexibles

*(Este bloque completo se descartó en la reunión — ver 1.7.)*

### Página 2 — Mapa técnico

**CUMBRE** — Motor, Obsidian, Base de Datos, Aritmética
- Modelo 3D → API → Photo Offline
- Años 2026 / 2029

**Inputs:** Matemática (M1, M2, M3) | Lenguaje (L1, L2) | Ciencias (C1, C2)

**Dependencias:** jerarquía, conocimientos previos, correlación entre cursos

**Curso → Pregunta:** M1→P1, M1→P2, M1→P3 … con "Tiempo esperado por pregunta" vs "Tiempo estimado" y un indicador de **Rapidez**

**Jerarquía de datos:** Área → Cursos → Temas

**Salidas:** Feedback, Estadísticas (general / por curso / perfil), y vista de Profesor (preguntas, temas, identificar, acceso)

### Página 3 — Estudiante y modelo de usuarios

**Estudiante → PreUniversitario**
- Inicio (calendario, dashboard)
- Cursos → Test / Progreso
- Quizzes – Aula
- 4 horas / 3

**Generador** → LLM / Notebook — tachado con una ✗

**Base de datos — Crear Alumno 2026:**
- Usuario / Contraseña
- Nombre / Apellido
- Código (ej. 12013203 / 7283203)
- Cambio de sesión
- **Modelo de Usuarios**

Se repite el bloque de Distracciones de la página 1.

### Página 4 — Cursos y motor

**Cursos** → Test Curso → ETA (tiempo estimado)

**Curso individual:** Tema ① → Tema ② → Tema ③ … secuencial

Pantallas: Inicio Curso → Curso Actual (clase, práctica, quiz) → Curso en ejecución (Tema ①) → **Resultado**: Feedback, ✓ / ✗ / en blanco, Tiempo Promedio, Tiempo Esperado, Solución

**Motor Principal → Preguntas** (marcado como el núcleo)

**Listado de cursos con su peso:**

| Área | Cantidad |
|---|---|
| A.A (Aritmética / Álgebra) | 4 |
| M (Matemática) | 4 |
| C.C | 2 |
| C.T | 3 |
| P.H | 3 |
| C | 2 |
| L | 2 |
| **Total** | **20 cursos** |

---

## 3. Nota de voz

Dictada aparte, resume el encargo. Transcripción íntegra:

**[00:00:02]** ya vamos a ver

**[00:00:11]** cumbre va a tener módulos de los cuales van a usarse

**[00:00:19]** para parte estudiante profesores y el administrativo

**[00:00:25]** quiero ver también que cada uno de estos sean independientes y también algunos

**[00:00:34]** van a ser conectados por ejemplo el tema de los cursos que se van a dictar

**[00:00:41]** el progreso que quizás va a manejarse

**[00:00:46]** por los profesores y también por el tema de los administrativos

**[00:00:58]** vamos a adecuarnos a primero la academia braille es la parte pre universitaria y

**[00:01:03]** la pre universitaria está orientada a lo que son los cursos

**[00:01:08]** en específico que van a dictar la universidad, que van a requerir la universidad como

**[00:01:14]** preguntas de examen de edición entonces primero vamos a enfocarnos ahí lo que

**[00:01:20]** estoy planteando es lo siguiente tener un motor de grafos que pueda servir para

**[00:01:27]** determinar qué tipo de grafo

**[00:01:32]** que corresponde a cada curso entonces cada curso va a tener lo que es un tema

**[00:01:38]** Los temas que involucran cada curso serían los nodos. Los nodos van a ser orientados hacia una relación de precedencia, consecuencia y paralelismo y quizás otro tipo de relación que se puede hacer para entender que un tema no puede avanzarse sin antes estructurar y tener las bases planteadas de otro tema.

**[00:02:09]** Va a existir una especie de jerarquía que involucra que un nodo va a suceder al otro y así poder verificar si un problema corresponde a diferentes temas.

**[00:02:24]** Al final lo que planteamos es que el estudiante pueda tener un curso y plantearle una serie de quizzes o tests que van a involucrar a esos temas en cuestión.

**[00:02:38]** Al final identificamos si este estudiante no responde a esta pregunta, podría deberse debido a que no tiene ensabrado los temas que requieren, que preceden al tema en sí o qué tipo de correlación exista ahí.

**[00:02:59]** Entonces una vez sí tenemos que plantearlo como inicio del gráfico en general por curso.

**[00:03:06]** Por ejemplo también existe la correlación en dos cursos y sucesivamente así una teoría de grafos que va a manejarse como si fueran nodos conectados o posteriormente quizás se van a dar neuronas.

**[00:03:20]** Entonces lo que requiero es eso, que tengan la capacidad de gestionar las preguntas con correlación a los temas en cuestión.

**[00:03:36]** Y si falla o hace bien, entonces que reflejen la capacidad de avance de acuerdo a esos temas.

**[00:03:43]** Y si falla o lo dejan en blanco, según las preguntas puedan verificarse que está faltando.

**[00:03:51]** Con esa data sería lo suficiente para poder verificar todo eso.

**[00:03:56]** Entonces lo que estamos planteando en la base de datos es tener todos los cursos y el temario y lo que sería cada uno de los cursos.

**[00:04:07]** Y va a tener los temas, bueno, sí, los temas y no es para el espacio, sería áreas en general.

**[00:04:33]** Sería tal cual, área, y además vamos a ver, área, cuántos, cuántos cursos, sería área, cursos, sería área, cursos y de los cursos los temas, ¿no?

**[00:04:56]** Área, cursos y temas.

**[00:05:10]** Ya, entonces también la parte de estudiante que tenga inicio, un dashboard, este, minimalista.

**[00:05:18]** Luego en el tema de cursos, que se plante dos tareas nada más.

**[00:05:24]** Bueno, dos, este, no, dos tareas no sería, sería simplemente los cursos.

**[00:05:31]** Que entren en un curso y los cursos tendrían que ser un quiz en general.

**[00:05:39]** O los temas o quiz enfocado a particulares, que sea minimalista, pero bonito.

**[00:05:45]** Y prácticamente eso.

**[00:05:47]** Gracias.

---

## 4. Transcripción completa

Grabación de 02:31:56. Las marcas de tiempo son del archivo original.

**[00:00:02]** Mejor, algo ordenado

**[00:00:04]** Lo tienes de la manera simple

**[00:00:05]** Que es cada curso con su propia competencia

**[00:00:08]** O sea, competencia del ángel

**[00:00:10]** Por así decirlo

**[00:00:11]** No es lo teóricamente correcto

**[00:00:14]** Yo entiendo que no

**[00:00:16]** Pero ya al alumno también le da

**[00:00:18]** Un piso de análisis

**[00:00:21]** Si me sale competencias

**[00:00:22]** Que no son el mismo

**[00:00:23]** Es que no, no, no

**[00:00:32]** Por tu lado, por tu lado en construcción va acá

**[00:00:35]** Pero el alumno para que entienda

**[00:00:36]** O sea, vamos a completar

**[00:00:38]** Ya, igual, aunque sea el profesor

**[00:01:02]** Si es que no es su curso, no va a entender

**[00:01:04]** Y son bastantes variables

**[00:01:06]** Ahí que empezamos a tocar

**[00:01:07]** Yo no digo esto

**[00:01:09]** Ya

**[00:01:13]** Ya, ok

**[00:01:24]** Te hablo de manera más técnica

**[00:01:26]** Mira, escucha, ya

**[00:01:27]** ¿Cómo le vas a decir a Cloud?

**[00:01:30]** Que analice qué pregunta

**[00:01:32]** Tenga, o sea

**[00:01:34]** Pregunta X, qué competencias tiene

**[00:01:36]** Eso es lo que haríamos

**[00:01:37]** Eso es en teoría

**[00:01:40]** Pero mira

**[00:01:40]** Escúchame, puede

**[00:01:41]** También, si es que tú mismo

**[00:01:45]** Pregunta por pregunta

**[00:01:46]** Lees y etiquetas

**[00:01:48]** Va a salir 100% bien

**[00:01:50]** Pero yo te aseguro que Cloud

**[00:01:52]** Te va a alucinar ahí

**[00:01:53]** Te va a decir, esto es geometría

**[00:01:55]** Pero pucha, creo que tiene un poquito de álgebra

**[00:01:56]** Y en vez de lograr

**[00:02:00]** Algo más limpio

**[00:02:03]** Más sofisticado

**[00:02:04]** Que es un análisis más complejito

**[00:02:06]** Te vas a empezar a

**[00:02:08]** Emparar los datos

**[00:02:09]** ¿No?

**[00:02:14]** No sé, yo, esa es mi

**[00:02:15]** Mi experiencia, digo

**[00:02:17]** Cuando le lanzo una gran cantidad de cosas

**[00:02:19]** Los hace el 80% bien

**[00:02:22]** Pero para captar ese 20%

**[00:02:24]** Para corregirlo

**[00:02:25]** Tienes que darte el tiempo

**[00:02:27]** De leer pregunta por pregunta

**[00:02:29]** Y estamos hablando de miles

**[00:02:31]** O sea, no te digo que vas a resolver

**[00:02:36]** Pregunta por pregunta

**[00:02:36]** Pero si no leer

**[00:02:38]** Esta pregunta sí, de verdad

**[00:02:39]** Me está diciendo que tiene álgebra y trigonometría

**[00:02:42]** Y tiene algo de razón

**[00:02:43]** Mira, yo voy a hacer más

**[00:03:07]** Partidario

**[00:03:07]** Y me voy a cerrar en esto

**[00:03:09]** Que es

**[00:03:09]** La habilidad es el curso que le corresponde

**[00:03:12]** O sea, en un examen de misión

**[00:03:14]** A veces está un poquito entreverado

**[00:03:16]** Y ya, eso es suficiente

**[00:03:18]** Para que desgloses

**[00:03:21]** Falla química

**[00:03:32]** Y es más, mira

**[00:03:33]** En vez de competencia, que diga

**[00:03:35]** Este tipo, geometría, tema tal

**[00:03:38]** Eso me ayuda bastante

**[00:03:39]** O sea, por ejemplo, geometría

**[00:03:42]** Estás fallando en triángulos

**[00:03:44]** O estás fallando en resolución de cuadriláteros

**[00:03:46]** Eso, eso

**[00:03:48]** Ya, bueno, entonces yo entendí

**[00:03:50]** Eso sí, lo demás

**[00:03:52]** Difícil

**[00:03:53]** El sí de abuso

**[00:04:19]** Ya, pero

**[00:04:22]** Vamos a ser sinceros

**[00:04:25]** Recién lo acabamos de descubrir ahorita

**[00:04:28]** Discutiendo

**[00:04:28]** No, no, no

**[00:04:30]** Ya, ya, pero vamos a ser sinceros

**[00:04:36]** Vamos a ser sinceros

**[00:04:37]** Ahorita recién hemos pensado en el sí de abuso

**[00:04:39]** Yo recién lo he pensado, soy sincero

**[00:04:43]** Estamos hablando de temas, todo

**[00:04:45]** Pero no me había puesto a pensar

**[00:04:46]** En el sí de abuso

**[00:04:47]** Listo

**[00:04:48]** Ya, ya, también

**[00:04:49]** Excelente, entonces

**[00:04:51]** Sí de abuso

**[00:04:52]** Ya, ya, sí, pero el alumno

**[00:05:25]** No lo va a subir acá

**[00:05:27]** Nosotros tenemos que hacer ya

**[00:05:28]** Hard code

**[00:05:29]** No, ni siquiera profesor

**[00:05:35]** O sea, esto ya debemos subirlo

**[00:05:37]** Porque año tras año no cambia

**[00:05:38]** Y si cambia me lo van a avisar

**[00:05:40]** Y nosotros lo cambiamos en el código

**[00:05:41]** O sea, esto

**[00:05:42]** Sí, ya

**[00:05:47]** Ya, listo, entonces

**[00:05:49]** Te ayuda

**[00:05:52]** Ya, entonces, escúchame

**[00:05:59]** Tú, lo que vas a hacer ahorita

**[00:06:00]** Yo te voy a

**[00:06:02]** Conseguir el

**[00:06:04]** Bademekun de la USA

**[00:06:06]** Entonces, yo lo que te voy a pasar

**[00:06:08]** Es, por un lado, te voy a

**[00:06:11]** Pasar los cursos

**[00:06:13]** Con sus temarios

**[00:06:14]** Y ese va a ser tus niveles, ¿no?

**[00:06:59]** Ya, listo, eso tú te encargas

**[00:07:01]** No entiendo

**[00:07:26]** No entiendo lo del embudo

**[00:07:28]** O sea, va a haber más capacidades

**[00:07:30]** Para los otros alumnos

**[00:07:36]** Pero, ¿cómo, cómo que embudo?

**[00:07:38]** No entiendo

**[00:07:38]** No, o sea

**[00:07:43]** Lo que yo trato de entenderte

**[00:07:47]** Es que son como que los alumnos

**[00:07:49]** Que están en secundaria

**[00:07:50]** Y van a pasar a acá

**[00:07:51]** En algo así

**[00:07:52]** Es suficiente

**[00:08:19]** Ya, nadie dice que no

**[00:08:28]** Nadie dice que no

**[00:08:29]** Nadie dice que no, loco

**[00:08:30]** Es un conocimiento que sí o sí

**[00:08:31]** Tiene que ser

**[00:08:32]** Ya, mira, ahí nomás

**[00:08:43]** Ahí nomás

**[00:08:44]** Es que esto es importante

**[00:08:46]** Esto es importante

**[00:08:47]** Mira, ¿qué tal si es que los

**[00:08:49]** El análisis que has tenido en tu academia

**[00:08:54]** ¿Qué tal si es que los

**[00:08:54]** Lo utilizas para secundaria?

**[00:08:57]** O sea, en este sentido

**[00:08:59]** Las preguntas que has mapeado

**[00:09:01]** Que son difíciles

**[00:09:02]** Los cursos que has mapeado

**[00:09:04]** Que tienen más cantidad de errores

**[00:09:06]** Es más, los temas de los cursos

**[00:09:09]** Que has encontrado que son más complicados

**[00:09:11]** Refuerzas directamente acá

**[00:09:13]** Ese es un feedback en tu academia

**[00:09:18]** Y es algo que anótalo

**[00:09:20]** Anótalo, anótalo por ahí

**[00:09:21]** Porque es algo que lo voy a comentar

**[00:09:23]** Es, cumple la parte de

**[00:09:26]** La ayuda a los alumnos

**[00:09:27]** Y la ayuda a

**[00:09:29]** Pues, me ayuda a mí a vendarlo

**[00:09:32]** Porque esto es algo que

**[00:09:33]** Yo creo que a cualquier gerente

**[00:09:35]** Se va a dar cuenta

**[00:09:36]** Y ya si son inteligentes

**[00:09:37]** Y van a decir

**[00:09:38]** Ah, chucha, sí, pero lo que tengo

**[00:09:40]** En mi academia son datos

**[00:09:40]** Que lo puedo utilizar en la secundaria

**[00:09:42]** Sí, eso ya depende

**[00:09:59]** De los datos de campo

**[00:10:00]** No, no, no, no

**[00:10:10]** Aguanta, aguanta, aguanta

**[00:10:11]** Vas a, cada tema

**[00:10:14]** Vas a hacer como un mapa

**[00:10:16]** Por curso

**[00:10:17]** O sea, cómo están concatenados

**[00:10:20]** Cada uno de los temas

**[00:10:20]** O sea, por ejemplo

**[00:10:23]** Es que sí, tiene un cierto sentido

**[00:10:26]** Ya, pero, ¿qué vas a decir?

**[00:10:30]** Ah, ya, ya

**[00:10:37]** Baja, baja, baja

**[00:10:38]** Y para aprender

**[00:10:46]** Eso tienes que

**[00:10:48]** Ir a una

**[00:10:49]** Un conocimiento previo

**[00:10:52]** Ya, ya, sí, sí, sí

**[00:11:36]** Ya, o sea, ya

**[00:11:37]** Está perfecto, loco, si te haces un mapeo así

**[00:11:40]** Por curso, excelente

**[00:11:42]** Y no, mira, no necesito

**[00:11:44]** No necesito

**[00:11:45]** Ver lo bonito esto

**[00:11:47]** Yo, esto

**[00:11:48]** Lo necesito

**[00:11:49]** Dentro del sistema

**[00:11:50]** O sea, si tú me dices

**[00:11:51]** Ya, tengo teoría de grafos

**[00:11:52]** Y me muestras un gráfico

**[00:11:54]** Como esto dentro de la aplicación

**[00:11:55]** Te digo, ok, está chévere

**[00:11:57]** Pero ahora, si tú

**[00:11:57]** Con funcionalidades

**[00:11:59]** Me muestras que

**[00:11:59]** Bueno, estoy pasando

**[00:12:02]** Por la suma, resta, multiplicación

**[00:12:03]** Cuadrático

**[00:12:04]** Y de la nada

**[00:12:05]** El sistema

**[00:12:07]** Se da cuenta

**[00:12:07]** Que ya domino esto

**[00:12:08]** Y me presenta

**[00:12:09]** La siguiente pregunta

**[00:12:10]** Es distinto

**[00:12:12]** Solo te voy a decir

**[00:12:13]** Ya, ya

**[00:12:14]** Entonces, si lo haces así

**[00:12:15]** O sea, él entra simplemente

**[00:12:21]** A la cola de preguntas

**[00:12:22]** Y va

**[00:12:23]** Solito ya le va a mandar

**[00:12:25]** Pa, pa, lo que necesita

**[00:12:26]** Tipo el Duolingo

**[00:12:31]** El Duolingo

**[00:12:31]** Entras, pones jugar

**[00:12:33]** Y listo

**[00:12:33]** Ya, él me bombardea

**[00:12:34]** Pa, pa, pa, pa

**[00:12:36]** Listo

**[00:12:37]** Eso le voy a decir

**[00:12:45]** A los profesores

**[00:12:46]** Y todo eso

**[00:12:46]** Porque

**[00:12:48]** Sí se va a ver una charla

**[00:12:49]** Para los profesores

**[00:12:50]** Para presentar esta huevada

**[00:12:51]** Ya

**[00:13:00]** Sí, o sea

**[00:13:10]** Partes diciendo

**[00:13:11]** Que no, mira

**[00:13:12]** Esto está listo

**[00:13:13]** Para presentar esta huevada

**[00:13:13]** Tal, tal, tal

**[00:13:14]** Listo

**[00:13:15]** Han ganado

**[00:13:15]** Tal, tal, tal

**[00:13:16]** Listo

**[00:13:16]** Punto

**[00:13:17]** No, no, no

**[00:13:21]** Ese que ha ganado

**[00:13:22]** Ese premio

**[00:13:23]** A la educación mundial

**[00:13:25]** Me la pela

**[00:13:26]** Te va a decir

**[00:13:26]** Ya

**[00:13:36]** Listo

**[00:13:36]** Listo, listo

**[00:13:37]** Sí o sí

**[00:13:38]** Se va a utilizar eso

**[00:13:39]** Sí

**[00:13:41]** Sí

**[00:13:46]** ¿Usas Oxidian?

**[00:14:00]** O sea

**[00:14:01]** O sea

**[00:14:02]** Los manes que

**[00:14:03]** Que dicen

**[00:14:04]** ¿No?

**[00:14:05]** Estructura bien

**[00:14:06]** Tus repositorios

**[00:14:07]** En

**[00:14:07]** En

**[00:14:08]** En Cloud

**[00:14:08]** Y nunca vas a tener que

**[00:14:09]** O bueno

**[00:14:10]** En tu carpeta, ¿no?

**[00:14:12]** Y no vas a tener que utilizar

**[00:14:13]** Oxidian

**[00:14:13]** Cada paso que des

**[00:14:16]** Haz que Cloud

**[00:14:17]** Te haga un pequeño resumen

**[00:14:18]** De ese módulo

**[00:14:19]** De lo que has creado

**[00:14:20]** Y ya así, ¿no?

**[00:14:21]** Es mucho más fácil

**[00:14:22]** Que Oxidian te muestre

**[00:14:24]** Algo gráfico

**[00:14:24]** Como que

**[00:14:25]** Un cerebrito

**[00:14:26]** Ya, está bien

**[00:14:44]** Ya va acá

**[00:14:51]** Pero

**[00:14:56]** Redúcelo

**[00:14:57]** Redúcelo

**[00:14:58]** Al nivel

**[00:14:59]** O sea

**[00:15:00]** A nivel de motor

**[00:15:02]** ¿No?

**[00:15:02]** Mira

**[00:15:17]** Yo, yo digo

**[00:15:18]** No, no, no

**[00:15:19]** Yo, yo digo

**[00:15:20]** Hazte

**[00:15:20]** Por cada curso de temario

**[00:15:23]** Hazte un grafito

**[00:15:25]** Yo creo que a ese nivel

**[00:15:27]** No, no, pero, pero

**[00:15:30]** Pero, ajá

**[00:15:31]** Así

**[00:15:32]** ¿Qué grafos

**[00:15:33]** Es lo que te va a dictar

**[00:15:34]** El temario?

**[00:15:35]** Yo creo que a ese nivel

**[00:15:36]** Se puede mejorar

**[00:15:38]** O sea

**[00:15:38]** Se puede mejorar

**[00:15:39]** Diez

**[00:16:04]** Un par

**[00:16:14]** Un par de consultas

**[00:16:15]** ¿Estás grabando esto?

**[00:16:17]** Ya va acá

**[00:16:18]** No

**[00:16:46]** Pucha

**[00:16:47]** , para el precio

**[00:17:22]** ¿Qué?

**[00:17:23]** Pachucha

**[00:17:24]** ¿Cuál será?

**[00:17:25]** ¿Cuál será?

**[00:17:25]** ¿Cuál será?

**[00:17:26]** ¿Cuál será?

**[00:17:33]** Ya, mira

**[00:17:34]** A ver

**[00:17:36]** Ya

**[00:18:23]** Pelimosito

**[00:18:25]** Ya

**[00:18:28]** Ok

**[00:18:30]** Ya, ok

**[00:18:33]** Ya, me parece bien

**[00:18:35]** ¿Para cómo me parece bien?

**[00:18:42]** Ya, mira

**[00:18:43]** Ahí

**[00:18:43]** Ahí

**[00:18:44]** Ahora

**[00:18:45]** No, ya, ya, ya

**[00:18:46]** Pero

**[00:18:46]** Falta

**[00:18:47]** De eso

**[00:18:48]** Ya tienes todo tu grafo

**[00:18:49]** Conectado

**[00:18:50]** Por eso te digo

**[00:18:50]** Si tú

**[00:18:51]** Bien

**[00:18:51]** Si me muestras

**[00:18:52]** Todo lo que te va a decir

**[00:18:52]** Todos los grafos

**[00:18:53]** Te voy a decir

**[00:18:53]** Bacán, chévere

**[00:18:54]** Pero ahora

**[00:18:55]** Hay que pensar

**[00:18:56]** Y que no

**[00:18:57]** No es cosa fácil

**[00:18:57]** Hay que pensar

**[00:18:58]** Cómo integrar estos grafos

**[00:19:00]** Ya directamente

**[00:19:01]** A la concatenación de preguntas

**[00:19:03]** ¿Qué criterio le vas a poner?

**[00:19:05]** Porque mira

**[00:19:05]** Es un criterio

**[00:19:07]** Frío

**[00:19:07]** Porque no vas a preguntar

**[00:19:09]** A la IA cada vez

**[00:19:09]** Mira

**[00:19:10]** ¿Esta alumna ha hecho tal cosa?

**[00:19:11]** ¿O vas a enviar una solicitud?

**[00:19:13]** No

**[00:19:13]** Tienes que tener ya

**[00:19:14]** Un criterio fijo

**[00:19:15]** O sea

**[00:19:16]** Un script

**[00:19:16]** Que vaya evaluando esto

**[00:19:18]** Es un script

**[00:19:22]** Complejito

**[00:19:23]** Nomás te digo

**[00:19:24]** ¿Ah?

**[00:19:24]** O sea

**[00:19:25]** A nivel de concepto

**[00:19:28]** Hay que pensarlo

**[00:19:29]** Hay que pensarlo

**[00:19:38]** Ya

**[00:19:38]** Bacán

**[00:19:39]** Falta

**[00:19:42]** Falta

**[00:19:42]** Falta

**[00:19:42]** Falta

**[00:19:43]** Ya

**[00:19:43]** Ese alcance

**[00:19:44]** Está chévere

**[00:19:45]** Pero vamos a dejarlo de lado

**[00:19:45]** Ahora

**[00:19:46]** Lo que me importa bastante

**[00:19:47]** Es

**[00:19:47]** Vamos a hacer este ejercicio

**[00:19:49]** Mira

**[00:19:49]** Vamos a pensar

**[00:19:50]** Que solo son

**[00:19:51]** Aritmética

**[00:19:53]** Tema A

**[00:19:54]** Tema B

**[00:19:55]** Lenguaje

**[00:19:56]** Tema 1

**[00:19:56]** Tema

**[00:19:57]** No

**[00:19:57]** Está al revés

**[00:19:58]** Matemática

**[00:19:59]** Tema 1

**[00:19:59]** Tema 2

**[00:20:00]** Lenguaje

**[00:20:00]** Tema A

**[00:20:01]** Tema B

**[00:20:01]** 1, 2

**[00:20:06]** Y A, B

**[00:20:07]** No, no, no

**[00:20:09]** Solo, solo

**[00:20:09]** O sea

**[00:20:09]** Solo es por el ejemplo

**[00:20:10]** Solo es por el ejemplo

**[00:20:11]** Solo es por el ejemplo

**[00:20:12]** Achucha

**[00:20:17]** Ya, B

**[00:20:17]** Ya

**[00:20:21]** Listo

**[00:20:22]** Uno más

**[00:20:26]** Ya

**[00:20:27]** Listo

**[00:20:29]** Puta

**[00:20:29]** Pero

**[00:20:30]** Estás agarrando algo complicado

**[00:20:32]** Porque

**[00:20:32]** Los grafos de física

**[00:20:33]** Química

**[00:20:34]** Necesitan matemática

**[00:20:35]** Así

**[00:20:35]** Así

**[00:20:36]** Ya

**[00:20:41]** Ya, ya

**[00:20:41]** Está bien

**[00:20:42]** Escucha, escucha

**[00:20:43]** Antes que se mueva el diablo

**[00:20:44]** Ya

**[00:20:45]** Está bien

**[00:20:46]** F, Q

**[00:20:47]** Ponle, ponle

**[00:20:48]** 1, 2

**[00:20:48]** Está bien

**[00:20:51]** F, Q

**[00:20:51]** Está bien

**[00:20:51]** Está bien

**[00:20:51]** Está bien

**[00:20:52]** No, no, no

**[00:20:54]** Es que por eso

**[00:20:55]** Ya les he puesto

**[00:20:56]** No, P

**[00:20:57]** Por eso

**[00:20:58]** Ya les he puesto

**[00:20:59]** Ya acá

**[00:21:00]** Matemáticas

**[00:21:01]** Números

**[00:21:01]** 1, 2

**[00:21:02]** Lenguajes

**[00:21:04]** A, B

**[00:21:04]** Lenguajes

**[00:21:05]** Sí, P

**[00:21:11]** Y eso no está bien

**[00:21:12]** Por eso

**[00:21:12]** Solo es por el ejercicio

**[00:21:13]** Ya, ya

**[00:21:14]** Está bien

**[00:21:14]** Ponme 1, M2

**[00:21:16]** L1, L2

**[00:21:17]** 1, 0

**[00:21:18]** No, no, no

**[00:21:29]** Es que

**[00:21:30]** Solo por el ejemplo

**[00:21:31]** Solo por el ejemplo

**[00:21:32]** Ya, ya

**[00:21:40]** Es que después

**[00:21:41]** No vas a entender

**[00:21:42]** Cuál es cuál

**[00:21:42]** M1, M2

**[00:21:44]** L1, L2

**[00:21:45]** C1, C2

**[00:21:46]** De frente

**[00:21:46]** Porque no

**[00:21:47]** Ajá

**[00:21:48]** Solo, solo por el ejemplo

**[00:21:52]** Solo por el ejemplo

**[00:21:52]** Yo también quería poner así

**[00:21:53]** Como que es

**[00:21:54]** 1, 2

**[00:21:54]** Son números

**[00:21:55]** Matemáticas

**[00:21:56]** Y luego A, B

**[00:21:56]** Ya, pero en fin

**[00:21:57]** Llegó 100

**[00:21:58]** Y es cuadrato

**[00:21:59]** Ya, a ver

**[00:22:00]** Entonces

**[00:22:00]** Vamos a empezar

**[00:22:02]** Ponle

**[00:22:05]** M3

**[00:22:06]** Ponle M3

**[00:22:06]** Ponle M3

**[00:22:07]** No, no, no

**[00:22:08]** M3 también

**[00:22:09]** M3, M3

**[00:22:10]** Para que sea un grafo

**[00:22:12]** Al menos

**[00:22:12]** Ya, pero

**[00:22:21]** Grafica

**[00:22:21]** Ponle sus grafos

**[00:22:22]** Por ejemplo

**[00:22:22]** Para M2

**[00:22:24]** Para M2, M3

**[00:22:25]** Es M1

**[00:22:26]** No, yo ya pensaba

**[00:22:33]** Que sean los tres grafos

**[00:22:35]** Es que no

**[00:22:36]** Necesito un ejemplo

**[00:22:37]** Ya

**[00:22:37]** Plausible

**[00:22:38]** Son tres

**[00:22:38]** Ese M1, M2, M3

**[00:22:40]** Son grafos

**[00:22:41]** Directos

**[00:22:43]** Ya

**[00:22:43]** Sí

**[00:22:44]** Directo

**[00:22:44]** Directo

**[00:22:45]** O sea, es un ejemplo

**[00:22:46]** Porque después

**[00:22:47]** No va a ser matemática

**[00:22:48]** Va a ser geometría

**[00:22:49]** Con sus grafos

**[00:22:50]** Ya, matemática

**[00:22:50]** Tiene tres grafos

**[00:22:51]** Este

**[00:22:52]** El grafo 2, 3

**[00:22:53]** Parten del 1

**[00:22:55]** Ya

**[00:22:59]** Listo

**[00:23:02]** Ok

**[00:23:02]** Ya

**[00:23:06]** Y para el grafo 3

**[00:23:07]** Necesitas el grafo 2 también

**[00:23:08]** Ya

**[00:23:21]** No, no

**[00:23:21]** Lo que me importa es tener un

**[00:23:23]** Ya, vamos

**[00:23:23]** A las preguntas

**[00:23:24]** Ya

**[00:23:54]** No me gusta el primero

**[00:23:56]** Este

**[00:23:56]** En vez de

**[00:23:57]** M2

**[00:23:58]** Ahí ves un grafo

**[00:23:59]** M2

**[00:24:00]** Ponle dos grafos

**[00:24:01]** Ya

**[00:24:12]** Y ahí también

**[00:24:13]** Ajá

**[00:24:16]** Pa, pa, pa

**[00:24:16]** Y parece

**[00:24:18]** A ver, ¿qué es?

**[00:24:19]** Mira

**[00:24:19]** Es que realmente

**[00:24:20]** Ya

**[00:24:24]** Ya

**[00:24:31]** Está bien

**[00:24:55]** Yo quería

**[00:24:56]** Yo quería un paralelo

**[00:24:58]** ¿Cuál es un paralelo ahí en tu grafo?

**[00:25:11]** Ya, ya, acá

**[00:25:12]** Ya, listo

**[00:25:13]** Listo, listo

**[00:25:14]** Ya, ya está

**[00:25:15]** Ya vamos a trabajar

**[00:25:16]** ¿Vas a trabajar con matemática?

**[00:25:20]** Vamos a trabajar con matemática

**[00:25:21]** Ya ponle, ponle numeritos

**[00:25:27]** 1, 2, 3, 4, 5

**[00:25:28]** Así a los grafos

**[00:25:29]** A los grafos

**[00:25:30]** Para decir

**[00:25:31]** Ajá

**[00:25:32]** Ponle numeritos

**[00:25:33]** Para llamarlos

**[00:25:34]** Ya, listo

**[00:25:39]** Ya

**[00:25:40]** Listo

**[00:25:41]** Ya

**[00:25:45]** Listo

**[00:25:45]** Borra eso

**[00:25:46]** Pregunta uno

**[00:25:46]** Ya, posiblemente

**[00:25:49]** Pero antes

**[00:25:50]** Pregúntanos

**[00:25:50]** Borra, borra, borra

**[00:25:51]** Borra

**[00:25:52]** Bueno

**[00:25:53]** Vamos a comenzar

**[00:25:54]** La secuencia de preguntas

**[00:25:56]** Que se van a pedir en la

**[00:25:58]** Entonces

**[00:25:59]** Tú vas a darle click

**[00:26:00]** Al curso

**[00:26:01]** Que en este caso

**[00:26:02]** Matemática

**[00:26:02]** Puede ser bien geometría

**[00:26:03]** Uno

**[00:26:04]** Vas a empezar con el uno

**[00:26:06]** O sea

**[00:26:07]** Yo lo que quiero ahorita

**[00:26:08]** Es plantear tu script

**[00:26:10]** ¿Cuál va a ser?

**[00:26:12]** Ya, entonces

**[00:26:13]** Ya, uno

**[00:26:15]** Vamos a ver

**[00:26:15]** Uno, uno

**[00:26:16]** No es M1

**[00:26:21]** Eso es

**[00:26:21]** Uno nomás

**[00:26:22]** Porque te vas a obviar

**[00:26:23]** O sea, es la pregunta

**[00:26:25]** Uno del primer grafo

**[00:26:28]** O sea, te lanza una pregunta

**[00:26:29]** Correlativa al primer grafo

**[00:26:31]** Ok

**[00:26:31]** No, pero es que

**[00:26:33]** Ya, ya

**[00:26:33]** Ya, sí

**[00:26:34]** Claro

**[00:26:35]** Ajá

**[00:26:42]** Ajá

**[00:26:45]** Ya

**[00:26:46]** Responde bien

**[00:26:46]** Responde mal

**[00:26:47]** ¿Qué cosa más podemos evaluar?

**[00:26:50]** ¿Tiempo que le toma a responder?

**[00:26:52]** No, no

**[00:26:53]** Ya, no, no

**[00:27:05]** No vayas al tema

**[00:27:06]** Pero, o sea

**[00:27:06]** Yo voy

**[00:27:07]** Ya, ya

**[00:27:09]** Ah, es el blog

**[00:27:16]** Ya, ese es

**[00:27:17]** El blog

**[00:27:17]** Vaquen, ya

**[00:27:18]** Ya, ya ves

**[00:27:36]** No, porque

**[00:27:46]** Me estaba mezclando

**[00:27:47]** Me estaba mezclando

**[00:27:48]** Me estaba mezclando

**[00:27:48]** Ese es el lenguaje

**[00:27:49]** Puta, no

**[00:27:55]** No

**[00:27:56]** No, vete

**[00:27:57]** Me estamos

**[00:27:58]** Estamos diciendo que no

**[00:27:59]** O sea, son

**[00:28:00]** No

**[00:28:01]** Estás hablando

**[00:28:02]** Mucho todavía

**[00:28:04]** O sea, estás hablando

**[00:28:05]** De diez días de plazo

**[00:28:06]** ¿No?

**[00:28:10]** El grafo uno

**[00:28:11]** Es su fucking

**[00:28:12]** Pregunta del tema

**[00:28:13]** Estamos

**[00:28:17]** Hemos dicho

**[00:28:18]** Solo un

**[00:28:19]** Tú estás yendo

**[00:28:20]** Al siguiente nivel

**[00:28:21]** Que ya te he dicho

**[00:28:23]** Que te vas a sentir

**[00:28:24]** Tiempo

**[00:28:24]** De cada una de las preguntas

**[00:28:25]** Lo vas a hacer

**[00:28:26]** Pero si no nos vamos a dar el tiempo

**[00:28:27]** ¿Qué es lo que va a pasar?

**[00:28:29]** Es no

**[00:28:29]** Ya, a veces

**[00:28:30]** Esto es lo que pasa

**[00:28:31]** Por eso

**[00:28:32]** Ya, por eso

**[00:28:47]** Déjame explicarte

**[00:28:48]** Mira

**[00:28:49]** Ya, mira

**[00:29:17]** No, no, no

**[00:29:19]** No, no, no

**[00:29:20]** No, no, no

**[00:29:21]** Espérate, espérate

**[00:29:21]** Espérate, espérate

**[00:29:22]** Ya me has confundido

**[00:29:23]** ¿Cómo individuales?

**[00:29:24]** Yo entiendo

**[00:29:24]** Grafo es como que

**[00:29:25]** Una habilidad

**[00:29:26]** Por ejemplo

**[00:29:27]** Para sumas, restas

**[00:29:28]** Para multiplicación

**[00:29:29]** Para cuadráticos

**[00:29:30]** Es eso

**[00:29:34]** Es eso

**[00:29:35]** Es eso

**[00:29:35]** Ya, por eso

**[00:29:41]** Nadie dice no

**[00:29:42]** Ajá

**[00:29:45]** Con decimales

**[00:29:52]** Ya

**[00:29:54]** Ya, ya

**[00:29:55]** Ya

**[00:30:00]** Bacán

**[00:30:01]** Me gusta

**[00:30:03]** Me gusta, me gusta, me gusta

**[00:30:04]** Ya, listo

**[00:30:19]** Ya está

**[00:30:20]** Listo

**[00:30:20]** Sí

**[00:30:22]** Ya, ya

**[00:30:23]** Sí, sí, sí, sí

**[00:30:24]** Pero ahora

**[00:30:24]** Directamente en el sistema

**[00:30:26]** ¿Cómo va a ser?

**[00:30:26]** Mira, entonces

**[00:30:27]** Mi propuesta es la siguiente

**[00:30:28]** Tú me corriges

**[00:30:29]** No vas a empezar

**[00:30:30]** Por el grafo 3

**[00:30:31]** Siempre vamos a empezar

**[00:30:32]** Por el grafo 1

**[00:30:33]** De todo

**[00:30:33]** ¿Por qué?

**[00:30:34]** Porque si bien es cierto

**[00:30:35]** En los grafos reales

**[00:30:36]** Son habilidades

**[00:30:38]** Bien diseccionadas

**[00:30:39]** Como sumar, restar

**[00:30:40]** Sabes o no sabes

**[00:30:41]** Pero como nosotros

**[00:30:42]** Vamos a bajar solo

**[00:30:43]** Hasta un grafo del temario

**[00:30:44]** O sea, cada punto del temario

**[00:30:46]** Va a ser un grafo

**[00:30:47]** Entonces

**[00:30:48]** Si bien es cierto

**[00:30:49]** Hay una correlación

**[00:30:50]** Por ejemplo

**[00:30:50]** Para saber

**[00:30:51]** ¿Cómo se llama?

**[00:30:54]** Figuras cúbicas

**[00:30:55]** En 3D

**[00:30:56]** Tienes que saber figuras en 2D

**[00:30:57]** Pero

**[00:30:58]** No puede ser que

**[00:31:00]** Si empiezas desde el 3D

**[00:31:02]** Preguntándole a ver

**[00:31:02]** Si es que ya sabe el anterior

**[00:31:03]** Te puede responder

**[00:31:06]** Pero aún así

**[00:31:06]** Puede estar fallando el 2D

**[00:31:08]** ¿Me entiendes?

**[00:31:09]** Pero

**[00:31:10]** No es tanto

**[00:31:11]** Ya

**[00:31:12]** Por eso

**[00:31:13]** O sea

**[00:31:13]** El grafo que te estoy planteando

**[00:31:17]** Tiene ese sesgo

**[00:31:19]** Está fallando ahí

**[00:31:20]** Pero en cambio

**[00:31:21]** En el que tú estás planteando

**[00:31:22]** Es distinto

**[00:31:24]** Porque para poder

**[00:31:25]** Elevar al cuadrado

**[00:31:27]** Sí

**[00:31:28]** Realmente se necesitan

**[00:31:29]** Las sumas y restas

**[00:31:30]** ¿No?

**[00:31:31]** En cambio

**[00:31:31]** Nuestro grafo es una especie

**[00:31:33]** De más simplificado

**[00:31:34]** Que no vas a plantearle

**[00:31:35]** Desde el punto 3

**[00:31:36]** O sea

**[00:31:37]** Siempre vamos a ir en orden

**[00:31:38]** A eso es a lo que voy

**[00:31:39]** Para

**[00:31:40]** Para

**[00:31:40]** Arrastrar todo

**[00:31:41]** Vamos a ir en orden

**[00:31:42]** No entiendo

**[00:31:57]** No, no, no, no, no

**[00:31:58]** No entiendo

**[00:31:59]** ¿Por qué 3?

**[00:32:00]** 1 sería

**[00:32:00]** No, no, no

**[00:32:13]** No, no, no, no, no

**[00:32:14]** ¿Cómo?

**[00:32:15]** Espérate

**[00:32:15]** Me estás

**[00:32:16]** Me estás

**[00:32:16]** Me estás hueveando bien feo

**[00:32:18]** Estamos hablando

**[00:32:19]** Que nuestros grafos

**[00:32:20]** Son únicos

**[00:32:21]** Y las preguntas

**[00:32:22]** Que se toman

**[00:32:23]** En un examen de admisión

**[00:32:24]** O sea

**[00:32:25]** Una pregunta

**[00:32:26]** Corresponde

**[00:32:27]** A un grafo entero

**[00:32:28]** No hay

**[00:32:29]** Una pregunta

**[00:32:30]** Que tenga dos grafos

**[00:32:31]** Y si tiene dos grafos

**[00:32:32]** Se toma solo

**[00:32:33]** El predominante

**[00:32:34]** Y si tiene dos grafos

**[00:32:34]** Porque todos

**[00:32:35]** Ya

**[00:32:44]** Ya, ya, ya

**[00:32:47]** Pero eso te estoy diciendo

**[00:32:48]** Pues que

**[00:32:48]** Realmente las preguntas

**[00:32:50]** De los temarios

**[00:32:52]** No necesariamente

**[00:32:52]** Tienen esa conexión

**[00:32:54]** Pues

**[00:32:54]** Porque yo te puedo decir

**[00:32:55]** Que una pregunta

**[00:32:57]** De 3D

**[00:32:58]** Puede ser incluso

**[00:32:59]** Más fácil

**[00:33:00]** Que una pregunta

**[00:33:01]** De 2D

**[00:33:01]** Porque en 3D

**[00:33:02]** Te van a preguntar

**[00:33:04]** ¿Cuántos aristas tiene?

**[00:33:06]** Ya

**[00:33:06]** Y una pregunta

**[00:33:07]** De 2D

**[00:33:08]** Te van a preguntar

**[00:33:09]** ¿Hay esta incógnita

**[00:33:11]** Dentro de que

**[00:33:11]** De un

**[00:33:12]** Un gravato

**[00:33:13]** Que ha hecho

**[00:33:13]** Un chico

**[00:33:14]** O sea

**[00:33:14]** No, no un gravato

**[00:33:15]** Sino una figura geométrica

**[00:33:16]** Más compleja

**[00:33:17]** Yo te digo eso

**[00:33:18]** Porque las preguntas

**[00:33:19]** De 3D

**[00:33:19]** Eran más fáciles

**[00:33:21]** Más fáciles

**[00:33:21]** Que 2D

**[00:33:22]** Y si en el sistema

**[00:33:23]** Me empiezan a responder

**[00:33:25]** 3D

**[00:33:26]** Check, check, check

**[00:33:27]** El sistema

**[00:33:28]** Con su script

**[00:33:29]** Puede equivocarse

**[00:33:30]** Y pensar equivocadamente

**[00:33:31]** Que el chivolo

**[00:33:32]** Ya sabe el 2D

**[00:33:33]** Porque en su grafo

**[00:33:35]** Está una secuencia

**[00:33:36]** ¿No?

**[00:33:36]** Y el 3D

**[00:33:37]** Está después

**[00:33:38]** Eso es lo que

**[00:33:39]** Te quiero advertir

**[00:33:40]** O sea

**[00:33:41]** Ya

**[00:33:45]** Por cada pregunta

**[00:33:48]** Tiene un grafo

**[00:33:50]** Por ejemplo

**[00:33:52]** Esa pregunta

**[00:33:53]** Tiene un fucking grafo

**[00:33:55]** El 1

**[00:33:56]** El 1

**[00:33:57]** 1

**[00:33:58]** ¿Por qué 3?

**[00:33:59]** ¿Por qué 3?

**[00:34:00]** O sea

**[00:34:00]** Yo te entiendo

**[00:34:01]** Que puedes partir

**[00:34:01]** Duolingo hace eso

**[00:34:02]** Por ejemplo

**[00:34:03]** Duolingo te pone

**[00:34:04]** Más o menos

**[00:34:05]** En el intermedio de pregunta

**[00:34:06]** Y si la cagas

**[00:34:07]** Va bajando

**[00:34:07]** Si es que haces bien

**[00:34:09]** Va subiendo

**[00:34:10]** O sea

**[00:34:12]** Es como que

**[00:34:12]** Una especie de adaptativo

**[00:34:14]** ¿No?

**[00:34:14]** Lo cual

**[00:34:15]** Estaría bien

**[00:34:15]** No, no entiendo pesos

**[00:34:23]** No

**[00:34:34]** Correcto

**[00:34:37]** Ajá

**[00:34:44]** Ajá

**[00:34:47]** Ahí está

**[00:34:48]** Eso era lo que quería advertirte

**[00:34:50]** ¿No?

**[00:34:55]** Es que yuca

**[00:34:55]** Ya

**[00:35:04]** Está bien, está bien

**[00:35:05]** Pero por eso

**[00:35:05]** Quiero significarlo

**[00:35:06]** Para que tú puedas hacerlo

**[00:35:07]** En dos días

**[00:35:08]** Yo te voy a decir

**[00:35:10]** Qué cosas

**[00:35:10]** Sí

**[00:35:11]** Qué cosas

**[00:35:11]** No

**[00:35:11]** Ya

**[00:35:14]** Entonces

**[00:35:14]** Cada pregunta

**[00:35:15]** Es un fucking grafo

**[00:35:16]** Entonces vamos a partir

**[00:35:17]** De la primera pregunta

**[00:35:18]** Grafo 1

**[00:35:19]** En cualquier secuencia

**[00:35:20]** Ya

**[00:35:24]** Y ahí

**[00:35:24]** Un pequeño paréntesis

**[00:35:26]** Obviamente

**[00:35:26]** Que se tiene que guardar

**[00:35:27]** El avance

**[00:35:28]** El chibola

**[00:35:28]** O sea

**[00:35:29]** Cada

**[00:35:29]** Esa

**[00:35:30]** Saber

**[00:35:30]** En qué grafo se encuentra

**[00:35:32]** Eso tiene que estar

**[00:35:33]** En la base de datos

**[00:35:33]** Porque si no

**[00:35:34]** Se te va a refrescar

**[00:35:35]** Y va a empezar

**[00:35:35]** A resolver

**[00:35:36]** Sumas y restas

**[00:35:37]** Cada vez

**[00:35:38]** Y no va a avanzar

**[00:35:38]** Ya

**[00:35:39]** Eso está

**[00:35:40]** Como un slash

**[00:35:41]** Ahora

**[00:35:41]** Grafo 1

**[00:35:42]** Lo tenemos

**[00:35:43]** La check

**[00:35:44]** Ahora

**[00:35:44]** Pregunta 2

**[00:35:45]** Hazte un cuadrito

**[00:35:46]** De esa pregunta 2

**[00:35:47]** Para ver

**[00:35:47]** Cómo

**[00:35:48]** Pregunta 2

**[00:35:49]** Hazte dos cuadritos

**[00:35:52]** Hazte

**[00:35:56]** Hazte un cuadrito

**[00:36:00]** A ver

**[00:36:00]** Ya

**[00:36:02]** A ver

**[00:36:05]** Mira

**[00:36:05]** Yo tengo esta idea

**[00:36:06]** Vamos a lanzarle

**[00:36:08]** Cuatro preguntas

**[00:36:10]** Del grafo 1

**[00:36:12]** Si es que responde

**[00:36:16]** Tres consecutivas

**[00:36:18]** Bien

**[00:36:19]** O sea

**[00:36:20]** El 75%

**[00:36:21]** Se pasa al siguiente grafo

**[00:36:24]** Ya está

**[00:36:35]** Ya mira

**[00:36:37]** Se tiene

**[00:36:39]** Hoy tu

**[00:36:42]** Tu batería

**[00:36:43]** Lo conoce

**[00:36:43]** Ya

**[00:36:43]** Entonces

**[00:36:49]** Va a haber

**[00:36:50]** Cuatro preguntas

**[00:36:51]** Del grafo 1

**[00:36:52]** O sea

**[00:36:52]** Vas a decirle

**[00:36:54]** P1

**[00:36:54]** P2

**[00:36:55]** P3

**[00:36:55]** P4

**[00:36:55]** Del mismo grafo

**[00:36:56]** Y

**[00:36:58]** Si es que

**[00:36:59]** Se cumple la condición

**[00:37:01]** De que

**[00:37:02]** Tres de las

**[00:37:03]** Últimas

**[00:37:04]** Cuatro preguntas

**[00:37:05]** Han sido correctas

**[00:37:07]** Será por habilitado

**[00:37:08]** El grafo

**[00:37:09]** Y pasas al siguiente

**[00:37:11]** Y que se guarde

**[00:37:16]** Ese

**[00:37:16]** Ese porcentaje

**[00:37:17]** De avance

**[00:37:18]** Con el grafo

**[00:37:19]** Si es que ha pasado

**[00:37:20]** Con el 75%

**[00:37:21]** O 100%

**[00:37:22]** Si solo uno

**[00:37:28]** No va a haber más

**[00:37:29]** Es una simplificación

**[00:37:31]** Un grafo

**[00:37:36]** Digámosle grafo

**[00:37:37]** Porque me gusta la palabra

**[00:37:38]** Y lo voy a usar así

**[00:37:40]** Ahí

**[00:37:40]** No creo que sea

**[00:37:41]** Que nadie me diga

**[00:37:41]** No es que los grafos

**[00:37:42]** Son

**[00:37:43]** Unidades

**[00:37:45]** Únicas

**[00:37:46]** Es como

**[00:37:47]** Son singularidades

**[00:37:48]** No creo que nadie

**[00:37:49]** Ningún profesor

**[00:37:50]** Me diga dentro de la academia

**[00:37:51]** No, no, no

**[00:37:52]** Es que tú

**[00:37:53]** Estás utilizando el grafo

**[00:37:54]** Como un tema

**[00:37:55]** Y no una singularidad

**[00:37:57]** No creo que alguien

**[00:37:59]** Me corrija

**[00:37:59]** O sea ya

**[00:38:00]** Yo sé

**[00:38:00]** Sí

**[00:38:10]** Yo entiendo

**[00:38:11]** Ah

**[00:38:16]** El grafo es una

**[00:38:17]** Ah ya

**[00:38:18]** Ya, ya

**[00:38:19]** Ya entonces

**[00:38:20]** Ya, ya sí

**[00:38:22]** Sí, sí

**[00:38:22]** Todo entendido

**[00:38:23]** Ya entonces

**[00:38:24]** Una

**[00:38:24]** Una

**[00:38:24]** Una

**[00:38:25]** No como

**[00:38:26]** Un nódulo

**[00:38:27]** Un nódulo

**[00:38:28]** Es

**[00:38:28]** Es un

**[00:38:29]** Temario

**[00:38:31]** Entonces

**[00:38:31]** Un tema del temario

**[00:38:34]** De un curso

**[00:38:35]** Obviamente

**[00:38:35]** Entonces

**[00:38:36]** Cada pregunta

**[00:38:39]** Va a tener

**[00:38:39]** Un

**[00:38:40]** Un tema único

**[00:38:43]** Un tema predominante

**[00:38:44]** Eh

**[00:38:45]** Ecuaciones

**[00:38:46]** Eh

**[00:38:48]** Polígonos

**[00:38:49]** No me importa

**[00:38:49]** Su tema

**[00:38:51]** Listo

**[00:38:51]** Como los temas

**[00:38:53]** Están secuenciados

**[00:38:54]** Le va a habilitar

**[00:38:55]** El siguiente tema

**[00:38:56]** Concatenado

**[00:38:57]** En tu red

**[00:38:58]** Del grafo

**[00:38:59]** Sí

**[00:39:00]** Y solo sí

**[00:39:01]** De las últimas

**[00:39:03]** Cuatro preguntas

**[00:39:04]** Que esté respondiendo

**[00:39:05]** Porque consta

**[00:39:06]** Puede responder

**[00:39:07]** Mal, mal, mal

**[00:39:08]** Y empieza a hacerlas bien

**[00:39:09]** Las tres

**[00:39:09]** Tres al hilo

**[00:39:11]** Ya está

**[00:39:11]** Listo

**[00:39:12]** Básicamente

**[00:39:13]** Tres al hilo

**[00:39:14]** Pasas al siguiente

**[00:39:15]** Ese es el resumen

**[00:39:17]** Tres al hilo

**[00:39:17]** Pasas al siguiente

**[00:39:18]** Nada más que eso

**[00:39:20]** Y se guarda

**[00:39:23]** Si ha hecho

**[00:39:23]** Tres al hilo

**[00:39:24]** Inclusive

**[00:39:25]** Puedes guardar

**[00:39:26]** Cuántas preguntas

**[00:39:27]** Totales

**[00:39:27]** Ha hecho este grafo

**[00:39:28]** Y cómo se ha hecho

**[00:39:28]** Y cómo se ha hecho

**[00:39:28]** Y cuál es su porcentaje

**[00:39:29]** Real

**[00:39:30]** O sea

**[00:39:33]** La llave

**[00:39:33]** Viene a ser

**[00:39:34]** El tres al hilo

**[00:39:35]** Pero

**[00:39:36]** El

**[00:39:37]** El

**[00:39:39]** El

**[00:39:40]** El

**[00:39:40]** El

**[00:39:40]** El

**[00:39:40]** El

**[00:39:40]** Sistema debe

**[00:39:43]** Identificar

**[00:39:44]** De todos estos

**[00:39:45]** Nódulos

**[00:39:46]** Que han pertenecido

**[00:39:47]** Al tema uno

**[00:39:48]** Cuántos

**[00:39:49]** Ha hecho bien

**[00:39:49]** Cuántos ha hecho mal

**[00:39:50]** Y

**[00:39:51]** En una etapa

**[00:39:52]** Posterior

**[00:39:53]** Vamos a discutir

**[00:39:54]** Qué fucking

**[00:39:54]** Hacer con esa información

**[00:39:55]** Ya

**[00:40:09]** Ya

**[00:40:09]** Un toquecito

**[00:41:48]** Ya

**[00:41:49]** Ya

**[00:44:37]** Ya

**[00:44:37]** Ya

**[00:44:44]** Ya

**[00:44:44]** a ver, no veo, no sé cómo se cambia, a ver, no estás compartiendo, ahí está, ya le vi,

**[00:45:15]** le vas a llevar al veterinario para que le corte su uñita, su puntita le cortan para acá,

**[00:46:00]** sí, no, no, llévale, porque para darle a Castro, pues, unos días, si no me hagas desmadre, chiquito,

**[00:46:09]** de paso, es paquete completo, le dan su baño, su corte, todo, creo que es 80 soles, ya te paso,

**[00:46:17]** o ya con el bonito, ve que te da, ya, con ese, llévale, llévale, llévale, es una corneta,

**[00:46:25]** ya, muchito, no son X preguntas, son, le va dando preguntas hasta que resuelva tres al hilo,

**[00:46:59]** tres,

**[00:47:00]** correctas consecutivamente, correctas, pasas al siguiente, tema, tema, tema, tema,

**[00:47:22]** todo es geometría, todo es geometría, por ejemplo, sí, sí, exacto, exacto, exacto, ya,

**[00:47:44]** mira, escucha, escucha, ya, a ver si estamos, no, no, un ratito, M192 son cursos, no, ya, entonces,

**[00:48:05]** sí, claro, resuelves todos los temas, vamos a llamarle temas, porque grafos, ya me he confundido,

**[00:48:11]** vamos a llamarle temas,

**[00:48:11]** ya, listo, entonces, resuelve todos los temas, en el orden, ya, ahí, esquematizado, ya, tú ves el orden, pero resuelve todos los temas, y da por, eh, eh, terminado un, un, un curso, ¿no?, un curso, y pasa al siguiente, listo, no hay más ahí, de, no, no, sí, sí, sí, hay, a veces, estas son las funcionalidades que van a tener de, son ayudas, por ejemplo, pon tiempo esperado por preguntas,

**[00:48:47]** por preguntas,

**[00:48:48]** sí, no, sí, sí, un tiempo que va retrocediendo, o sea, por cinco minutos, y va retrocediendo, y que le salga cuánto tiempo se ha demorado, o sea, por ejemplo, pasas, este, un, unos cinco minutos, te demora siete, hay que te diga menos dos, o algo así, ¿no?, o no, no, confuso, es confuso, cuenta regresiva es, es tonto, mejor cuenta,

**[00:49:28]** es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es, es

**[00:50:00]** minuto, amarillo, y si lo resuelve después

**[00:50:02]** de los cinco, rojo, está

**[00:50:04]** porque para esa misión es otro factor que

**[00:50:09]** delimita si alguien ingresa o no

**[00:50:11]** si es que hace rápido las cosas

**[00:50:13]** me parece que esa estadística ya

**[00:50:48]** tenemos datos ricos en con tiempo

**[00:50:50]** y cantidad de preguntas

**[00:50:52]** que le ha tomado pasar de tema

**[00:50:54]** ocho por ejemplo

**[00:51:06]** ya, mira

**[00:51:17]** ya, bacán, ahora

**[00:51:21]** ¿cómo vamos a analizar esto?

**[00:51:23]** esto es un poquito yuca

**[00:51:24]** porque mira, un

**[00:51:27]** vamos a llamarle a este

**[00:51:31]** juego completo de preguntas

**[00:51:33]** y avances, vamos a llamarle

**[00:51:35]** como que estudio del curso

**[00:51:37]** o estudio enfocado en tal curso

**[00:51:39]** ya, estudio enfocado

**[00:51:44]** en tal curso, vamos a hacer primero por curso

**[00:51:46]** vamos a pensar bien por curso

**[00:51:47]** la estadística tiene que decirme

**[00:51:49]** bueno, estadísticas

**[00:51:53]** por tema

**[00:51:54]** sí o sí tiene que ser por tema

**[00:51:55]** esa es la primera división, por tema

**[00:51:58]** división

**[00:52:00]** no, no, no, vamos a pensar bien

**[00:52:20]** un curso, porque mira

**[00:52:21]** ¿qué?

**[00:52:53]** ¿ya son los cursos?

**[00:53:10]** sí, está bien

**[00:53:10]** no, no, espérate, como así

**[00:53:26]** o sea, a ver, es un

**[00:53:28]** mira, es un dashboard

**[00:53:30]** con la información del estudio

**[00:53:32]** o es un dashboard

**[00:53:34]** con la información del histórico

**[00:53:36]** de los estudios que has hecho

**[00:53:38]** me parece que

**[00:53:44]** ya, ya, ya, ya, ya

**[00:53:47]** me corriges

**[00:53:49]** por cada corrida que te salgan unas

**[00:53:52]** estadísticas

**[00:53:53]** y el histórico es un dashboard, nada más

**[00:53:57]** y esa, o sea, cada estudio

**[00:53:59]** ahí va a quedar como que grabado

**[00:54:01]** estudio de matemática, estudio de tal

**[00:54:03]** no necesariamente el nombre

**[00:54:05]** que se llama estudio de tal, sino un nombre más

**[00:54:07]** bonito, ¿no? pero eso es

**[00:54:08]** lo que se me ocurre ahorita

**[00:54:10]** entonces, en cada corrida que vas a

**[00:54:13]** lanzar

**[00:54:14]** te lanzan unas estadísticas

**[00:54:17]** que se ven ahí, ¿no? en una pantallita

**[00:54:19]** algo simple, una tablita

**[00:54:21]** no, no quiero que sean gráficos, nada

**[00:54:23]** más necesito saber

**[00:54:24]** preguntas

**[00:54:27]** necesarias para pasar

**[00:54:29]** el tema y

**[00:54:31]** ¿cómo se llama esta porquería?

**[00:54:34]** y el tiempo promedio de pregunta

**[00:54:36]** nada más

**[00:54:37]** el alumno no necesita saber nada más

**[00:54:40]** el tiempo promedio y el tiempo

**[00:54:43]** esperado, sí, mira

**[00:55:04]** vamos a ser sinceros acá, el profesor no va a ver

**[00:55:06]** el detalle por alumno, el profesor única

**[00:55:08]** y solamente va a

**[00:55:10]** revisar los consolidados

**[00:55:12]** puede entrar el detalle

**[00:55:14]** pero no te concentres en que el profesor

**[00:55:16]** entre el detalle, lo único que le va a

**[00:55:18]** importar y lo que va a utilizar

**[00:55:20]** ya va a cancelarte, programando

**[00:55:24]** es fácil, normal, pero yo te digo

**[00:55:26]** el foco para el profesor es perder el

**[00:55:27]** consolidado, y ni siquiera el

**[00:55:30]** consolidado de datos

**[00:55:31]** sino el dato ya procesado

**[00:55:34]** o sea, que le diga exactamente

**[00:55:35]** qué preguntas están fallando a sus alumnos

**[00:55:38]** nada más, qué temas, ¿no?

**[00:55:42]** qué temas están fallando

**[00:55:44]** a mí me gusta, o sea, yo trato

**[00:55:54]** de primero, todo lo posible

**[00:55:56]** quitar, no, no

**[00:55:58]** más que eso, quitar dependencia

**[00:56:00]** de guía, o sea, quitar la consulta

**[00:56:02]** por API

**[00:56:03]** o sea

**[00:56:07]** el último, el último caso

**[00:56:10]** es el API, como que puta falla

**[00:56:12]** ya pues todo lo demás sigue, ¿no?

**[00:56:14]** pero depender el API para cada

**[00:56:16]** cosa, no

**[00:56:17]** o sea, el último, si hace un

**[00:56:19]** mapeo general para el gerente, para el administrativo

**[00:56:22]** acá, porque hay tus créditos

**[00:56:24]** pues una persona no va a pasarse

**[00:56:26]** de tu límite de créditos, no

**[00:56:28]** va a estar ese problema

**[00:56:29]** ya, seguimos, Micho, te hago acá, te hago acá, seguimos

**[00:56:35]** ahí, ahí, ahí, y otra cosa más

**[00:57:17]** esto lo estás haciendo para una aplicación

**[00:57:21]** tipo de

**[00:57:22]** en web, ¿no?

**[00:57:26]** a ver, yo quiero preguntarte

**[00:57:28]** acá de manera sincera, ¿qué tan difícil

**[00:57:30]** es hacerlo una app?

**[00:57:33]** ¿se puede empaquetar esa cosa

**[00:57:34]** en una app?

**[00:57:52]** ya, ya

**[00:57:58]** no, no hay un en computadora

**[00:58:05]** yo te digo, solo

**[00:58:08]** solo va a ser celular

**[00:58:09]** y principalmente

**[00:58:11]** en un inicio es

**[00:58:13]** lo que tiene menos resistencia al cambio

**[00:58:16]** es la

**[00:58:17]** página web, un link

**[00:58:20]** por más que demore menos

**[00:58:24]** instalar la aplicación

**[00:58:25]** pero la mayoría

**[00:58:28]** prefiere entrar a una web y probarlo ahí

**[00:58:30]** entonces eso es lo que va a convencer

**[00:58:32]** ya, tratamos bien, tratamos bien

**[00:58:34]** web ya para los que

**[00:58:36]** cuando empiecen a gustarle mejor

**[00:58:38]** lo descargo, dicen, ¿verdad?

**[00:58:48]** en la web le pones incentivo

**[00:58:49]** descargala para mayor comodidad

**[00:58:52]** y allá te iba a decir

**[00:58:55]** ya, mira, ya hablando un poquito

**[00:58:57]** del frontend

**[00:58:58]** el grupo Bryce tiene los colores

**[00:59:01]** del BCP, loco, puta, tienes la

**[00:59:03]** todo, todo

**[00:59:04]** tienes la aplicación del fucking BCP

**[00:59:07]** para hacer tu

**[00:59:07]** tu frontend

**[00:59:10]** o sea, agarra

**[00:59:13]** pero agarra todo, esa es la

**[00:59:16]** paleta de colores que obviamente que hay

**[00:59:18]** unos ligeros destellos de

**[00:59:20]** de amarillo, de amarillo que digo

**[00:59:22]** de naranja que se pueden ajustar y todo

**[00:59:25]** pero ese es el foco, ¿no?

**[00:59:27]** la app del BCP

**[00:59:28]** me gusta bastante la app del BCP

**[00:59:31]** en comparación al BVA

**[00:59:32]** tú no tienes el BCP, creo, ¿no?

**[00:59:38]** ya para

**[00:59:38]** además, entonces, ya, listo

**[00:59:43]** ya entonces

**[00:59:45]** sí

**[01:00:03]** ajá

**[01:00:45]** y el que te roba eso tiene que saber que justamente

**[01:01:04]** tiene esa llave a la

**[01:01:05]** disposición

**[01:01:06]** no, no, no va a pasar

**[01:01:09]** ya, ya, muchito

**[01:01:10]** ya, no, no, no es tanto así, porque el BCP

**[01:01:17]** es cabrón, ¿no?

**[01:01:18]** los jugadores son cabrones

**[01:01:19]** sí, chévere, pero esos manes son los que

**[01:01:22]** el banco que más roban, venga, el Perú

**[01:01:24]** ya, así que no

**[01:01:27]** no tanto, ya

**[01:01:28]** tienes cositas, pros y contras

**[01:01:30]** ya, continúas, muchito

**[01:01:30]** ya, vas, vas

**[01:01:36]** pensándole

**[01:01:37]** vamos a

**[01:01:38]** vamos a

**[01:01:41]** recapitular

**[01:01:42]** ahí está ella, ya, sí, sí

**[01:01:46]** ve teniéndolo en la mano

**[01:01:48]** voy a ir un toquecito al baño y bueno

**[01:01:49]** al toque más

**[01:06:37]** en todos sus servicios web

**[01:06:38]** escríbenos al whatsapp y dinos que

**[01:07:53]** está igualito

**[01:07:55]** yo digo, oye, Jamicho

**[01:07:57]** ah, espérate, espérate, pero mi Micho

**[01:08:00]** está más macetón, digo

**[01:08:01]** está grabado hace años

**[01:08:03]** lo veo con miedo

**[01:08:08]** Jami, le voy a decir

**[01:08:13]** le voy a escribir

**[01:08:17]** Jami

**[01:08:26]** mira, mira, mira

**[01:08:36]** su pelo también, mira

**[01:08:42]** sí, pe

**[01:08:54]** oye

**[01:09:07]** , sí

**[01:09:07]** ya pechiris

**[01:09:10]** ahí con la novedad

**[01:09:12]** de haber encontrado al gemelo

**[01:09:15]** del Micho

**[01:09:16]** parece Jami hace, no sé

**[01:09:19]** en otra línea

**[01:09:20]** en otra línea temporal

**[01:09:23]** el Jamiverso

**[01:09:26]** el Michiverso

**[01:09:27]** el Michiverso

**[01:09:31]** a ver quién es

**[01:09:37]** a ver, dónde está

**[01:09:39]** no sé

**[01:09:41]** bueno, qué cosas

**[01:09:49]** solo por este mes

**[01:09:51]** ahora que venimos

**[01:09:52]** solo por este mes

**[01:10:01]** no sé, casi tengo que revisar

**[01:10:04]** ahora

**[01:10:05]** te vamos a

**[01:10:07]** sentenciar

**[01:10:09]** ya mamita

**[01:10:12]** todo bien por acá, acá estoy con el Michito

**[01:10:14]** ya papá

**[01:10:16]** tranquilo, ya habrá cenado ya mi

**[01:10:18]** Michi

**[01:10:19]** está cenando

**[01:10:25]** está en

**[01:10:33]** camino dice Chiri

**[01:10:35]** ya, ya, ya papá

**[01:10:37]** ya, ya, ya, ya le vi

**[01:10:39]** ya había vainillo también

**[01:10:41]** comer bien, bien

**[01:10:42]** ya le tiro

**[01:10:46]** ya le tiro

**[01:10:49]** ya mamita

**[01:10:50]** mañana

**[01:10:54]** sí, mamita

**[01:10:56]** pásale, pásale

**[01:10:57]** ya mamita

**[01:10:59]** ya

**[01:11:00]** mira

**[01:11:03]** el

**[01:11:05]** su foto del gato a ver te va a pasar dice

**[01:11:07]** ah sí, sí

**[01:11:08]** a ver, para ver

**[01:11:12]** ya sí papá, ya

**[01:11:14]** con la llavita voy a ver en todas las horas

**[01:11:16]** la foto

**[01:11:17]** vení, vení

**[01:11:18]** cállate temprano

**[01:11:19]** vení, vení, cállate temprano

**[01:11:20]** cállate temprano

**[01:11:21]** cállate temprano

**[01:11:22]** ya mamita

**[01:11:24]** yo chiquito

**[01:11:25]** sí

**[01:11:26]** yo sí

**[01:11:27]** sí

**[01:11:28]** este Cami está mejorcito ya papá

**[01:11:29]** sí, ya está mejorcito ya

**[01:11:30]** ah

**[01:11:31]** eh

**[01:11:39]** sí, sí Micho ahorita dice Pepe

**[01:11:42]** ya mamita

**[01:11:43]** sí

**[01:11:44]** ya

**[01:11:45]** le llama, le llama ya el Micho ya

**[01:11:47]** si no vamos a hacer teléfono malogrado acá ya

**[01:11:50]** ya

**[01:11:57]** ya mamita

**[01:11:58]** ya corto

**[01:12:00]** ya corto

**[01:12:01]** no, no, no, la que me hice un poquito estaba maldita pero ya, ya está bien

**[01:12:05]** no me pasa nada

**[01:12:06]** ya y

**[01:12:10]** hola emprendedores

**[01:12:11]** hoy tú dopera

**[01:12:12]** solo por esto

**[01:12:14]** igual y

**[01:12:15]** voy, voy al baño, voy, voy al baño

**[01:12:17]** y

**[01:12:18]** Instagram pese ahí los anuncios

**[01:12:20]** hola emprendedores

**[01:12:21]** y de la nada un jamicho

**[01:12:24]** uy

**[01:12:25]** eso no es digo

**[01:12:27]** y

**[01:12:28]** y ya pe

**[01:12:29]** la voz no era

**[01:12:32]** sí, sí, sí, sí, sí

**[01:12:34]** jeje

**[01:12:35]** jeje

**[01:12:41]** está bien Michito

**[01:12:43]** jeje

**[01:12:46]** jeje

**[01:12:47]** jeje

**[01:12:48]** no, pero también el estilo de vida Pepe

**[01:12:49]** el Pepe parece que es más

**[01:12:51]** más fraquillito, más jovencito parece, quién sabe

**[01:12:56]** no sé, pero está, está chiquito

**[01:13:10]** lo normal, lo normal estos veintidós años o no

**[01:13:15]** tengo veintiuno parece

**[01:13:18]** jeje

**[01:13:19]** tengo veintidós

**[01:13:20]** sí, pero tengo veintidós años

**[01:13:22]** mmm

**[01:13:25]** está bien Michito

**[01:13:26]** hoy sí

**[01:13:28]** sí

**[01:13:30]** sí

**[01:13:31]** sí

**[01:13:33]** en un ratito

**[01:13:34]** siete semanas algo le llevaría, le llevaría

**[01:13:37]** ya, ya veremos Michito, ya veremos, seguimos, seguimos

**[01:13:42]** seguimos

**[01:13:43]** ya ver

**[01:13:44]** bueno, eso es lo que tienes ahorita lo, lo modificarás, ¿no?

**[01:13:48]** ya, ya habrá oportunidad

**[01:14:22]** ya habrá chance

**[01:14:27]** te

**[01:14:48]** me gusta más carga esquelética

**[01:15:11]** carga esquelética se llama

**[01:15:15]** así se llama, búscale

**[01:15:20]** venga pues

**[01:15:30]** ahí está eso, justlo que es

**[01:15:31]** ahí está eso, justlo que has visto ahorita

**[01:15:33]** lo que has visto así como carga

**[01:15:36]** ah

**[01:15:38]** no, entra todo, entra todo, entra todo, todo, todo lo que dice

**[01:15:41]** ahí está eso, eso

**[01:15:43]** eso se llama carga esquelética

**[01:15:46]** no, no, no

**[01:15:56]** no, o sea, puedes mostrar eso perfecto en algunas cosas, por ejemplo, al llegar a la primera vez a la página

**[01:16:03]** pero en general para

**[01:16:05]** cambiarme

**[01:16:06]** esquelético, loco, esquelético

**[01:16:09]** oye, un par de consultas, Jami

**[01:16:21]** ¿tú qué utilizas?

**[01:16:23]** ¿opus?

**[01:16:24]** sí, sí, puro opus

**[01:16:43]** sí, sí, lo reviento todo

**[01:16:45]** pero eso es cuando quieres hacer un modo agéntico

**[01:16:48]** cuando quieres desplegar agentes, por ejemplo, para revisar distintos módulos a la vez

**[01:16:53]** o hacer tu copilación de edad

**[01:16:56]** no sé ya, pero

**[01:16:58]** con tareas cotidianas el opus 5 está más que suficiente

**[01:17:02]** no, tranquilo, las semanas pasadas he estado rindiendo, ¿ah?

**[01:17:21]** no, no, no, no, no, no, las semanas pasadas no

**[01:17:28]** las semanas pasadas no

**[01:17:30]** semanas pasadas he estado

**[01:17:32]** o sea, hace tres semanas sí

**[01:17:34]** pero las dos semanas anteriores no

**[01:17:36]** yo he usado el pico de

**[01:17:40]** todo lo que sobraba

**[01:17:43]** lo he utilizado sábado y domingo

**[01:17:45]** pero he estado re contrarracionado, Mechito

**[01:17:47]** no te preocupes de eso

**[01:17:49]** métele puncha nomás

**[01:17:52]** ese es el foco

**[01:17:53]** ya, entonces, ¿qué te iba a decir?

**[01:17:55]** yo creo que este tema de estadísticas, manéjalo después

**[01:18:32]** inclusive, que eso ya déjamelo en mi cancha

**[01:18:36]** lo que me importa más que nada es que

**[01:18:38]** hagas el

**[01:18:41]** el secuencial de preguntas

**[01:18:43]** y ármate un flujo de trabajo

**[01:18:54]** o sea, un flujo de trabajo

**[01:18:56]** para nosotros

**[01:18:58]** desde la base de preguntas

**[01:19:00]** hasta las preguntas ya dentro del sistema

**[01:19:03]** eso que lo tengas bien mapeadito o no

**[01:19:06]** o sea, yo te paso las preguntas

**[01:19:08]** al toque

**[01:19:10]** pasas por ese flujo de trabajo

**[01:19:12]** y lo llevas adentro de la aplicación

**[01:19:36]** no sé cómo cambiar

**[01:19:38]** ¿cómo vas con la alergia, loco?

**[01:19:56]** humedad

**[01:20:08]** sí, está bien

**[01:20:14]** está bien, está bien

**[01:20:18]** no, sí, yo notaba ahorita

**[01:20:20]** la reunión no ha estado nada ni una vez

**[01:20:22]** es algo bueno

**[01:20:35]** está bien, eso es

**[01:20:53]** está bonito mucho, me alegro

**[01:20:55]** me alegro bastante de eso

**[01:21:01]** está bien

**[01:21:03]** es

**[01:21:15]** con todos sus cornes

**[01:22:30]** ya

**[01:22:45]** sí, sí, sí, fijo

**[01:23:08]** no, llámale

**[01:23:10]** ahora sí vamos a pensar bien el nombre

**[01:23:12]** llámale

**[01:23:24]** no, no, tiene que ser de otra forma

**[01:23:26]** espérate, voy a entrar a otro lingo

**[01:23:30]** ¿para qué matarme si acá tengo el rey?

**[01:23:34]** responde nueve preguntas cortas

**[01:23:41]** primero le dices

**[01:23:45]** y le dices, no, no

**[01:23:48]** un doblecito, un doblecito, por favor

**[01:24:29]** usa

**[01:24:32]** no, pero no pongas eso, no pongas eso

**[01:24:34]** todavía, es difícil

**[01:25:16]** ah, dios mío

**[01:25:21]** ay, el dolingo de miércoles

**[01:26:28]** tal vez, no sabía que ahora el dolingo me pide

**[01:26:31]** un par de preguntas antes de empezar

**[01:26:38]** un día de racha, un día de racha

**[01:26:49]** ya, loco, déjame, déjame ver cómo es un minuto

**[01:26:57]** ya, ya, ya

**[01:27:09]** ¿cursos?

**[01:27:18]** ponle

**[01:27:20]** sí, ya estoy, estoy dolingo, estoy pensando ahora sí

**[01:27:23]** a ver

**[01:27:27]** sí, solo dos, tres

**[01:27:37]** ya, acá

**[01:28:19]** ya, acá

**[01:28:20]** déjalo para el final, inicio

**[01:29:08]** ya, pero no, no, no, no, no, o sea

**[01:29:10]** a ver, que completa el cien por ciento no le va a decir el uno que ya aprobó

**[01:29:16]** o sea, tiene que ser algo infinito, por así decirlo

**[01:29:19]** sí, alguna métrica

**[01:29:30]** sí, alguna métrica interesante

**[01:29:33]** porque no, no es el, completas todos los temas

**[01:29:36]** y ya, no llegué, empezaste

**[01:29:39]** no, no, no, tienes que reiterar, reiterar, reiterar, reiterar

**[01:29:45]** ahí te inspiras

**[01:29:52]** puedes, puedes poner nivel uno, nivel dos, nivel tres

**[01:29:55]** no, pero, puta, yuca

**[01:29:57]** no, no hagas eso

**[01:30:56]** ya es

**[01:30:57]** ya, entonces, ¿qué hubo el ex, qué hubo el ex?

**[01:31:10]** digo, el mismo

**[01:31:12]** no, no, no, es que no, no la pienso mucho

**[01:31:15]** me parece excelente, excelente

**[01:31:17]** ver este, inclusive, este, el indicador que sea ahí cada uno

**[01:31:23]** para cada curso pones el, la tabla de puntuación, ya está

**[01:31:32]** sí, suficiente con eso

**[01:31:36]** mayor cantidad de preguntas correctas, ¿no?

**[01:32:36]** ah, no, no, no, pero yo entendí

**[01:32:39]** este, o sea, tienes el banco de preguntas por tema

**[01:32:44]** y ya random, ¿no? random

**[01:32:46]** o sea, que te vote de manera aleatoria

**[01:32:50]** del tema, del tema, del tema

**[01:33:01]** ya, cada curso tiene diez temas

**[01:33:09]** en cada tema tenemos como, no sé

**[01:33:12]** cien preguntas por tema

**[01:33:14]** ajá, ya, entonces que vayas sacando randoms

**[01:33:18]** pero como, como del Dota, pues, o sea

**[01:33:20]** sacas, sacas un Dota 4

**[01:33:22]** los siguientes ya no te va a tocar eso

**[01:33:24]** te va a tocar un random de los que van quedando

**[01:33:27]** una vez que termines las cien preguntas

**[01:33:34]** se refresca, güey

**[01:33:35]** ya, y nosotros nos damos cuenta, ¿no?

**[01:33:39]** si alguien, si están llegando al tope de preguntas

**[01:33:41]** están que repiten las preguntas

**[01:33:43]** ya les metemos más preguntas

**[01:33:45]** frescas

**[01:33:46]** no, porque eso es, güey

**[01:33:57]** no, no, no, no, no, no, no

**[01:34:17]** estamos agregando un concepto que no existe

**[01:34:19]** y nos va a complicar

**[01:34:20]** solo hay una, hay una forma de estudiar

**[01:34:22]** entrar al curso y continuar el historial

**[01:34:25]** o, o sea, miren

**[01:34:27]** yo estudio el tema 1, 2, 3, 4

**[01:34:30]** y lo dejo ahí

**[01:34:31]** continúo 5, 6, otro día

**[01:34:33]** 7, 8, otro día, y así

**[01:34:35]** pero no, no, no es que un test me plantea

**[01:34:37]** del 1 al 5, luego del 6 al 10

**[01:34:39]** no, no, no

**[01:34:40]** es todo secuencial

**[01:34:41]** y a la hora que yo quiera

**[01:34:43]** o sea, es un solo test

**[01:34:45]** del 1 al 10, por así decirlo

**[01:34:46]** ajá, ajá

**[01:35:06]** ¿cómo examina?

**[01:35:22]** lo que va a utilizar el alumno

**[01:35:23]** y a lo que va a entrar el alumno

**[01:35:44]** no, no, mucho

**[01:35:46]** mucho, loco

**[01:35:48]** entonces

**[01:36:03]** no, no, no, no

**[01:36:05]** mira, yo te planteo algo mejor

**[01:36:07]** que es más intuitivo

**[01:36:08]** es simplemente

**[01:36:09]** entra al curso, le sale el test

**[01:36:10]** punto

**[01:36:11]** y arriba tiene tres rayitas o tres puntitos

**[01:36:13]** que diga

**[01:36:14]** elegir curso o todo, ¿no?

**[01:36:24]** no, no, no

**[01:36:25]** ya, pero es que

**[01:36:27]** me estás mezclando cosas

**[01:36:28]** primero

**[01:36:29]** ya, ya

**[01:36:38]** pero es que

**[01:36:39]** cerremos el estudio de un curso

**[01:36:41]** y luego hagamos el mix

**[01:36:43]** ¿cómo va a ser el frontend

**[01:36:45]** para estos exámenes?

**[01:36:47]** yo opino

**[01:36:48]** a ver, tú me corriges si estoy mal

**[01:36:50]** entras a aritmética

**[01:36:51]** y si entras por primera vez

**[01:36:53]** entras directamente a las preguntas

**[01:36:55]** o sea, te sale una pregunta

**[01:36:57]** directo

**[01:36:59]** ya, no te digo que no va a ir

**[01:37:13]** dentro de la aplicación

**[01:37:14]** sino solo te digo que

**[01:37:17]** para ingresar al test

**[01:37:20]** que sea rápido

**[01:37:21]** te sale la pregunta

**[01:37:24]** la pregunta

**[01:37:28]** no, no, un botón más

**[01:37:31]** no, de frente, la pregunta

**[01:37:32]** ya está

**[01:37:33]** y arriba

**[01:37:34]** ¿por qué?

**[01:37:38]** ¿cómo otra opción?

**[01:37:42]** no, no, no

**[01:37:43]** es que, mira, a ver

**[01:37:44]** tu estudio es secuencia del 1 al 10

**[01:37:46]** si entras por primera vez

**[01:37:47]** entras al 1

**[01:37:49]** no, no, no, no, no

**[01:37:54]** es que no

**[01:37:55]** pues no, no vas a ser un campus virtual

**[01:37:57]** estoy hablando más como que duolingo

**[01:37:58]** entras

**[01:37:59]** directo a aritmética

**[01:38:00]** te sale la pregunta

**[01:38:01]** ahora

**[01:38:02]** tú quieres ver otras cosas

**[01:38:04]** por ejemplo un pdf

**[01:38:05]** para yo consultar algo

**[01:38:06]** arriba

**[01:38:07]** arriba, arriba

**[01:38:08]** tiene ver recursos

**[01:38:10]** seleccionas ver recursos

**[01:38:13]** te sale el pdf del tema

**[01:38:15]** que estás realizando la pregunta

**[01:38:18]** ya otro botón que diga cambiar tema

**[01:38:22]** listo

**[01:38:23]** cambiar tema de estudio

**[01:38:24]** listo

**[01:38:25]** y ahí seleccionas del 1 al 10

**[01:38:27]** el tema que quieres

**[01:38:28]** listo

**[01:38:29]** listo

**[01:38:30]** está, pero es

**[01:38:31]** no, no, no, no, no

**[01:38:38]** no, no, no, no, no

**[01:38:39]** es que, el

**[01:38:40]** o sea esa pestaña que esté dentro del botón

**[01:38:43]** pero lo primero que quiero ver una vez

**[01:38:54]** no, son muchos clics, loco

**[01:38:56]** o sea, yo necesito que entre

**[01:38:59]** mira, entra en la aplicación

**[01:39:01]** entre cursos

**[01:39:02]** entre quiero estudiar aritmética

**[01:39:04]** listo, me sale la pregunta de aritmética

**[01:39:05]** listo

**[01:39:07]** resuelvo, resuelvo, resuelvo

**[01:39:08]** claro, claro

**[01:39:11]** Y me sale la pregunta

**[01:39:12]** No, no, esos dos botones es la diferencia, loco

**[01:39:18]** No

**[01:39:29]** No, no, no, no, no

**[01:39:32]** Espera, espera, espera

**[01:39:33]** Ajá

**[01:39:39]** Ajá

**[01:39:42]** Ajá

**[01:39:55]** Ajá

**[01:39:56]** Ajá

**[01:39:56]** Ya, estamos bien

**[01:39:57]** Ya, tabla, tabla

**[01:39:59]** Ya

**[01:40:03]** Vamos a llegar a un punto intermedio

**[01:40:06]** Que sea dos

**[01:40:07]** Dos botones

**[01:40:09]** Clase y test

**[01:40:11]** Clase y test

**[01:40:12]** Ya, ya, por eso

**[01:40:16]** Por eso, ya, clase y test

**[01:40:18]** Está bien, está bien

**[01:40:18]** Estoy, estoy cediendo

**[01:40:19]** Clase y prueba

**[01:40:21]** Ya, espérate

**[01:40:23]** Sí, sí, sí

**[01:40:28]** Clase uno, iniciar test

**[01:40:30]** Está bien

**[01:40:42]** Presionar al alumno

**[01:40:43]** Estrés mis pelotas

**[01:40:45]** Me lo vas a agradecer con ingreso

**[01:40:48]** Marica, así le voy a decir

**[01:40:50]** Ajá, ya, ya me lo imaginé ya

**[01:41:03]** Clase, nada más

**[01:41:07]** Prueba

**[01:41:11]** Ya, al costado

**[01:41:12]** No, no, espera, espera

**[01:41:13]** Al costado, elegir tema

**[01:41:15]** Prueba

**[01:41:16]** Ahí, del mismo botón

**[01:41:17]** Solo que un seleccionable

**[01:41:19]** Prueba, elegir tema

**[01:41:20]** Tema, listo

**[01:41:26]** Ahora, si es que cliqueas

**[01:41:28]** Si es que cliqueas sin escoger tema

**[01:41:29]** Hay una pequeña, sí

**[01:41:31]** Este

**[01:41:31]** O sea, por defecto que esté en secuencial

**[01:41:34]** O sea, el secuencial es lo que hemos dicho, ¿no?

**[01:41:39]** Continuar, un, dos, tres, cuatro

**[01:41:41]** ¿Me entiendes?

**[01:41:44]** No sé

**[01:41:44]** Ya, a ver

**[01:41:46]** El test que hemos planteado

**[01:41:49]** Es del uno al diez

**[01:41:50]** De cada uno de los diez temas

**[01:41:52]** Es secuencial

**[01:41:53]** Entonces, si le da click

**[01:41:56]** Ahí

**[01:41:56]** Eh

**[01:41:58]** Así, tal cual

**[01:42:00]** Pues, continúa la secuencia, ¿no?

**[01:42:02]** Si empieza de cero

**[01:42:03]** O sea, si es primera vez

**[01:42:04]** Empieza el tema uno

**[01:42:06]** Si ya tiene un avance

**[01:42:07]** Empieza el tema que se ha quedado

**[01:42:09]** Listo, así, tal cual

**[01:42:12]** O clase o estudio

**[01:42:14]** Puedes ponerle estudiar

**[01:42:16]** Clase y estudio

**[01:42:20]** No, no, no, no

**[01:42:24]** Clase y estudio, nada más

**[01:42:25]** O sea, son solo dos botones

**[01:42:26]** Clase y prueba o clase y estudio

**[01:42:28]** Ya, clase y estudio

**[01:42:34]** Clase y estudio

**[01:42:35]** Listo

**[01:42:36]** No, es menos

**[01:42:46]** Es mucho

**[01:42:47]** Mucho menos

**[01:42:49]** Sí, pero por defecto

**[01:42:55]** Puedes elegir sin tema

**[01:42:56]** O sea, prueba

**[01:42:57]** No, no, no, no, no, no, no, no

**[01:43:03]** Estamos mezclando ya varias cosas

**[01:43:05]** Hay dos tipos

**[01:43:06]** Hay dos tipos de

**[01:43:07]** De, no, clase y estudio

**[01:43:10]** No, no, no, clase y estudio

**[01:43:11]** No entiendo

**[01:43:11]** Ya, bueno, puede ser, ¿no?

**[01:43:14]** Está bien, está bien

**[01:43:15]** Prueba

**[01:43:16]** Que sea

**[01:43:17]** Si le doy clic a prueba

**[01:43:19]** Es lo que hemos pensado

**[01:43:21]** Es secuencial

**[01:43:22]** Si yo comienzo

**[01:43:23]** Es el tema uno

**[01:43:25]** Si yo ya he avanzado

**[01:43:26]** Ese tema que fucking he avanzado

**[01:43:28]** Ahora, el seleccionable

**[01:43:30]** Lo estoy poniendo

**[01:43:31]** Para aquel alumno

**[01:43:32]** Que es más inteligente

**[01:43:33]** Y sepa que quiere estudiar

**[01:43:35]** Un solo tema

**[01:43:36]** Y cuando selecciona el tema

**[01:43:39]** Ya no va a irse a ninguna otra pregunta

**[01:43:41]** O sea, no va a ser secuencial, ¿no?

**[01:43:43]** Si no, se va a tirar

**[01:43:44]** Las cien preguntas de ese tema

**[01:43:45]** Entonces

**[01:43:50]** No cien preguntas

**[01:43:56]** Me refiero a que siempre va a estar

**[01:43:58]** Dándole ese tema nomás

**[01:44:00]** O sea, yo digo

**[01:44:00]** Puta, yo estoy

**[01:44:01]** En polígonos

**[01:44:03]** Entonces yo selecciono geometría

**[01:44:06]** Prueba, polígonos

**[01:44:07]** Y me lanza

**[01:44:08]** Una pregunta, polígonos

**[01:44:10]** La respondo bien

**[01:44:11]** Otra pregunta, polígonos

**[01:44:12]** La respondo bien

**[01:44:12]** Así hasta que yo me arde

**[01:44:14]** O sea, es como que

**[01:44:17]** Enfocado, enfocado, enfocado

**[01:44:19]** En esa

**[01:44:19]** En ese tema

**[01:44:20]** ¿Por qué?

**[01:44:21]** Porque del otro

**[01:44:22]** El secuencial

**[01:44:23]** A las tres preguntas correctas

**[01:44:25]** Va

**[01:44:25]** Va a pasar

**[01:44:26]** Va a pasarme al siguiente

**[01:44:27]** Tema uno

**[01:44:38]** O tema

**[01:44:39]** Tema uno

**[01:44:40]** Tal

**[01:44:41]** O

**[01:44:41]** Ajá

**[01:44:45]** Ajá

**[01:44:48]** Mira, mira

**[01:44:49]** Estoy pensando también

**[01:44:50]** En ese, en ese desplegable

**[01:44:51]** Este

**[01:44:52]** No sé

**[01:44:53]** ¿Cómo se llamaría?

**[01:44:54]** Modalidad

**[01:44:54]** O modo

**[01:44:55]** Modo secuencial

**[01:44:57]** O modo personalizado

**[01:44:59]** Algo así, ¿no?

**[01:45:00]** Modo secuencial

**[01:45:00]** Y modo personalizado

**[01:45:01]** Ajá

**[01:45:04]** Prueba

**[01:45:04]** Modo secuencial

**[01:45:05]** Personalizado

**[01:45:09]** Escoge un tema

**[01:45:11]** Para darle foco

**[01:45:12]** Darle foco

**[01:45:13]** A tu aprendizaje

**[01:45:14]** En este tema

**[01:45:14]** Listo

**[01:45:16]** Cerramos

**[01:45:18]** Sí, vamos

**[01:45:21]** Ya no, no sé

**[01:45:23]** Cosa

**[01:45:23]** No, no entiendo

**[01:45:24]** No sé

**[01:45:25]** Si no entiendo

**[01:45:25]** Yo voy a seguir

**[01:45:26]** Ya cuando estamos claros

**[01:45:27]** Estamos claros

**[01:45:33]** Ya

**[01:45:33]** De, de, de este alcance

**[01:45:35]** A lo que mejore

**[01:45:36]** Si te alcanza el tiempo

**[01:45:38]** Bienvenido

**[01:45:39]** Loco

**[01:45:39]** De ahí

**[01:45:39]** Ya no, no

**[01:45:40]** No me quejo

**[01:45:41]** Pues si hay

**[01:45:42]** No sé

**[01:45:42]** Ves, pones

**[01:45:43]** Este

**[01:45:44]** No, pero, pero

**[01:45:45]** Es algo que sí

**[01:45:46]** Sí vamos a tener que poner

**[01:45:47]** El

**[01:45:48]** ¿Cómo se llama?

**[01:45:51]** El

**[01:45:51]** El

**[01:45:52]** A ver, a ver

**[01:45:57]** Gracias

**[01:45:59]** Ah, ya

**[01:46:01]** El tema variado

**[01:46:02]** Sí, sí

**[01:46:03]** Eso es pues

**[01:46:03]** Eso por fuera

**[01:46:04]** Eso por fuera

**[01:46:05]** Sí, pero

**[01:46:22]** Sí, sí, sí

**[01:46:23]** Correcto, correcto

**[01:46:24]** Y utiliza ya el mismo módulo

**[01:46:26]** O sea

**[01:46:26]** Ese módulo de lanzar de preguntas

**[01:46:28]** Tienes que hacerlo genérico

**[01:46:30]** Para que

**[01:46:32]** Se alimente de preguntas

**[01:46:33]** Y puedas sacar bien

**[01:46:34]** O sea

**[01:46:35]** Esa lógica

**[01:46:36]** En el backend

**[01:46:37]** Nos va a ayudar

**[01:46:38]** Para muchas cosas

**[01:46:39]** Mira

**[01:46:55]** El enfoco

**[01:46:56]** Enfoco

**[01:46:56]** O, mire, mire

**[01:46:57]** En tema

**[01:46:58]** Este

**[01:46:58]** Secuencial

**[01:46:59]** Y tema

**[01:46:59]** Foco

**[01:47:00]** Que no

**[01:47:00]** No solo seleccione

**[01:47:02]** Un

**[01:47:02]** Uno

**[01:47:03]** Sino que puedes seleccionar

**[01:47:04]** Una

**[01:47:05]** Ahí sí puedes hacer

**[01:47:06]** Un model

**[01:47:07]** Un model

**[01:47:08]** Una patadita

**[01:47:08]** Que diga

**[01:47:09]** Seleccione los temas

**[01:47:11]** Que quiera profundizar

**[01:47:12]** De uno a más

**[01:47:14]** Y él mismo selecciona

**[01:47:15]** ¿No?

**[01:47:16]** Este

**[01:47:16]** Este

**[01:47:18]** Un, dos, tres

**[01:47:18]** O uno, cinco

**[01:47:19]** Ya

**[01:47:21]** Y mira

**[01:47:22]** Si selecciona

**[01:47:23]** Uno solo

**[01:47:23]** Si selecciona uno solo

**[01:47:25]** Que le dé

**[01:47:26]** Pum

**[01:47:26]** Paga

**[01:47:26]** Y el quiz

**[01:47:28]** Es lo mismo

**[01:47:29]** O sea

**[01:47:30]** Es lo mismo

**[01:47:30]** Seleccione los cursos

**[01:47:32]** Que quiere

**[01:47:32]** Y seleccione

**[01:47:33]** La cantidad de preguntas

**[01:47:34]** Y seleccione

**[01:47:35]** No, no

**[01:47:37]** La cantidad de preguntas

**[01:47:37]** Totales

**[01:47:38]** La cantidad de preguntas

**[01:47:39]** Totales

**[01:47:40]** Y los cursos

**[01:47:41]** Que quieres

**[01:47:42]** Punto

**[01:47:42]** Ya está

**[01:47:43]** Si te va a armar el quiz

**[01:47:43]** Uno

**[01:47:46]** Mucho, mucho, mucho

**[01:47:47]** Es que

**[01:47:48]** El alumno

**[01:47:49]** No se va a dedicar

**[01:47:50]** A personal

**[01:47:50]** Lánzale

**[01:47:52]** De aleatorio

**[01:47:53]** Total

**[01:47:53]** Quiz

**[01:47:54]** Solo dile

**[01:47:56]** Qué cursos

**[01:47:57]** Y cuántas preguntas

**[01:47:59]** Nada más

**[01:47:59]** Bórale temas

**[01:48:01]** En el quiz

**[01:48:02]** Es

**[01:48:02]** Ya bueno

**[01:48:18]** No sé eso

**[01:48:18]** Si ya

**[01:48:19]** Pues

**[01:48:23]** Tienes

**[01:48:50]** Ahí

**[01:48:50]** 20

**[01:48:52]** Ya bueno

**[01:49:26]** Loco

**[01:49:26]** Eso ya es tu show

**[01:49:27]** No, ¿por qué no?

**[01:49:38]** Ah, o sea

**[01:49:38]** Desplegables

**[01:49:39]** Ya bueno

**[01:49:41]** Si quieres

**[01:49:42]** Ahí

**[01:49:42]** Si quieres

**[01:49:43]** Pero

**[01:49:45]** Yo

**[01:49:47]** Lo que haría más fácil

**[01:49:48]** Es poner

**[01:49:49]** Este

**[01:49:50]** Quizzes

**[01:49:51]** Y tres

**[01:49:51]** Tipo tres botones

**[01:49:53]** Como

**[01:49:54]** Eh

**[01:49:55]** Arriba, ¿no?

**[01:49:57]** O sea

**[01:49:57]** Al margen

**[01:49:57]** De esos

**[01:49:58]** De esos

**[01:49:58]** Cursos personalizados

**[01:49:59]** Pones una limita

**[01:50:00]** Y arriba pones

**[01:50:01]** Eh

**[01:50:02]** Foco matemáticas

**[01:50:03]** Foco

**[01:50:04]** Este lenguaje

**[01:50:04]** O foco

**[01:50:05]** Eh

**[01:50:06]** Ciencias

**[01:50:06]** Así

**[01:50:06]** Grandes grupos

**[01:50:07]** Y ya te prepara un quiz

**[01:50:09]** Con tantas preguntas

**[01:50:10]** De ese foco

**[01:50:11]** Punto

**[01:50:12]** Y luego abajo

**[01:50:16]** Que diga

**[01:50:17]** Ajá

**[01:50:17]** Tipo de

**[01:50:18]** Fals correcto

**[01:50:19]** Y luego

**[01:50:20]** Ajá

**[01:50:21]** Foco tal

**[01:50:22]** Foco tal

**[01:50:22]** Y luego abajo

**[01:50:23]** Este

**[01:50:23]** Personalizado

**[01:50:25]** 100% personalizado

**[01:50:26]** Y ahí

**[01:50:27]** Las 20 preguntas

**[01:50:28]** Las 20

**[01:50:28]** 20 cursos

**[01:50:30]** Ya pero

**[01:50:35]** Ten en cuenta

**[01:50:35]** Que este motor

**[01:50:36]** Es secundario

**[01:50:37]** El motor principal

**[01:50:38]** Es el

**[01:50:39]** Hacedor de preguntas

**[01:50:40]** El motor de preguntas

**[01:50:47]** O sea que

**[01:50:48]** Que me lanza una pregunta

**[01:50:50]** Desde una base de datos

**[01:50:51]** Eso es lo que necesito

**[01:50:52]** Y a todo lo demás

**[01:50:53]** Va a ser

**[01:50:54]** Este

**[01:50:54]** Eh

**[01:50:55]** Ya

**[01:50:55]** Extra

**[01:50:57]** ¿No?

**[01:51:05]** Y listo

**[01:51:06]** O sea

**[01:51:06]** Resultado de feedback

**[01:51:10]** No

**[01:51:17]** No

**[01:51:19]** Sea

**[01:51:20]** Sí, sí, sí

**[01:51:21]** Pero

**[01:51:21]** Habíamos dicho algo más

**[01:51:23]** Era

**[01:51:25]** Claro

**[01:51:25]** Por tema

**[01:51:26]** Por tema

**[01:51:27]** Prefix

**[01:51:28]** Preguntas

**[01:51:28]** Correctas

**[01:51:30]** Incorrectas

**[01:51:31]** En blanco

**[01:51:32]** Y

**[01:51:34]** Tiempo promedio

**[01:51:36]** Por pregunta

**[01:51:37]** Y tiempo

**[01:51:38]** Esperado

**[01:51:39]** Por pregunta

**[01:51:40]** Ya

**[01:51:47]** Eso es lo que

**[01:51:48]** Necesita un resultado

**[01:51:49]** Ya

**[01:51:50]** Ahora

**[01:51:51]** El sol

**[01:51:51]** La solución

**[01:51:53]** De cada pregunta

**[01:51:54]** Sería

**[01:51:56]** Bacán

**[01:51:58]** ¿No?

**[01:51:59]** Tener el solucionario

**[01:52:00]** Ahí

**[01:52:01]** Al final

**[01:52:02]** Ya

**[01:52:16]** Ya también

**[01:52:17]** Entonces

**[01:52:17]** Hay que tener

**[01:52:17]** Entonces

**[01:52:17]** Hay que tener

**[01:52:18]** Al final del test

**[01:52:19]** Ya

**[01:52:22]** O sea

**[01:52:22]** Del test

**[01:52:23]** Yo entiendo

**[01:52:24]** Porque son 100 preguntas

**[01:52:25]** Y bueno

**[01:52:25]** Ahí como que

**[01:52:26]** Ya sabes

**[01:52:27]** Cuando vas a terminar

**[01:52:28]** Pero ahora del secuencial

**[01:52:29]** O sea

**[01:52:32]** Del secuencial

**[01:52:34]** Son los 10 temas

**[01:52:35]** Que no los va a hacer al tirón

**[01:52:36]** Bueno

**[01:52:36]** Como

**[01:52:41]** ¿En qué momento

**[01:52:42]** Le mandamos al solucionario?

**[01:52:44]** Es bueno que vea el solucionario

**[01:52:45]** En cada pregunta

**[01:52:46]** Le va a ganar el bicho

**[01:52:47]** En QLX

**[01:52:48]** ¿Cómo era?

**[01:52:48]** ¿Podrías ver el solucionario

**[01:52:49]** De todas las preguntas?

**[01:52:56]** Solo se veía al final

**[01:52:57]** Ya

**[01:53:02]** Eso

**[01:53:03]** Yo quiero que se vea el solucionario

**[01:53:04]** Pero no durante

**[01:53:05]** De lo que está haciendo

**[01:53:06]** O sea

**[01:53:06]** Que sea como que

**[01:53:07]** Al final

**[01:53:08]** ¿No?

**[01:53:08]** En un periodo de

**[01:53:09]** De

**[01:53:10]** Retroalimentación

**[01:53:12]** Y corrección del alumno

**[01:53:13]** Ahora

**[01:53:13]** ¿Dónde podemos

**[01:53:14]** Este

**[01:53:15]** Ya

**[01:53:17]** Eso

**[01:53:17]** Eso

**[01:53:17]** Eso lo tengo bien mapeado

**[01:53:19]** Cuando hemos hecho el quiz

**[01:53:21]** O sea

**[01:53:21]** Un quiz de tantas preguntas

**[01:53:22]** Le hemos preguntado

**[01:53:23]** Ya bacán

**[01:53:24]** Pero ahora

**[01:53:25]** En el secuencial

**[01:53:26]** O sea

**[01:53:26]** En el módulo secuencial

**[01:53:28]** ¿Cómo podemos poner el feedback?

**[01:53:51]** Fijas

**[01:53:51]** Vamos a hacer

**[01:53:56]** Ya vamos a eliminar

**[01:53:57]** Entonces lo de

**[01:53:57]** 3 al hilo

**[01:53:58]** No, no, no

**[01:54:07]** Espera

**[01:54:08]** Vamos a

**[01:54:08]** Hablando de cosas

**[01:54:08]** Cuando él escoge el tema

**[01:54:10]** En foco

**[01:54:11]** Ahí ya es fácil

**[01:54:12]** ¿No?

**[01:54:12]** Porque es

**[01:54:13]** Digamos

**[01:54:13]** Ya a ver

**[01:54:17]** Espera

**[01:54:18]** Vamos a

**[01:54:18]** Este curso

**[01:54:21]** Ya

**[01:54:21]** Ya

**[01:54:23]** Esto lo tenemos mapeado

**[01:54:24]** Esto lo tenemos mapeado

**[01:54:25]** Ya está mapeado

**[01:54:26]** Ya

**[01:54:27]** Ahora vamos a ir

**[01:54:28]** A curso individual

**[01:54:29]** Tenemos dos formas

**[01:54:30]** Foco y secuencial

**[01:54:31]** Vamos a enfocarnos

**[01:54:32]** En secuencial

**[01:54:33]** Secuencial

**[01:54:34]** Hemos dicho

**[01:54:35]** 3 al hilo

**[01:54:35]** ¿Está bien?

**[01:54:36]** ¿Está mal?

**[01:54:56]** No, no, no

**[01:54:56]** Otra vez

**[01:54:57]** Otra vez

**[01:54:57]** Otra vez

**[01:54:57]** ¿Por qué 10?

**[01:55:10]** Ya pero

**[01:55:10]** O sea

**[01:55:11]** Pero no otra vez

**[01:55:12]** Es una nueva lógica

**[01:55:13]** Entonces

**[01:55:14]** O sea

**[01:55:14]** Ya no va a ser 3 al hilo

**[01:55:15]** No, no entiendo

**[01:55:41]** Ya

**[01:55:48]** Eso ya

**[01:55:49]** Ya

**[01:55:49]** Está retrocediendo

**[01:55:50]** Al año 0

**[01:55:51]** Estamos

**[01:55:51]** Hemos entrado ahí

**[01:55:53]** A clase

**[01:55:53]** Curso

**[01:55:54]** Ahí

**[01:55:54]** Ya

**[01:55:55]** Ha entrado la pregunta 1

**[01:55:57]** Ha entrado ahí

**[01:55:58]** Ya

**[01:56:04]** Ahí está

**[01:56:04]** Ahí estamos

**[01:56:05]** Ya

**[01:56:06]** Primera vez

**[01:56:07]** Ya

**[01:56:19]** Listo

**[01:56:19]** Estamos bien

**[01:56:20]** No

**[01:56:27]** Porque

**[01:56:27]** Ahí es otra

**[01:56:28]** No entiendo

**[01:56:29]** O sea

**[01:56:29]** Ese 8 de 10

**[01:56:30]** Ya es un nuevo criterio

**[01:56:31]** Entonces

**[01:56:31]** No

**[01:56:34]** No, no, no

**[01:56:35]** Espérate

**[01:56:35]** Al hilo

**[01:56:36]** ¿Sabes qué?

**[01:56:38]** Teníamos 3 al hilo

**[01:56:39]** Para secuenciarlo

**[01:56:40]** O sea

**[01:56:40]** Para que pasen al tema 2

**[01:56:42]** Era

**[01:56:43]** Este

**[01:56:44]** No

**[01:56:47]** Ya me perdiste

**[01:56:48]** Deja de cambiar de pestañas

**[01:56:50]** No entiendo

**[01:56:50]** Ajá

**[01:57:03]** Bacán

**[01:57:09]** Ya está

**[01:57:09]** Ya es 8

**[01:57:10]** Sí

**[01:57:12]** Correcto

**[01:57:21]** Ya

**[01:57:22]** Entonces

**[01:57:22]** Podemos aumentar

**[01:57:23]** 5 al hilo

**[01:57:25]** Pero y si hace 7

**[01:57:36]** 7

**[01:57:36]** 7

**[01:57:36]** Se va a aburrir

**[01:57:37]** Prefiero que tenga la mente

**[01:57:38]** Bien

**[01:57:39]** Concentrada

**[01:57:40]** ¿Verdad?

**[01:57:41]** O sea

**[01:57:41]** Voy a premiar la perfección

**[01:57:43]** Ya

**[01:57:44]** 3 al hilo

**[01:57:45]** Puede ser que no

**[01:57:46]** No evalúe bien

**[01:57:47]** Pero entonces

**[01:57:47]** 4 al hilo

**[01:57:48]** 5 al hilo

**[01:57:54]** Pero mierda

**[01:57:55]** Era solo un número

**[01:57:59]** No importa

**[01:58:06]** No importa

**[01:58:06]** No importa

**[01:58:07]** No importa

**[01:58:10]** Porque en el examen de admisión

**[01:58:11]** Lo que importa es la certeza

**[01:58:12]** No importa la perfección

**[01:58:14]** Hacer preguntas consecutivas

**[01:58:17]** Y bien hechas

**[01:58:18]** Eso es lo que le va a dar

**[01:58:20]** El examen

**[01:58:21]** El ingreso

**[01:58:22]** Ya

**[01:58:30]** Mira

**[01:58:30]** Puedes decirle

**[01:58:31]** Cuando hace 3

**[01:58:32]** O sea

**[01:58:33]** Cuando llega

**[01:58:33]** Un umbral de preguntas

**[01:58:34]** Le puedes ayudar

**[01:58:36]** Desea saltar al tema 2

**[01:58:37]** Y reforzamos esto después

**[01:58:39]** Algo así

**[01:58:39]** ¿No?

**[01:58:40]** Un bypass

**[01:58:41]** Ya

**[01:58:41]** 5 al hilo

**[01:58:46]** 4

**[01:58:47]** 4

**[01:58:49]** Sí

**[01:58:50]** Equilibrio

**[01:58:51]** Equilibrio

**[01:58:52]** Bueno

**[01:58:54]** Ajá

**[01:58:59]** Muy muy complejo

**[01:59:20]** O sea

**[01:59:20]** Yo esto es lo que

**[01:59:21]** Estás intentando hacer

**[01:59:22]** Ponle

**[01:59:23]** No no no

**[01:59:23]** Ponle 4

**[01:59:24]** Está excelente

**[01:59:25]** No te preocupes

**[01:59:26]** Si no

**[01:59:27]** Mira

**[01:59:28]** Que cuente

**[01:59:29]** Cuántas preguntas

**[01:59:31]** Hace

**[01:59:31]** Y en cuánto

**[01:59:33]** Mira

**[01:59:34]** Que haga este cálculo

**[01:59:35]** Cada vez que comete un error

**[01:59:37]** Mira

**[01:59:38]** 1, 2, 3

**[01:59:39]** Falló

**[01:59:40]** El código se pregunta

**[01:59:41]** Escúchame

**[01:59:42]** El código se pregunta

**[01:59:43]** ¿Cuántas preguntas

**[01:59:45]** Ha hecho hasta fallar acá?

**[01:59:46]** 3

**[01:59:47]** Es menor que 12

**[01:59:49]** Continúa

**[01:59:50]** 1, 2

**[01:59:51]** Pum

**[01:59:52]** Fue la falla

**[01:59:53]** Ajá

**[01:59:54]** Un conteo global

**[01:59:55]** Pero que solo

**[01:59:56]** O sea

**[01:59:58]** Que siempre cuente

**[01:59:59]** Pero que haga efecto

**[02:00:01]** Solo cuando falla

**[02:00:02]** O sea

**[02:00:02]** Le va a mandar la

**[02:00:03]** La desea saltar

**[02:00:05]** Cuando falle

**[02:00:07]** ¿Me entiendes?

**[02:00:14]** No no no

**[02:00:14]** No no no no

**[02:00:15]** No no

**[02:00:15]** Solo preguntas

**[02:00:17]** No trates de

**[02:00:18]** De ponerle este

**[02:00:19]** Buenas malas

**[02:00:21]** Te vas a volar

**[02:00:22]** Ponle

**[02:00:22]** Número de preguntas

**[02:00:23]** Supera de

**[02:00:24]** ¿Cuántas?

**[02:00:26]** 10

**[02:00:26]** Yo creo que 10

**[02:00:27]** Por tema

**[02:00:29]** 10

**[02:00:30]** Sí

**[02:00:32]** Cuando superas

**[02:00:34]** 10 preguntas

**[02:00:34]** Te lanza el bypass

**[02:00:36]** Pero el bypass

**[02:00:37]** Mira por ejemplo

**[02:00:38]** Normal

**[02:00:42]** El bypass

**[02:00:42]** Es

**[02:00:42]** ¿Cuántas preguntas

**[02:00:43]** Va a ir paseas?

**[02:00:49]** Porque algo está fallando

**[02:00:51]** O sea

**[02:00:53]** No le digas

**[02:00:54]** No le digas que

**[02:00:56]** Si alguien está fallando

**[02:00:57]** Sinceramente

**[02:00:58]** Estás que juegas

**[02:00:59]** Ya

**[02:01:02]** Dele dos opciones

**[02:01:03]** Ver solucionario

**[02:01:04]** De preguntas anteriores

**[02:01:05]** Y

**[02:01:06]** Saltar

**[02:01:08]** Tema 1

**[02:01:09]** Y reforzarlo después

**[02:01:10]** Ya pero

**[02:01:20]** El yuca ¿no?

**[02:01:28]** Ya

**[02:01:29]** Mira

**[02:01:29]** Mira mira

**[02:01:30]** Escuchan

**[02:01:30]** No es que no va a haber

**[02:01:37]** Segunda vez quizás

**[02:01:38]** O sea

**[02:01:39]** No

**[02:01:40]** No

**[02:01:40]** , es

**[02:01:41]** Con el código

**[02:01:42]** Me parece más complejo

**[02:01:44]** Y la complicación de ahorita

**[02:01:45]** Es a nivel de estadísticas

**[02:01:47]** Que es mucho más manejable

**[02:01:50]** Ya mira

**[02:01:53]** Escúchame

**[02:01:53]** No sé si me has entendido

**[02:01:55]** Por ejemplo

**[02:01:56]** Tu umbral que sea

**[02:01:58]** 10 preguntas

**[02:01:59]** Pasa las 10 preguntas

**[02:02:01]** En el siguiente error

**[02:02:03]** Que cometa

**[02:02:04]** Posterior a las 10 preguntas hechas

**[02:02:05]** Ya le das el

**[02:02:07]** La opción de

**[02:02:09]** Bypasear

**[02:02:11]** El tema

**[02:02:11]** Correspondiente

**[02:02:12]** O

**[02:02:13]** Ver solucionario

**[02:02:14]** De esas 10 preguntas

**[02:02:17]** Sí, correcto

**[02:02:25]** Ver solucionario

**[02:02:26]** Ver solucionario

**[02:02:27]** Y abajo de ver solucionario

**[02:02:29]** Que diga

**[02:02:30]** Continuar intentando

**[02:02:32]** Las dos opciones

**[02:02:35]** Continuar intentando

**[02:02:36]** O

**[02:02:37]** Saltar al siguiente tema

**[02:02:39]** Y reforzarlo después

**[02:02:40]** Algo así

**[02:02:40]** Pero es que también

**[02:02:46]** Estamos yendo a la mala

**[02:02:48]** O sea

**[02:02:48]** Al man que falle las 10

**[02:02:50]** No va a pasar

**[02:02:51]** Igual

**[02:02:51]** Ese que falle las 10

**[02:02:53]** Pues lo siento

**[02:02:54]** Te pondré otro módulo

**[02:02:55]** Para que tú tengas tu

**[02:02:57]** Este

**[02:02:57]** Este

**[02:02:58]** Con manzanitas

**[02:02:59]** Ya te lo explico ahí

**[02:03:00]** Pero a este módulo

**[02:03:02]** Es para los que están

**[02:03:03]** Próximos a ingresar

**[02:03:04]** O sea, por ejemplo

**[02:03:05]** El que está fallando

**[02:03:06]** Poco

**[02:03:07]** Pero ya no quiere fallar nada

**[02:03:09]** O sea, vamos a premiar

**[02:03:10]** Su perfección

**[02:03:10]** O sea, hasta que no haga perfecto

**[02:03:12]** No vas a pasar

**[02:03:12]** Por así decirlo, ¿no?

**[02:03:16]** A menos que tú

**[02:03:17]** Tú mismo

**[02:03:17]** Rompeando tu orgullo

**[02:03:18]** Digas

**[02:03:19]** Este

**[02:03:20]** No, sí

**[02:03:20]** Siguiente tema

**[02:03:21]** Que es que el que

**[02:03:22]** El que de verdad va a ingresar

**[02:03:23]** Va a decir

**[02:03:23]** No, yo sigo intentando

**[02:03:25]** Y va a llegar a las 4 en hilo

**[02:03:27]** Y vamos a premiar la perfección

**[02:03:28]** No, no, no

**[02:03:33]** Pero

**[02:03:33]** No, no, no

**[02:03:34]** No puede

**[02:03:35]** O sea

**[02:03:35]** Te da el botón

**[02:03:36]** Para saltear

**[02:03:38]** Pero es

**[02:03:38]** Una acción del usuario

**[02:03:40]** Que diga

**[02:03:40]** Seguir intentando

**[02:03:42]** Y saltear tema

**[02:03:43]** No sé si me estás entendiendo

**[02:03:45]** Ves solucionario

**[02:03:55]** Y pones

**[02:03:56]** Manualmente

**[02:03:56]** Ahí dice

**[02:03:57]** Saltear tema

**[02:03:58]** O seguir intentando

**[02:03:58]** Todo es manual

**[02:04:00]** No

**[02:04:00]** No

**[02:04:00]** Automatizar

**[02:04:02]** ¿Para qué ahí?

**[02:04:14]** No, no entiendo

**[02:04:15]** Ah, chucha

**[02:04:22]** Por más que hagas

**[02:04:23]** Los 4 en hilo

**[02:04:24]** ¿Quieres seguir practicando?

**[02:04:25]** Algo así

**[02:04:26]** Ya, bacán

**[02:04:27]** Bacán

**[02:04:27]** Bacán

**[02:04:28]** Con una

**[02:04:38]** Una pestañita de excelente

**[02:04:40]** Y justo

**[02:04:40]** Aprovechas esta pestaña

**[02:04:42]** Para mostrarle las estadísticas

**[02:04:43]** Ah, bacán

**[02:04:45]** Ya está

**[02:04:46]** Ya ha solucionado

**[02:04:46]** Siguiente tema

**[02:04:49]** No, no, no

**[02:04:55]** No, no, no

**[02:04:55]** No, no, no

**[02:04:56]** O sea

**[02:04:56]** Es

**[02:04:57]** Esa pestaña que me acabas de decir

**[02:04:59]** De las estadísticas

**[02:05:00]** Donde está

**[02:05:00]** Conviviendo el siguiente

**[02:05:02]** El continuar estudiando

**[02:05:03]** Este tema

**[02:05:03]** Que sea una pantalla completa

**[02:05:05]** Es como que tus pantallas intermedias

**[02:05:07]** Van a ser tus islitas

**[02:05:10]** Ah, o

**[02:05:14]** Pasa a la isla

**[02:05:15]** Y vuelve

**[02:05:17]** Y esa isla

**[02:05:18]** Esa misma isla

**[02:05:19]** Que le salga cuando

**[02:05:20]** Salga más de 10

**[02:05:22]** 10 preguntas

**[02:05:23]** Y todavía no ha conseguido

**[02:05:24]** Pasar el tema

**[02:05:25]** Ya listo

**[02:05:30]** Cerramos

**[02:05:31]** Ahora

**[02:05:31]** Yo quiero que a mí

**[02:05:32]** Vamos a bajarle

**[02:05:33]** A 3 preguntas al hilo

**[02:05:35]** Lo óptimo

**[02:05:40]** Un estudiante

**[02:05:41]** O le ponemos

**[02:05:42]** Para que sea configurable

**[02:05:43]** De acuerdo al estudiante

**[02:05:44]** No, son unas 3 preguntas

**[02:05:45]** Déjalo, Micho

**[02:05:46]** Si vemos que todos se vacilan

**[02:05:48]** Ya le subimos a 4

**[02:05:50]** O pones al inicio

**[02:05:56]** Nivel del test

**[02:05:57]** Pasa

**[02:05:58]** Medio

**[02:05:59]** Fácil

**[02:06:00]** Y lo único que cambia

**[02:06:01]** Es el número de preguntas al hilo

**[02:06:03]** No, no, no

**[02:06:06]** 2, 3 y 5

**[02:06:07]** 2, 3, 4

**[02:06:08]** Ya, ya, acá

**[02:06:15]** Correcto, al hilo

**[02:06:20]** Sí, 3 al hilo

**[02:06:38]** Me parece que es suficiente

**[02:06:39]** Ya, bacán

**[02:06:47]** Bacán, bacán

**[02:06:48]** Es parte de

**[02:06:49]** Es parte de

**[02:06:49]** Parte de

**[02:06:51]** Sí, siempre

**[02:07:03]** Siempre, siempre

**[02:07:04]** Por más que

**[02:07:06]** Y ahora

**[02:07:10]** Aparte de

**[02:07:11]** De que

**[02:07:12]** Favorece

**[02:07:12]** Al alumno

**[02:07:13]** Te favorece

**[02:07:13]** En el código

**[02:07:14]** Pues pone siempre

**[02:07:15]** No, ya no lleva condicional

**[02:07:16]** Nada

**[02:07:16]** Simplemente

**[02:07:17]** Da solución

**[02:07:18]** Un botón

**[02:07:18]** Siempre

**[02:07:19]** Desaisla

**[02:07:19]** Ya

**[02:07:22]** Ya, yo creo que ya estamos

**[02:07:24]** Ya

**[02:07:24]** Tenemos el condicional

**[02:07:25]** Faltaría foco

**[02:07:26]** Ahora, para foco

**[02:07:28]** Hasta las 10

**[02:07:29]** Tenía otra reunión

**[02:07:29]** Pero no toca todo

**[02:07:30]** Ya

**[02:07:33]** Sí

**[02:07:35]** Eh

**[02:07:37]** Para foco

**[02:07:44]** ¿Cómo puedo hacer?

**[02:07:46]** A ver, va

**[02:07:46]** Mira

**[02:07:50]** Foco

**[02:07:51]** Cada 5 preguntas

**[02:07:52]** Que le han sido

**[02:07:53]** A la isla

**[02:07:53]** A la mierda

**[02:07:55]** Cada 5 preguntas hechas

**[02:07:58]** Lánzale a la isla

**[02:07:59]** Para que veas su avance

**[02:08:01]** Ya está

**[02:08:02]** O sea, por ejemplo

**[02:08:06]** Cada 5 preguntas

**[02:08:07]** Vas 3 de 5

**[02:08:09]** Vas 7 de 10

**[02:08:10]** Vas 17 de 20

**[02:08:12]** Muy bien

**[02:08:13]** O sea, ya con todos los mensajitos

**[02:08:14]** Mariconadas

**[02:08:15]** Pero, ¿no?

**[02:08:16]** Excelente

**[02:08:16]** Continúa

**[02:08:17]** Usted, cuidado

**[02:08:18]** Revisa el solucionario

**[02:08:20]** Algo así

**[02:08:20]** Que vaya revisando así

**[02:08:23]** Bien

**[02:08:25]** Ya

**[02:08:29]** Mueren

**[02:08:30]** También

**[02:08:30]** Hay más cosas

**[02:08:31]** Que se pueden poner

**[02:08:32]** Pero

**[02:08:32]** Suficiente

**[02:08:34]** Con eso, loco

**[02:08:40]** Sí, sí

**[02:08:41]** No, no

**[02:08:41]** Vos podés esperar un ratito

**[02:08:42]** Este

**[02:08:45]** El avance del

**[02:08:46]** Para

**[02:08:46]** Proyecto de

**[02:08:49]** Piura

**[02:08:49]** Chiclayo

**[02:08:50]** Pero o sea

**[02:08:52]** De manera interna

**[02:08:53]** Y no

**[02:08:58]** Es que también

**[02:08:58]** Hora, pero

**[02:08:59]** Recién está

**[02:09:00]** Falta 10 minutos

**[02:09:02]** 15

**[02:09:02]** Así

**[02:09:02]** Por eso

**[02:09:03]** Ya

**[02:09:25]** Ajá

**[02:09:26]** Quises

**[02:09:28]** El inicio

**[02:09:36]** Bórrale, bórrale

**[02:09:37]** Bórrale, bórrale

**[02:09:38]** De ahí bórrale

**[02:09:40]** Por eso

**[02:09:40]** Por eso

**[02:09:41]** Por eso

**[02:09:41]** Lo van a ver

**[02:09:42]** Dentro

**[02:09:42]** De los cursos

**[02:09:43]** Y en inicio

**[02:09:44]** Nada más

**[02:09:45]** Sí, ahí ponle

**[02:09:47]** Progreso por ahí

**[02:09:48]** Progreso

**[02:09:49]** Claro

**[02:09:53]** Progreso

**[02:09:53]** Un curso

**[02:09:54]** Correcto

**[02:10:08]** Un QR

**[02:10:09]** Sí

**[02:10:11]** QR o código

**[02:10:16]** No, no entiendo

**[02:10:47]** No, no, no

**[02:10:48]** Pero no entendí

**[02:10:49]** Ahí

**[02:10:49]** Chito, por favor

**[02:10:50]** Ya QR

**[02:10:53]** Quiz

**[02:10:53]** Mucho

**[02:11:42]** Yo creo que los quiz

**[02:11:46]** Es más como que

**[02:11:47]** Una herramienta

**[02:11:48]** De la clase

**[02:11:48]** Y para la clase

**[02:11:49]** Que si queremos sacar

**[02:11:51]** No, es que mira

**[02:11:52]** Quiero, mira

**[02:11:52]** A ver

**[02:11:53]** Ponte a pensar esto

**[02:11:54]** Ya a ver

**[02:11:55]** Para qué

**[02:12:45]** Me parece

**[02:12:56]** Mucho show

**[02:12:57]** Para poca cosa

**[02:12:58]** Porque estás en academia

**[02:13:01]** El que no quiera

**[02:13:02]** Estudiar

**[02:13:02]** Que no estudie

**[02:13:03]** Ahora

**[02:13:05]** Otra cosa

**[02:13:06]** En colegio

**[02:13:06]** En colegio sí

**[02:13:08]** Pero no

**[02:13:08]** Acá simplemente

**[02:13:09]** Yo necesito que

**[02:13:10]** Respondan unas preguntas

**[02:13:12]** Y que

**[02:13:13]** Ni siquiera tengan

**[02:13:14]** El usuario

**[02:13:15]** Acá

**[02:13:16]** O sea

**[02:13:16]** Un random

**[02:13:18]** ¿No?

**[02:13:19]** Como no es en el quiz

**[02:13:20]** También ayuda

**[02:13:21]** Que es

**[02:13:22]** Este

**[02:13:22]** Que cada uno

**[02:13:23]** Se ponga su nombre

**[02:13:24]** Algo así

**[02:13:25]** Para esto

**[02:13:26]** No, no

**[02:13:33]** Solo

**[02:13:34]** Realmente no

**[02:13:37]** Mucho

**[02:13:38]** O sea

**[02:13:38]** ¿Qué va a hacer

**[02:13:40]** Con esa profe

**[02:13:41]** En academia?

**[02:13:41]** O sea

**[02:13:42]** ¿Cuál sería su plan de acción

**[02:13:43]** Con esa información?

**[02:13:44]** Nada

**[02:13:44]** Por más que

**[02:13:45]** Sepa que

**[02:13:46]** Están moveando

**[02:13:47]** La mayor parte

**[02:13:48]** De los alumnos

**[02:13:48]** No va a pasar nada

**[02:13:49]** Prefiero enfocar

**[02:13:52]** A

**[02:13:52]** O sea

**[02:13:53]** Que en vez de que

**[02:13:54]** Hagas ese

**[02:13:55]** Backend

**[02:13:56]** Que me lo hagas

**[02:13:57]** Un frontend

**[02:13:57]** Más bonito

**[02:13:58]** Para esto

**[02:13:58]** Ahí sí te va a pedir

**[02:14:00]** Lo que yo

**[02:14:03]** Necesito

**[02:14:03]** Es

**[02:14:03]** Alumnos

**[02:14:04]** Entran

**[02:14:05]** A ese quiz

**[02:14:06]** Y responden

**[02:14:08]** Y sale

**[02:14:08]** Como el Cajut

**[02:14:09]** Las estadísticas

**[02:14:10]** Ah y bueno

**[02:14:13]** ¿Cuántos alumnos

**[02:14:14]** Han ingresado?

**[02:14:15]** De los que han ingresado

**[02:14:16]** Lo que están

**[02:14:17]** Ha ingresado

**[02:14:18]** Este

**[02:14:19]** ¿Cuántos han respondido?

**[02:14:20]** Para que el profesor

**[02:14:21]** Sepa cuándo cortar la pregunta

**[02:14:22]** ¿No?

**[02:14:23]** Y pasar la siguiente

**[02:14:23]** Pero mucho

**[02:14:30]** O sea

**[02:14:30]** Activo

**[02:14:31]** No

**[02:14:31]** En Cajut

**[02:14:32]** Es un número

**[02:14:33]** Slash

**[02:14:34]** El total

**[02:14:35]** En Cajut

**[02:14:38]** Es simplemente

**[02:14:39]** ¿Cuál es el total?

**[02:14:40]** Te aparece

**[02:14:41]** Slash

**[02:14:41]** A la derecha

**[02:14:42]** Y ¿Cuántos ya han contestado

**[02:14:44]** Esa pregunta?

**[02:14:44]** El profesor ya sabe

**[02:14:45]** Ajá

**[02:14:52]** Dos

**[02:14:52]** Necesito

**[02:14:53]** ¿Cuántos han ingresado?

**[02:14:55]** Y para que el profesor sepa

**[02:14:56]** ¿Cuántos de los que han ingresado

**[02:14:57]** Ya han respondido?

**[02:14:57]** Nada más

**[02:14:58]** De los maños

**[02:14:59]** Que no han ingresado

**[02:15:00]** Ya

**[02:15:00]** Apes hijo

**[02:15:01]** Ya está bien

**[02:15:11]** Está bien

**[02:15:11]** Pero la mayoría

**[02:15:12]** No utiliza

**[02:15:12]** Para que se

**[02:15:13]** No

**[02:15:23]** Pues que mucho show

**[02:15:24]** Loco

**[02:15:24]** Eso menos

**[02:15:30]** Es que

**[02:15:32]** Tenemos que tratar

**[02:15:33]** A los alumnos

**[02:15:33]** Como gentecita

**[02:15:34]** Si no pueden

**[02:15:35]** Autocontrolarse

**[02:15:36]** Eso

**[02:15:37]** No se soluciona

**[02:15:38]** Bloqueando

**[02:15:38]** No se soluciona

**[02:15:39]** Conversando

**[02:15:39]** Son

**[02:15:40]** Concientizaciones

**[02:15:44]** Del uso de la tecnología

**[02:15:45]** En las aulas

**[02:15:46]** Con una charla

**[02:15:47]** Que el profesor

**[02:15:48]** Tiene que dar

**[02:15:48]** ¿Y quién le tengo que enseñar eso?

**[02:15:50]** Es el profesor

**[02:15:52]** Tiene

**[02:15:52]** ¿Quién le tiene que enseñar eso?

**[02:15:54]** No Javi

**[02:15:55]** No

**[02:15:55]** No

**[02:15:56]** No

**[02:15:56]** No

**[02:15:56]** No

**[02:15:56]** No

**[02:15:56]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:15:57]** No

**[02:16:00]** No

**[02:16:00]** No

**[02:16:00]** No

**[02:16:00]** No

**[02:16:00]** El Cajut es bueno

**[02:16:01]** Porque no hace esas huevas

**[02:16:02]** Solo no

**[02:16:07]** Además

**[02:16:09]** Al publicar esa aplicación

**[02:16:11]** En la app

**[02:16:12]** En la app

**[02:16:13]** En la Play Store

**[02:16:14]** Te mete más cosas

**[02:16:15]** Más demora

**[02:16:16]** Demora más

**[02:16:18]** Cada permiso extra

**[02:16:19]** Que pones

**[02:16:20]** Demora más

**[02:16:21]** Entonces

**[02:16:22]** Cuanto más fácil

**[02:16:23]** La

**[02:16:24]** La aplicación

**[02:16:25]** No preguntas datos

**[02:16:26]** De

**[02:16:27]** Reales

**[02:16:28]** No preguntas DNI

**[02:16:29]** No preguntas

**[02:16:30]** Ubicación de la persona

**[02:16:31]** Puta

**[02:16:32]** Corre rápido

**[02:16:33]** Tu

**[02:16:33]** Tu

**[02:16:34]** Permisos en la

**[02:16:35]** En la nube

**[02:16:36]** Entonces

**[02:16:37]** No

**[02:16:37]** No

**[02:16:38]** , por eso

**[02:16:38]** Tengo que no

**[02:16:39]** Sería genial

**[02:16:40]** Después

**[02:16:40]** Empezar otra

**[02:16:41]** Y nada

**[02:16:42]** De ese

**[02:16:42]** Con área

**[02:16:42]** Sí

**[02:16:42]** Pero por ahora

**[02:16:43]** No

**[02:16:43]** Puta

**[02:16:54]** Es

**[02:16:54]** Es

**[02:16:54]** Es

**[02:16:55]** Eso es

**[02:16:55]** Yo

**[02:16:56]** En

**[02:16:57]** En

**[02:16:57]** Kibilex

**[02:16:57]** Como es

**[02:16:58]** Sí

**[02:17:17]** Pero tu usuario

**[02:17:18]** Es tu nombre

**[02:17:19]** Y apellido

**[02:17:19]** Y un

**[02:17:20]** Y un número

**[02:17:22]** De

**[02:17:22]** De

**[02:17:23]** Del alumno

**[02:17:24]** Pero

**[02:17:24]** Ya mira

**[02:17:49]** A mí me gusta

**[02:17:50]** A mí me gusta

**[02:17:51]** Utilizar el

**[02:17:51]** Auth

**[02:17:52]** Que tiene

**[02:17:52]** Superbase

**[02:17:53]** Nomás

**[02:17:53]** El Auth

**[02:17:56]** Autorizado

**[02:17:58]** De Superbase

**[02:17:59]** Con Google

**[02:17:59]** Nada más

**[02:18:00]** Y bueno

**[02:18:01]** La parte

**[02:18:02]** De

**[02:18:02]** Gmail

**[02:18:02]** También

**[02:18:03]** Pero

**[02:18:03]** Está vinculada

**[02:18:04]** Al

**[02:18:04]** A

**[02:18:05]** Google

**[02:18:05]** Porque es lo más fácil

**[02:18:08]** Es lo más seguro

**[02:18:09]** Te ahorras muchas cosas

**[02:18:11]** Entonces

**[02:18:12]** Hágalo con Gmail

**[02:18:13]** Nada más

**[02:18:14]** Un Gmail genérico

**[02:18:15]** Ahora

**[02:18:15]** Los permisos

**[02:18:16]** Los permisos

**[02:18:17]** Que tiene cada cuenta

**[02:18:18]** Es

**[02:18:19]** A ver

**[02:18:20]** Podemos poner como que

**[02:18:21]** Un activador

**[02:18:22]** De cómo podemos hacer

**[02:18:23]** A ver

**[02:18:23]** Eso sí es algo que

**[02:18:24]** Me ayuda a pensar

**[02:18:26]** A ver

**[02:18:26]** Si es que

**[02:18:35]** En

**[02:18:35]** A ver

**[02:18:36]** A ver

**[02:18:37]** ¿Cuál es tu corredor

**[02:18:38]** De la academia de ingeniería?

**[02:18:39]** No hay

**[02:18:40]** No existe

**[02:18:41]** No existe

**[02:18:43]** Claro

**[02:18:50]** Eso es lo que

**[02:18:53]** Tengo que

**[02:18:54]** Tengo que

**[02:18:55]** Cuidarme, ¿no?

**[02:19:01]** ¿Cómo saber

**[02:19:02]** Cómo el alumno está activo?

**[02:19:12]** Ya

**[02:19:12]** Y esos credenciales

**[02:19:19]** Es por semestre

**[02:19:20]** O sea, por ciclo

**[02:19:21]** Y tienes que tener en cuenta

**[02:19:27]** Que algunos alumnos

**[02:19:28]** Van a estar inactivos

**[02:19:29]** Van a pasar a estar inactivos

**[02:19:31]** Sí, desactivación de cuenta

**[02:19:42]** Eso piensa

**[02:19:43]** Lo importante

**[02:19:43]** Lo veo por QR

**[02:20:10]** ¿Existe?

**[02:20:16]** No

**[02:20:16]** Es un carnete

**[02:20:18]** En un QR

**[02:20:19]** Y ese

**[02:20:34]** Ese QR

**[02:20:35]** No da para el semestre

**[02:20:36]** ¿Del celular?

**[02:20:44]** No, no

**[02:20:48]** Te he pasado

**[02:20:49]** Vas

**[02:20:49]** No, no

**[02:20:57]** O sea, algo

**[02:20:57]** Un punto equilibrado

**[02:21:01]** Entre seguridad

**[02:21:01]** Y que les demos

**[02:21:03]** La

**[02:21:03]** La llave fácilmente

**[02:21:05]** Ingresen fácilmente

**[02:21:07]** Ya, pero

**[02:21:09]** ¿Cómo le vas a pasar?

**[02:21:11]** ¿Cómo le vas a pasar?

**[02:21:12]** ¿Cómo le vas a pasar

**[02:21:14]** El usuario y contraseña?

**[02:21:21]** ¿A dónde

**[02:21:22]** Le vas a proporcionar?

**[02:21:27]** No sé

**[02:21:28]** A ver

**[02:21:28]** En la ingeniería

**[02:21:29]** ¿Te acuerdas

**[02:21:29]** Que la ingeniería

**[02:21:29]** Que te decían algo?

**[02:21:46]** Ya

**[02:21:46]** Ya

**[02:21:48]** Eh

**[02:21:49]** Mira

**[02:21:51]** Hacemos esto

**[02:21:52]** Hay que hacer

**[02:21:55]** El usuario y contraseña

**[02:21:56]** Nombre y apellido

**[02:21:58]** Y

**[02:21:58]** El

**[02:21:59]** La contraseña

**[02:22:02]** Va a ser

**[02:22:02]** El código del alumno

**[02:22:03]** Más

**[02:22:04]** El nombre y apellido

**[02:22:06]** Puta

**[02:22:09]** Muy largo

**[02:22:09]** Contraseña

**[02:22:11]** Es el código

**[02:22:11]** Del alumno

**[02:22:12]** Nomás

**[02:22:12]** Por primera vez

**[02:22:13]** Y a cada uno

**[02:22:15]** Tiene que

**[02:22:16]** Cambiar

**[02:22:16]** Nombre y apellido

**[02:22:25]** Para usuario

**[02:22:26]** Y el código

**[02:22:26]** Nombre y apellido

**[02:22:27]** Y abajo

**[02:22:28]** Pones el

**[02:22:29]** Código del usuario

**[02:22:31]** Código del alumno

**[02:22:32]** Deben tener un código

**[02:22:33]** Por ahí

**[02:22:33]** Pues ya

**[02:22:48]** Pues F

**[02:22:49]** No importa

**[02:22:50]** No no no

**[02:23:09]** Pero o sea

**[02:23:09]** El código

**[02:23:10]** El código

**[02:23:10]** O sea

**[02:23:11]** El código

**[02:23:11]** Es la contraseña

**[02:23:12]** Inicial

**[02:23:13]** Y luego el alumno

**[02:23:14]** Puede cambiar

**[02:23:15]** O sea

**[02:23:15]** Pedirle la contraseña

**[02:23:17]** O sea

**[02:23:17]** Una vez que se logue

**[02:23:18]** Pedirle un cambio

**[02:23:19]** Que una creación

**[02:23:20]** De contraseña

**[02:23:23]** Punto

**[02:23:23]** Se acabó

**[02:23:24]** Ajá

**[02:23:31]** Pero ni bien

**[02:23:34]** Igual que

**[02:23:35]** También hay un modo

**[02:23:48]** Ah ya

**[02:23:56]** Eso tú te encargas

**[02:23:57]** Lo que es

**[02:23:57]** Es bien fácil

**[02:23:58]** ¿Qué cosa?

**[02:24:07]** Pero solo

**[02:24:07]** Modificas de frente

**[02:24:09]** En la base de datos

**[02:24:09]** Pues no se puede

**[02:24:10]** No mentira

**[02:24:23]** Ya ya ya

**[02:24:23]** Ya ya ya

**[02:24:25]** Ya lo

**[02:24:25]** Ya lo

**[02:24:26]** Ya lo piensas

**[02:24:27]** O sea

**[02:24:28]** Pídele un correo electrónico

**[02:24:29]** Al crear y todo eso

**[02:24:31]** Pídele un correo electrónico

**[02:24:33]** Y ya ese correo electrónico

**[02:24:34]** Va a pedir

**[02:24:35]** Como cualquier página

**[02:24:36]** Lo veo de cualquier página

**[02:24:38]** Ya ves michito

**[02:24:40]** Hasta aquí nomás

**[02:24:41]** Llegamos entonces

**[02:24:42]** Ya lo tengo que pasar

**[02:24:44]** Sí ya

**[02:24:45]** Una gran parte

**[02:24:46]** O sea

**[02:24:47]** Lo importante

**[02:24:47]** Ya lo tenemos

**[02:24:48]** Quizzes

**[02:24:52]** Y usuarios

**[02:24:53]** ¿No?

**[02:24:54]** Y módulos de usuarios

**[02:24:55]** Arriba

**[02:25:00]** Ya pues michito lindo

**[02:25:02]** ¿Algo más?

**[02:25:02]** ¿Alguna duda?

**[02:25:03]** ¿Algo extra

**[02:25:04]** Que ha quedado pendiente quizás?

**[02:25:05]** Que ustedes tienen en cuenta

**[02:25:07]** Y yo no

**[02:25:07]** No

**[02:25:19]** Olvídate de eso

**[02:25:20]** Olvídate

**[02:25:20]** Olvídate

**[02:25:21]** Olvídate

**[02:25:24]** Olvídate

**[02:25:25]** Olvídate

**[02:25:26]** Olvídate

**[02:25:26]** Olvídate

**[02:25:26]** Cumbre quizás

**[02:25:28]** A esto no

**[02:25:28]** Eso

**[02:25:30]** Eso es algo que vende

**[02:25:31]** Pero

**[02:25:31]** Es yuca

**[02:25:32]** Mucho tiempo

**[02:25:34]** Yo necesito que esté bien depurado

**[02:25:35]** Lo demás

**[02:25:35]** Que yo siento que le alcance

**[02:25:37]** Ya es bastante

**[02:25:37]** Para 10 días

**[02:25:38]** De manera

**[02:25:40]** El concepto me lo puede pasar

**[02:25:42]** Pero como concepto

**[02:25:43]** Más

**[02:25:43]** Ya pero

**[02:25:46]** Ya michito lindo

**[02:25:51]** No estamos bien

**[02:25:53]** Me avisas

**[02:25:54]** Cualquier cosita

**[02:25:55]** Me dices ya

**[02:25:56]** Cuando vas a dejar el proyecto

**[02:25:57]** Y me lo estás pasando a mí

**[02:25:58]** Para ya yo continuar

**[02:25:59]** Ambos ya tenemos la idea

**[02:26:04]** De lo que

**[02:26:05]** Se le alcance

**[02:26:05]** Y ya

**[02:26:06]** Con eso

**[02:26:07]** Si no te alcanza el tiempo

**[02:26:09]** Normal

**[02:26:09]** Mucho solo me lo dices

**[02:26:10]** Hasta donde has llegado

**[02:26:11]** Y desde donde continúe

**[02:26:13]** Normal

**[02:26:13]** Agarro y va

**[02:26:14]** Seguimos

**[02:26:14]** Ya michito

**[02:26:15]** Si sigue tan llamando

**[02:26:19]** Ya michito lindo

**[02:26:21]** Chao chao

**[02:26:22]** Te cuides mucho

**[02:26:23]** Chao chao

**[02:26:25]** Chao chiquito

**[02:26:26]** Hola emprendedores

**[02:30:09]** Solo por este mes

**[02:30:10]** Patriote

**[02:30:10]** Que Kuwait

**[02:30:11]** Te está ofreciendo

**[02:30:11]** Hasta un 10% de descuento

**[02:30:12]** En todos sus servicios web

**[02:30:14]** Escríbenos al whatsapp

**[02:30:15]** Y dinos que
