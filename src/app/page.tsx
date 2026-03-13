"use client";

import Hero from "@/components/sections/Hero";
import LevelsExplorer from "@/components/sections/LevelsExplorer";
import ResourceCenter from "@/components/sections/ResourceCenter";
import { ArrowRight, BookOpen, Users, Trophy, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-primary">
      <Hero />

      <LevelsExplorer />

      <ResourceCenter />

      {/* Identity - Minimalist Redesign */}
      <section className="py-48 px-6 bg-slate-50 relative z-20 overflow-hidden">
        {/* Subtle Brand Watermark */}
        <div className="absolute top-0 right-0 text-[20rem] font-display font-black text-primary/2 select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
          EMAUS
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-40">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block"
            >
              Nuestra Esencia
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[10rem] text-primary font-display font-medium leading-[0.75] tracking-tighter max-w-5xl"
            >
              Excelencia que se vive en cada <span className="text-secondary italic font-light">detalle.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-primary/10 pt-20">
            {[
              { title: "Cultura Global", desc: "Enfoque bicultural con certificaciones Cambridge e intercambios internacionales." },
              { title: "Innovación", desc: "Robótica avanzada y programación aplicada desde niveles iniciales." },
              { title: "Formación Ética", desc: "Valores que forjan un carácter resiliente y gran compromiso social." },
              { title: "Comunidad", desc: "Un entorno familiar donde los padres son protagonistas del crecimiento." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-accent group-hover:w-16 transition-all duration-700" />
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-primary/60 text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - High-End Signature */}
      <section className="py-64 px-6 bg-white relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-7xl md:text-[14rem] font-display font-medium text-primary mb-16 tracking-tighter leading-[0.7]">
              Forjamos <br /> <span className="text-secondary italic font-extralight">Legados.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-primary/40 mb-32 max-w-2xl mx-auto font-light leading-relaxed">
              Vení a conocer nuestras instalaciones y descubrí por qué somos la elección de miles de familias.
            </p>
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <Link
                href="/inscripciones"
                className="group px-20 py-10 rounded-2xl bg-primary text-white font-bold hover:bg-accent transition-all duration-700 shadow-3xl uppercase tracking-[0.4em] text-[11px] relative overflow-hidden"
              >
                <span className="relative z-10">Inscribirme Ahora</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </Link>
              <Link
                href="/contacto"
                className="group px-20 py-10 rounded-2xl bg-white text-primary border border-primary/10 font-bold hover:bg-slate-50 transition-all uppercase tracking-[0.4em] text-[11px] shadow-2xl flex items-center gap-3"
              >
                Entrevista Personal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
        {/* High-end atmospheric gradients */}
        <div className="absolute top-0 right-[-10%] w-[1000px] h-[1000px] bg-accent/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[1000px] h-[1000px] bg-secondary/5 blur-[200px] rounded-full pointer-events-none" />
      </section>
    </main>
  );
}
