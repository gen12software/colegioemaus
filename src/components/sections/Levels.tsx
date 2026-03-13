"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const niveles = [
  {
    title: "Jardín de Infantes",
    description: "Espacios de juego y aprendizaje para los más pequeños, fomentando la curiosidad y la socialización.",
    icon: "J",
    color: "amber",
    href: "/niveles/jardin",
    image: "https://www.colegioemaus.edu.ar/images/index_06.jpg"
  },
  {
    title: "Escuela Primaria",
    description: "Formación integral con énfasis en lectoescritura, matemáticas y valores humanos.",
    icon: "P",
    color: "rose",
    href: "/niveles/primaria",
    image: "https://www.colegioemaus.edu.ar/images/index_07.jpg"
  },
  {
    title: "Escuela Secundaria",
    description: "Bachilleratos orientados con una sólida base académica y emocional para el adolescente.",
    icon: "violet",
    color: "violet",
    href: "/niveles/secundaria",
    image: "https://www.colegioemaus.edu.ar/images/index_08.jpg"
  },
  {
    title: "Técnico Profesional",
    description: "Especialización técnica industrial con talleres de alta tecnología y salida laboral.",
    icon: "T",
    color: "cyan",
    href: "/niveles/tecnica",
    image: "https://www.colegioemaus.edu.ar/images/index_09.jpg"
  }
];

export default function LevelsSection() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 mb-4">Propuesta Educativa</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Ofrecemos un camino continuo de aprendizaje desde los 3 años hasta la graduación técnica o secundaria.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niveles.map((nivel, index) => (
            <motion.div
              key={nivel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border border-zinc-200 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 transition-transform group-hover:scale-110",
                nivel.color === 'amber' && "bg-amber-100 text-amber-600",
                nivel.color === 'rose' && "bg-rose-100 text-rose-600",
                nivel.color === 'violet' && "bg-violet-100 text-violet-600",
                nivel.color === 'cyan' && "bg-cyan-100 text-cyan-600",
              )}>
                {nivel.title[0]}
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-primary transition-colors">{nivel.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">{nivel.description}</p>
              
              <Link 
                href={nivel.href}
                className="inline-flex items-center text-sm font-bold text-primary gap-1 group/btn"
              >
                Ver más información
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Decorative Background Sigla */}
              <span className="absolute top-4 right-8 text-7xl font-display font-black text-zinc-100 select-none z-0">
                {nivel.title[0]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
