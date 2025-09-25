"use client";
import { useEffect, useState } from "react";

export default function CountUp({
  to,
  duration = 1200,
  prefix = "",
  suffix = ""
}: { to: number; duration?: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    let raf = 0;
    const anim = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(anim);
    };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span>{prefix}{val}{suffix}</span>;
}
