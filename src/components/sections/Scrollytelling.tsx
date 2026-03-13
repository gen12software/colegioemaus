"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const stages = [
  {
    id: "jardin",
    title: "Jardín de Infantes",
    subtitle: "El Inicio del Asombro",
    description: "Un espacio diseñado para el juego libre y dirigido, donde la curiosidad natural del niño es el motor de su primer gran aprendizaje.",
    color: "#E84446", // Brand Red
    image: "/images/jardin.png",
    href: "/niveles/jardin"
  },
  {
    id: "primaria",
    title: "Escuela Primaria",
    subtitle: "Cimientos de Excelencia",
    description: "Formación integral con enfoque bilingüe, robótica y valores cristianos. Preparamos ciudadanos del mundo con bases sólidas.",
    color: "#03529E", // Brand Blue Primary
    image: "/images/primaria.png",
    href: "/niveles/primaria"
  },
  {
    id: "secundaria",
    title: "Escuela Secundaria",
    subtitle: "Liderazgo de Futuro",
    description: "Bachilleratos con orientación técnica y pedagógica. Fomentamos el pensamiento crítico y la autonomía universitaria.",
    color: "#4881B9", // Brand Blue Secondary
    image: "/images/secundaria.png",
    href: "/niveles/secundaria"
  },
  {
    id: "tecnica",
    title: "Técnico Profesional",
    subtitle: "Maestría Tecnológica",
    description: "Especialización de vanguardia en Informática y Electromecánica. Laboratorios propios y convenios con empresas líderes.",
    color: "#989999", // Brand Gray
    image: "/images/tecnica.png",
    href: "/niveles/tecnica"
  }
];

import { useEffect, useState } from "react";

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (isMobile) {
    return (
      <section className="py-24 px-6 bg-[#0a0a0a] space-y-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {stages.map((stage, index) => (
            <div key={stage.id} className="space-y-12">
              <div className="relative aspect-square rounded-4xl overflow-hidden shadow-2xl border border-white/5">
                <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center text-xl font-bold text-white shadow-2xl" style={{ background: `${stage.color}44` }}>
                  {stage.title[0]}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">{stage.subtitle}</span>
                  <h2 className="text-4xl font-display font-medium text-white mb-6 tracking-tighter">{stage.title}</h2>
                  <p className="text-white/60 text-base leading-relaxed font-light">{stage.description}</p>
                </div>
                <Link href={stage.href} className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-primary font-bold uppercase tracking-widest text-[10px]">
                  Ver Propuesta <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[450vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {stages.map((stage, index) => {
          const start = index / stages.length;
          const end = (index + 1) / stages.length;
          
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const textY = useTransform(scrollYProgress, [start, start + 0.15], [60, 0]);

          return (
            <motion.div
              key={stage.id}
              style={{ opacity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-2 gap-20 items-center">
                {/* Visual Content */}
                <div className="relative aspect-square rounded-4xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 pointer-events-auto">
                    <motion.img
                      style={{ scale }}
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dynamic Overlay per Stage */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-60" />
                    <div 
                        className="absolute top-10 left-10 w-20 h-20 rounded-3xl backdrop-blur-2xl border border-white/20 flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
                        style={{ background: `${stage.color}44` }}
                    >
                        {stage.title[0]}
                    </div>
                </div>

                {/* Narrative Content */}
                <motion.div 
                    style={{ y: textY }}
                    className="space-y-8 pointer-events-auto"
                >
                    <div>
                        <span 
                            className="text-accent font-bold tracking-[0.5em] uppercase text-xs mb-4 block"
                        >
                            {stage.subtitle}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8 leading-none tracking-tighter">
                            {stage.title}
                        </h2>
                        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl font-light">
                            {stage.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 items-center pt-8">
                        <Link 
                            href={stage.href}
                            className="px-10 py-5 rounded-2xl bg-white text-primary font-bold hover:bg-accent hover:text-white transition-all shadow-xl flex items-center gap-3 group"
                        >
                            Ver Plan de Estudios
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                        </Link>
                        <div className="hidden md:flex items-center gap-4 text-white/30 text-xs font-mono uppercase tracking-widest">
                            <span className="w-8 h-px bg-white/10" />
                            Explorar Nivel 0{index + 1}
                        </div>
                    </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        {/* Vertical Stage Navigation/Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-30">
            {stages.map((_, i) => {
                const start = i / stages.length;
                const end = (i + 1) / stages.length;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const dashScale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [1, 1.8, 1.8, 1]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const dotColor = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], ["#ffffff22", "#E84446", "#E84446", "#ffffff22"]);

                return (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <motion.div 
                            style={{ height: 40, width: 2, scaleY: dashScale, background: dotColor }}
                            className="rounded-full origin-center"
                        />
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
