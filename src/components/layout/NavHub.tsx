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
          className="fixed inset-0 z-100 bg-[#021c35] overflow-y-auto"
        >
          {/* Advanced Atmospheric Layers */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,82,158,0.15)_0%,transparent_70%)]" />
            <div className="absolute top-0 right-0 w-[80%] h-full bg-linear-to-l from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            {/* Texture/Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          </div>

          <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
            {/* Left Column: Visual & Info */}
            <div className="hidden md:flex w-full md:w-[28%] min-h-screen border-r border-white/5 flex-col justify-between p-6 lg:p-10 bg-black/5">
              <div className="flex justify-start mb-6">
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all group overflow-hidden relative"
                >
                  <motion.div
                    initial={false}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  {hoveredLink ? (
                    <motion.div
                      key={hoveredLink}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-3"
                    >
                      <span className="inline-block px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[7px] font-bold tracking-[0.4em] uppercase">
                        Explorar
                      </span>
                      <p className="text-lg lg:text-xl text-white font-display font-medium leading-tight tracking-tight max-w-[200px]">
                        {links.find(l => l.name === hoveredLink)?.description}
                      </p>
                      <div className="h-px w-8 bg-accent rounded-full" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <div>
                        <div className="text-secondary/60 text-[8px] font-bold tracking-[0.4em] uppercase mb-3">Ubicación</div>
                        <p className="text-sm lg:text-base text-white/70 font-light leading-relaxed">
                          Leandro N. Alem 950,<br />
                          <span className="text-white/30">El Palomar, Buenos Aires</span>
                        </p>
                      </div>
                      <div>
                        <div className="text-secondary/60 text-[8px] font-bold tracking-[0.4em] uppercase mb-3">Admisiones</div>
                        <p className="text-sm lg:text-base text-white/70 font-light hover:text-accent transition-colors cursor-pointer break-all">
                          admisiones@colegioemaus.edu.ar
                        </p>
                      </div>
                      <div className="flex gap-5 items-center pt-1">
                        <Instagram className="w-4 h-4 text-white/20 hover:text-accent cursor-pointer transition-all hover:scale-110" />
                        <Facebook className="w-4 h-4 text-white/20 hover:text-accent cursor-pointer transition-all hover:scale-110" />
                        <Linkedin className="w-4 h-4 text-white/20 hover:text-accent cursor-pointer transition-all hover:scale-110" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* 1961 Watermark */}
                <div className="absolute -bottom-6 -left-4 text-[60px] lg:text-[90px] font-black text-white/[0.008] select-none pointer-events-none font-display tracking-tighter hidden lg:block">
                  1961
                </div>
              </div>

              <div className="text-[7px] text-white/10 font-mono tracking-[0.4em] uppercase border-t border-white/5 pt-4">
                &copy; 1961 &mdash; Forjando Futuro
              </div>
            </div>

            {/* Right Column: Navigation links */}
            <div className="w-full md:w-[72%] min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-20 py-10 bg-linear-to-br from-black/10 to-transparent">
              <nav className="flex flex-col gap-1 items-start md:items-end w-full max-w-xl mx-auto md:mr-0">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex md:justify-end"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group flex flex-row items-baseline gap-3 md:gap-4 transition-all duration-500 hover:md:translate-x-[-6px]"
                    >
                      <span className="text-[8px] md:text-[9px] font-mono text-accent/20 font-bold tracking-widest group-hover:text-accent transition-all duration-500 order-first md:order-last">
                        0{index + 1}
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-display font-medium text-white/20 group-hover:text-white transition-all duration-500 tracking-tight relative py-1 block leading-tight">
                        {link.name}
                        {/* Animated Accent Bar */}
                        <span className="absolute left-0 bottom-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Footer (Socials) */}
              <div className="mt-20 flex gap-8 md:hidden border-t border-white/5 pt-12">
                <Instagram className="w-6 h-6 text-white/40" />
                <Facebook className="w-6 h-6 text-white/40" />
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onClose}
              className="md:hidden absolute top-6 right-6 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white z-50"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
