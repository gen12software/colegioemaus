"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Cinematic Background Video/Image Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/20 to-primary/80 z-10" />
        <img 
          src="/images/hero.png" 
          alt="Campus Emaús" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block py-1.5 px-6 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-accent/30 backdrop-blur-md">
            Liderazgo & Tradición desde 1961
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-medium text-white leading-none mb-8 tracking-tighter">
            Educación que <br />
            <span className="italic font-light text-silver/90">Transforma</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Un legado de excelencia educativa en Buenos Aires, <br className="hidden md:block" />
            formando los líderes íntegros que el futuro demanda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/admision"
              className="px-10 py-5 rounded-full bg-accent text-primary font-bold hover:bg-white transition-all shadow-2xl shadow-accent/10 group overflow-hidden relative"
            >
              <span className="relative z-10">Proceso de Admisión 2026</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </Link>
            <button className="flex items-center gap-4 text-white font-medium group">
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span className="tracking-widest uppercase text-xs font-bold">Ver el documental</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16 bg-linear-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}
