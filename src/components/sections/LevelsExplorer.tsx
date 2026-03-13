"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const levels = [
  {
    id: "jardin",
    title: "Jardín de Infantes",
    subtitle: "El Inicio del Asombro",
    description: "Un espacio diseñado para el juego libre y dirigido, donde la curiosidad natural del niño es el motor de su primer gran aprendizaje.",
    color: "#E84446", // Accent
    image: "/images/jardin.png",
    href: "/niveles/jardin",
    features: ["Ambientes Lúdicos", "Iniciación al Inglés", "Taller de Arte"]
  },
  {
    id: "primaria",
    title: "Escuela Primaria",
    subtitle: "Cimientos de Excelencia",
    description: "Formación integral con enfoque bilingüe, robótica y valores cristianos. Preparamos ciudadanos del mundo con bases sólidas.",
    color: "#03529E", // Primary
    image: "/images/primaria.png",
    href: "/niveles/primaria",
    features: ["Certificación Cambridge", "Robótica Educativa", "Plan Bicultural"]
  },
  {
    id: "secundaria",
    title: "Escuela Secundaria",
    subtitle: "Liderazgo de Futuro",
    description: "Bachilleratos con orientación técnica y pedagógica. Fomentamos el pensamiento crítico y la autonomía universitaria.",
    color: "#4881B9", // Secondary
    image: "/images/secundaria.png",
    href: "/niveles/secundaria",
    features: ["Orientación Pedagógica", "Pasantías Laborales", "Formación Ética"]
  },
  {
    id: "tecnica",
    title: "Técnico Profesional",
    subtitle: "Maestría Tecnológica",
    description: "Especialización de vanguardia en Informática y Electromecánica. Laboratorios propios y convenios con empresas líderes.",
    color: "#989999", // Gray
    image: "/images/tecnica.png",
    href: "/niveles/tecnica",
    features: ["Electromecánica", "Informática", "Talleres Propios"]
  }
];

export default function LevelsExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 bg-primary relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            Trayectoria Educativa
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl text-white font-display font-medium leading-none tracking-tighter"
          >
            Nuestros <span className="italic text-secondary font-light">Niveles.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {levels.map((level, index) => (
              <button
                key={level.id}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "group relative p-8 rounded-3xl transition-all duration-500 text-left border overflow-hidden",
                  activeTab === index 
                    ? "bg-white border-white shadow-2xl scale-[1.02]" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                )}
              >
                <div className="relative z-10">
                    <span className={cn(
                        "text-[10px] uppercase font-bold tracking-widest mb-2 block",
                        activeTab === index ? "text-accent" : "text-white/40"
                    )}>
                        Nivel 0{index + 1}
                    </span>
                    <h3 className={cn(
                        "text-2xl font-display font-medium transition-colors",
                        activeTab === index ? "text-primary" : "text-white"
                    )}>
                        {level.title}
                    </h3>
                </div>
                {activeTab === index && (
                    <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-linear-to-r from-accent/5 to-transparent"
                    />
                )}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8 min-h-[600px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                {/* Image Section */}
                <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl border border-white/10 group">
                    <img 
                        src={levels[activeTab].image} 
                        alt={levels[activeTab].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-10 left-10 p-6 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20">
                        <div className="flex gap-2">
                            {levels[activeTab].features.map(f => (
                                <span key={f} className="text-[8px] font-bold uppercase tracking-widest text-white/80 bg-primary/40 px-3 py-1.5 rounded-full border border-white/10">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center gap-10">
                   <div>
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
                            {levels[activeTab].subtitle}
                        </span>
                        <h3 className="text-5xl font-display font-medium text-white mb-8 leading-tight tracking-tight">
                            Educación que <br/> <span className="italic text-secondary font-light">trasciende.</span>
                        </h3>
                        <p className="text-white/60 text-xl leading-relaxed font-light">
                            {levels[activeTab].description}
                        </p>
                   </div>

                   <Link 
                        href={levels[activeTab].href}
                        className="inline-flex items-center gap-4 group text-white font-bold uppercase tracking-[0.2em] text-xs"
                   >
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-xl shadow-accent/20">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                        Ver Plan de Estudios
                   </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
