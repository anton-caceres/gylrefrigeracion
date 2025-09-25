import { Inter, Montserrat, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" , weight: ["400","600","700"] });
export const poppins = Poppins({ subsets: ["latin"], variable: "--font-pop", weight: ["400","600","700"] });
