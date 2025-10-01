"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const wa = (num: string, text: string) =>
  `https://wa.me/${num}?text=${encodeURIComponent(text)}`;

const MSG = "Hola G&L Refrigeración, necesito asesoramiento.";

export function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Contacto</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Columna 1: WhatsApp + datos */}
          <div className="card bg-white/5 border-white/10 p-5 text-white lg:col-span-1">
            <p className="text-white/85">
              ¿Consulta rápida? Escribinos por WhatsApp o completá el formulario de{" "}
              <a className="underline" href="/presupuesto">presupuesto</a>.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <Button asChild className="btn-gradient h-11 text-white">
                <a
                  href={wa("5493584370092", MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Gustavo"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Gustavo
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 border-white/30 text-white hover:bg-white/10"
              >
                <a
                  href={wa("5493584856582", MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Luis"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Luis
                </a>
              </Button>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00CFFF]" />
                <a href="tel:+543584370092" className="hover:underline">358 437 0092 (Gustavo)</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00CFFF]" />
                <a href="tel:+543584856582" className="hover:underline">358 485 6582 (Luis)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00CFFF]" />
                <a href="mailto:contacto@gylrefrigeracion.com" className="hover:underline">
                  contacto@gylrefrigeracion.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00CFFF]" />
                <a
                  href="https://maps.app.goo.gl/K2wpsMaEDMFHY73eA?g_st=ac"
                  target="_blank" rel="noopener noreferrer" className="hover:underline"
                >
                  Río Cuarto y zona (ver mapa)
                </a>
              </li>
            </ul>

            {/* Botón Llamar ahora (solo mobile) */}
            <div className="mt-4 sm:hidden">
              <a
                href="tel:+543584370092"
                className="block w-full text-center rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-3 shadow-md transition"
              >
                📞 Llamar ahora
              </a>
            </div>
          </div>

          {/* Columna 2: Callout presupuesto */}
          <div className="card bg-white/5 border-white/10 p-5 text-white lg:col-span-1">
            <h3 className="text-xl font-semibold mb-1">¿Trabajo para cotizar?</h3>
            <p className="text-white/80 mb-4">
              Si ya sabés lo que necesitás, completá el formulario y recibí un presupuesto profesional en 24 h.
            </p>
            <Button asChild className="btn-gradient text-white h-11 w-full">
              <a href="/presupuesto">Completar formulario</a>
            </Button>
          </div>

          {/* Columna 3: Mini-mapa (ligero) */}
          <div className="card bg-white/5 border-white/10 p-0 overflow-hidden text-white lg:col-span-1">
            <div className="p-4 pb-0">
              <h3 className="text-xl font-semibold">Dónde trabajamos</h3>
              <p className="text-sm text-white/75">Río Cuarto y zona.</p>
            </div>
            <div className="relative aspect-[16/11]">
              <iframe
                title="Mapa Río Cuarto"
                className="absolute inset-0 h-full w-full"
                src="https://maps.google.com/maps?q=R%C3%ADo%20Cuarto&t=&z=12&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
              <a
                aria-label="Abrir en Google Maps"
                href="https://maps.app.goo.gl/K2wpsMaEDMFHY73eA?g_st=ac"
                target="_blank" rel="noopener noreferrer"
                className="absolute inset-0"
              />
            </div>
            <div className="p-4 pt-2">
              <Button
                asChild
                variant="outline"
                className="w-full h-10 border-white/30 text-white hover:bg-white/10"
              >
                <a
                  href="https://maps.app.goo.gl/K2wpsMaEDMFHY73eA?g_st=ac"
                  target="_blank" rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
