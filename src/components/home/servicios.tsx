import { Wrench, Fan, Refrigerator, Factory, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import MotionReveal from "@/components/motion-reveal";

const items = [
  { icon: Fan, title: "Instalación de aires", desc: "Split y centrales. Cálculo de carga térmica." },
  { icon: Wrench, title: "Mantenimiento", desc: "Preventivo y correctivo. Mejora de rendimiento." },
  { icon: Refrigerator, title: "Reparación de heladeras", desc: "Familiares y comerciales." },
  { icon: Factory, title: "Freezers y cámaras", desc: "Servicio técnico especializado." },
  { icon: ShieldCheck, title: "Certificaciones ERSEP", desc: "Eléctricas aptas para tu seguridad." },
];

export function Servicios() {
  return (
    <section id="servicios" className="section">
      <div className="container-narrow">
        <MotionReveal>
          <h2 className="text-3xl font-bold mb-8 heading-accent">Servicios</h2>
        </MotionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <MotionReveal key={title} delay={0.05 * i}>
              <Card className="p-0 transition-transform hover:-translate-y-1">
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
