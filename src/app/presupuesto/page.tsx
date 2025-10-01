import type { Metadata } from "next";
import QuoteForm from "@/components/forms/quote-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Solicitar presupuesto | G&L Refrigeración",
  description:
    "Pedí tu presupuesto profesional de instalación, mantenimiento o reparación. Técnicos matriculados, certificaciones ERSEP.",
};

export default function PresupuestoPage() {
  return (
    <div>
      {/* Hero oscuro consistente con el sitio */}
      <section className="section relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_12%_6%,#0a1a2f_0%,transparent_60%),radial-gradient(900px_540px_at_90%_18%,#0d243d_0%,transparent_60%),linear-gradient(#0b1626,#0b1626)]"
        />
        <div className="container-narrow">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Solicitar presupuesto
          </h1>
          <p className="text-white/80 mb-4 max-w-3xl">
            Completá el formulario y te respondemos a la brevedad con una propuesta clara y profesional.
          </p>

          {/* Chips con alto contraste */}
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-gradient-to-r from-[#0E76FF] to-[#00CFFF] text-white font-medium border-none shadow-sm">
              Técnicos matriculados
            </Badge>
            <Badge className="bg-gradient-to-r from-[#0E76FF] to-[#00CFFF] text-white font-medium border-none shadow-sm">
              Certificaciones eléctricas ERSEP
            </Badge>
            <Badge className="bg-gradient-to-r from-[#0E76FF] to-[#00CFFF] text-white font-medium border-none shadow-sm">
              Río Cuarto y zona
            </Badge>
          </div>
        </div>
      </section>

      {/* Formulario en card dark */}
      <section id="contacto" className="section">
        <div className="container-narrow">
          <div className="card p-6 md:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
