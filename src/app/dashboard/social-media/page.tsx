"use client";

import { Megaphone, Rocket, Sparkles } from "lucide-react";

export default function SocialMediaPage() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full h-[calc(100vh-8rem)] min-h-[400px] items-center justify-center text-center">

            <div className="relative mb-8 group">
                <div className="absolute -inset-1 blur-2xl opacity-40 bg-gradient-to-r from-primary via-secondary to-primary rounded-full group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-card border shadow-xl">
                    <Megaphone className="h-12 w-12 text-primary" />
                </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground mb-4 relative">
                Social Media <span className="text-primary">&</span> Tráfego
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Estamos preparando um módulo completo para você gerenciar suas redes sociais, e acompanhar as campanhas de tráfego pago direto do seu painel.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-6 py-2 text-sm font-semibold shadow-sm backdrop-blur-sm transition-transform cursor-default">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Em Breve
                </span>
                <Sparkles className="w-4 h-4 text-secondary" />
            </div>

        </div>
    );
}
