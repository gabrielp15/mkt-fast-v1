"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, CreditCard, LogOut, Rocket, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
    {
        title: "Início",
        href: "/dashboard",
        icon: Home,
    },
    {
        title: "Novo Pedido",
        href: "/dashboard/new-request",
        icon: PlusCircle,
    },
    {
        title: "Meus Pedidos",
        href: "/dashboard/requests",
        icon: LayoutDashboard,
    },
    {
        title: "Financeiro",
        href: "/dashboard/financial",
        icon: CreditCard,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full border-r bg-muted/40">
            <div className="h-14 flex items-center border-b px-6 lg:h-[60px]">
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
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                pathname === item.href
                                    ? "bg-muted text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="mt-auto p-4">
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary"
                >
                    <LogOut className="h-4 w-4" />
                    Sair
                </Link>
            </div>
        </div>
    );
}
