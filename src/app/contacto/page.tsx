import { Contacto } from "@/components/home/contacto";

export const metadata = {
  title: "Contacto | G&L Refrigeración"
};

export default function ContactoPage() {
  return <Contacto />;
}

{/* Botón Llamar ahora (solo mobile) */}
<div className="mt-4 sm:hidden">
  <a
    href="tel:+543584370092"
    className="block w-full text-center rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-3 shadow-md transition"
  >
    📞 Llamar ahora
  </a>
</div>

