"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export default function CountUp({
  to,
  duration = 2000,
  prefix = "",
  suffix = ""
}: { to: number; duration?: number; prefix?: string; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const anim = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      // easing out (cubic)
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) raf = requestAnimationFrame(anim);
    };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}
