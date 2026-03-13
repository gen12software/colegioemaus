import PageHeader from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Contacto" 
        subtitle="Estamos para escucharte"
      />
      
      <section className="max-w-7xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-display font-medium text-primary mb-10">Información de Contacto</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Dirección</h3>
                  <p className="text-zinc-600">Leandro N. Alem 950, El Palomar, Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Teléfonos</h3>
                  <p className="text-zinc-600">+54 (11) 4751-0125 / 4758-2950</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">E-mail</h3>
                  <p className="text-zinc-600">info@colegioemaus.edu.ar</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Horarios de Atención</h3>
                  <p className="text-zinc-600">Lunes a Viernes: 08:00 - 17:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-50 p-12 rounded-[2.5rem] border border-zinc-100 shadow-2xl shadow-zinc-200/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-2">Nombre</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-2">E-mail</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-2">Asunto</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium" placeholder="Motivo de contacto" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest pl-2">Mensaje</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/20 hover:shadow-accent/40 uppercase tracking-widest text-sm">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
