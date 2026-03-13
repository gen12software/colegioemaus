"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Library, 
  Heart, 
  Users, 
  GraduationCap, 
  Sun, 
  Trophy, 
  Music, 
  Star,
  ArrowUpRight,
  Target
} from "lucide-react";
import Link from "next/link";

const newsSections = [
  {
    title: "Bolsa de Trabajo",
    description: "Oportunidades laborales y desarrollo profesional para nuestra comunidad.",
    icon: Briefcase,
    color: "bg-blue-600"
  },
  {
    title: "Nuestra Biblioteca",
    description: "Espacio de lectura, investigación y recursos digitales.",
    icon: Library,
    color: "bg-amber-600"
  },
  {
    title: "EOE",
    subtitle: "Equipo de Orientación Escolar",
    description: "Apoyo y acompañamiento psicopedagógico institucional.",
    icon: Heart,
    color: "bg-rose-600"
  },
  {
    title: "UPF",
    subtitle: "Unión de Padres de Familia",
    description: "Participación activa y proyectos de las familias en la escuela.",
    icon: Users,
    color: "bg-indigo-600"
  },
  {
    title: "Centro de Exalumnos",
    description: "Manteniendo vivo el vínculo con quienes pasaron por nuestras aulas.",
    icon: GraduationCap,
    color: "bg-slate-700"
  },
  {
    title: "Colonia Padre Luis",
    description: "Actividades recreativas y formación en valores durante el verano.",
    icon: Sun,
    color: "bg-orange-500"
  },
  {
    title: "Mami Hockey",
    description: "Deporte, integración y espíritu de equipo para nuestras madres.",
    icon: Target,
    color: "bg-pink-600"
  },
  {
    title: "Campeonato de Fútbol",
    description: "Torneo institucional abierto a toda la familia Emaús.",
    icon: Trophy,
    color: "bg-emerald-600"
  },
  {
    title: "Coral Emaús",
    description: "Expresión artística y musical a través del canto coral.",
    icon: Music,
    color: "bg-violet-600"
  },
  {
    title: "Distinción Fe",
    description: "Reconocimiento a los valores cristianos y el compromiso solidario.",
    icon: Star,
    color: "bg-yellow-500"
  }
];

export default function NewsHub() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="relative group cursor-pointer overflow-hidden rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 min-h-[300px] flex flex-col bg-white hover:bg-gray-50"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 bg-linear-to-br ${section.color} opacity-5`} />
              </div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-between flex-1">
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${section.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/5`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  
                  {section.subtitle && (
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">
                      {section.subtitle}
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl leading-tight tracking-tight text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-gray-500 font-light leading-relaxed text-sm md:text-base">
                    {section.description}
                  </p>
                </div>

                <div className="flex justify-end mt-8">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
