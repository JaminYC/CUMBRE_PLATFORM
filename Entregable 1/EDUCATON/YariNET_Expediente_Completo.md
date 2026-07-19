# YariNET — Expediente Completo del Proyecto

Documento maestro de referencia (para el equipo y para asistentes de IA / NotebookLM).
Módulo de deliberación cívica asistida por IA · Plataforma Cumbre · Educatón Challenge 2026.

> Este expediente consolida todo el proyecto en un solo documento: qué es, el problema, la evidencia, la solución, la arquitectura técnica, los costos, la competencia, la estrategia de pitch y las transcripciones de las reuniones del equipo. Su propósito es que cualquier persona (o IA) entienda YariNET de principio a fin.

---

## 1. Qué es YariNET

**Definición:**
> YariNET es un foro de debate cívico para colegios donde una IA actúa como moderadora imparcial: ordena la discusión, verifica las fuentes en tiempo real y convierte el desacuerdo en una propuesta ciudadana concreta.

**Posicionamiento (identidad):**
> No solo formamos *agentes de cambio* — formamos **constructores de acuerdos**: estudiantes capaces de convertir el desacuerdo en consenso, y el consenso en propuesta.

**Filosofía sobre el rol de la IA (la tesis):**
Ningún problema humano o social tiene una única respuesta correcta; decidir implica riesgo, costo de oportunidad y valores en tensión. Por eso la IA **no decide por las personas — las ayuda a ver el terreno mejor para que ellas decidan.** La IA es el **cartógrafo, no el viajero**: dibuja el mapa (perspectivas, evidencia, consecuencias); el estudiante elige el destino. La decisión final siempre es humana.

---

## 2. El problema central

La educación cívica escolar en el Perú es **teórica y pasiva**, y los estudiantes —aun motivados y con espacios de debate— **no logran deliberar de forma efectiva**: sus discusiones colapsan en el momento del desacuerdo.

> El debate estudiantil no fracasa por falta de espacio ni de ganas — fracasa en el momento del desacuerdo. Cuando las opiniones chocan, no hay quién modere, entra desinformación sin filtro, y la discusión termina en conflicto, sin acuerdo y sin resultado.

**Tres causas raíz:**
1. No hay **moderación imparcial** que ordene la discusión y exija argumentar.
2. Entra **desinformación** (redes/influencers) al debate sin validarse.
3. No existe un **método para convertir el desacuerdo en consenso** y en propuesta.

**Consecuencia:** deliberar se vuelve frustrante → se erosiona la agencia; el estudiante aprende que participar no sirve.

**Evidencia (entrevista real — Mariana, 16 años, 5.° de secundaria, Innova Schools):**
- "Sí tenemos el espacio adecuado… pero **lo más difícil suele ser ponerse de acuerdo**, porque cada uno tiene su opinión y a veces chocan, lo que genera un conflicto."
- "Muchas veces son **influencers malinterpretando** o dando su opinión más que la situación real, lo cual suele distorsionar las cosas."
- "Estamos en un proyecto ('IP') donde buscamos una problemática y una solución; nos ayuda a la comunidad."

*Nota de coherencia: la entrevista es a una estudiante de colegio privado (Innova); el reto apunta a colegios públicos "Barrio PUCP". Se recomienda una entrevista adicional a un estudiante de colegio público y usar este caso como contraste.*

---

## 3. Investigación y datos (evidencia verificada)

Datos obtenidos mediante investigación con verificación adversarial (fuentes primarias, confianza alta).

**A. Formación cívica teórica y de bajos resultados:**
- **ICCS 2016 (IEA / MINEDU-UMC):** solo el **34,8%** de estudiantes peruanos de 2.° de secundaria alcanza los dos niveles más altos de conocimiento cívico → **~65% no reconoce la democracia representativa como sistema político**. Solo 8,8% en el nivel más alto. Media del Perú: **438 puntos, la segunda más baja** de todos los países participantes. *(El Perú no participó en ICCS 2022; 2016 es la evidencia internacional más reciente — citar siempre como "2016".)*

**B. Participación simbólica, no decisoria:**
- **ICCS 2016:** el **51,5%** votó por un delegado/municipio escolar, pero **solo el 21,3%** participó en decisiones sobre cómo se maneja el colegio.
- **Mora Alvino (SciELO Perú / UNMSM, 2024):** en municipios escolares de Lima, la participación se ubica en los peldaños de "manipulación, decorativa y simbólica" de la escalera de Hart; los estudiantes son "escuchados, mas no a decidir".
- **MINEDU (Open Government Partnership PE0110):** el propio Estado reconoce el "débil involucramiento de las y los estudiantes".

**C. Adolescentes se informan por redes y expuestos a desinformación:**
- **Reuters Institute Digital News Report 2025:** el **33% de peruanos usa TikTok para informarse** (el mayor % de los mercados hispanohablantes); 64% usa redes para noticias.
- **Ipsos Perú 2022:** 63% de usuarios de redes las usa para informarse *(población adulta 18-70; citar como dato general).*

**Evidencia académica de que el mecanismo funciona (estado del arte):**
- **"Habermas Machine"** (Tessler et al., *Science*, 2024, Google DeepMind, N=5.734): las personas prefirieron las declaraciones de consenso generadas por IA sobre las de mediadores humanos; los grupos convergieron. → sustenta el *Sintetizador de Consenso*.
- **"Bad News"** (Roozenbeek & van der Linden, Univ. de Cambridge, 2019, N≈15.000; ensayo de aula 2024 con estudiantes de 15-17 años): mejora medible de la detección de desinformación. → sustenta el *Fact-Checker*.
- **Pol.is / vTaiwan** (Taiwán): deliberación digital que derivó en políticas públicas reales.

**Postura epistémica:** esta evidencia es internacional (Reino Unido, Suecia, Taiwán) y **prueba que el mecanismo puede funcionar, no que funcione en un aula peruana**. Se toma como hipótesis a validar (piloto), no como fórmula a copiar.

---

## 4. Público objetivo

**Usuarios directos:** estudiantes de **secundaria, 4.° y 5.° (15-17 años)**, que cursan **DPCC** y participan en proyectos escolares de identificación de problemas. Nativos digitales, motivados, con espacios de debate pero que se traban al construir acuerdos.

**Usuarios indirectos:** docentes de DPCC (median y evalúan) y directivos.

**Por qué esta etapa es la más crucial:** la secundaria es el **umbral de la ciudadanía** — se forman identidad y valores, madura el razonamiento crítico y faltan 1-2 años para votar. Si aquí aprenden que "participar no sirve", cargan esa resignación toda la vida. *(Ventaja: varios competidores apuntan a primaria; YariNET toma la etapa donde el debate polémico es real.)*

**Anclaje curricular (foco y escala):** YariNET operativiza una competencia ya obligatoria del **Currículo Nacional (CNEB)**: "Convive y participa democráticamente en la búsqueda del bien común" (área de DPCC), y en específico la capacidad **"Delibera sobre asuntos públicos"**. No inventa una materia nueva; le da práctica a una que hoy se enseña en teoría.

---

## 5. La solución (cómo funciona)

**Flujo (6 pasos):**
1. El **docente** lanza un *Reto Cívico* (problema real del colegio/barrio).
2. Los **estudiantes** debaten en el *foro* en tiempo real.
3. **IA Moderador Socrático** interviene: ordena, repregunta, frena faltas de respeto (no da respuestas).
4. Un estudiante **adjunta una fuente** → **IA Fact-Checker** la evalúa (veredicto + nivel de confianza + explicación).
5. **IA Sintetizador de Consenso** lee el debate y separa **acuerdos** de **tensiones** → genera una **Propuesta Ciudadana** estructurada.
6. El **docente valida** la propuesta → se **presenta a la autoridad** (dirección/municipio).

**Los tres agentes de IA (ninguno juzga; cada uno ilumina el terreno):**
- **Moderador Socrático** → ilumina las *perspectivas* (no revela su opinión; reformula hechos polémicos como preguntas).
- **Fact-Checker** → ilumina la *calidad de la evidencia* (evalúa la fuente, no a la persona; declara "no verificado" si duda).
- **Sintetizador** → ilumina *dónde hay acuerdo y dónde queda tensión* (fiel a lo que dijeron los estudiantes).

**Los 4 pilares:** (1) Moderación socrática con IA; (2) Combate a la desinformación (fact-checking); (3) De la deliberación a la acción (propuesta ciudadana); (4) Gamificación cívica (retos evaluables).

**Ética / seguridad:** la IA nunca juzga opiniones, valores ni posturas; el humano mantiene la autoridad; entorno seguro para menores (moderación, acceso institucional, consentimiento). Es un **ensayo seguro y con andamiaje** de la vida ciudadana (Dewey: aprender haciendo; Vygotsky: zona de desarrollo próximo), no una carga real sobre el estudiante.

---

## 6. Análisis competitivo (equipos finalistas)

El campo está saturado de "participación/deliberación cívica"; el diferenciador de YariNET es el **mecanismo** (IA que modera, verifica y sintetiza en vivo) y el **foco** (secundaria).

| Equipo | Propuesta | Amenaza | Por qué YariNET se diferencia |
|---|---|---|---|
| **Aula Viva** | Aula de diálogo; validar info; construir acuerdos; Barrio PUCP | Alta | Usa el mismo discurso pero sin mecanismo concreto; YariNET sí muestra el "cómo" |
| **DemocraSim** | Plataforma web: proponer, debatir, **votar** | Alta | Vota; YariNET **construye consenso** desde el desacuerdo |
| **Protagonistas** | Identificar→deliberar→**respuesta oficial** (primaria) | Media | Primaria; YariNET ataca antes: el debate entre pares que ya colapsa |
| **DetectaMentes** | Detectar fake news jugando (RPG) | Media | Es un juego de media literacy; el fact-check de YariNET vive dentro de la deliberación |
| **OTIUM** | Deliberación + convivencia vía juego | Media | — |
| Ctrl+Educa, Play4Edu, Ayni Lab, EDUCANDO | Vagos / primaria / STEAM-ambiental | Baja | Otro foco |

**Diferenciador único:** YariNET es el único que integra **moderación socrática + fact-checking + síntesis de consenso** en un solo flujo escolar, en español y para secundaria. Los demás tienen una pieza suelta; YariNET las junta.

---

## 7. Arquitectura técnica y stack

Arquitectura de **microservicios** sobre un monorepo (pnpm), como parte de la Plataforma Cumbre.

- **Lenguaje/runtime:** TypeScript sobre Node.js (ESM).
- **Backend:** microservicio `yarinet_service` (API REST con enrutador propio `api-runtime`, validación JSON Schema/AJV).
- **Datos:** PostgreSQL con Prisma 6 (un esquema por servicio); modelos: retos, foros, mensajes, fuentes (fact-check), propuestas.
- **IA:** capa `llm-runtime` sobre un proveedor OpenAI-compatible; los prompts de los 3 agentes viven en `prompts`.
- **Tiempo real:** Supabase Realtime (difusión de mensajes del foro).
- **Frontend:** apps Next.js por rol (docente y estudiante).
- **Autenticación:** `auth_service` (sesiones y roles), consumido por los demás servicios.
- **Infraestructura:** Railway (servicios), Vercel (frontend), Supabase (BD + realtime).

**Estado real:** la Fase 0 (fundación) está **construida y probada**: el `yarinet_service` levanta, autentica por roles y el CRUD de Retos Cívicos funciona end-to-end; existe un prototipo web para el docente (crear/listar retos), verificado en navegador.

---

## 8. Costos, ROI y sostenibilidad

**Tesis económica:** YariNET automatiza el recurso escaso y caro (un moderador imparcial + verificador + sintetizador) a **centavos por aula**.

**Unit economics (supuestos: aula de 30, ~60 mensajes por reto):**
- ~70.000 tokens de LLM por reto (moderación + fact-checks + síntesis).
- Costo por reto: **~US$0,02** (modelo económico) a **~US$0,14** (modelo intermedio) → **< US$0,005 por estudiante por debate**.

**Costo fijo de infraestructura:** piloto ~US$30-95/mes; escala (1.000 estudiantes) ~US$115-380/mes → **menos de US$2 por estudiante al año** en tecnología.

**ROI:**
- Financiero: un facilitador humano cuesta decenas de dólares/hora y no escala; YariNET modera debates ilimitados en paralelo por centavos.
- Social (SROI): desarrolla una competencia del CNEB por soles/estudiante muy bajos.

**Sostenibilidad — fuentes de ingreso:** (1) SaaS B2B dentro de Cumbre (redes privadas pagan por estudiante); (2) sector público/MINEDU; (3) subsidios cruzados/CSR/grants (privados subsidian públicos); (4) freemium (gratis para públicos, premium para redes).

**Palancas técnicas para bajar el costo:** model tiering (modelo barato para moderar, mejor para sintetizar), caché de verificaciones, procesamiento por lotes, opción de modelos open-source a escala, arquitectura modular para bajar el costo fijo.

---

## 9. Plan de desarrollo (roadmap)

- **Fase 0 — Fundación (hecho):** servicio, BD, modelo de datos, CRUD de retos, prototipo web docente, auth por roles.
- **Fase 1 — Agentes de IA + prompts:** integrar Moderador, Fact-Checker y Sintetizador sobre el LLM.
- **Fase 2 — Foro + tiempo real:** API de foro/mensajes/fuentes/propuestas; entrega en vivo; moderación post-publicación.
- **Fase 3 — Frontend:** foro del estudiante y panel de monitoreo del docente.
- **Fase 4 — Validación en aula:** piloto con DPCC (colegio público Barrio PUCP), medición de impacto, ajuste al contexto local.
- **Transversal:** alineación con desempeños del CNEB, seguridad de menores, consentimiento, métricas de impacto.

Estimación del MVP (Fases 1-3): ~8-12 semanas con un equipo pequeño, aprovechando la infraestructura existente de Cumbre.

---

## 10. Estrategia de pitch

**Regla de oro:** no vender la tecnología, vender la transformación. El jurado no técnico compra resultados y personas, no "IA/chatbot".

**Estructura (secuencia "de golpe"):**
1. **Hook (pregunta):** "¿Qué pasa cuando 30 estudiantes quieren cambiar algo en su colegio, pero nadie los modera, se basan en TikTok y terminan peleando?"
2. **Datos que duelen:** "En el Perú solo 1 de cada 3 estudiantes entiende qué es la democracia; el 51% vota por sus representantes, pero solo el 21% participa en decisiones reales."
3. **Insight (Mariana):** "Sí tenemos el espacio… lo más difícil es ponernos de acuerdo."
4. **Reveal:** "YariNET convierte ese debate caótico en una propuesta ciudadana. Modera, verifica fuentes y estructura el consenso. No decide por ellos — los ayuda a decidir mejor."
5. **Demo en vivo** (con plan B en video).
6. **Diferenciador competitivo** + **modelo económico** (centavos por aula).
7. **Slogan:** "De agentes de cambio, a constructores de acuerdos. La ciudadanía no se memoriza: se ejerce. YariNET."

**Anti-"es un chatbot":** "No es un chatbot que da respuestas. Es lo contrario: un árbitro imparcial que hace pensar, frena las mentiras y escribe el acuerdo al que ELLOS llegaron."

**Superpoder del equipo:** tienen un **producto funcionando** (demo real), mientras la mayoría llega con mockups. Apóyense en el demo en vivo (con respaldo grabado).

---

## 11. Preparación del equipo (evento final)

**Evento:** sábado 18 de julio de 2026, SUM Sociales PUCP, 8:30-19:00. Sprint de un día: Comprender → Idear → Prototipar → Pitch (17:00-18:00).

**Roles (6 integrantes):** pitcher principal; co-pitcher/demo (maneja la laptop); datos/Q&A (memoriza ICCS); diseño/slides; coordinador/tiempo; investigación/soporte.

**Estrategia:** ya tienen hechos los bloques 1-2 (investigación, entrevista, marco teórico) → moverse rápido y usar el tiempo para pulir; invertir en el bloque 3 (prototipo/demo) y en el pitch.

**Checklist:** laptop cargada + adaptador; **video de respaldo del demo** + capturas; deck en USB y nube; one-pager impreso; mapas de empatía y journey; datos ICCS memorizados.

---

## 12. Anexo — Síntesis de la reunión del equipo (16 de julio de 2026)

*Transcripción automática (modelo medium, local). La reunión confirma y aterriza las decisiones del proyecto. La transcripción completa está en `Reuniones/transcripciones/16 jul., 10-39 p. m..txt`.*

**Puntos clave discutidos:**
1. **Anclaje curricular:** mapear la malla curricular / el curso de DPCC. La postura del equipo: no reemplazar lo que plantea el MINEDU, sino trabajar sobre ello con los recursos disponibles del aula.
2. **Acceso y tecnología:** el proyecto requiere celular + internet; cada estudiante ingresa texto o notas de voz que van a la base de datos. Se evaluó además un **dispositivo físico** (un micrófono receptor, incluso impreso en 3D) como un plus simbólico: "la voz de los estudiantes".
3. **Online vs. offline:** la IA/datos podrían funcionar offline con actualización periódica (más inclusivo, pero más costoso en memoria/recursos) u online usando la nube; se busca que los datos estén actualizados (hasta 2026, no hasta 2022/2023).
4. **Análisis competitivo:** revisaron el mapa competitivo — **Aula Viva** ("casi el mismo discurso"), **DemocraSim** (laboratorio democrático / votar), **Protagonistas** (respuesta oficial), y el de **videojuego/RPG**. Conclusión: hay que diferenciarse por el método.
5. **Secundaria vs. primaria:** en el pitch deben justificar por qué eligieron secundaria (la mitad de los equipos eligió primaria), sustentándolo en los estudios del marco teórico.
6. **Estructura del pitch:** problema (con datos del marco teórico) → solución → cómo → rentabilidad/sostenibilidad → llamado a la acción. Reformular la estadística del ICCS de forma impactante ("2 de cada 10 / 8 de cada 10 no reconocen la democracia como sistema político").
7. **Economía:** ~milésimas de dólar de IA por estudiante; estimaron del orden de **US$5 por aula al mes**; costo-beneficio: 30 estudiantes y el profesor debaten y entienden mejor el país. Potencial de escalar de 2.° a 5.° de secundaria, universidades y entornos de trabajo. *(Consistente con el modelo de costos del documento técnico.)*

---

## Referencias
- MINEDU–UMC. *El Perú en ICCS 2016.* umc.minedu.gob.pe
- IEA. *ICCS 2016 / 2022.* iea.nl
- Mora Alvino, G. J. (2024). *Municipios escolares y la participación estudiantil.* SciELO Perú / UNMSM.
- Open Government Partnership. *Compromiso PE0110.*
- Reuters Institute. *Digital News Report 2025 — Perú.*
- Ipsos Perú (2022). *Si no estás en RRSS, estás en na.*
- Tessler, M. H., et al. (2024). *AI can help humans find common ground in democratic deliberation.* Science, 386, eadq2852.
- Roozenbeek, J. & van der Linden, S. (2019). *Fake news game confers psychological resistance against online misinformation.* Palgrave Communications, Univ. of Cambridge.
