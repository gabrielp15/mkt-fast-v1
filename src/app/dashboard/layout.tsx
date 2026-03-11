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
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
            {/* Sidebar desktop */}
            <div className="hidden border-r bg-muted/40 md:block">
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <header className="flex h-16 items-center gap-4 border-b bg-muted/40 px-4 lg:h-20 lg:px-6">
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
