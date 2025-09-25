import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t">
      <div className="container-narrow py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-bold mb-2">G&amp;L Refrigeración</div>
          <p className="text-gray-600">Instalación, mantenimiento y reparación de aires acondicionados y equipos de refrigeración.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contacto</div>
          <ul className="space-y-1 text-gray-700">
            <li>Tel: <a href="tel:+5400000000" className="underline">+54 0 0000 0000</a></li>
            <li>Email: <a className="underline" href="mailto:info@gyl.com">info@gyl.com</a></li>
            <li>Dirección: A completar</li>
            <li>Horario: Lun–Sáb 9–19h</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Redes</div>
          <ul className="space-y-1">
            <li><Link className="underline" href="#">Instagram</Link></li>
            <li><Link className="underline" href="#">Facebook</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} G&amp;L Refrigeración — Todos los derechos reservados.</div>
    </footer>
  );
}
