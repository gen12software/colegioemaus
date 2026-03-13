import PageHeader from "@/components/layout/PageHeader";
import { Cpu, Settings, PenTool, Lightbulb, Zap } from "lucide-react";

const features = [
  { icon: Cpu, name: "Informática", desc: "Desarrollo de Software, Sistemas y Redes." },
  { icon: Settings, name: "Electromecánica", desc: "Mantenimiento industrial y diseño mecánico." },
  { icon: Zap, name: "Energías", desc: "Electricidad y sustentabilidad energética." },
];

export default function TecnicaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <PageHeader 
        title="Escuela Técnica" 
        subtitle="Innovación y Futuro Profesional"
        image="/images/tecnica.png"
        className="bg-primary/20"
      />
      
      <section className="max-w-7xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Excelencia Técnica</span>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 leading-tight">
              Formando los profesionales <br /> de la era industrial 4.0
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
              Nuestra Escuela Técnico Profesional (ETP) combina una sólida base teórica con workshops prácticos intensivos en laboratorios de última generación.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-accent pl-6">
                <div className="text-3xl font-bold mb-1">7 Años</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Plan de Estudios</div>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <div className="text-3xl font-bold mb-1">+10</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Laboratorios Propios</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl opacity-20 rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between">
                <PenTool className="text-accent w-10 h-10" />
                <span className="font-bold tracking-tight">Diseño Técnico</span>
              </div>
              <div className="aspect-square rounded-3xl bg-zinc-900 border border-white/5 p-8 flex flex-col justify-between mt-8">
                <Lightbulb className="text-accent w-10 h-10" />
                <span className="font-bold tracking-tight">Creatividad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Especialidades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-accent/30 transition-all hover:bg-accent/5 backdrop-blur-md">
              <f.icon className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-display font-medium mb-4">{f.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blueprint CTA */}
      <section className="py-24 bg-accent text-primary">
         <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-10">¿Listo para el desafío técnico?</h2>
            <button className="px-12 py-6 rounded-full bg-primary text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Descargar Plan de Estudios 2026
            </button>
         </div>
      </section>
    </main>
  );
}
