import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colegio Emaús | Excelencia Educativa",
  description: "Sitio oficial del Colegio Emaús. Jardín, Primaria, Secundaria y Escuela Técnico Profesional.",
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans pt-20`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
