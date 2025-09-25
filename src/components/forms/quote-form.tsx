"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { WHATSAPPS, waLinkFor } from "@/lib/contacts";
import { MessageCircle, X } from "lucide-react";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setWaOpen(false);
      }
    }
    if (waOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [waOpen]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries());

    if (!String(body.name).trim() || !String(body.email).trim() || !String(body.phone).trim()) {
      toast.error("Completá nombre, email y teléfono.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ...body,
          source: "presupuesto",
          createdAt: new Date().toISOString()
        })
      });
      if (!res.ok) throw new Error();
      toast.success("¡Listo! Recibimos tu solicitud de presupuesto.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      toast.error("No se pudo enviar. Probá por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-5" aria-labelledby="form-title">
      <h2 id="form-title" className="text-xl font-bold">Datos para tu presupuesto</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nombre y apellido</label>
          <Input name="name" required placeholder="Ej: Antonella Cáceres" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input name="email" type="email" required placeholder="tu@mail.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Teléfono</label>
          <Input name="phone" type="tel" required placeholder="+54 9 ..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Preferencia de contacto</label>
          <select name="preferred" className="h-10 w-full rounded-xl border border-gray-300 px-3 text-sm">
            <option value="whatsapp">WhatsApp</option>
            <option value="llamada">Llamada</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tipo de servicio</label>
          <select name="service" className="h-10 w-full rounded-xl border border-gray-300 px-3 text-sm">
            <option>Instalación de aire</option>
            <option>Mantenimiento</option>
            <option>Reparación heladera</option>
            <option>Freezer / Cámara de frío</option>
            <option>Certificación ERSEP</option>
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Ubicación (barrio/ciudad)</label>
          <Input name="location" placeholder="Río Cuarto, barrio ..." />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">¿Cuándo te gustaría hacerlo?</label>
          <select name="when" className="h-10 w-full rounded-xl border border-gray-300 px-3 text-sm">
            <option>Urgente (24-48 hs)</option>
            <option>Esta semana</option>
            <option>Este mes</option>
            <option>Solo pidiendo info</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Presupuesto estimado</label>
          <select name="budget" className="h-10 w-full rounded-xl border border-gray-300 px-3 text-sm">
            <option>Sin definir</option>
            <option>$0–$100.000</option>
            <option>$100.000–$300.000</option>
            <option>$300.000–$600.000</option>
            <option>$600.000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <Textarea name="message" required placeholder="Contanos el equipo, marca/modelo, altura, distancia al tomacorriente, etc." />
      </div>

      <div className="relative">
        <div className="flex flex-wrap gap-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar solicitud"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => setWaOpen((v) => !v)}
            aria-expanded={waOpen}
            aria-controls="wa-panel"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Prefiero WhatsApp
          </Button>
        </div>

        {waOpen && (
          <div
            id="wa-panel"
            ref={panelRef}
            role="dialog"
            aria-label="Elegir contacto de WhatsApp"
            className="absolute mt-3 z-20 w-[min(100%,20rem)] card p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Escribir por WhatsApp</div>
              <button
                aria-label="Cerrar"
                onClick={() => setWaOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              {WHATSAPPS.map((c) => (
                <Button
                  key={c.number}
                  asChild
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => setWaOpen(false)}
                >
                  <a
                    href={waLinkFor(
                      c.number,
                      `Hola ${c.name}, quisiera un presupuesto de G&L Refrigeración`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {c.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Protegemos tus datos. Solo los usamos para contactarte por tu solicitud.
      </p>
    </form>
  );
}
