import { Sidebar } from "@/components/dashboard/Sidebar";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
            <div className="hidden border-r bg-muted/40 md:block">
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px]">
                    <div className="w-full flex-1">
                        {/* Header content/Breadcrumbs could go here */}
                        <span className="font-semibold text-lg">Área do Cliente</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/profile" title="Meu Perfil">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold hover:bg-primary/20 transition-colors">
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
                        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-110"
                        title="Novo Pedido"
                    >
                        <Plus className="h-8 w-8" />
                    </Link>
                </main>
            </div>
        </div>
    );
}
