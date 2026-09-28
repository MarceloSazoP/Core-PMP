"use client";

import { useEffect, useState } from "react";

// Anima el ancho desde 0 solo al montar (evita jugar contra actualizaciones en vivo del valor).
// El contenedor (track, overflow-hidden) lo sigue poniendo el caller.
export function ProgressBar({ value, color }: { value: number; color: string }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setWidth(value));
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <div
      className="h-full rounded-full"
      style={{
        width: `${width}%`,
        background: color,
        transition: "width 500ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    />
  );
}
