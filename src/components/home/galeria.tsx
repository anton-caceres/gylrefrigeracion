"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "@/components/ui/lightbox";

const fotos = Array.from({ length: 10 }, (_, i) => ({
  src: `/img/trabajo${i + 1}.jpg`,
  alt: `Trabajo ${i + 1}`,
}));

export function Galeria() {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i]);

  useEffect(() => {
    const wrap = thumbRef.current;
    const active = wrap?.querySelector<HTMLButtonElement>(`[data-index="${i}"]`);
    if (wrap && active) {
      if (active.offsetLeft < wrap.scrollLeft || active.offsetLeft > wrap.scrollLeft + wrap.clientWidth - active.clientWidth) {
        wrap.scrollTo({ left: active.offsetLeft - wrap.clientWidth / 2, behavior: "smooth" });
      }
    }
  }, [i]);

  // Swipe
  const touch = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const onTouchStart = (e: React.TouchEvent) => { touch.current.x = e.touches[0].clientX; touch.current.y = e.touches[0].clientY; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touch.current.x === null) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y!;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
    touch.current.x = touch.current.y = null;
  };

  const go = (idx: number) => setI((idx + fotos.length) % fotos.length);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  return (
    <section id="galeria" className="section pt-8">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Nuestro trabajo</h2>

        {/* Viewer */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div
            ref={trackRef}
            className="relative aspect-[4/3] w-full overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-live="polite"
          >
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${i * 100}%)` }}
            >
              {fotos.map((f, idx) => (
                <button
                  key={f.src}
                  className="relative shrink-0 grow-0 basis-full"
                  onClick={() => { setOpen(true); setI(idx); }}
                  aria-label={`Abrir ${f.alt}`}
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 960px"
                    quality={70}
                    priority={i === 0}
                  />
                </button>
              ))}
            </div>
          </div>

        {/* Controls */}
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/40 text-white hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E76FF]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/40 text-white hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E76FF]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {fotos.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Ir a foto ${idx + 1}`}
                onClick={() => go(idx)}
                className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2.5 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div ref={thumbRef} className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none]">
          {fotos.map((f, idx) => (
            <button
              key={f.src}
              data-index={idx}
              onClick={() => go(idx)}
              className={`relative h-16 w-28 rounded-xl overflow-hidden border ${i === idx ? "border-[#00CFFF]" : "border-white/10"}`}
              aria-label={`Seleccionar ${f.alt}`}
            >
              <Image src={f.src} alt="" fill className="object-cover" sizes="128px" />
            </button>
          ))}
        </div>

        <p className="mt-3 text-white/60 text-sm"></p>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        items={fotos}
        index={i}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
