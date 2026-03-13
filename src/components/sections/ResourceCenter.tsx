"use client";

import { motion } from "framer-motion";
import { FileText, Download, ClipboardList, UserPlus, Palette, BookOpen, ExternalLink, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const procedures = [
  {
    category: "Inscripciones 2026-2027",
    items: [
      {
        title: "Reserva de Vacantes 2027",
        subtitle: "Nivel Primario",
        description: "Exclusivo para alumnos nuevos provenientes de otras instituciones. Ciclo lectivo completo.",
        icon: UserPlus,
        type: "form",
        label: "Completar Formulario",
        color: "bg-accent", // Brand Red
        tag: "Nuevos Ingresos"
      },
      {
        title: "Reserva de Vacantes 2026",
        subtitle: "Escuela Primaria",
        description: "Apertura de inscripciones para el ciclo lectivo inmediato. Cupos limitados por sala.",
        icon: UserPlus,
        type: "form",
        label: "Completar Formulario",
        color: "bg-secondary", // Brand Blue Light
        tag: "Ciclo Actual"
      }
    ]
  },
  {
    category: "Documentación & Fichas",
    items: [
      {
        title: "Planillas Inscripción 2026",
        subtitle: "Fichas Obligatorias",
        description: "Fichas de salud, autorizaciones de fotos y entrevistas para todos los niveles.",
        icon: ClipboardList,
        type: "download",
        label: "Descargar Pack",
        color: "bg-primary", // Brand Blue Dark
        tag: "PDF"
      },
      {
        title: "Circular Ciclo 2026",
        subtitle: "Reunión de Padres",
        description: "Información institucional sobre el inicio de clases y cronograma de reuniones.",
        icon: FileText,
        type: "download",
        label: "Leer Circular",
        color: "bg-accent", // Brand Red
        tag: "Importante"
      }
    ]
  }
];

const kindergartenLists = [
  { name: "Sala Naranja", color: "#f97316" }, // Orange
  { name: "Sala Amarilla", color: "#eab308" }, // Yellow
  { name: "Sala Roja", color: "#E84446" }, // Red (Emaus Accent)
  { name: "Sala Azul", color: "#03529E" }, // Blue (Emaus Primary)
  { name: "Sala Verde", color: "#22c55e" }, // Green
];

const primaryWorkshops = [
  { name: "1er Año", icon: BookOpen },
  { name: "2do Año", icon: BookOpen },
  { name: "3er Año", icon: BookOpen },
  { name: "4to Año", icon: BookOpen },
  { name: "5to Año", icon: BookOpen },
  { name: "6to Año", icon: BookOpen },
];

export default function ResourceCenter() {
  return (
    <section className="py-40 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-[-10%] w-[1000px] h-[1000px] bg-primary/2 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-[-5%] w-[800px] h-[800px] bg-accent/2 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
            >
              Gestión & Administración
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl text-primary font-display font-medium leading-none tracking-tighter"
            >
              Trámites y <span className="italic text-secondary font-light">Recursos.</span>
            </motion.h2>
          </div>
          <div className="max-w-sm">
            <p className="text-emaus-gray text-xl font-light leading-relaxed">
              Accedé a toda la documentación, listas de materiales y procesos de inscripción en un solo lugar.
            </p>
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {procedures.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/30 mb-12 pl-4 border-l-2 border-accent">
                {group.category}
              </h3>
              <div className="flex flex-col gap-8">
                {group.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="group relative bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 hover:border-primary/20 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex flex-col gap-10 relative z-10">
                      <div className="flex items-start gap-10">
                        <div className={cn(
                          "w-24 h-24 rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-xl transition-all duration-700 group-hover:scale-110",
                          item.color
                        )}>
                          <item.icon className="w-12 h-12" />
                        </div>
                        <div className="flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{item.tag}</span>
                          <h4 className="text-3xl font-display font-bold text-primary mb-4 tracking-tight leading-tight">{item.title}</h4>
                          <p className="text-emaus-gray text-lg font-light leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-50">
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-accent" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">{item.subtitle}</span>
                        </div>
                        <button className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4 shadow-2xl shadow-primary/20 group/btn">
                          {item.label}
                          {item.type === 'download' ? <Download className="w-5 h-5" /> : <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />}
                        </button>
                      </div>
                    </div>
                    {/* Atmospheric background for card */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Materials & Workshops Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kinder Materials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-primary rounded-4xl p-12 md:p-16 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <Palette className="w-10 h-10 text-accent" />
                <h3 className="text-3xl font-display font-bold tracking-tight">Listas de Materiales Jardín</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {kindergartenLists.map((sala) => (
                  <button
                    key={sala.name}
                    className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:-translate-y-2 group/card"
                  >
                    <div
                      className="w-10 h-10 rounded-full shadow-lg"
                      style={{ backgroundColor: sala.color }}
                    />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/60 group-hover/card:text-white transition-colors">
                      {sala.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
          </motion.div>

          {/* Primary Materials & Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 border border-slate-100 rounded-4xl p-12 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-10 h-10 text-secondary" />
                <h3 className="text-3xl font-display font-bold text-primary tracking-tight leading-none">Primaria & <br />Talleres</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {primaryWorkshops.map((year) => (
                  <button
                    key={year.name}
                    className="py-3 bg-white border border-slate-100 rounded-xl text-[9px] font-bold text-primary/60 hover:text-accent hover:border-accent/40 transition-all uppercase tracking-tighter"
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">Talleres Turno Tarde</span>
                  <span className="text-[9px] text-primary/40 uppercase tracking-widest">Inicio 9 de Marzo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
