import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function InscripcionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Inscripciones" 
        subtitle="Formá parte de nuestra comunidad"
        image="/images/hero.png"
      />
      <ComingSoon />
    </main>
  );
}
