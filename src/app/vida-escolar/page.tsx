import PageHeader from "@/components/layout/PageHeader";
import ComingSoon from "@/components/sections/ComingSoon";

export default function VidaEscolarPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Vida Escolar" 
        subtitle="Colegio Emaús"
      />
      <ComingSoon />
    </main>
  );
}
