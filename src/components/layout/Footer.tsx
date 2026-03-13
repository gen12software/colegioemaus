"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#021c35] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <span className="text-2xl font-display font-medium tracking-tighter">
                COLEGIO <span className="text-secondary italic">EMAÚS</span>
              </span>
            </Link>
            <p className="text-white/50 font-light leading-relaxed mb-8 max-w-xs">
              Formando líderes con valores cristianos y excelencia académica desde 1961 en El Palomar.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-secondary">Institucional</h4>
            <ul className="space-y-4">
              {['Nuestra Historia', 'Misión y Valores', 'Niveles Educativos', 'Admisiones', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 group text-sm font-light">
                    <span className="w-0 group-hover:w-4 h-px bg-accent transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-secondary">Niveles</h4>
            <ul className="space-y-4">
              {['Jardín de Infantes', 'Primaria', 'Secundaria', 'Secundaria Técnica'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 group text-sm font-light">
                    <span className="w-0 group-hover:w-4 h-px bg-accent transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-secondary">Contacto</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-light text-white/60">Leones 967,</p>
                  <p className="text-sm font-light text-white/60">El Palomar, Buenos Aires</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-light text-white/60">(011) 6841-0266</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm font-light text-white/60">emaus@colegioemaus.edu.ar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 font-mono tracking-[0.4em] uppercase">
            &copy; {currentYear} COLEGIO EMAÚS &mdash; TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 font-mono tracking-[0.4em] uppercase">
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
