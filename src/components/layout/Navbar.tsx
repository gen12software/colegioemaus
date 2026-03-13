"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "Niveles",
    href: "#",
    submenu: [
      { name: "Jardín de Infantes", href: "/niveles/jardin", color: "bg-amber-500" },
      { name: "Escuela Primaria", href: "/niveles/primaria", color: "bg-rose-500" },
      { name: "Escuela Secundaria", href: "/niveles/secundaria", color: "bg-violet-500" },
      { name: "Escuela Téc. Profesional", href: "/niveles/tecnica", color: "bg-cyan-500" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
          scrolled ? "md:px-12 md:py-4" : "md:px-12 md:py-8"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-3xl transition-all duration-500 px-8 py-4 flex justify-between items-center",
            scrolled
              ? "bg-white/80 backdrop-blur-xl border border-zinc-200 shadow-2xl"
              : "bg-transparent md:border-transparent"
          )}
        >
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex flex-col group">
              <span className={cn(
                "font-display font-bold text-2xl tracking-tighter uppercase leading-none transition-colors",
                scrolled ? "text-primary group-hover:text-accent" : "text-white group-hover:text-accent"
              )}>
                Colegio Emaús
              </span>
              <div className="flex items-center gap-2">
                <div className="h-px w-4 bg-accent" />
                <span className={cn(
                  "text-[9px] font-bold tracking-[0.3em] uppercase transition-colors",
                  scrolled ? "text-zinc-400" : "text-white/40"
                )}>
                  Fundación Padre Luis
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:ml-6 md:flex md:space-x-12 items-center">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "transition-all py-2 text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-2",
                    scrolled
                      ? "text-zinc-600 hover:text-primary"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-3 h-3 opacity-30 group-hover:rotate-180 transition-transform" />}
                </Link>

                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 w-72 bg-white shadow-3xl border border-zinc-100 rounded-3xl overflow-hidden py-6"
                      >
                        <div className="px-8 pb-4 mb-4 border-b border-zinc-50">
                          <span className="text-[10px] font-bold text-accent tracking-widest uppercase">Niveles Educativos</span>
                        </div>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex px-8 py-3 text-sm text-zinc-900 hover:bg-zinc-50 hover:pl-10 transition-all items-center gap-4 group/item"
                          >
                            <span className={cn("w-2 h-2 rounded-full", sub.color)} />
                            <span className="font-medium">{sub.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setIsHubOpen(true)}
              className="group flex flex-col items-end gap-1"
            >
              <div className={cn(
                "w-8 h-[2px] transition-all group-hover:w-12 group-hover:bg-accent",
                scrolled ? "bg-primary" : "bg-white"
              )} />
              <div className={cn(
                "w-5 h-[2px] transition-all group-hover:w-8 group-hover:bg-accent",
                scrolled ? "bg-primary" : "bg-white"
              )} />
              <span className={cn(
                "text-[9px] font-bold uppercase tracking-widest mt-1 transition-colors",
                scrolled ? "text-primary/60 group-hover:text-accent" : "text-white/40 group-hover:text-white"
              )}>
                Explorar
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex items-center justify-center p-3 rounded-2xl transition-all",
                scrolled ? "bg-primary text-white" : "bg-white/10 text-white backdrop-blur-md"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
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
