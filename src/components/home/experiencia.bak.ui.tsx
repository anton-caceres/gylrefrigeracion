import { Card } from "@/components/ui/card";
import MotionReveal from "@/components/motion-reveal";
import CountUp from "@/components/count-up";

const timeline = [
  { year: "2013", text: "Nace G&L Refrigeración." },
  { year: "2016", text: "100+ instalaciones de aires completadas." },
  { year: "2020", text: "Expansión a refrigeración comercial." },
  { year: "2023", text: "Clientes en toda la zona de Río Cuarto." },
  { year: "2025", text: "Soporte integral a hogares y comercios." }
];

export function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="container-narrow">
        <MotionReveal>
          <h2 className="text-3xl font-bold mb-8 heading-accent">Experiencia</h2>
        </MotionReveal>
        <div className="grid md:grid-cols-2 gap-8">
          <MotionReveal>
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
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center transition-transform hover:scale-[1.06] hover:shadow-xl motion-reduce:transform-none">
                <div className="text-3xl font-extrabold text-primary"><CountUp to={10} prefix="+" duration={2600} /></div>
                <div className="text-gray-600">años de experiencia</div>
              </Card>
              <Card className="p-8 text-center transition-transform hover:scale-[1.06] hover:shadow-xl motion-reduce:transform-none">
                <div className="text-3xl font-extrabold text-primary"><CountUp to={300} prefix="+" duration={2400} /></div>
                <div className="text-gray-600">equipos instalados</div>
              </Card>
              <Card className="p-8 text-center transition-transform hover:scale-[1.06] hover:shadow-xl motion-reduce:transform-none">
                <div className="text-3xl font-extrabold text-primary"><CountUp to={500} prefix="+" duration={2600} /></div>
                <div className="text-gray-600">mantenimientos</div>
              </Card>
              <Card className="p-8 text-center transition-transform hover:scale-[1.06] hover:shadow-xl motion-reduce:transform-none">
                <div className="text-3xl font-extrabold text-primary">4.9★</div>
                <div className="text-gray-600">promedio</div>
              </Card>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
