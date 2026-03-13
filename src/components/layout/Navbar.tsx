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
      { name: "Jardín de Infantes", href: "/niveles/jardin", color: "text-amber-500" },
      { name: "Escuela Primaria", href: "/niveles/primaria", color: "text-rose-500" },
      { name: "Escuela Secundaria", href: "/niveles/secundaria", color: "text-violet-500" },
      { name: "Escuela Téc. Profesional", href: "/niveles/tecnica", color: "text-cyan-500" },
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

  return (
    <>
      <NavHub isOpen={isHubOpen} onClose={() => setIsHubOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex flex-col group">
              <span className="text-primary font-display font-bold text-2xl tracking-tighter uppercase leading-none group-hover:text-accent transition-colors">Colegio Emaús</span>
              <div className="flex items-center gap-2">
                <div className="h-px w-4 bg-accent" />
                <span className="text-[9px] text-zinc-400 font-bold tracking-[0.3em] uppercase">Fundación Padre Luis</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
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
                    "text-zinc-600 hover:text-primary transition-colors py-2 text-sm font-medium flex items-center gap-1",
                    activeSubmenu === item.name && "text-primary"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-xl border border-zinc-100 rounded-2xl overflow-hidden py-4"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex px-6 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-primary transition-all items-center gap-3"
                          >
                            <span className={cn("w-1.5 h-1.5 rounded-full", sub.color.replace('text-', 'bg-'))} />
                            {sub.name}
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
              <div className="w-8 h-[2px] bg-primary transition-all group-hover:w-12 group-hover:bg-accent" />
              <div className="w-5 h-[2px] bg-primary transition-all group-hover:w-8 group-hover:bg-accent" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1 opacity-60 group-hover:opacity-100 group-hover:text-accent">Menu Hub</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-4 text-base font-semibold text-zinc-900 border-b border-zinc-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 bg-zinc-50/50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-3 text-sm font-medium text-zinc-600 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </>
  );
}
