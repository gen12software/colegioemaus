"use client";

import Navbar from "@/components/layout/Navbar";
import NewsHub from "@/components/sections/NewsHub";
import { motion } from "framer-motion";

export default function NovedadesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-40 pb-32 bg-[#021c35] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(232,68,70,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(3,82,158,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-[#021c35]/80 to-[#021c35] z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="/images/institutional-hero.png" 
            alt="Novedades Emaús" 
            className="w-full h-full object-cover opacity-40"
          />
          {/* Grain overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-8 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Comunidad Emaús
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-display font-medium text-white leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl">
              Nuestras <br />
              <span className="italic font-light text-secondary">Novedades.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl drop-shadow-lg">
              Explorá las últimas noticias, proyectos y espacios culturales que hacen vibrar a nuestra querida institución.
            </p>
          </motion.div>
        </div>
      </section>

      <NewsHub />
    </main>
  );
}
