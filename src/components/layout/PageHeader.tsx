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
    <section className={cn("relative h-[40vh] flex items-center justify-center overflow-hidden bg-primary pt-20", className)}>
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/50 to-primary z-10" />
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--color-accent)_0%,transparent_50%)] opacity-20" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white leading-none mb-6 tracking-tighter">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-accent font-bold uppercase tracking-[0.3em]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
