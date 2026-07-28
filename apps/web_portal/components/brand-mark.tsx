"use client";

import { useMarca } from "@cumbre/brands/client";

export function BrandMark() {
  const marca = useMarca();

  return (
    <div className="brand-mark">
      <p className="brand-mark__eyebrow">{marca.nombreCorto}</p>
      <h1 className="brand-mark__title">{marca.nombre}</h1>
      <p className="brand-mark__copy">{marca.descripcion}</p>
    </div>
  );
}
