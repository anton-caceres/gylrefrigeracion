export function Quienes() {
  return (
    <section id="quienes" className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Quiénes somos</h2>
          <p className="text-gray-700">
            Somos técnicos matriculados con más de 10 años de experiencia en climatización, refrigeración
            comercial y electricidad. Combinamos calidad, seguridad y tiempos de respuesta.
          </p>
        </div>
        <img
          className="rounded-2xl shadow-soft"
          src="/img/portada.jpg"
          alt="Equipo técnico en obra"
        />
      </div>
    </section>
  );
}
