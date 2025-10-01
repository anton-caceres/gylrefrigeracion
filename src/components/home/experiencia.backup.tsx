import { Card } from "@/components/ui/card";

const timeline = [
  { year: "2013", text: "Nace G&L Refrigeración." },
  { year: "2016", text: "100+ instalaciones de aires completadas." },
  { year: "2020", text: "Expansión a refrigeración comercial." },
  { year: "2023", text: "Clientes en toda la zona de Río Cuarto." },
  { year: "2025", text: "Soporte integral a hogares y comercios." }
];

const kpis = [
  { label: "+10", sub: "años de experiencia" },
  { label: "+300", sub: "equipos instalados" },
  { label: "+500", sub: "mantenimientos" },
  { label: "4.9★", sub: "promedio" },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <ol className="relative border-s border-gray-200 ms-3 space-y-6">
              {timeline.map((t, i) => (
                <li key={i} className="ms-4">
                  <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-semibold text-primary">{t.year}</time>
                  <p className="text-white/80">{t.text}</p>
                </li>
              ))}
            </ol>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            {kpis.map((k) => (
              <Card key={k.label} className="p-8 text-center">
                <div className="text-3xl font-extrabold text-primary">{k.label}</div>
                <div className="text-gray-600">{k.sub}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
