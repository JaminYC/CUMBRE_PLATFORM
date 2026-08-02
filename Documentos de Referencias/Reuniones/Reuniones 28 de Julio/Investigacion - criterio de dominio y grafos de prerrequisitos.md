# Investigación: criterio de dominio y grafos de prerrequisitos

**Para qué sirve este documento.** En la reunión del 28 de julio se tomaron dos decisiones de diseño sin saber que ambas están estudiadas desde hace décadas: el criterio de **3 respuestas correctas al hilo** para desbloquear el siguiente tema, y la simplificación del **grafo de prerrequisitos** a una secuencia lineal por curso. Aquí están las fuentes, los números y qué implican para el alcance de 10 días.

Cada afirmación va con su cita. Donde saco una conclusión propia lo digo explícitamente.

---

## Resumen ejecutivo

1. **El "3 al hilo" está bien elegido** para lo que hace: predice con ~80% de acierto que el alumno resolverá las siguientes preguntas del mismo tema.
2. **Pero se queda corto para el examen de admisión.** Ante una pregunta *nueva* (transferencia), el 3 al hilo acierta como una moneda al aire. El 5 al hilo sube a ~70%.
3. **Lo simple le ganó a lo complejo.** Contar aciertos seguidos midió el dominio *mejor* que Bayesian Knowledge Tracing. No hace falta un modelo probabilístico.
4. **Calibrar el umbral pesa más que elegir el algoritmo.** Es el hallazgo central de la revisión más completa del tema.
5. **La preocupación del 3D/2D que se planteó en la reunión es un problema conocido:** los grafos de prerrequisitos hechos por expertos casi nunca se validan contra datos, y hay una prueba estadística simple para hacerlo.

---

## 1. El criterio "N al hilo": hay un paper que mide exactamente esto

**Kelly, K., Wang, Y., Thompson, T. & Heffernan, N. (2015).** *Defining Mastery: Knowledge Tracing Versus N-Consecutive Correct Responses.* Proceedings of the 8th International Conference on Educational Data Mining (EDM 2015). Worcester Polytechnic Institute.

Datos de **ASSISTments**, un sistema de tutoría inteligente en uso real. Dos estudios: un análisis de datos y un ensayo controlado aleatorizado.

Compararon lo mismo que decidimos nosotros —**N respuestas correctas consecutivas (N-CCR)**— contra **Bayesian Knowledge Tracing (KT)** con umbral de probabilidad de dominio >95%.

### 1.1 Con 3 al hilo, ¿acierta las siguientes?

Sí. De los estudiantes que responden 3 correctas seguidas:

| Quinta pregunta | Cuarta incorrecta | Cuarta correcta |
|---|---|---|
| **Incorrecta** | 1,8% (5) | 9,8% (24) |
| **Correcta** | 8,4% (28) | **80,0% (228)** |

*(Tabla 1 del paper. n = 285.)*

**El 80,0% acierta la cuarta y la quinta.** Conclusión textual de los autores:

> *"N-CCR, specifically 3-CCR, is a simple, yet effective way to determine mastery within an ITS. This threshold has been found to predict next problem correctness with at least 80% accuracy."*

### 1.2 Con 3 al hilo, ¿resuelve una pregunta nueva?

Aquí está el hallazgo que nos afecta. Midieron también el desempeño en una **pregunta de transferencia**: un problema distinto, no una más del mismo montón.

**Con umbral de 3 al hilo** *(Tabla 2, n = 37)*:

| | Alcanzó el umbral | No lo alcanzó |
|---|---|---|
| **Transferencia correcta** | 46% (17) | 0% |
| **Transferencia incorrecta** | 43% (16) | 11% (4) |

**Con umbral de 5 al hilo** *(Tabla 3, n = 37)*:

| | Alcanzó el umbral | No lo alcanzó |
|---|---|---|
| **Transferencia correcta** | 43% (16) | 8% (3) |
| **Transferencia incorrecta** | 19% (7) | 30% (11) |

Lo que sale de ahí (cálculo propio sobre los números del paper):

| Umbral | De los que lo alcanzaron, aciertan la transferencia |
|---|---|
| 3 al hilo | 17 / (17+16) = **51,5%** |
| 5 al hilo | 16 / (16+7) = **69,6%** |
| Knowledge Tracing (>95%) | 31 / (31+29) = **51,7%** |

Conclusión de los autores:

> *"However, when predicting performance on a transfer task, a higher threshold (5-CCR) is more effective."*

Y sobre KT:

> *"When mastery is defined by performance on a transfer question, results indicate that KT is comparable to 3-CCR, but less accurate than 5-CCR."*

**Por qué esto importa para Bryce.** Un examen de admisión **es** una tarea de transferencia. Nadie le va a poner al alumno la pregunta 101 del mismo tema; le van a poner una que no vio. El 3 al hilo predice bien *"va a resolver la siguiente del montón"* y predice mal *"va a ingresar"*.

### 1.3 El otro lado: el 3 no frena a nadie

En los mismos datos, de los que **no** alcanzaron el umbral de 3 al hilo, **ninguno** acertó la transferencia (0 de 4). Con 5 al hilo aparecen 3 estudiantes que no llegaron al umbral y sí resolvieron el problema nuevo.

Es el intercambio clásico:

| | Riesgo |
|---|---|
| **3 al hilo** | Pasa a alumnos que aún no transfieren (falsos positivos) |
| **5 al hilo** | Retiene a alumnos que ya podían (falsos negativos) |

### 1.4 El primer fallo suele ser un descuido

Dato útil para el diseño del bypass:

> *"Of the students who reached the final 5-CCR threshold, 90% of them reached it without an error. Those who made at least one error tended to reach the threshold with N attempts following the error. This suggests that the error was a slip."*

Traducido: el que va a dominar el tema lo domina limpio. Y cuando falla una vez, la recupera de inmediato. **Un solo error no debería disparar castigo ni alarma.**

### 1.5 Límites de este estudio

Honestidad sobre la evidencia: la parte de transferencia son **37 estudiantes**. La dirección es clara y coincide con la teoría, pero no es un número para tallar en piedra. La parte de "predice las siguientes" sí tiene n = 285.

---

## 2. Calibrar el umbral pesa más que elegir el algoritmo

**Pelánek, R. & Řihák, J. (2018).** *Analysis and Design of Mastery Learning Criteria.* New Review of Hypermedia and Multimedia, 24(3), 133–159. Masaryk University Brno.

Es la revisión más completa del tema. Analizan varios criterios con datos simulados y reales.

Hallazgo central, del abstract:

> *"The results show that the choice of data sources used for mastery decision and the setting of thresholds are more important than the choice of a learner modeling technique."*

Y su recomendación concreta:

> *"We argue that a simple exponential moving average method is a suitable technique for mastery criterion."*

**Media móvil exponencial**, no BKT. Esto refuerza lo mismo que Kelly: **no inviertan en el modelo, inviertan en calibrar el número.**

### 2.1 La distinción que aplica justo a nuestro caso

> *"In the context of high-stakes testing, for example in medical education, it is important to avoid false positives, since premature declaration of mastery can cause harm. In the context of practice, particularly in online educational tools like Khan Academy, which are used by learners on voluntary basis, it is important to avoid false negatives — if learners are forced to do unnecessary practice, they may lose interest and stop using the system."*

Bryce está **en los dos lados a la vez**:

- La práctica es voluntaria → si aburre, la abandonan → hay que evitar falsos negativos.
- El objetivo es un examen de alto riesgo → hay que evitar falsos positivos.

Y esto es lo interesante: **el bypass que se diseñó en la reunión resuelve exactamente esa tensión**, porque traslada la decisión al alumno. Umbral estricto para el que quiere perfección, salida manual para el que se está atascando. En `[02:03:10]` de la transcripción quedó así: *"hasta que no haga perfecto no vas a pasar, a menos que tú mismo, rompiendo tu orgullo, digas siguiente tema"*.

---

## 3. El grafo hecho bien tiene nombre: Knowledge Space Theory

**Doignon, J.-P. & Falmagne, J.-C. (1985).** *Knowledge Spaces.* Es la base matemática de **ALEKS**, producto comercial en operación con esto desde hace décadas (hoy de McGraw Hill).

### 3.1 Cómo funciona

Una **estructura de conocimiento** `(Q, K)` es un dominio finito `Q` de ítems y una familia `K` de **estados de conocimiento** (subconjuntos de `Q` que un alumno puede dominar de forma coherente).

La pieza que nos interesa es la **relación de surmise**: `q ≤ q'` significa que *dominar `q'` implica haber dominado `q`*. El ejemplo de la propia documentación de ALEKS:

> Es muy improbable, o incluso imposible, que un estudiante domine *"resolver una inecuación lineal compuesta"* sin dominar antes *"resolver una ecuación lineal de un paso"*.

Eso es precisamente lo que se describió en la nota de voz: precedencia, consecuencia, jerarquía.

### 3.2 Por qué no es para nuestros 10 días

Dos razones:

**Granularidad.** ALEKS trabaja a nivel de **ítem**, no de tema del temario. Su dominio "Preparation for Calculus" tiene ~182 ítems. Nosotros decidimos en `[00:30:26]` bajar solo hasta el punto del temario — unos 200 temas para 20 cursos. Es una decisión de alcance razonable, pero significa que **no vamos a tener un knowledge space**: vamos a tener una lista ordenada.

**Madurez.** ALEKS lleva ~40 años en esto, con equipos de psicometría. No es algo que se replique en dos semanas.

**Conclusión propia:** correcto no intentarlo ahora. Pero conviene saber que el techo del diseño actual es una lista, no un grafo, y que el camino de crecimiento existe y está documentado.

---

## 4. Los grafos de expertos casi nunca se validan — y hay cómo medirlo

Esta sección responde directamente a la advertencia que se hizo en la reunión en `[00:32:47]`: que una pregunta de 3D puede ser más fácil que una de 2D, y que entonces avanzar en la secuencia no prueba dominio.

### 4.1 No es una intuición suelta: es un problema conocido

**Chen, Y., Wuillemin, P.-H. & Labat, J.-M. (2015).** *Discovering Prerequisite Structure of Skills through Probabilistic Association Rules Mining.* EDM 2015, pp. 117–124. Sorbonne / LIP6.

Del abstract:

> *"The prerequisite structures of skills are usually studied by human experts, but they are **seldom tested empirically**."*

Y del cuerpo del paper:

> *"It is a tough and time-consuming task since it is quite likely that the prerequisite structures from different experts on the same set of skills are difficult to come to an agreement. Moreover, the prerequisite structures from domain experts are seldom tested empirically."*

Es decir: **dos profesores no se ponen de acuerdo en el mismo grafo, y casi nadie comprueba si el grafo que dibujó el experto es real.** Que es exactamente el riesgo señalado — que el orden del temario refleje el currículo y no la dependencia real.

### 4.2 La prueba estadística que lo resuelve

**Vuong, A., Nixon, T. & Towle, B. (2011).** *A Method for Finding Prerequisites Within a Curriculum.* EDM 2011, pp. 211–216.

El método, descrito por Chen et al. en su revisión de trabajo relacionado:

> *"Vuong et al. proposed a method to determine the dependency relationships between units in a curriculum with the student performance data that are observed at the unit level (i.e. graduating from a unit or not). They used the statistic binominal test to look for a significant difference between the performance of students who used the potential prerequisite unit and the performance of students who did not. If a significant difference is found, the prerequisite relation is deemed to exist."*

En castellano llano, para cada par candidato de temas A → B:

1. Se separan los alumnos que pasaron por A antes de B, de los que llegaron a B sin pasar por A.
2. Se compara su desempeño en B con un test binomial.
3. Si la diferencia es significativa, la arista A → B existe. Si no, es imaginaria.

**Esto es implementable con los datos que el sistema va a generar de todas formas.** Y convierte la pregunta "¿el temario está bien ordenado?" de una discusión de opiniones en una medición.

**Recomendación propia:** modelar las aristas en el esquema desde ahora (una tabla de tres columnas: tema origen, tema destino, tipo de relación), **no usarlas en el motor de la v1**, y correr el test de Vuong cuando haya volumen. Cuesta casi nada y es lo que después permite pasar de *"falla en polígonos"* a *"falla en polígonos porque le faltan ángulos"* — que es justamente lo que se pidió para el panel del profesor.

---

## 5. Precedente de producto: Khan Academy lo hizo y lo quitó

Khan Academy tuvo un **Knowledge Map**: un mapa navegable de habilidades con sus prerrequisitos. Lo retiraron y lo reemplazaron por el Learning Dashboard y luego Course Mastery.

La razón técnica declarada fue la dependencia de la API de Google Maps. Pero la respuesta de soporte a los usuarios que pedían recuperarlo fue que **la mayoría de estudiantes y profesores encuentran que la progresión lineal del curso les funciona mejor**, y que no hay planes de traerlo de vuelta.

**Aviso de honestidad:** esto sale de respuestas del centro de ayuda, no de un estudio publicado. No tiene el mismo peso que los papers anteriores. Como precedente de producto vale: una organización con órdenes de magnitud más datos que nosotros construyó el grafo, lo puso en la interfaz, y terminó en la lista ordenada.

Vale la pena registrar también la queja recurrente de sus usuarios: *"con el mapa, un chico podía ver en qué concepto estaba flojo y volver a los prerrequisitos"*. Es decir, lo que se perdió fue **el valor diagnóstico**, no el de navegación — que es exactamente la distinción de la sección 4.

---

## 6. Cómo se mapea contra las decisiones de la reunión

| Decisión de la reunión | Qué dice la evidencia | Veredicto |
|---|---|---|
| 3 correctas al hilo desbloquea el tema | Predice las siguientes con 80% de acierto (Kelly 2015) | **Bien elegido** |
| No usar modelo probabilístico ni IA por respuesta | N-CCR superó a Knowledge Tracing; el umbral pesa más que el algoritmo (Kelly 2015; Pelánek 2018) | **Bien elegido, y con respaldo fuerte** |
| Descartar competencias, usar curso → tema | No cubierto directamente por estas fuentes | Sin evidencia en contra |
| Simplificar el grafo a secuencia lineal | Khan Academy llegó a lo mismo; ALEKS mantiene el grafo pero a granularidad de ítem y con 40 años de trabajo | **Razonable para el alcance** |
| Advertencia del 3D vs 2D | Problema documentado: los grafos de expertos casi no se validan (Chen 2015) | **Preocupación legítima, y medible** |
| Bypass manual a decisión del alumno | Resuelve la tensión falso positivo / falso negativo (Pelánek 2018) | **Buen diseño** |
| Solucionario siempre visible, sin condicional | Coherente con evitar falsos negativos en práctica voluntaria | **Coherente** |
| Umbral de 10 preguntas antes del bypass | El 90% que domina llega sin error; el primer fallo suele ser un descuido (Kelly 2015) | **Coherente** |

---

## 7. Recomendaciones concretas

1. **Mantener 3 al hilo en el modo secuencial.** Está respaldado y ya se dijo en la reunión que se subiría si resulta fácil.

2. **Subir a 5 al hilo donde la métrica es transferencia:** simulacro de examen, o alumnos próximos a postular. Es el único cambio que la evidencia pide con claridad, y es un número en configuración, no una reescritura.

3. **Registrar tiempo por pregunta desde el primer día.** Ya se pidió para el semáforo, pero además es lo que permite distinguir un descuido de un no-sé.

4. **No castigar el primer error.** El 90% de los que dominan llegan sin fallar; el que falla una vez y se recupera estaba distraído, no perdido.

5. **Modelar las aristas de prerrequisito, no recorrerlas en la v1.** Tabla de tres columnas. El motor las ignora.

6. **Correr el test binomial de Vuong cuando haya datos**, para validar el orden del temario con evidencia en lugar de opinión. Esto alimenta directamente el panel del profesor.

7. **No construir un knowledge space.** No alcanza el tiempo y no es necesario para este alcance.

---

## Fuentes

- Kelly, K., Wang, Y., Thompson, T. & Heffernan, N. (2015). *Defining Mastery: Knowledge Tracing Versus N-Consecutive Correct Responses.* EDM 2015.
  https://www.educationaldatamining.org/EDM2015/uploads/papers/paper_311.pdf

- Pelánek, R. & Řihák, J. (2018). *Analysis and Design of Mastery Learning Criteria.* New Review of Hypermedia and Multimedia, 24(3), 133–159.
  https://www.fi.muni.cz/~xpelanek/publications/nrhm-mastery.pdf

- Chen, Y., Wuillemin, P.-H. & Labat, J.-M. (2015). *Discovering Prerequisite Structure of Skills through Probabilistic Association Rules Mining.* EDM 2015.
  https://files.eric.ed.gov/fulltext/ED560515.pdf

- Vuong, A., Nixon, T. & Towle, B. (2011). *A Method for Finding Prerequisites Within a Curriculum.* EDM 2011.
  https://educationaldatamining.org/EDM2011/wp-content/uploads/proc/edm2011_paper8_short_Vuong.pdf

- Doignon, J.-P. & Falmagne, J.-C. *Knowledge Spaces* — Research Behind ALEKS.
  https://www.aleks.com/about_aleks/knowledge_space_theory

- Matayoshi, J. et al. (2021). *A practical perspective on knowledge space theory: ALEKS and its data.* Journal of Mathematical Psychology.
  https://jmatayoshi.github.io/publications/JMP2021_KST_ALEKS_preprint.pdf

- *Optimizing Mastery Learning by Fast-Forwarding Over-Practice Steps* (2025). arXiv:2506.17577.
  https://arxiv.org/pdf/2506.17577

- Khan Academy Help Center — *What happened to the knowledge map?*
  https://support.khanacademy.org/hc/en-us/community/posts/360027982751-What-happened-to-the-knowledge-map

### Lecturas de seguimiento, no consultadas a fondo

- Corbett, A. & Anderson, J. (1995). *Knowledge Tracing: Modeling the Acquisition of Procedural Knowledge.* El paper original de BKT.
- Cen, H., Koedinger, K. & Junker, B. (2007). *Is Over Practice Necessary?* Sobre práctica excesiva en Cognitive Tutor.
- *How Much Mastery is Enough Mastery?* EDM 2025. https://files.eric.ed.gov/fulltext/ED675652.pdf
