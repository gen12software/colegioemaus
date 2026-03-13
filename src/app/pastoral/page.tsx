import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function PastoralPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Pastoral" 
        subtitle="Colegio Emaús"
      />
      <ComingSoon />
    </main>
  );
}
