"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu, X, LayoutDashboard, PlusCircle, CreditCard, LogOut,
    Home, QrCode, CalendarDays, Sparkles, Eraser, Megaphone,
    FolderOpen, Wrench, ChevronDown, User, FileText, Wallet, Package
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const sidebarItems = [
    { title: "Início", href: "/dashboard", icon: Home },
    { title: "Novo Pedido", href: "/dashboard/new-request", icon: PlusCircle },
    { title: "Meus Pedidos", href: "/dashboard/requests", icon: LayoutDashboard },
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
    { title: "Meu Perfil", href: "/dashboard/profile", icon: User },
    {
        title: "Ferramentas",
        icon: Wrench,
        submenu: [
            { title: "Criar QR Code", href: "/dashboard/qr-code", icon: QrCode },
            { title: "Calendário Mkt", href: "/dashboard/calendario", icon: CalendarDays },
            { title: "Sugestões IA", href: "/dashboard/ia-artes", icon: Sparkles },
            { title: "Remover Fundo", href: "/dashboard/bg-remover", icon: Eraser },
        ],
    },
    { title: "Social Media", href: "/dashboard/social-media", icon: Megaphone },
    { title: "Media Kit", href: "/dashboard/media-kit", icon: FolderOpen },
];

export function MobileSidebar() {
    const [open, setOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>("Ferramentas");
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const pathname = usePathname();

    // Fecha o drawer ao navegar
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Bloqueia scroll do body quando aberto
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            {/* Botão hambúrguer — só aparece em mobile */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden flex items-center justify-center h-9 w-9 rounded-md border border-input bg-background hover:bg-muted transition-colors"
                aria-label="Abrir menu"
            >
                <Menu className="h-5 w-5" />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-[280px] bg-slate-950 border-r border-slate-900 text-slate-300 shadow-xl flex flex-col transition-transform duration-300 ease-in-out md:hidden",
                    open ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Header do drawer */}
                <div className="flex items-center justify-between h-16 px-5 border-b border-slate-900 bg-slate-950 shrink-0">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <Logo className="scale-[1.4] origin-left" />
                    </Link>
                    <button
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
                        aria-label="Fechar menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {sidebarItems.map((item) => {
                        if (item.submenu) {
                            const isSubmenuActive = item.submenu.some(s => pathname === s.href);
                            const isOpen = openSubmenu === item.title;

                            return (
                                <div key={item.title}>
                                    <button
                                        onClick={() => setOpenSubmenu(isOpen ? null : item.title)}
                                        className={cn(
                                            "flex items-center justify-between w-full gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-900 hover:text-white",
                                            isSubmenuActive ? "text-primary" : "text-slate-400"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className="h-4 w-4" />
                                            {item.title}
                                        </div>
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                                    </button>
                                    {isOpen && (
                                        <div className="pl-4 mt-1 space-y-1 border-l text-slate-400 border-slate-800 ml-6">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className={cn(
                                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-900 hover:text-white",
                                                        pathname === sub.href
                                                            ? "bg-slate-900 text-primary font-medium"
                                                            : "text-slate-400"
                                                    )}
                                                >
                                                    <sub.icon className="h-4 w-4" />
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href!}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-900 hover:text-white",
                                    pathname === item.href
                                        ? "bg-slate-900 text-primary border border-slate-800"
                                        : "text-slate-400 border border-transparent"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer do drawer */}
                <div className="p-4 border-t border-slate-900 shrink-0">
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className="flex items-center w-full gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                    >
                        <LogOut className="h-4 w-4 shrink-0" />
                        Sair
                    </button>
                </div>
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
        </>
    );
}
