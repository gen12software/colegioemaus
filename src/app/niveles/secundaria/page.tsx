import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function SecundariaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Escuela Secundaria" 
        subtitle="Colegio Emaús"
        image="/images/secundaria.png"
      />
      <ComingSoon />
    </main>
  );
}
