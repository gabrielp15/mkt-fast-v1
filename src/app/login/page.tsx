"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ArrowLeft, Loader2, Rocket, Facebook, Twitter } from "lucide-react";
import { Google } from "@/components/Icons";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard");
        }, 1000);
    }

    return (
        <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-primary" />
                <div className="relative z-20 flex flex-1 items-center justify-center text-lg font-medium">
                    <div className="flex flex-col items-center justify-center gap-6 group">
                        <div className="relative flex items-center justify-center p-6 bg-white rounded-full w-48 h-48 shadow-2xl">
                            <Rocket className="h-24 w-24 text-primary transition-transform group-hover:rotate-12 fill-current" />
                        </div>
                        <div className="flex flex-col items-center leading-none font-bold tracking-tighter text-white drop-shadow-md">
                            <span className="text-[6rem]">FAST</span>
                            <span className="text-[6rem] text-cta -mt-4">MKT</span>
                        </div>
                    </div>
                </div>
                <div className="relative z-20 mt-auto">
                    {/* Testimonial removed as requested */}
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center relative">
                        {/* Back button positioned relative to the form content */}
                        <div className="absolute left-0 -top-16 md:-top-24">
                            <Link
                                href="/"
                                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Voltar
                            </Link>
                        </div>

                        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                        <p className="text-sm text-muted-foreground">
                            Entre com seu e-mail e senha
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        placeholder="nome@exemplo.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                        Senha
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <button
                                    disabled={isLoading}
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-cta text-cta-foreground shadow hover:bg-cta/90 h-9 px-4 py-2"
                                >
                                    {isLoading && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Entrar
                                </button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Ou continue com
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                disabled={isLoading}
                            >
                                <Google className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                disabled={isLoading}
                            >
                                <Facebook className="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                disabled={isLoading}
                            >
                                <Twitter className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                            Não tem uma conta?{" "}
                            <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                                Criar conta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
