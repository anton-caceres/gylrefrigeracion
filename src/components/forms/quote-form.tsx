"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  nombre: string;
  email: string;
  telefono: string;
  servicio: "instalacion" | "mantenimiento" | "reparacion" | "electricidad" | "otro";
  mensaje: string;
  destino: "gustavo" | "luis";
};

const WA_GUSTAVO = process.env.NEXT_PUBLIC_WA_GUSTAVO || "5493584370092";
const WA_LUIS    = process.env.NEXT_PUBLIC_WA_LUIS    || "5493584856582";

// Arma el texto para WhatsApp con los datos del form
function buildWhatsAppText(data: FormState) {
  const servicioLabel: Record<FormState["servicio"], string> = {
    instalacion: "Instalación de aire",
    mantenimiento: "Mantenimiento",
    reparacion: "Reparación",
    electricidad: "Electricidad / Certificación ERSEP",
    otro: "Otro servicio",
  };

  const lines = [
    "Hola G&L Refrigeración, quiero solicitar un presupuesto:",
    "",
    `• Nombre: ${data.nombre || "-"}`,
    `• Email: ${data.email || "-"}`,
    `• Teléfono: ${data.telefono || "-"}`,
    `• Servicio: ${servicioLabel[data.servicio]}`,
    "",
    data.mensaje?.trim() ? `Detalle: ${data.mensaje.trim()}` : "Detalle: -",
  ];

  return lines.join("\n");
}

export default function QuoteForm() {
  const [sending, setSending] = React.useState(false);
  const [form, setForm] = React.useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "instalacion",
    mensaje: "",
    destino: "gustavo",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.currentTarget;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validaciones mínimas (UX)
    if (!form.nombre.trim()) return toast.error("Ingresá tu nombre.");
    if (!form.telefono.trim()) return toast.error("Ingresá un teléfono.");
    // email opcional, pero si viene, validamos formato simple
    if (form.email && !/.+@.+\..+/.test(form.email)) {
      return toast.error("El email no parece válido.");
    }

    try {
      setSending(true);

      const text = buildWhatsAppText(form);
      const number = form.destino === "luis" ? WA_LUIS : WA_GUSTAVO;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

      // Abrimos WhatsApp en nueva pestaña (desktop) o app (mobile)
      window.open(url, "_blank", "noopener,noreferrer");

      toast.success("Abrimos WhatsApp con tu mensaje. ¡Completalo y enviá!");
    } catch (err) {
      console.error(err);
      toast.error("No pudimos abrir WhatsApp. Probá de nuevo.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 card p-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm text-white/80 mb-1">Nombre*</label>
          <Input
            id="nombre" name="nombre" value={form.nombre} onChange={onChange}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm text-white/80 mb-1">Teléfono*</label>
          <Input
            id="telefono" name="telefono" value={form.telefono} onChange={onChange}
            placeholder="351..."
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-white/80 mb-1">Email</label>
          <Input
            id="email" name="email" type="email" value={form.email} onChange={onChange}
            placeholder="tucorreo@example.com"
          />
        </div>
        <div>
          <label htmlFor="servicio" className="block text-sm text-white/80 mb-1">Servicio</label>
          <select
            id="servicio" name="servicio" value={form.servicio} onChange={onChange}
            className="h-10 w-full rounded-md border border-white/10 bg-transparent px-3 text-white/90"
          >
            <option value="instalacion">Instalación de aire</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="reparacion">Reparación</option>
            <option value="electricidad">Electricidad / Certificación ERSEP</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm text-white/80 mb-1">Detalle</label>
        <Textarea
          id="mensaje" name="mensaje" value={form.mensaje} onChange={onChange}
          placeholder="Contanos marca/modelo, síntomas, dirección aproximada, etc."
          className="min-h-[120px]"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="destino" className="block text-sm text-white/80 mb-1">Enviar a</label>
          <select
            id="destino" name="destino" value={form.destino} onChange={onChange}
            className="h-10 w-full rounded-md border border-white/10 bg-transparent px-3 text-white/90"
          >
            <option value="gustavo">WhatsApp Gustavo</option>
            <option value="luis">WhatsApp Luis</option>
          </select>
          <p className="text-xs text-white/60 mt-1">Podés elegir a quién enviar el pedido.</p>
        </div>

        <div className="self-end">
          <Button
            type="submit"
            disabled={sending}
            className="btn-gradient text-white h-11 w-full"
          >
            {sending ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
          </Button>
        </div>
      </div>

      <p className="text-xs text-white/60">
        Tus datos son confidenciales. Solo los usamos para responder tu consulta.
      </p>
    </form>
  );
}
