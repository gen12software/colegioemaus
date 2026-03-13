"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "Niveles",
    href: "#",
    submenu: [
      { name: "Jardín de Infantes", href: "/niveles/jardin", color: "bg-accent" },
      { name: "Escuela Primaria", href: "/niveles/primaria", color: "bg-primary" },
      { name: "Escuela Secundaria", href: "/niveles/secundaria", color: "bg-secondary" },
      { name: "Escuela Téc. Profesional", href: "/niveles/tecnica", color: "bg-emaus-gray" },
    ]
  },
  { name: "Institucional", href: "/institucional" },
  { name: "Administración", href: "/administracion" },
  { name: "Pastoral", href: "/pastoral" },
  { name: "Deporte y Arte", href: "/vida-escolar" },
  { name: "Contacto", href: "/contacto" },
];

import NavHub from "./NavHub";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHubOpen, setIsHubOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavHub isOpen={isHubOpen} onClose={() => setIsHubOpen(false)} />
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-2 md:px-12",
          scrolled ? "bg-transparent" : "bg-primary/90 backdrop-blur-md"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between relative",
            scrolled
              ? "max-w-[95%] lg:max-w-7xl bg-white/95 backdrop-blur-3xl border border-zinc-200 shadow-2xl rounded-full px-8 h-20 mt-4"
              : "max-w-7xl bg-transparent px-4 h-24"
          )}
        >
          {/* 1. Left: Logo & Menu Trigger */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsHubOpen(true)}
              className={cn(
                "p-3 rounded-2xl transition-all flex items-center gap-3 group",
                scrolled ? "hover:bg-zinc-100 text-primary" : "hover:bg-white/10 text-white"
              )}
            >
              <Menu className="w-6 h-6" />
              <div className="h-8 w-px bg-zinc-200 mx-2 hidden xl:block" />
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/logo-emaus.png" 
                  alt="Colegio Emaús" 
                  width={150} 
                  height={50} 
                  className="h-12 w-auto transition-all duration-500"
                  priority
                />
              </div>
            </button>
          </div>

          {/* 2. Center: Primary Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const hasSubmenu = !!item.submenu;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => hasSubmenu && setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:text-accent whitespace-nowrap flex items-center gap-1.5",
                      scrolled ? "text-primary" : "text-white/80",
                      activeSubmenu === item.name && "text-accent"
                    )}
                  >
                    {item.name}
                    {hasSubmenu && (
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform duration-300",
                        activeSubmenu === item.name && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasSubmenu && activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 z-50 pointer-events-auto"
                      >
                        <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 overflow-hidden w-72">
                          <div className="flex flex-col">
                            {item.submenu?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                              >
                                <div className="flex items-center gap-4">
                                  <div className={cn("w-1.5 h-6 rounded-full", sub.color)} />
                                  <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                      {sub.name}
                                    </span>
                                    <span className="text-[9px] text-emaus-gray font-light uppercase tracking-widest mt-0.5">
                                       Colegio Emaús
                                    </span>
                                  </div>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                  <ChevronDown className="w-4 h-4 text-accent -rotate-90" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* 3. Right: CTA */}
          <Link
            href="/inscripciones"
            className={cn(
              "px-8 py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl whitespace-nowrap",
              scrolled
                ? "bg-primary text-white hover:bg-accent shadow-primary/10"
                : "bg-white text-primary hover:bg-accent hover:text-white shadow-2xl"
            )}
          >
            Inscribirme
          </Link>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-60 bg-primary flex flex-col p-12 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-accent font-bold tracking-widest uppercase text-xs">Menu</span>
              <button onClick={() => setIsOpen(false)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white">
                <X strokeWidth={1} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-display font-medium text-white hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mt-4 flex flex-col gap-3 pl-8">
                      {item.submenu.map(sub => (
                        <Link key={sub.name} href={sub.href} className="text-white/40 text-lg" onClick={() => setIsOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
