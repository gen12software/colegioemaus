import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function PastoralSocialPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Pastoral Social" 
        subtitle="Compromiso Solidario"
        image="/images/hero.png"
      />
      <ComingSoon />
    </main>
  );
}
