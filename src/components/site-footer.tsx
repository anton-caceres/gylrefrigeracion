import { Facebook, Instagram, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20 text-white/85">
      <div className="container-narrow py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-white mb-2">G&L Refrigeración</h4>
          <p className="text-sm">
            Instalación, mantenimiento y reparación de aires acondicionados y equipos de refrigeración.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-2">Contacto</h5>
          <ul className="space-y-1 text-sm">
            <li>Tel: <a className="hover:underline" href="tel:+543584370092">358 437 0092</a> (Gustavo)</li>
            <li>Tel: <a className="hover:underline" href="tel:+543584856582">358 485 6582</a> (Luis)</li>
            <li>Email: <a className="hover:underline" href="mailto:contacto@gylrefrigeracion.com">contacto@gylrefrigeracion.com</a></li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00CFFF]" />
              <a
                className="hover:underline"
                href="https://maps.app.goo.gl/K2wpsMaEDMFHY73eA?g_st=ac"
                target="_blank" rel="noopener noreferrer"
              >
                Río Cuarto y zona (ver mapa)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-2">Redes</h5>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/gylrefrigeracion_electricidad?igsh=MWtkZThydmxwa3EwYw=="
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              <span className="p-2 rounded-xl bg-white/10 border border-white/10">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/1ABTTsdUEp/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              <span className="p-2 rounded-xl bg-white/10 border border-white/10">
                <Facebook className="h-5 w-5" />
              </span>
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 text-center text-xs text-white/60">
          © 2025 G&L Refrigeración — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
