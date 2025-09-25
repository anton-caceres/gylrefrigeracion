import type { Metadata } from "next";
import QuoteForm from "@/components/forms/quote-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Solicitar presupuesto | G&L Refrigeración",
  description: "Pedí tu presupuesto profesional de instalación, mantenimiento o reparación. Técnicos matriculados, certificaciones ERSEP.",
};

export default function PresupuestoPage() {
  return (
    <div>
      <section className="section bg-gray-50 border-b">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Solicitar presupuesto
          </h1>
          <p className="text-gray-700 mb-4 max-w-3xl">
            Completá el formulario y te respondemos a la brevedad con una propuesta clara y profesional.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Técnicos matriculados</Badge>
            <Badge>Certificaciones eléctricas ERSEP</Badge>
            <Badge>Río Cuarto y zona</Badge>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
