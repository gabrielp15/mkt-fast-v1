import { Sidebar } from "@/components/dashboard/Sidebar";
import { MobileSidebar } from "@/components/dashboard/MobileSidebar";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full relative dark bg-[#020617] bg-[radial-gradient(ellipse_at_center,rgba(255,101,30,0.15)_0%,rgba(2,6,23,1)_80%)] text-white font-sans antialiased">
            {/* Sidebar desktop */}
            <div className="hidden bg-slate-950 border-r border-slate-900 md:block shrink-0 relative z-20">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 min-w-0 relative z-10">
                <header className="flex h-16 items-center gap-4 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md px-4 lg:h-20 lg:px-6">
                    {/* Hambúrguer mobile */}
                    <MobileSidebar />
                    <div className="w-full flex-1">
                        <span className="font-semibold text-base lg:text-lg">Área do Cliente</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/profile" title="Meu Perfil">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold hover:bg-primary/20 transition-colors text-sm">
                                US
                            </div>
                        </Link>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 relative">
                    {children}

                    {/* Floating Action Button */}
                    <Link
                        href="/dashboard/new-request"
                        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-110 md:bottom-8 md:right-8"
                        title="Novo Pedido"
                    >
                        <Plus className="h-7 w-7" />
                    </Link>
                </main>
            </div>
        </div>
    );
}
