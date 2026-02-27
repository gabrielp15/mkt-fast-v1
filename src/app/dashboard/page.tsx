"use client";

import Link from "next/link";
import { LayoutDashboard, PlusCircle, CreditCard, User, Wrench, Megaphone, FolderOpen } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Bem-vindo, Usuário!</h1>
            <p className="text-muted-foreground">O que você gostaria de fazer hoje?</p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Link
                    href="/dashboard/new-request"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <PlusCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-semibold">Novo Pedido</span>
                </Link>

                <Link
                    href="/dashboard/requests"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                        <LayoutDashboard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-semibold">Meus Pedidos</span>
                </Link>

                <Link
                    href="/dashboard/financial"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                        <CreditCard className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-semibold">Financeiro</span>
                </Link>

                <Link
                    href="/dashboard/profile"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/20">
                        <User className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="font-semibold">Meu Perfil</span>
                </Link>

                {/* New Cards */}
                <Link
                    href="#ferramentas"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                        <Wrench className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-semibold">Ferramentas (IA & Utilitários)</span>
                </Link>

                <Link
                    href="/dashboard/social-media"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/20 relative z-10">
                        <Megaphone className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <span className="font-semibold relative z-10">Social Media & Tráfego</span>
                </Link>

                <Link
                    href="/dashboard/media-kit"
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow transition-colors hover:bg-muted/50 hover:text-primary"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                        <FolderOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="font-semibold">Media Kit</span>
                </Link>
            </div>

            {/* Quick Tools Section */}
            <div id="ferramentas" className="mt-8 space-y-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-primary" />
                    Acesso Rápido às Ferramentas
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Link href="/dashboard/ia-artes" className="group p-4 border rounded-xl bg-card hover:border-primary transition-colors flex flex-col gap-2 shadow-sm">
                        <div className="font-medium group-hover:text-primary flex items-center justify-between">
                            Sugestões IA
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Novo</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-snug">Gere ideias de copy e campanhas rapidamente.</p>
                    </Link>
                    <Link href="/dashboard/calendario" className="group p-4 border rounded-xl bg-card hover:border-secondary transition-colors flex flex-col gap-2 shadow-sm">
                        <div className="font-medium group-hover:text-secondary flex items-center justify-between">
                            Calendário Mkt
                        </div>
                        <p className="text-sm text-muted-foreground leading-snug">Planeje suas ações baseadas em datas sazonais.</p>
                    </Link>
                    <Link href="/dashboard/qr-code" className="group p-4 border rounded-xl bg-card hover:border-primary transition-colors flex flex-col gap-2 shadow-sm">
                        <div className="font-medium group-hover:text-primary flex items-center justify-between">
                            Criar QR Code
                        </div>
                        <p className="text-sm text-muted-foreground leading-snug">Gere códigos QR customizados para seus links.</p>
                    </Link>
                    <Link href="/dashboard/bg-remover" className="group p-4 border rounded-xl bg-card hover:border-foreground transition-colors flex flex-col gap-2 shadow-sm">
                        <div className="font-medium group-hover:text-foreground flex items-center justify-between">
                            Remover Fundo
                        </div>
                        <p className="text-sm text-muted-foreground leading-snug">Isole produtos de imagens em segundos.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
