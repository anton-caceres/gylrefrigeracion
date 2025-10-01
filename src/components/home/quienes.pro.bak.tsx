"use client";

import Image from "next/image";
import { ShieldCheck, Wrench, Users2 } from "lucide-react";

export function Quienes() {
  return (
    <section id="quienes" className="section relative overflow-hidden">
      {/* Sutil fondo claro para dar profundidad sin oscurecer la página */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#f7fafc]" />

      <div className="container-narrow grid gap-10 md:grid-cols-2 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            ¿Quiénes somos?
          </h2>

          <p className="text-white/80 leading-relaxed mb-6 max-w-prose">
            Somos técnicos matriculados con más de <strong>10 años</strong> de experiencia en
            climatización, refrigeración comercial y electricidad. Combinamos <strong>calidad</strong>,
            <strong> seguridad</strong> y <strong>tiempos de respuesta</strong> para hogares y comercios
            de Río Cuarto y zona.
          </p>

          {/* Puntos de confianza */}
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-white/90">Técnicos matriculados</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Wrench className="w-5 h-5" />
              </span>
              <span className="text-white/90">Instalación y mantenimiento</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
                <Users2 className="w-5 h-5" />
              </span>
              <span className="text-white/90">Atención a hogares y comercios</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-white/90">Certificaciones eléctricas ERSEP</span>
            </li>
          </ul>

          {/* Mini KPIs */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="card p-4">
              <div className="text-xl font-extrabold text-sky-600">+10</div>
              <div className="text-xs text-slate-500">Años</div>
            </div>
            <div className="card p-4">
              <div className="text-xl font-extrabold text-sky-600">+300</div>
              <div className="text-xs text-slate-500">Instalaciones</div>
            </div>
            <div className="card p-4">
              <div className="text-xl font-extrabold text-sky-600">4.9★</div>
              <div className="text-xs text-slate-500">Promedio</div>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative rounded-2xl overflow-hidden shadow-soft">
          <div className="relative aspect-[4/3]">
            <Image
              src="/img/portada.jpg"  /* reemplazá por tu imagen si querés */
              alt="Equipo técnico de G&L Refrigeración trabajando en obra"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
