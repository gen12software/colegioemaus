"use client";

import PageHeader from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent/30">
      <PageHeader
        title="Contacto"
        subtitle="Conversá con nosotros y conocé nuestra comunidad."
        image="/images/hero.png"
      />

      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 translate-x-1/4 -skew-x-12" />
        <div className="absolute top-1/4 left-[-10%] w-160 h-160 bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">

            {/* Left Column: Direct Connection & Info */}
            <div className="w-full lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Comunicate</span>
                <h2 className="text-5xl md:text-7xl text-primary font-display font-medium leading-[0.9] tracking-tighter mb-8">
                  Estamos a un <br /> <span className="text-secondary italic font-light">mensaje</span> de distancia.
                </h2>
                <p className="text-lg text-emaus-gray font-light leading-relaxed max-w-sm">
                  Ya sea para inscripciones, consultas pedagógicas o visitas guiadas, nuestro equipo está listo para recibirte.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Nuestra Sede", value: "Leones 967, El Palomar", color: "bg-blue-50 text-secondary" },
                  { icon: Phone, title: "Llamanos", value: "(011) 6841-0266", color: "bg-amber-50 text-amber-600" },
                  { icon: Mail, title: "Escribinos", value: "emaus@colegioemaus.edu.ar", color: "bg-emerald-50 text-emerald-600" },
                  { icon: Clock, title: "Horarios", value: "Lun a Vie: 08:00 — 17:00 hs", color: "bg-violet-50 text-violet-600" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-6 rounded-4xl border border-slate-100 bg-white hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex items-center gap-6"
                  >
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-500", item.color)}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-emaus-gray mb-1">{item.title}</h3>
                      <p className="text-primary font-medium text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="w-full lg:w-3/5 lg:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Visual Accent */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

                <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-transparent via-accent to-transparent opacity-50" />

                  <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-1 rounded-full bg-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emaus-gray">Consultas Online</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary">Envianos tu mensaje</h3>
                  </div>

                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-4">Nombre Completo</label>
                        <input
                          type="text"
                          className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 focus:ring-2 focus:ring-accent/50 transition-all font-medium text-primary placeholder:text-slate-300"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-4">Correo Electrónico</label>
                        <input
                          type="email"
                          className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 focus:ring-2 focus:ring-accent/50 transition-all font-medium text-primary placeholder:text-slate-300"
                          placeholder="ejemplo@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-4">Motivo del contacto</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 focus:ring-2 focus:ring-accent/50 transition-all font-medium text-primary placeholder:text-slate-300"
                        placeholder="Inscripciones, consultas, administración..."
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-4">Tu Mensaje</label>
                      <textarea
                        rows={5}
                        className="w-full bg-slate-50 border-none rounded-4xl px-8 py-6 focus:ring-2 focus:ring-accent/50 transition-all font-medium text-primary placeholder:text-slate-300 resize-none"
                        placeholder="Escribinos cómo podemos ayudarte..."
                      />
                    </div>

                    <button className="group w-full py-8 bg-primary text-white font-bold rounded-4xl hover:bg-accent transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[11px] overflow-hidden relative">
                      <span className="relative z-10 transition-transform group-hover:-translate-x-2">Enviar Mensaje</span>
                      <Send className="w-4 h-4 relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Styled Placeholder */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto h-[500px] rounded-[4rem] bg-slate-100 border border-slate-200 overflow-hidden relative group shadow-2xl"
        >
          {/* Placeholder for real Google Map - Styled for the site */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale contrast-125 opacity-20 transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-tr from-primary/80 via-transparent to-transparent" />

          <div className="absolute bottom-16 left-16 z-20">
            <div className="bg-white/95 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-2xl font-display font-bold text-primary mb-2 tracking-tight">Colegio Emaús</h4>
              <p className="text-emaus-gray font-light mb-6">Leones 967, El Palomar</p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent group/link"
              >
                Cómo llegar <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center animate-ping opacity-20" />
            <div className="w-12 h-12 rounded-full bg-accent absolute border-4 border-white shadow-2xl" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
