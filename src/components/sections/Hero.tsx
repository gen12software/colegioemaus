"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Calendar, UserCheck, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary">
      {/* Cinematic Background with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/80 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent z-10 hidden md:block" />
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="/images/hero.png" 
          alt="Campus Emaús" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-20 w-full">
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
            <h1 className="text-6xl md:text-8xl font-display font-medium text-white leading-[0.9] mb-8 tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              El Futuro <br />
              comienza <span className="text-secondary italic font-light">aquí.</span>
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-xl font-light leading-relaxed drop-shadow-md">
              Desde 1961, forjando líderes con valores cristianos y excelencia académica en el corazón de El Palomar.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                href="/contacto"
                className="px-10 py-5 rounded-2xl bg-primary text-white font-bold hover:bg-accent transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group uppercase tracking-[0.2em] text-[10px]"
              >
                Solicitar Entrevista
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-4 text-white hover:text-secondary transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-secondary group-hover:scale-110 transition-all font-bold">
                  <Play className="w-4 h-4 fill-current ml-1" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Nuestra Historia</span>
              </button>
            </div>
          </motion.div>

          {/* Quick Access Bento - Usability Focus */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 gap-6 lg:pl-12 lg:pr-4"
          >
            <div className="p-10 md:p-12 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group shadow-2xl">
              <Calendar className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-xl font-bold mb-2">Calendario</h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Próximos Eventos</p>
            </div>
            <div className="p-10 md:p-12 rounded-4xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all group shadow-2xl">
              <UserCheck className="w-10 h-10 text-white mb-6" />
              <h3 className="text-white text-xl font-bold mb-2">Admisiones</h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Ingreso 2026</p>
            </div>
            <div className="col-span-2 p-10 md:p-14 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between group cursor-pointer hover:bg-white/10 shadow-2xl">
              <div>
                <h3 className="text-white font-bold mb-2 text-2xl tracking-tight">Visitá el Campus</h3>
                <p className="text-white/40 text-base font-light">Tour virtual y presencial</p>
              </div>
              <MapPin className="w-12 h-12 text-accent group-hover:animate-bounce transition-all duration-700" />
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
