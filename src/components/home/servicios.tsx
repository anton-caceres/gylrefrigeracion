import { Card } from "@/components/ui/card";
import { Wrench, Snowflake, Refrigerator, ShieldCheck, Gauge } from "lucide-react";

const items = [
  { icon: Snowflake,   title: "Instalación de aires",     desc: "Split y centrales. Cálculo de carga térmica." },
  { icon: Gauge,       title: "Mantenimiento",            desc: "Preventivo y correctivo. Mejora de rendimiento." },
  { icon: Refrigerator,title: "Reparación de heladeras",  desc: "Familiares y comerciales." },
  { icon: Wrench,      title: "Freezers y cámaras",       desc: "Servicio técnico especializado." },
  { icon: ShieldCheck, title: "Certificaciones ERSEP",    desc: "Eléctricas aptas para tu seguridad." },
];

export function Servicios() {
  return (
    <section id="servicios" className="section scroll-mt-28">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Servicios</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#00CFFF] border border-white/15">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-subtle text-sm">{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    <div className="section-divider opacity-10 mx-auto max-w-5xl mt-6"></div>
</section>
  );
}
