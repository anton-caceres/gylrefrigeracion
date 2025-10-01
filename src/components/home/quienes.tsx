"use client";

import Image from "next/image";
import { ShieldCheck, Wrench, Users2, Zap } from "lucide-react";
import Link from "next/link";

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4 text-center">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}

export function Quienes() {
  return (
    <section id="quienes" className="section">
      <div className="container-narrow grid items-center gap-10 md:grid-cols-2">
        {/* Texto */}
        <div>
          {/* Kicker */}
          <p className="text-xs uppercase tracking-wide text-[#8ddcff] mb-2">
            Técnicos matriculados · Río Cuarto
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            ¿Quiénes somos?
          </h2>

          <p className="text-white/85 leading-relaxed mb-6 max-w-prose">
            Somos técnicos matriculados con más de <strong>10 años</strong> de experiencia.
            Brindamos instalación, mantenimiento y reparación de equipos de climatización y
            refrigeración para hogares y comercios en Río Cuarto y zona.
          </p>

          {/* Diferenciales */}
          <ul className="space-y-3 mb-7">
            <li className="flex gap-3">
              <ShieldCheck className="w-5 h-5 mt-1 text-[#00CFFF]" />
              <div>
                <p className="font-semibold text-white">Certificaciones eléctricas ERSEP</p>
                <p className="text-sm text-white/75">Trabajos habilitados y seguros.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Users2 className="w-5 h-5 mt-1 text-[#00CFFF]" />
              <div>
                <p className="font-semibold text-white">Atención a hogares y comercios</p>
                <p className="text-sm text-white/75">Servicio a medida, sin complicaciones.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Wrench className="w-5 h-5 mt-1 text-[#00CFFF]" />
              <div>
                <p className="font-semibold text-white">Instalación y mantenimiento</p>
                <p className="text-sm text-white/75">Mejor performance, menor consumo.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Zap className="w-5 h-5 mt-1 text-[#00CFFF]" />
              <div>
                <p className="font-semibold text-white">Respuesta rápida + garantía</p>
                <p className="text-sm text-white/75">Compromiso y seguimiento post-servicio.</p>
              </div>
            </li>
          </ul>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <KPI value="+10" label="Años" />
            <KPI value="+300" label="Instalaciones" />
            <KPI value="4.9★" label="Promedio" />
          </div>

          {/* CTAs contextuales */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="#galeria"
              className="inline-flex h-11 items-center rounded-xl px-5 text-white btn-gradient"
            >
              Ver trabajos
            </Link>
            <Link
              href="/presupuesto"
              className="inline-flex h-11 items-center rounded-xl px-5 border border-white/30 text-white hover:bg-white/10"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <Image
              src="/img/portada.jpg"
              alt="Equipo técnico de G&L Refrigeración en obra"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority={false}
              sizes="(max-width: 768px) 100vw, 520px"
            />
            {/* Mask/overlay sutil para integrarse con el fondo */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
