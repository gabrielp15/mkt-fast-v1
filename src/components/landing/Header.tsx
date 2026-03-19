"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-20 md:h-24 items-center justify-between border-b border-slate-900 bg-slate-950 px-4 md:px-8">
            <div className="flex items-center shrink-0">
                <Link href="/" onClick={closeMenu} className="flex items-center group transition-transform hover:scale-105 active:scale-95 duration-200">
                    <Logo className="!w-[140px] sm:!w-[180px] md:!w-[220px] !h-auto max-w-none" />
                </Link>
            </div>
            
            {/* Nav para Desktop */}
            <nav className="hidden md:flex items-center gap-6">
                {pathname !== "/" && (
                    <Link href="/" className="text-sm font-medium text-slate-400 transition-colors hover:text-primary">
                        Início
                    </Link>
                )}
                <Link href="/servicos" className="text-sm font-medium text-slate-400 transition-colors hover:text-primary">
                    Serviços
                </Link>
                <Link href="/about" className="text-sm font-medium text-slate-400 transition-colors hover:text-primary">
                    Sobre
                </Link>
                <button
                    onClick={() => window.dispatchEvent(new Event('openContactWidget'))}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#E64A19] to-[#FF6D00] px-6 text-sm font-medium text-white shadow transition-all hover:scale-105 hover:shadow-[0_8px_20px_-6px_rgba(230,74,25,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    Fale Conosco
                </button>
            </nav>

            {/* Mobile Actions: Hamburguer Menu & CTA curto */}
            <div className="flex md:hidden items-center gap-2">
                <button
                    onClick={() => window.dispatchEvent(new Event('openContactWidget'))}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#E64A19] to-[#FF6D00] px-4 text-sm font-semibold text-white shadow transition-transform active:scale-95"
                >
                    Fale Conosco
                </button>
                <button 
                    className="ml-2 p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown Animado */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-[80px] left-0 right-0 bg-slate-950 border-b border-slate-900 shadow-2xl p-4 flex flex-col gap-2 z-40 md:hidden"
                    >
                        {pathname !== "/" && (
                            <Link href="/" onClick={closeMenu} className="p-4 text-base font-medium text-slate-300 hover:text-primary hover:bg-slate-900 rounded-md transition-colors">
                                Início
                            </Link>
                        )}
                        <Link href="/servicos" onClick={closeMenu} className="p-4 text-base font-medium text-slate-300 hover:text-primary hover:bg-slate-900 rounded-md transition-colors">
                            Serviços
                        </Link>
                        <Link href="/about" onClick={closeMenu} className="p-4 text-base font-medium text-slate-300 hover:text-primary hover:bg-slate-900 rounded-md transition-colors">
                            Sobre
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
