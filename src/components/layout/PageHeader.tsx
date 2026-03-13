"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, image, className }: PageHeaderProps) {
  return (
    <section className={cn("relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20", className)}>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-primary/60 to-black/80 z-10" />
        
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,#4881B9_0%,transparent_50%)] opacity-30" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-medium text-white leading-none mb-6 tracking-tighter">
            {title}
          </h1>
          {subtitle && (
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-accent/60" />
              <p className="text-sm md:text-base text-accent font-bold uppercase tracking-[0.4em]">
                {subtitle}
              </p>
              <div className="h-px w-8 bg-accent/60" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent z-20" />
    </section>
  );
}
