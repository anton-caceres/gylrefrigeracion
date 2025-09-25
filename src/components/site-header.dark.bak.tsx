"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/#quienes", label: "Quiénes somos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/presupuesto", label: "Presupuesto" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkBase =
    "relative inline-flex items-center gap-1 py-1 transition-transform will-change-transform hover:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";
  const underline =
    "after:absolute after:-bottom-1 after:left-0 after:h-1.5 after:w-0 after:bg-gradient-to-r after:from-\[\#0E76FF\] after:to-\[\#00CFFF\] after:rounded-full after:transition-all hover:after:w-full";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-transparent transition-colors",
        scrolled && "border-gray-200"
      )}
    >
      <div className="container-narrow flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight hover:scale-[1.03] transition-transform">
          G&amp;L Refrigeración
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(linkBase, underline, active && "text-primary font-semibold after:w-full")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild className="hover:scale-[1.03] transition-transform">
            <a href="/presupuesto">Solicitar presupuesto</a>
          </Button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-gray-100"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Panel mobile */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-narrow py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-sm hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-1">
              <a href="/presupuesto">Solicitar presupuesto</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
