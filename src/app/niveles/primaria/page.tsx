import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function PrimariaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Escuela Primaria" 
        subtitle="Colegio Emaús"
        image="/images/primaria.png"
      />
      <ComingSoon />
    </main>
  );
}
