"use client";

import { useEffect, useRef, useState } from "react";
import type { KpiFormat } from "@/lib/mock-dashboard";

// `format` viaja como string (no función) porque cruza el borde Server → Client Component,
// donde las funciones no son serializables.
const FORMATTERS: Record<KpiFormat, (n: number) => string> = {
  int: (n) => String(Math.round(n)),
  percent: (n) => `${Math.round(n)}%`,
  currencyM: (n) => `$${n.toFixed(1)}M`,
};

// Anima SOLO cuando `value` cambia después del primer render (ej. refetch/realtime) — nunca un
// count-up desde 0 al montar (find-animation-opportunities: sin propósito en una pantalla vista
// decenas de veces al día). Usa WAAPI sobre una custom property registrada (@property en
// globals.css) para que el navegador interpole el número con su curva bezier nativa.
export function AnimatedNumber({ value, format }: { value: number; format: KpiFormat }) {
  const formatFn = FORMATTERS[format];
  const ref = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(value);
  const mounted = useRef(false);
  const [display, setDisplay] = useState(() => formatFn(value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!mounted.current) {
      mounted.current = true;
      prevValue.current = value;
      setDisplay(formatFn(value));
      return;
    }
    if (value === prevValue.current) return;

    const from = prevValue.current;
    prevValue.current = value;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(formatFn(value));
      return;
    }

    el.style.setProperty("--num", String(from));
    const animation = el.animate(
      [{ "--num": String(from) } as unknown as Keyframe, { "--num": String(value) } as unknown as Keyframe],
      { duration: 300, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "forwards" },
    );

    let raf: number;
    const tick = () => {
      const current = Number(getComputedStyle(el).getPropertyValue("--num"));
      setDisplay(formatFn(current));
      if (animation.playState === "running") {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(formatFn(value));
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [value, format, formatFn]);

  return <span ref={ref}>{display}</span>;
}
