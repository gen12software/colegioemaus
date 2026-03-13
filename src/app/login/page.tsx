"use client";

import { motion } from "framer-motion";
import { LogIn, ShieldCheck, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/95 backdrop-blur-xl p-10 md:p-12 rounded-[3rem] shadow-2xl border border-white/20">
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex flex-col items-center group mb-8">
              <span className="text-primary font-display font-bold text-3xl tracking-tighter uppercase leading-none group-hover:text-accent transition-colors">Colegio Emaús</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-px w-4 bg-accent" />
                <span className="text-[10px] text-zinc-400 font-bold tracking-[0.3em] uppercase">Portal Educativo</span>
              </div>
            </Link>
            <h2 className="text-2xl font-display font-medium text-zinc-900">Bienvenido de nuevo</h2>
            <p className="text-zinc-500 text-sm mt-2">Ingresa a tu cuenta institucional</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-2">Usuario / Email</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-accent transition-colors" />
                <input 
                  type="text" 
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all font-medium" 
                  placeholder="nombre@institucion.edu.ar" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center pl-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Contraseña</label>
                <Link href="#" className="text-xs font-bold text-accent hover:text-primary transition-colors">¿Olvidaste tu contraseña?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-accent transition-colors" />
                <input 
                  type="password" 
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-all font-medium" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pl-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent" />
              <label htmlFor="remember" className="text-sm text-zinc-600 font-medium cursor-pointer">Recordar mi sesión</label>
            </div>

            <button className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20 hover:shadow-accent/40 uppercase tracking-widest text-sm flex items-center justify-center gap-3">
              <LogIn className="w-5 h-5" />
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-zinc-100">
             <div className="flex items-center gap-4 p-4 rounded-2xl bg-accent/5 border border-accent/10">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <p className="text-xs text-zinc-500 leading-snug">
                  Acceso seguro restringido a personal docente, alumnos y padres del Colegio Emaús.
                </p>
             </div>
          </div>
        </div>

        <p className="text-center mt-8 text-white/40 text-xs tracking-widest uppercase font-medium">
          &copy; 2026 Colegio Emaús &bull; Plataforma Segura
        </p>
      </motion.div>
    </main>
  );
}
