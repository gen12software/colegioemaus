import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function ComunidadesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Comunidades" 
        subtitle="Vida de Fe en Comunidad"
        image="/images/hero.png"
      />
      <ComingSoon />
    </main>
  );
}
