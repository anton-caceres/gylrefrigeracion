import MotionReveal from "@/components/motion-reveal";

export function Quienes() {
  return (
    <section id="quienes" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
        <MotionReveal>
          <div>
            <h2 className="text-3xl font-bold mb-4">Quiénes somos</h2>
            <p className="text-gray-700">
              Somos técnicos matriculados con más de 10 años de experiencia en climatización, refrigeración
              comercial y electricidad. Combinamos calidad, seguridad y tiempos de respuesta.
            </p>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <div className="relative rounded-2xl shadow-soft overflow-hidden aspect-[4/3]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/img/portada.jpg"
              alt="Equipo técnico de G&L Refrigeración"
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
