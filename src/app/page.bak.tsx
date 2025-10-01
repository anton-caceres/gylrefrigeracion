import { Hero } from "@/components/home/hero";
import { Quienes } from "@/components/home/quienes";
import { Servicios } from "@/components/home/servicios";
import { Experiencia } from "@/components/home/experiencia";
import { Testimonios } from "@/components/home/testimonios";
import { Contacto } from "@/components/home/contacto";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quienes />
      <Servicios />
      <Experiencia />
      <Testimonios />
      <Contacto />
    </>
  );
}
