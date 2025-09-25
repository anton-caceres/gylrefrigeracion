"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function AnnouncementBar() {
  const key = "announcement-dismissed-v1";
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(key) === "1") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) localStorage.setItem(key, "1");
  }, [open]);

  if (!open) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="container-narrow flex items-center justify-between py-2 text-sm">
        <div className="font-medium">
          🔧 Inicio de temporada: <span className="underline decoration-white/60">10% OFF</span> en mantenimiento preventivo.
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Cerrar aviso"
          className="rounded-lg p-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
