"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Wrench, ShieldCheck, Home } from "lucide-react";
import { waLink } from "@/lib/utils";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* Fondo base (gradiente fijo + grilla sutil) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-40 bg-[radial-gradient(1200px_700px_at_12%_8%,#0b1d33_0%,transparent_60%),radial-gradient(1000px_600px_at_92%_20%,#0b2544_0%,transparent_60%),linear-gradient(#0b1626,#0b1626)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-30 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px, 48px 48px",
        }}
      />

      {/* MOBILE: foto de fondo + overlay más oscuro para legibilidad */}
      <div className="absolute inset-0 -z-20 md:hidden">
        <Image
          src="/img/hero-photo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      </div>

      {/* Partículas: solo desktop para no distraer ni afectar perf en mobile */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 14 }).map((_, k) => (
          <span
            key={k}
            className="absolute inline-block h-1.5 w-1.5 rounded-full bg-white/30"
            style={{
              left: `${(k * 53) % 100}%`,
              top: `${(k * 37) % 100}%`,
              animation: "float-slow 7s ease-in-out infinite",
              animationDelay: `${(k % 6) * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="container-narrow py-8 md:py-24">
        {/* Desktop: 2 columnas — Mobile: stacked con foto de fondo */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3 md:mb-4 [text-wrap:balance]"
            >
              G&amp;L Refrigeración
            </h1>

            <p className="text-base md:text-xl leading-relaxed text-white/90 mb-5 md:mb-7 max-w-xl">
              Más de 10 años instalando, manteniendo y reparando aires acondicionados y equipos de refrigeración.
            </p>

            {/* Beneficios: mobile 2 columnas, desktop 3 */}
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-5 md:mb-7 text-white/90 text-sm">
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00CFFF]" /> Técnicos
              </li>
              <li className="inline-flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#00CFFF]" /> ERSEP
              </li>
              <li className="inline-flex items-center gap-2 col-span-2 md:col-span-1">
                <Home className="w-4 h-4 text-[#00CFFF]" /> Hogares y comercios
              </li>
            </ul>

            {/* CTAs: full-width en mobile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="btn-gradient text-white h-12 sm:h-11 w-full sm:w-auto"
              >
                <a
                  href={waLink("Hola G&L Refrigeración, necesito asesoramiento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactanos ahora
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 h-12 sm:h-11 w-full sm:w-auto"
              >
                <a href="/presupuesto">Solicitar presupuesto</a>
              </Button>
            </div>

            {/* Claims: una línea scrolleable en mobile para no ocupar altura */}
            <div className="mt-6 md:mt-8 pt-4 border-t border-white/10 text-white/75 text-sm flex gap-6 overflow-x-auto no-scrollbar">
              <span>Visita en 24–48h</span>
              <span>Trabajos garantizados</span>
              <span>Optimización de rendimiento</span>
            </div>
          </motion.div>

          {/* Columna derecha (solo desktop): imagen en card limpia sin animación que distraiga */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="hidden md:block"
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-3 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/img/hero-photo.png"
                  alt="Trabajo técnico en equipo de refrigeración"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 520px, 640px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
