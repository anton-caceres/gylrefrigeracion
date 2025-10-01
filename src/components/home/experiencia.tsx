"use client";

import { Award, Wrench, Building2, Rocket, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Item = {
  year: string;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  thumb?: string; // opcional: /img/trabajo1.jpg etc.
};

const timeline: Item[] = [
  {
    year: "2013",
    title: "Nace G&L Refrigeración.",
    desc: "Arrancamos con instalaciones residenciales.",
    icon: Award,
  },
  {
    year: "2016",
    title: "100+ instalaciones completas.",
    desc: "Optimización de procesos y seguridad.",
    icon: Wrench,
    thumb: "/img/trabajo1.jpg",
  },
  {
    year: "2020",
    title: "Expansión a refrigeración comercial.",
    desc: "Freezers, cámaras de frío y mantenimiento.",
    icon: Building2,
    thumb: "/img/trabajo2.jpg",
  },
  {
    year: "2023",
    title: "Nuevas zonas de cobertura.",
    desc: "Más comercios y alianzas locales.",
    icon: Rocket,
  },
];

function DotIcon({ Icon }: { Icon: Item["icon"] }) {
  return (
    <span className="relative mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0E76FF]/20 ring-1 ring-[#0E76FF]/40">
      <Icon className="h-3.5 w-3.5 text-[#00CFFF]" />
    </span>
  );
}

export function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
          Experiencia
        </h2>

        <div className="grid gap-10 md:grid-cols-[1fr_360px]">
          {/* Timeline */}
          <ol className="relative border-s border-white/10 pl-6">
            {timeline.map((it, idx) => (
              <li key={idx} className="mb-8 last:mb-0">
                <div className="absolute -left-[13px]">
                  <DotIcon Icon={it.icon} />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8ddcff]">
                      {it.year}
                    </p>
                    <h3 className="text-white font-semibold mt-1">{it.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed mt-1">
                      {it.desc}
                    </p>
                  </div>

                  {/* Mini thumb opcional */}
                  {it.thumb && (
                    <div className="shrink-0">
                      <div className="relative h-20 w-32 overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={it.thumb}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Panel lateral: propuesta de valor + CTA */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 h-fit">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Users2 className="h-5 w-5 text-[#00CFFF]" />
              ¿Por qué elegirnos?
            </h3>
            <ul className="text-sm text-white/80 space-y-1.5 mb-4">
              <li>Instalaciones certificadas y seguras.</li>
              <li>Trabajo prolijo y garantía por escrito.</li>
              <li>Respuesta en 24–48 h.</li>
            </ul>
            <Link
              href="/presupuesto"
              className="inline-flex h-11 items-center rounded-xl px-5 text-white btn-gradient w-full justify-center"
            >
              Solicitar presupuesto
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
