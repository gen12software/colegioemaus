import PageHeader from "@/components/layout/PageHeader";

export default function JardinPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Jardin de Infantes" 
        subtitle="Colegio Emaús"
        image="/images/jardin.png"
      />
      <section className="max-w-7xl mx-auto py-24 px-8 text-center text-zinc-500">
        <p className="text-xl">Estamos preparando el contenido detallado de esta sección para brindarte la mejor información.</p>
      </section>
    </main>
  );
}
