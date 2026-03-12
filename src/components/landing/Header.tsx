"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
// Wait, I haven't created a Button component yet, I should stick to standard HTML or create one. 
// The project structure didn't explicitly create a ui/button.tsx. 
// I'll use standard Tailwind classes for now to avoid dependency on uncreated files.

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-20 md:h-24 items-center justify-between border-b border-slate-900 bg-slate-950 px-4 md:px-8">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95 duration-200">
                    <Logo className="scale-[2] md:scale-[2.5] origin-left" />
                </Link>
            </div>
            <nav className="flex items-center gap-6">
                {pathname !== "/" && (
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-400 transition-colors hover:text-primary"
                    >
                        Início
                    </Link>
                )}
                <Link
                    href="/about"
                    className="text-sm font-medium text-slate-400 transition-colors hover:text-primary"
                >
                    Sobre
                </Link>
                <Link
                    href="/login"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-cta px-4 py-2 text-sm font-medium text-cta-foreground shadow transition-colors hover:bg-cta/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    Entrar
                </Link>
            </nav>
        </header>
    );
}
