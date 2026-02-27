"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background px-4 text-center">
            <div className="flex flex-col items-center max-w-md space-y-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-12 w-12 text-destructive animate-pulse" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                        Algo deu errado!
                    </h1>
                    <p className="text-muted-foreground text-pretty">
                        Desculpe, encontramos um erro inesperado. Nossa equipe técnica já foi notificada.
                    </p>
                    <div className="bg-muted p-4 rounded-lg mt-4 max-w-sm text-left overflow-hidden">
                        <p className="text-xs text-muted-foreground font-mono truncate">
                            {error.message || "Erro desconhecido"}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Tentar Novamente
                    </button>
                    <Link
                        href="/dashboard"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </div>
        </div>
    );
}
