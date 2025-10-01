"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; alt: string };

export default function Lightbox({
  open,
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  items: Item[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  const it = items[index];

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="visor de imágenes"
    >
      {/* Cerrar */}
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute right-4 top-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Imagen */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9]">
          <Image src={it.src} alt={it.alt} fill className="object-contain" sizes="100vw" priority />
        </div>
      </div>

      {/* Controles */}
      <button
        aria-label="Anterior"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="Siguiente"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-white/10 text-white hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pie */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-sm px-4">
        {index + 1} / {items.length} — {it.alt}
      </div>
    </div>
  );
}
