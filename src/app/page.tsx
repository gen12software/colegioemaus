"use client";

import Hero from "@/components/sections/Hero";
import Scrollytelling from "@/components/sections/Scrollytelling";
import { ArrowRight, BookOpen, Users, Trophy, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-primary">
      <Hero />
      
      {/* Identity Bento - Value Proposition */}
      <section className="py-32 px-6 bg-white rounded-[4rem] md:rounded-[6rem] -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-secondary/40 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Nuestra Identidad</span>
            <h2 className="text-4xl md:text-6xl text-primary font-display font-medium leading-[0.9] tracking-tighter">
              Excelencia que se vive en cada <span className="text-accent italic">detalle.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="md:col-span-2 p-12 rounded-[3.5rem] bg-secondary text-white flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/20 transition-colors" />
              <Globe className="w-12 h-12 text-accent mb-12" />
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">Idiomas & Cultura</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                  Enfoque bicultural con certificaciones internacionales y viajes de intercambio.
                </p>
              </div>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-zinc-50 border border-zinc-100 flex flex-col justify-between hover:border-accent/30 transition-all">
              <BookOpen className="w-10 h-10 text-secondary mb-8" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Innovación</h3>
                <p className="text-zinc-500 text-sm">Robótica y programación aplicada.</p>
              </div>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-accent text-primary flex flex-col justify-between hover:scale-[1.02] transition-transform">
              <Trophy className="w-10 h-10 mb-8" />
              <div>
                <h3 className="text-xl font-bold mb-2">Deporte</h3>
                <p className="text-primary/60 text-sm">Competencias intercolegiales y formación física.</p>
              </div>
            </div>

            <div className="lg:col-span-1 p-12 rounded-[3.5rem] bg-zinc-50 border border-zinc-100 flex flex-col justify-between">
               <Users className="w-10 h-10 text-secondary mb-8" />
               <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Comunidad</h3>
                  <p className="text-zinc-500 text-sm">Presencia activa de las familias.</p>
               </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3 p-12 rounded-[3.5rem] bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Proyecto Pastoral</h3>
                  <p className="text-white/40 text-lg max-w-md">Descubrí cómo formamos el corazón a través de la solidaridad y la fe.</p>
               </div>
               <Link href="/pastoral" className="relative z-10 w-20 h-20 rounded-full bg-accent flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-8 h-8" />
               </Link>
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(197,160,89,0.05)_0%,transparent_50%)]" />
            </div>
          </div>
        </div>
      </section>

      <Scrollytelling />

      {/* Pre-footer Optimized CTA */}
      <section className="py-40 px-6 bg-[#f1f5f9] text-primary rounded-[4rem] md:rounded-[6rem] -mb-16 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-medium mb-10 tracking-tighter">
              ¿Listo para dar el <br /> <span className="text-accent italic">primer paso?</span>
            </h2>
            <p className="text-xl text-primary/60 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Vení a conocer nuestras instalaciones y descubrí por qué somos la elección de miles de familias desde hace más de 60 años.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/inscripciones"
                className="px-12 py-6 rounded-2xl bg-primary text-white font-bold hover:bg-accent hover:text-white transition-all shadow-2xl uppercase tracking-widest text-sm"
              >
                Inscribirme Ahora
              </Link>
              <Link
                href="/contacto"
                className="px-12 py-6 rounded-2xl bg-white text-primary border border-primary/10 font-bold hover:bg-zinc-50 transition-all uppercase tracking-widest text-sm"
              >
                Más Información
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Subtle Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      </section>
    </main>
  );
}
