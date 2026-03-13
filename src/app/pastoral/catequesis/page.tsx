import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function CatequesisPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Catequesis" 
        subtitle="Formación en la Fe"
        image="/images/hero.png"
      />
      <ComingSoon />
    </main>
  );
}
