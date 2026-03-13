"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Inicio", href: "/", description: "Volver a la experiencia principal." },
  { name: "Niveles Educativos", href: "/niveles", description: "Desde Jardín hasta la Escuela Técnica." },
  { name: "Institucional", href: "/institucional", description: "Nuestra historia, misión y valores." },
  { name: "Admisiones", href: "/admision", description: "Sé parte de nuestra comunidad 2026." },
  { name: "Pastoral", href: "/pastoral", description: "Formando el corazón y el espíritu." },
  { name: "Escuela Técnica", href: "/niveles/tecnica", description: "Innovación y futuro profesional." },
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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 bg-primary flex items-center justify-center p-8 md:p-24"
        >
          {/* Background Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--color-accent)_0%,transparent_50%)]" />
          </div>

          <button 
            onClick={onClose}
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors group"
          >
            <X className="w-10 h-10 group-hover:rotate-90 transition-transform duration-500" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl w-full relative z-10">
            {/* Left: Interactive Links */}
            <div className="space-y-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-end gap-6 text-4xl md:text-7xl font-display font-medium text-white/40 hover:text-white transition-all tracking-tighter"
                  >
                    <span className="text-sm font-mono text-accent mb-2 md:mb-5 opacity-0 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                    {link.name}
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-5 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all text-accent" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right: Dynamic Contextual Preview */}
            <div className="hidden md:block relative aspect-square">
              <AnimatePresence mode="wait">
                {hoveredLink ? (
                  <motion.div
                    key={hoveredLink}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="w-full aspect-video bg-white/5 rounded-3xl mb-12 overflow-hidden border border-white/10">
                       {/* Contextual Image would go here */}
                       <div className="w-full h-full bg-linear-to-br from-accent/20 to-primary flex items-center justify-center">
                          <span className="text-accent text-8xl font-black opacity-20">{hoveredLink[0]}</span>
                       </div>
                    </div>
                    <p className="text-3xl text-white font-display leading-tight mb-4">
                      {links.find(l => l.name === hoveredLink)?.description}
                    </p>
                    <div className="h-1 w-24 bg-accent" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex flex-col justify-center border-l border-white/10 pl-24"
                  >
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-accent/50">Colegio Emaús</h3>
                    <div className="space-y-6">
                      <div>
                        <span className="block text-white/40 text-xs uppercase tracking-wider mb-2">Ubicación</span>
                        <span className="text-white text-lg">Leandro N. Alem 950, El Palomar</span>
                      </div>
                      <div>
                        <span className="block text-white/40 text-xs uppercase tracking-wider mb-2">Contacto</span>
                        <span className="text-white text-lg">+54 (11) 4751-0125</span>
                      </div>
                      <div className="pt-12">
                         <div className="text-8xl font-black text-white/5 font-display select-none">1961</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-10 md:left-24 text-white/20 text-xs font-mono tracking-widest uppercase">
            &copy; 2026 Colegio Emaús &bull; Avanzando hacia el futuro
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
