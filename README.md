# G&L Refrigeración — Landing Next.js 14

Landing profesional para G&L Refrigeración (App Router + Tailwind + shadcn/ui + sonner + framer-motion).

## Requisitos
- Node 18+
- pnpm (recomendado)

## Configuración
1. Copiar `.env.example` a `.env.local` y completar:
```
ADMIN_PASS="cambiar-por-uno-seguro"
NEXT_PUBLIC_WHATSAPP="549XXXXXXXXXX"
RESEND_API_KEY=""
FORMSPREE_ENDPOINT=""
```
2. Instalar deps:
```
pnpm i
```

## Scripts
- `pnpm dev` — modo desarrollo
- `pnpm build` — build de producción
- `pnpm start` — iniciar producción

## Páginas
- `/` — Home con Hero, Quiénes, Servicios, Experiencia, Testimonios, Contacto
- `/contacto` — Form de contacto
- `/admin` — Moderación de reseñas (pass en `ADMIN_PASS`)

## Módulo de reseñas
- Archivo: `/.data/reviews.json` (se crea con seeds).
- En Vercel (runtime serverless) puede no persistir. El sistema cambia automáticamente a modo *in-memory* y muestra alerta en `/admin`.
- Endpoints:
  - `POST /api/reviews` — crea reseña *pending*
  - `GET /api/reviews?status=approved` — públicas
  - `GET /api/reviews?status=pending` — requiere header `x-admin-pass`
  - `PATCH /api/reviews/:id` — cambia status (`approved|rejected`) con `x-admin-pass`

## Conectar contacto con email (opcional)
- **Resend**: instalar `resend` y enviar email usando `RESEND_API_KEY`.
- **Formspree**: setear `FORMSPREE_ENDPOINT` y reenviar con `fetch`.

## SEO & Accesibilidad
- Metadata con OpenGraph + favicon.
- JSON-LD LocalBusiness embebido.
- Contraste AA, navegación por teclado, labels visibles.
- Toasters de feedback (sonner).

## Deploy en Vercel
1. Subir repo a GitHub.
2. Importar en Vercel.
3. Setear variables de entorno (`ADMIN_PASS`, `NEXT_PUBLIC_WHATSAPP`).
4. Deploy.

---

© G&L Refrigeración
# gylrefrigeracion
