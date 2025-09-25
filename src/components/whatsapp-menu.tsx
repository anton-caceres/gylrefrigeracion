"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPPS, waLinkFor } from "@/lib/contacts";

export default function WhatsAppMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Elegir contacto de WhatsApp"
          className="mb-3 w-64 card p-3"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Escribir por WhatsApp</div>
            <button
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
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

      <button
        aria-label="Abrir menú de WhatsApp"
        onClick={() => setOpen((v) => !v)}
        className="rounded-full shadow-soft bg-primary text-white h-14 w-14 flex items-center justify-center hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
