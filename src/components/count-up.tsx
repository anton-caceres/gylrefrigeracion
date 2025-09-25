"use client";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function CountUp({
  to,
  duration = 2000,
  prefix = "",
  suffix = ""
}: { to: number; duration?: number; prefix?: string; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [val, setVal] = useState(0);
  const [finished, setFinished] = useState(false);

  // reinicia estado si se re-monta
  useEffect(() => { setVal(0); setFinished(false); }, [to]);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const anim = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      // easing out (cubic)
      const ease = 1 - Math.pow(1 - p, 3);
      const next = Math.round(ease * to);
      setVal(next);
      if (p < 1) raf = requestAnimationFrame(anim);
      else setFinished(true);
    };
    raf = requestAnimationFrame(anim);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const classes = useMemo(() => cn(finished && "pop-finish"), [finished]);

  return <span ref={ref} className={classes}>{prefix}{val}{suffix}</span>;
}
