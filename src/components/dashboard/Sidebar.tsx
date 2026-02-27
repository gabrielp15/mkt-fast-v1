"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, CreditCard, LogOut, Rocket, Home, QrCode, CalendarDays, Sparkles, Eraser, Megaphone, FolderOpen, Wrench, ChevronDown } from "lucide-react";
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
    {
        title: "Ferramentas",
        icon: Wrench,
        submenu: [
            {
                title: "Criar QR Code",
                href: "/dashboard/qr-code",
                icon: QrCode,
            },
            {
                title: "Calendário Mkt",
                href: "/dashboard/calendario",
                icon: CalendarDays,
            },
            {
                title: "Sugestões IA",
                href: "/dashboard/ia-artes",
                icon: Sparkles,
            },
            {
                title: "Remover Fundo",
                href: "/dashboard/bg-remover",
                icon: Eraser,
            },
        ],
    },
    {
        title: "Social Media",
        href: "/dashboard/social-media",
        icon: Megaphone,
    },
    {
        title: "Media Kit",
        href: "/dashboard/media-kit",
        icon: FolderOpen,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [openSubmenu, setOpenSubmenu] = useState<string | null>("Ferramentas");

    const toggleSubmenu = (title: string) => {
        setOpenSubmenu(openSubmenu === title ? null : title);
    };

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
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 custom-scrollbar">
                <nav className="grid items-start px-4 text-sm font-medium gap-1">
                    {sidebarItems.map((item) => {
                        if (item.submenu) {
                            const isSubmenuActive = item.submenu.some(sub => pathname === sub.href);
                            const isOpen = openSubmenu === item.title;

                            return (
                                <div key={item.title} className="flex flex-col gap-1 w-full">
                                    <button
                                        onClick={() => toggleSubmenu(item.title)}
                                        className={cn(
                                            "flex items-center justify-between gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted/50 hover:text-primary w-full",
                                            isSubmenuActive ? "text-primary font-semibold" : "text-muted-foreground"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className={cn("h-4 w-4", isSubmenuActive && "text-primary")} />
                                            {item.title}
                                        </div>
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                                    </button>

                                    {isOpen && (
                                        <div className="flex flex-col gap-1 pl-4 mb-2 animate-in slide-in-from-top-2">
                                            <div className="pl-3 border-l-2 border-muted space-y-1">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        className={cn(
                                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-sm",
                                                            pathname === sub.href
                                                                ? "bg-muted text-primary font-medium"
                                                                : "text-muted-foreground"
                                                        )}
                                                    >
                                                        <sub.icon className="h-4 w-4" />
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted/50 hover:text-primary w-full",
                                    pathname === item.href
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className={cn("h-4 w-4", pathname === item.href && "text-primary")} />
                                {item.title}
                            </Link>
                        );
                    })}
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
