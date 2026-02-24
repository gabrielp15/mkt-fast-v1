"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
// Wait, I haven't created a Button component yet, I should stick to standard HTML or create one. 
// The project structure didn't explicitly create a ui/button.tsx. 
// I'll use standard Tailwind classes for now to avoid dependency on uncreated files.

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center p-1">
                        <Rocket className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
                    </div>
                    <div className="flex flex-col leading-none font-bold tracking-tighter">
                        <span className="text-xl text-primary">FAST</span>
                        <span className="text-xl text-cta -mt-1">MKT</span>
                    </div>
                </Link>
            </div>
            <nav className="flex items-center gap-6">
                <Link
                    href="/about"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
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
