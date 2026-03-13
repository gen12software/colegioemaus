"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const stages = [
  {
    title: "Jardín de Infantes",
    subtitle: "El inicio del asombro",
    description: "Donde cada juego es un descubrimiento y cada descubrimiento es un paso hacia el futuro.",
    color: "var(--nivel-jardin)",
    image: "/images/jardin.png"
  },
  {
    title: "Escuela Primaria",
    subtitle: "Cimientos de excelencia",
    description: "Desarrollo integral con enfoque bilingüe y formación en valores humanos y cristianos.",
    color: "var(--nivel-primaria)",
    image: "/images/primaria.png"
  },
  {
    title: "Escuela Secundaria",
    subtitle: "Forjando el carácter",
    description: "Bachilleratos orientados que preparan a nuestros jóvenes para la vida universitaria.",
    color: "var(--nivel-secundaria)",
    image: "/images/secundaria.png"
  },
  {
    title: "Técnico Profesional",
    subtitle: "Liderazgo Tecnológico",
    description: "Especialización técnica de vanguardia con laboratorios y talleres de última generación.",
    color: "var(--nivel-tecnica)",
    image: "/images/tecnica.png"
  }
];

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-primary">
      {/* Sticky content container */}
      <div className="sticky top-20 h-[calc(100vh-80px)] overflow-hidden">
        {stages.map((stage, index) => {
          const start = index / stages.length;
          const end = (index + 1) / stages.length;
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const xText = useTransform(scrollYProgress, [start, start + 0.1], [50, 0]);

          return (
            <motion.div
              key={stage.title}
              style={{ opacity }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-24"
            >
              {/* Image Visual with Glassmorphism Overlay */}
              <div className="w-full md:w-1/2 h-1/2 md:h-2/3 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <motion.img
                  style={{ scale }}
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent" />
                <div 
                  className="absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-xl backdrop-blur-md border border-white/20"
                  style={{ backgroundColor: `${stage.color}44` }} // Semi-transparent
                >
                  {stage.title[0]}
                </div>
              </div>

              {/* Text Narrative */}
              <motion.div 
                style={{ x: xText }}
                className="w-full md:w-1/3 text-left py-12 md:py-0"
              >
                <motion.span 
                   className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                >
                  {stage.subtitle}
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 leading-tight">
                  {stage.title}
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-sm">
                  {stage.description}
                </p>
                <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-primary transition-all font-semibold">
                  Descubrir {stage.title.split(' ')[1] || stage.title}
                </button>
              </motion.div>

              {/* Vertical Progress Indicator (Inside each slide) */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 items-center">
                {stages.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-1 h-8 rounded-full transition-all duration-500",
                      i === index ? "bg-accent scale-y-150" : "bg-white/20"
                    )} 
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
