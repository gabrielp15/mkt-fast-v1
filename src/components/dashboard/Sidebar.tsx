"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, CreditCard, LogOut, Home, QrCode, CalendarDays, Sparkles, Eraser, Megaphone, FolderOpen, Wrench, ChevronDown, ChevronRight, PanelLeftClose, PanelLeft, Rocket, FileText, Wallet, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

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
        icon: CreditCard,
        submenu: [
            { title: "Faturas", href: "/dashboard/financial", icon: FileText },
            { title: "Meus Cartões", href: "/dashboard/financial/cards", icon: CreditCard },
            { title: "Meu Plano", href: "/dashboard/financial/plan", icon: Package },
            { title: "Meu Saldo", href: "/dashboard/financial/balance", icon: Wallet },
        ]
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

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const toggleSubmenu = (title: string) => {
        if (isCollapsed) setIsCollapsed(false);
        setOpenSubmenu(openSubmenu === title ? null : title);
    };

    return (
        <div className={cn("flex flex-col h-full border-r border-slate-900 bg-slate-950 transition-all duration-300 ease-in-out relative z-10", isCollapsed ? "w-[80px]" : "w-[260px]")}>
            
            {/* Collapse Toggle Button */}
            <button 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 shadow-sm z-50 hover:bg-slate-800 hover:text-white transition-colors"
            >
                <ChevronRight className={cn("h-4 w-4 transition-transform", !isCollapsed && "rotate-180")} />
            </button>

            <div className={cn("h-20 flex items-center border-b border-slate-900 lg:h-24 overflow-hidden", isCollapsed ? "justify-center px-0 shrink-0" : "px-6")}>
                <Link href="/dashboard" className="flex items-center group transition-transform hover:scale-105 active:scale-95 duration-200">
                    {isCollapsed ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 ml-3 shrink-0">
                            <img src="/loguinho.png" alt="Fast MKT" className="h-6 w-6 object-contain pointer-events-none select-none" />
                        </div>
                    ) : (
                        <Logo className="scale-[1.5] md:scale-[1.7] origin-left" />
                    )}
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 custom-scrollbar">
                <nav className="grid items-start px-3 text-sm font-medium gap-1">
                    {sidebarItems.map((item) => {
                        if (item.submenu) {
                            const isSubmenuActive = item.submenu.some(sub => pathname === sub.href);
                            const isOpen = openSubmenu === item.title && !isCollapsed;

                            return (
                                <div key={item.title} className="flex flex-col gap-1 w-full">
                                    <button
                                        onClick={() => toggleSubmenu(item.title)}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg py-2 transition-all hover:bg-slate-900 hover:text-primary w-full border border-transparent",
                                            isCollapsed ? "justify-center px-0" : "justify-between px-3",
                                            isSubmenuActive ? "text-primary font-semibold" : "text-slate-400"
                                        )}
                                        title={isCollapsed ? item.title : undefined}
                                    >
                                        <div className={cn("flex items-center", isCollapsed ? "justify-center w-full" : "gap-3")}>
                                            <item.icon className={cn("h-5 w-5 shrink-0", isSubmenuActive && "text-primary")} />
                                            {!isCollapsed && <span>{item.title}</span>}
                                        </div>
                                        {!isCollapsed && <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform", isOpen && "rotate-180")} />}
                                    </button>

                                    {isOpen && !isCollapsed && (
                                        <div className="flex flex-col gap-1 pl-4 mb-2 animate-in slide-in-from-top-2">
                                            <div className="pl-3 border-l text-slate-400 border-slate-800 space-y-1">
                                                {item.submenu.map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        className={cn(
                                                            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-slate-900 text-sm",
                                                            pathname === sub.href
                                                                ? "bg-slate-900 text-primary font-medium"
                                                                : "text-slate-400"
                                                        )}
                                                    >
                                                        <sub.icon className="h-4 w-4 shrink-0" />
                                                        <span className="truncate">{sub.title}</span>
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
                                title={isCollapsed ? item.title : undefined}
                                className={cn(
                                    "flex items-center rounded-lg py-2 transition-all hover:bg-slate-900 hover:text-primary w-full border border-transparent",
                                    isCollapsed ? "justify-center px-0 gap-0" : "px-3 gap-3",
                                    pathname === item.href
                                        ? "bg-slate-900 border-slate-800 text-primary font-medium"
                                        : "text-slate-400"
                                )}
                            >
                                <item.icon className={cn("h-5 w-5 shrink-0", pathname === item.href && "text-primary")} />
                                {!isCollapsed && <span className="truncate">{item.title}</span>}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className={cn("mt-auto p-4 border-t border-slate-900", isCollapsed ? "flex justify-center flex-col gap-2 px-2" : "")}>
                <button
                    onClick={() => setShowLogoutModal(true)}
                    title={isCollapsed ? "Sair" : undefined}
                    className={cn("flex items-center rounded-lg py-2 text-sm font-medium text-slate-400 transition-all hover:text-white hover:bg-slate-900", isCollapsed ? "justify-center gap-0 w-full" : "px-3 gap-3")}
                >
                    <LogOut className="h-5 w-5 shrink-0" />
                    {!isCollapsed && <span>Sair</span>}
                </button>
            </div>

            {/* Logout Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-sm w-full p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Sair da Plataforma</h3>
                            <p className="text-sm text-slate-300">Tem certeza de que deseja retornar à tela inicial?</p>
                        </div>
                        <div className="flex justify-end gap-3 mt-4">
                            <button 
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                            >
                                Cancelar
                            </button>
                            <Link 
                                href="/"
                                className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Sim, sair
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
