"use client";

import Link from "next/link";
import { AlertCircle, House } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4 text-center">
            <div className="flex flex-col items-center max-w-md space-y-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <AlertCircle className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-6xl font-black tracking-tighter text-foreground sm:text-8xl">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                        Página não encontrada
                    </h2>
                    <p className="text-muted-foreground text-pretty">
                        Ops! Parece que você se perdeu no espaço. A página que você
                        está procurando não existe ou foi movida.
                    </p>
                </div>
                <Link
                    href="/dashboard"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2"
                >
                    <House className="w-4 h-4" />
                    Voltar para o Início
                </Link>
            </div>
        </div>
    );
}
