-- Motor de practica (Academia Bryce / admision UNSA).
-- Puramente aditiva: 5 tablas nuevas, ningun cambio sobre tablas existentes.

-- CreateTable
CREATE TABLE "practica_asignaturas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eje" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,

CONSTRAINT "practica_asignaturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practica_temas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "asignaturaId" TEXT NOT NULL,
    "romano" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "bloque" TEXT,

CONSTRAINT "practica_temas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practica_preguntas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "temaId" TEXT NOT NULL,
    "enunciado" TEXT NOT NULL,
    "alternativas" JSONB NOT NULL,
    "claveCorrecta" TEXT NOT NULL,
    "solucion" TEXT,
    "fuente" TEXT,
    "esAncla" BOOLEAN NOT NULL DEFAULT false,
    "dificultad" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "vecesServida" INTEGER NOT NULL DEFAULT 0,
    "activa" BOOLEAN NOT NULL DEFAULT true,

CONSTRAINT "practica_preguntas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practica_intentos" (
    "id" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alumnoId" TEXT NOT NULL,
    "preguntaId" TEXT NOT NULL,
    "temaId" TEXT NOT NULL,
    "asignaturaId" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "tiempoMs" INTEGER NOT NULL,
    "modo" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "thetaAlumno" DOUBLE PRECISION,
    "thetaPregunta" DOUBLE PRECISION,

CONSTRAINT "practica_intentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practica_progreso_temas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "alumnoId" TEXT NOT NULL,
    "temaId" TEXT NOT NULL,
    "rachaActual" INTEGER NOT NULL DEFAULT 0,
    "mejorRacha" INTEGER NOT NULL DEFAULT 0,
    "intentosEnTema" INTEGER NOT NULL DEFAULT 0,
    "practicado" BOOLEAN NOT NULL DEFAULT false,
    "consolidado" BOOLEAN NOT NULL DEFAULT false,
    "theta" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "ultimoIntentoEn" TIMESTAMP(3),

CONSTRAINT "practica_progreso_temas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "practica_asignaturas_eje_nombre_key" ON "practica_asignaturas"("eje", "nombre");

-- CreateIndex
CREATE UNIQUE INDEX "practica_temas_asignaturaId_orden_key" ON "practica_temas"("asignaturaId", "orden");

-- CreateIndex
CREATE INDEX "practica_preguntas_temaId_activa_esAncla_idx" ON "practica_preguntas"("temaId", "activa", "esAncla");

-- CreateIndex
CREATE INDEX "practica_intentos_alumnoId_temaId_creadoEn_idx" ON "practica_intentos"("alumnoId", "temaId", "creadoEn");

-- CreateIndex
CREATE INDEX "practica_intentos_preguntaId_idx" ON "practica_intentos"("preguntaId");

-- CreateIndex
CREATE INDEX "practica_progreso_temas_alumnoId_practicado_idx" ON "practica_progreso_temas"("alumnoId", "practicado");

-- CreateIndex
CREATE UNIQUE INDEX "practica_progreso_temas_alumnoId_temaId_key" ON "practica_progreso_temas"("alumnoId", "temaId");

-- AddForeignKey
ALTER TABLE "practica_temas" ADD CONSTRAINT "practica_temas_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "practica_asignaturas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "practica_preguntas" ADD CONSTRAINT "practica_preguntas_temaId_fkey" FOREIGN KEY ("temaId") REFERENCES "practica_temas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
