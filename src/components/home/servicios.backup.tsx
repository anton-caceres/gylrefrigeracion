import { Wrench, Fan, Refrigerator, Factory, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const items = [
  { icon: Fan, title: "Instalación de aires", desc: "Split y centrales. Cálculo de carga térmica." },
  { icon: Wrench, title: "Mantenimiento", desc: "Preventivo y correctivo. Mejora de rendimiento." },
  { icon: Refrigerator, title: "Reparación de heladeras", desc: "Familiares y comerciales." },
  { icon: Factory, title: "Freezers y cámaras", desc: "Servicio técnico especializado." },
  { icon: ShieldCheck, title: "Certificaciones ERSEP", desc: "Eléctricas aptas para tu seguridad." },
];

export function Servicios() {
  return (
    <section id="servicios" className="section bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold mb-8">Servicios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <CardHeader><CardTitle className="flex items-center gap-3"><Icon className="h-5 w-5 text-primary" />{title}</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">{desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
