import Image from "next/image";

import Hero from "@/components/sections/Hero";
import Scrollytelling from "@/components/sections/Scrollytelling";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Scrollytelling />
      {/* Pre-footer/Action CTA could go here */}
      <section className="py-20 bg-primary text-white text-center">
        <h2 className="text-4xl font-display font-bold mb-6">¿Estás listo para unirte a nuestra comunidad?</h2>
        <p className="mb-10 opacity-80 max-w-2xl mx-auto">Vení a conocer nuestras instalaciones y conocer nuestra propuesta en primera persona.</p>
        <button className="px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-zinc-100 transition-all">
          Agendar una Visita
        </button>
      </section>
    </div>
  );
}
