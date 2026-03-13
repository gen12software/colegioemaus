"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Inicio", href: "/", description: "Volver a la experiencia principal." },
  { name: "Institucional", href: "/institucional", description: "Nuestra historia, misión y valores." },
  { name: "Niveles", href: "#", description: "Propuesta educativa desde Jardín hasta Técnica." },
  { name: "Administración", href: "/administracion", description: "Gestión, aranceles y trámites." },
  { name: "Pastoral", href: "/pastoral", description: "Formando el corazón y el espíritu." },
  { name: "Vida Escolar", href: "/vida-escolar", description: "Deportes, arte y proyectos." },
  { name: "Contacto", href: "/contacto", description: "Estamos aquí para escucharte." },
];

interface NavHubProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavHub({ isOpen, onClose }: NavHubProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 bg-[#001a35] overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/2 to-transparent" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c5a059]/5 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 h-full flex flex-col md:flex-row">
            {/* Left Column: Navigation links */}
            <div className="w-full md:w-3/5 h-full flex flex-col justify-center px-8 md:px-24 py-20 overflow-y-auto">
              <nav className="space-y-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group flex items-center gap-6"
                    >
                      <span className="text-[10px] font-mono text-[#c5a059]/40 font-bold tracking-widest mt-2 hidden md:block">
                        0{index + 1}
                      </span>
                      <span className="text-4xl md:text-6xl font-display font-medium text-white/30 group-hover:text-white transition-all duration-500 tracking-tighter relative">
                        {link.name}
                        {/* Underline anim */}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c5a059] group-hover:w-full transition-all duration-500" />
                      </span>
                      <ArrowRight className="w-6 h-6 text-[#c5a059] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Footer (Socials) */}
              <div className="mt-12 flex gap-6 md:hidden">
                <Instagram className="w-5 h-5 text-white/40" />
                <Facebook className="w-5 h-5 text-white/40" />
              </div>
            </div>

            {/* Right Column: Content Preview & Info */}
            <div className="hidden md:flex w-2/5 h-full bg-white/2 border-l border-white/5 flex-col justify-between p-24">
              <div className="flex justify-end">
                <button 
                  onClick={onClose}
                  className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all group"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  {hoveredLink ? (
                    <motion.div
                      key={hoveredLink}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase">Explorar Sección</div>
                      <p className="text-4xl text-white font-display leading-tight tracking-tight">
                        {links.find(l => l.name === hoveredLink)?.description}
                      </p>
                      <div className="w-12 h-px bg-[#c5a059]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-10"
                    >
                      <div>
                        <div className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Ubicación</div>
                        <p className="text-xl text-white/80 font-light leading-relaxed">
                          Leandro N. Alem 950,<br />
                          El Palomar, Buenos Aires
                        </p>
                      </div>
                      <div>
                        <div className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Admisiones</div>
                        <p className="text-xl text-white/80 font-light">admisiones@colegioemaus.edu.ar</p>
                      </div>
                      <div className="flex gap-6">
                        <Instagram className="w-5 h-5 text-[#c5a059] hover:text-white cursor-pointer transition-colors" />
                        <Facebook className="w-5 h-5 text-[#c5a059] hover:text-white cursor-pointer transition-colors" />
                        <Linkedin className="w-5 h-5 text-[#c5a059] hover:text-white cursor-pointer transition-colors" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* 1961 Watermark */}
                <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/2 select-none pointer-events-none font-display">
                  1961
                </div>
              </div>

              <div className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
                Excelencia Educativa desde hace más de 60 años
              </div>
            </div>
            
            {/* Mobile close button */}
            <button 
              onClick={onClose}
              className="md:hidden absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
