"use client";

import Link from "next/link";
import { LayoutDashboard, PlusCircle, CreditCard, User } from "lucide-react";

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
            </div>
        </div>
    );
}
