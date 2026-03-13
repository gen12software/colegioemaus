"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Calendar, UserCheck, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary">
      {/* Cinematic Background with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/40 to-primary z-10" />
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="/images/hero.png" 
          alt="Campus Emaús" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Inscripciones Abiertas 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-medium text-white leading-[0.9] mb-8 tracking-tighter">
              El Futuro <br />
              comienza <span className="text-accent italic font-light">aquí.</span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl font-light leading-relaxed">
              Desde 1961, forjando líderes con valores cristianos y excelencia académica en el corazón de El Palomar.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/contacto"
                className="px-8 py-5 rounded-2xl bg-accent text-primary font-bold hover:bg-white transition-all shadow-2xl shadow-accent/20 flex items-center gap-3 group"
              >
                Solicitar Entrevista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Nuestra Historia</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Access Bento - Usability Focus */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 lg:pl-12"
          >
            <div className="p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group">
              <Calendar className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-1">Calendario</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Eventos 2025</p>
            </div>
            <div className="p-8 rounded-4xl bg-accent text-primary transition-all hover:scale-[1.02]">
              <UserCheck className="w-8 h-8 mb-4" />
              <h3 className="font-bold mb-1">Admisiones</h3>
              <p className="text-primary/60 text-xs uppercase tracking-widest font-bold">Ingreso 2026</p>
            </div>
            <div className="col-span-2 p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between group cursor-pointer hover:bg-white/10">
              <div>
                <h3 className="text-white font-bold mb-1 text-xl">Visita el Campus</h3>
                <p className="text-white/40 text-sm">Tour virtual y presencial</p>
              </div>
              <MapPin className="w-10 h-10 text-accent group-hover:bounce transition-all" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Line */}
      <div className="absolute bottom-12 left-0 w-full px-6 flex justify-between items-center text-[10px] text-white/20 font-mono tracking-[0.4em] uppercase z-20">
        <span>Buenos Aires, Argentina</span>
        <div className="flex gap-8">
          <span>Fundado en 1961</span>
          <span>&copy; Emaus 2026</span>
        </div>
      </div>
    </section>
  );
}
