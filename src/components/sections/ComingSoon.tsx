"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="py-48 px-6 bg-white relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(232,68,70,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
        >
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40">Contenido en preparación</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-6xl md:text-9xl text-primary font-display font-medium leading-[0.85] tracking-tighter mb-12"
        >
          Estamos preparando <br /> 
          algo <span className="text-secondary italic font-light">increíble.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-emaus-gray font-light leading-relaxed mb-20 max-w-2xl mx-auto"
        >
          Estamos perfeccionando el contenido detallado de esta sección para brindarte la mejor información sobre nuestra propuesta educativa.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Link
            href="/"
            className="group flex items-center gap-4 text-white font-bold uppercase tracking-[0.3em] text-[10px] bg-primary px-12 py-8 rounded-2xl hover:bg-accent transition-all shadow-2xl"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Volver al Inicio
          </Link>
          <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-[0.2em] text-[10px]">
             <Calendar className="w-5 h-5" />
             Próxima Actualización: Mayo 2026
          </div>
        </motion.div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
         {[1,2,3].map(i => (
           <motion.div 
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-secondary"
           />
         ))}
      </div>
    </section>
  );
}
