import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { waLink } from "@/lib/utils";

export function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616362407685-7c5ea8f2b808?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover opacity-20"
      />
      <div className="container-narrow relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">G&amp;L Refrigeración ❄️</h1>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Más de 10 años instalando, manteniendo y reparando aires acondicionados y equipos de refrigeración.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge>Técnicos matriculados</Badge>
            <Badge>Certificaciones eléctricas ERSEP</Badge>
            <Badge>Hogares y comercios</Badge>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <a href={waLink("Hola G&L Refrigeración, necesito asesoramiento.")} target="_blank" rel="noopener noreferrer">Contactanos ahora</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contacto">Solicitar presupuesto</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
