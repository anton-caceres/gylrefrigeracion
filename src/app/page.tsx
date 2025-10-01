import dynamic from "next/dynamic";

import { Hero } from "@/components/home/hero";
import { Quienes } from "@/components/home/quienes";
import { Servicios } from "@/components/home/servicios";
import { Experiencia } from "@/components/home/experiencia";
import { Contacto } from "@/components/home/contacto";

const Galeria = dynamic(
  () => import("@/components/home/galeria").then((m) => m.Galeria),
  {
    ssr: false,
    loading: () => (
      <div className="section">
        <div className="container-narrow text-white/70">Cargando galería…</div>
      </div>
    ),
  }
);

const TestimoniosDyn = dynamic(
  () => import("@/components/home/testimonios").then((m) => m.Testimonios),
  {
    ssr: false,
    loading: () => (
      <div className="section">
        <div className="container-narrow text-white/70">Cargando testimonios…</div>
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quienes />
      <Servicios />
      <Experiencia />
      <Galeria />
      <TestimoniosDyn />
      <Contacto />
    </>
  );
}
