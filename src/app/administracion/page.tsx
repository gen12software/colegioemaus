"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import { 
  FileText, 
  Wallet, 
  MessageSquare, 
  Bell, 
  PhoneCall, 
  Mail, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

const adminCategories = [
  {
    title: "Últimos Comunicados",
    desc: "Avisos importantes, circulares y noticias administrativas de último momento.",
    icon: Bell,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Todos los Aranceles",
    desc: "Consulta la grilla de aranceles actualizada para todos los niveles educativos.",
    icon: FileText,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Formas de Pago",
    desc: "Información detallada sobre transferencias, débito y otros medios digitales.",
    icon: Wallet,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Portal de Mensajes",
    desc: "Envíanos tu consulta administrativa directamente a nuestro equipo.",
    icon: MessageSquare,
    color: "bg-purple-500/10 text-purple-600",
  }
];

export default function AdministracionPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Administración" 
        subtitle="Gestión y Servicios"
      />

      {/* Safety Notice Banner */}
      <section className="max-w-7xl mx-auto px-6 mt-[-60px] relative z-30">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-linear-to-r from-[#001a35] to-[#003366] rounded-[3rem] p-10 md:p-14 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a059]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="w-24 h-24 rounded-4xl bg-white/10 backdrop-blur-xl flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
            <ShieldCheck className="w-12 h-12 text-[#c5a059]" />
          </div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-3xl font-display font-medium text-white mb-3">Compromiso con la Seguridad</h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Por razones de seguridad institucional, <span className="text-[#c5a059] font-bold">no se realizan cobros en efectivo</span> en las instalaciones del colegio. 
            </p>
          </div>
          
          <button className="px-10 py-5 bg-[#c5a059] text-[#001a35] font-bold rounded-2xl hover:scale-105 transition-all text-xs uppercase tracking-[0.2em] shrink-0 shadow-2xl shadow-[#c5a059]/20 relative z-10">
            Medios de Pago
          </button>
        </motion.div>
      </section>

      {/* Main Grid Categories */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adminCategories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group p-12 rounded-[3.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-[#c5a059]/30 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className={`w-16 h-16 rounded-3xl ${cat.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 shadow-sm`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#001a35] mb-4">{cat.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                {cat.desc}
              </p>
              <button className="flex items-center gap-2 text-[#001a35] font-bold text-[10px] uppercase tracking-[0.25em] group/btn hover:text-[#c5a059] transition-colors">
                Ingresar <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Channels */}
      <section className="bg-[#001122] py-40 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#c5a059_0%,transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#c5a059] font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Atención Directa</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium leading-tight tracking-tighter">Canales de Comunicación</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Tesorería */}
            <div className="group bg-white/5 border border-white/10 rounded-[4rem] p-16 hover:bg-white/10 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#c5a059]/10 transition-colors" />
              <Mail className="w-12 h-12 text-[#c5a059] mb-10" />
              <h4 className="text-2xl font-bold mb-4">Consultas Generales</h4>
              <p className="text-zinc-400 text-base mb-12 leading-relaxed">Para temas administrativos diversos, trámites y facturación general.</p>
              <a href="mailto:tesoreria@colegioemaus.edu.ar" className="text-xl font-medium text-white hover:text-[#c5a059] transition-colors block border-t border-white/10 pt-10">
                tesoreria@colegioemaus.edu.ar
              </a>
            </div>

            {/* Comprobantes */}
            <div className="group bg-white/5 border border-white/10 rounded-[4rem] p-16 hover:bg-white/10 transition-all duration-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#c5a059]/10 transition-colors" />
              <Bell className="w-12 h-12 text-[#c5a059] mb-10" />
              <h4 className="text-2xl font-bold mb-4">Envío de Comprobantes</h4>
              <p className="text-zinc-400 text-base mb-12 leading-relaxed">Uso exclusivo para el envío de justificantes de pago y transferencias bancarias.</p>
              <a href="mailto:comprobantes@colegioemaus.edu.ar" className="text-xl font-medium text-white hover:text-[#c5a059] transition-colors block border-t border-white/10 pt-10">
                comprobantes@colegioemaus.edu.ar
              </a>
            </div>

            {/* Teléfono */}
            <div className="group bg-white/5 border border-white/10 rounded-[4rem] p-16 hover:bg-white/10 transition-all duration-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#c5a059]/10 transition-colors" />
              <PhoneCall className="w-12 h-12 text-[#c5a059] mb-10" />
              <h4 className="text-2xl font-bold mb-4">Atención Telefónica</h4>
              <p className="text-zinc-400 text-base mb-12 leading-relaxed">Atención de Lunes a Viernes de 08:00 a 17:00 hs en nuestras oficinas.</p>
              <a href="tel:68410266" className="text-4xl font-display font-medium text-white hover:text-[#c5a059] transition-colors block border-t border-white/10 pt-10">
                6841-0266
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
