"use client";
import Link from "next/link";
export default function WhatsAppFab(){
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:hidden">
      <Link
        href={`https://wa.me/5493584370092?text=${encodeURIComponent("Hola G&L, necesito asesoramiento.")}`}
        className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="Contactar por WhatsApp"
      >WA</Link>
    </div>
  );
}
