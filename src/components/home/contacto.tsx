"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { waLink } from "@/lib/utils";

export function Contacto() {
  async function onSubmit(formData: FormData) {
    const body = Object.fromEntries(formData.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    if (res.ok) toast.success("Mensaje enviado. Te contactaremos a la brevedad.");
    else toast.error("No se pudo enviar. Probá por WhatsApp.");
  }

  return (
    <section id="contacto" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl font-bold mb-6 heading-accent">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={(e)=>{e.preventDefault(); onSubmit(new FormData(e.currentTarget));}} className="card p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <Input name="name" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" name="email" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <Input type="tel" name="phone" required />
              </div>
            </div>
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
              <label className="block text-sm font-medium mb-1">Mensaje</label>
              <Textarea name="message" required />
            </div>
            <Button type="submit">Enviar</Button>
          </form>
          <div className="space-y-4">
            <a className="block card p-6 font-semibold text-primary underline" href={waLink("Hola, necesito presupuesto")} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a>
            <div className="card p-6">
              <div className="font-semibold mb-2">Datos</div>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Tel: +54 0 0000 0000</li>
                <li>Email: info@gyl.com</li>
                <li>Dirección: A completar</li>
                <li>Horario: Lun–Sáb 9–19h</li>
                <li>Cobertura: Río Cuarto y zona</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
