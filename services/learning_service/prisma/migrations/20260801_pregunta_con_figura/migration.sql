-- Figura que acompaña al enunciado, y marca de que el enunciado la necesita.
--
-- Muchas preguntas de admision remiten a un cuadro, un grafico o un texto de
-- lectura. Al cosechar el banco se guardo el texto pero no la imagen, asi que
-- se estaban sirviendo enunciados imposibles de resolver. La marca permite
-- retenerlas sin servirlas; en cuanto tengan imagen vuelven solas.
ALTER TABLE "practica_preguntas" ADD COLUMN "imagenUrl" TEXT;
ALTER TABLE "practica_preguntas" ADD COLUMN "requiereFigura" BOOLEAN NOT NULL DEFAULT false;
