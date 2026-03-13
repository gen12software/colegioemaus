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
          className="bg-white rounded-4xl p-10 md:p-14 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
            <ShieldCheck className="w-12 h-12 text-accent" />
          </div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-3xl font-display font-bold text-primary mb-3">Compromiso con la Seguridad</h3>
            <p className="text-emaus-gray text-lg leading-relaxed max-w-2xl">
              Por razones de seguridad institucional, <span className="text-accent font-bold underline decoration-accent/30">no se realizan cobros en efectivo</span> en las instalaciones del colegio. 
            </p>
          </div>
          
          <button className="px-10 py-5 bg-accent text-white font-bold rounded-2xl hover:scale-105 transition-all text-xs uppercase tracking-[0.2em] shrink-0 shadow-xl shadow-accent/20 relative z-10">
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
              className="group p-12 rounded-4xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/20 transition-all duration-700 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-3xl ${cat.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 shadow-sm`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">{cat.title}</h3>
              <p className="text-emaus-gray text-sm leading-relaxed mb-8">
                {cat.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.25em] group/btn hover:text-accent transition-colors">
                Ingresar <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 font-black transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Channels */}
      <section className="bg-slate-50 py-40 border-t border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Atención Directa</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight tracking-tighter">Canales de Comunicación</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Tesorería */}
            <div className="group bg-white border border-slate-100 rounded-4xl p-16 hover:border-accent/30 transition-all duration-700 shadow-xl">
              <Mail className="w-12 h-12 text-accent mb-10" />
              <h4 className="text-2xl font-bold text-primary mb-4">Consultas Generales</h4>
              <p className="text-emaus-gray text-base mb-12 leading-relaxed">Para temas administrativos diversos, trámites y facturación general.</p>
              <a href="mailto:tesoreria@colegioemaus.edu.ar" className="text-xl font-bold text-primary hover:text-accent transition-colors block border-t border-slate-100 pt-10">
                tesoreria@colegioemaus.edu.ar
              </a>
            </div>

            {/* Comprobantes */}
            <div className="group bg-white border border-slate-100 rounded-4xl p-16 hover:border-accent/30 transition-all duration-700 shadow-xl">
              <Bell className="w-12 h-12 text-accent mb-10" />
              <h4 className="text-2xl font-bold text-primary mb-4">Envío de Comprobantes</h4>
              <p className="text-emaus-gray text-base mb-12 leading-relaxed">Uso exclusivo para el envío de justificantes de pago y transferencias bancarias.</p>
              <a href="mailto:comprobantes@colegioemaus.edu.ar" className="text-xl font-bold text-primary hover:text-accent transition-colors block border-t border-slate-100 pt-10">
                comprobantes@colegioemaus.edu.ar
              </a>
            </div>

            {/* Teléfono */}
            <div className="group bg-white border border-slate-100 rounded-4xl p-16 hover:border-accent/30 transition-all duration-700 shadow-xl">
              <PhoneCall className="w-12 h-12 text-accent mb-10" />
              <h4 className="text-2xl font-bold text-primary mb-4">Atención Telefónica</h4>
              <p className="text-emaus-gray text-base mb-12 leading-relaxed">Atención de Lunes a Viernes de 08:00 a 17:00 hs en nuestras oficinas.</p>
              <a href="tel:68410266" className="text-4xl font-display font-bold text-primary hover:text-accent transition-colors block border-t border-slate-100 pt-10">
                6841-0266
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
