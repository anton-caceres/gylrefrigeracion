export const metadata = {
  title: "¡Gracias! | G&L Refrigeración",
  description: "Recibimos tu solicitud. Te contactaremos a la brevedad.",
};

export default function GraciasPage() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <h1 className="text-4xl font-extrabold mb-3">¡Gracias!</h1>
        <p className="text-white/80 mb-8">
          Recibimos tu solicitud de presupuesto. Te vamos a responder a la brevedad.
        </p>
        <a
          href="/"
          className="inline-flex items-center rounded-xl px-4 py-2 bg-[#0E76FF] hover:bg-[#0B5ED7] text-white"
        >
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
