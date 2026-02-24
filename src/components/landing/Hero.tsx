"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32 flex items-center justify-center bg-background">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary">
                            Fast MKT v1.0
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-600 pb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Marketing Ágil para <br className="hidden md:inline" />
                        Resultados Imediatos
                    </motion.h1>

                    <motion.p
                        className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Solicite materiais, artes e campanhas em minutos. Acompanhe tudo em tempo real através do nosso dashboard exclusivo.
                    </motion.p>

                    <motion.div
                        className="space-x-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            href="/login"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-cta px-8 text-sm font-medium text-cta-foreground shadow transition-colors hover:bg-cta/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Começar Agora
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Saiba Mais
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </section>
    );
}
