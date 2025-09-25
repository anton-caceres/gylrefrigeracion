"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn, waLink } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/#quienes", label: "Quiénes somos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-transparent", scrolled && "border-gray-200")}>
      <div className="container-narrow flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          G&amp;L Refrigeración
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={cn("hover:text-primary", pathname === n.href ? "text-primary font-semibold" : "")}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild>
            <a href={waLink("Hola G&L Refrigeración, quisiera solicitar un presupuesto.")} target="_blank" rel="noopener noreferrer">
              Solicitar presupuesto
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
