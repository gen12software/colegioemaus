import PageHeader from "@/components/layout/PageHeader";

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Institucional" 
        subtitle="Misión, Visión y Valores"
        image="/images/hero.png"
      />
      
      <section className="max-w-4xl mx-auto py-24 px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-display font-medium text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">
            Nuestra Historia
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-12">
            El Colegio Emaús es una institución educativa católica fundada en 1961 por el Padre Luis... (Contenido a completar).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-xs">
              <h3 className="text-xl font-display font-bold text-primary mb-4">Misión</h3>
              <p className="text-zinc-500 text-sm italic">
                "Formar personas íntegras, con excelencia académica y sólidos valores cristianos..."
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-xs">
              <h3 className="text-xl font-display font-bold text-primary mb-4">Visión</h3>
              <p className="text-zinc-500 text-sm italic">
                "Ser un referente educativo de vanguardia, donde la innovación y la fe se encuentran..."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
