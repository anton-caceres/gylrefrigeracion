"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/#quienes", label: "Quiénes somos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Cerrar al cambiar ruta (páginas)…
  useEffect(() => { setOpen(false); }, [pathname]);

  // …y también al cambiar hash (/#ancla)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Scroll style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al clicar cualquier item del panel móvil
  const handleNavClick = useCallback(() => setOpen(false), []);

  const linkBase =
    "relative inline-flex items-center gap-1 py-1 text-white/80 hover:text-white transition";
  const underline =
    "after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-0 after:bg-gradient-to-r after:from-[#0E76FF] after:to-[#00CFFF] after:rounded-full after:transition-all hover:after:w-full";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors border-b border-white/10",
        scrolled ? "bg-black/40 backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="container-narrow flex items-center justify-between py-3">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-white"
          onClick={handleNavClick}
        >
          G&amp;L Refrigeración
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(linkBase, underline, active && "text-white font-semibold after:w-full")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex">
          <Button asChild className="bg-[#0E76FF] hover:bg-[#0B5ED7] text-white">
            <a href="/presupuesto">Solicitar presupuesto</a>
          </Button>
        </div>

        {/* Toggle móvil */}
        <button
          className="md:hidden p-2 rounded-xl text-white/80 hover:bg-white/10"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur">
          <div className="container-narrow py-3 flex flex-col gap-2">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={handleNavClick}
                className="py-2 text-sm text-white/80 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-1 bg-[#0E76FF] hover:bg-[#0B5ED7] text-white">
              <a href="/presupuesto" onClick={handleNavClick}>Solicitar presupuesto</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
