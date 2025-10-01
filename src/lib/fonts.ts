import { Inter, Montserrat } from "next/font/google";

/**
 * Nota:
 * - Usamos Montserrat para títulos (lo exponemos como "poppins" para no tocar layout).
 * - next/font incrusta los archivos de fuente en el build (no @import en runtime).
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui","Segoe UI","Roboto","Helvetica","Arial"],
});

export const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["system-ui","Segoe UI","Roboto","Helvetica","Arial"],
});
