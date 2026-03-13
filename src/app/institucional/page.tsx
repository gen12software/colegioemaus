import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Institucional" 
        subtitle="Misión, Visión y Valores"
        image="/images/hero.png"
      />
      <ComingSoon />
    </main>
  );
}
