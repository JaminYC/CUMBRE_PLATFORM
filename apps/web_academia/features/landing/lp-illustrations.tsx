/* ─────────────────────────────────────────────────────────────
   CUMBRE – Landing illustrations
   Assets from /public/illustrations/ — SVG or PNG, auto-detected
   ───────────────────────────────────────────────────────────── */
import Image from "next/image";

function Illo({ name }: { name: string }) {
  return (
    <Image
      src={`/illustrations/${name}`}
      alt=""
      width={440}
      height={374}
      className="lp-illo"
      draggable={false}
      priority
    />
  );
}

export function IllustrationNino()       { return <Illo name="illo-nino.png" />; }
export function IllustrationJoven()      { return <Illo name="illo-joven.png" />; }
export function IllustrationAdulto()     { return <Illo name="illo-adulto.png" />; }
export function IllustrationDocente()    { return <Illo name="illo-docente.png" />; }
export function IllustrationInstitucion(){ return <Illo name="illo-institucion.png" />; }
