"use client";

import { CreditCard, Plus } from "lucide-react";

export default function CardsPage() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Meus Cartões</h1>
                    <p className="text-slate-400">Gerencie seus métodos de pagamento para assinaturas e pedidos avulsos.</p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Cartão principal */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-primary/50 rounded-xl p-6 relative overflow-hidden shadow-lg select-none">
                    <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                        Principal
                    </div>
                    
                    <div className="flex justify-between items-start mb-8">
                        <CreditCard className="h-8 w-8 text-slate-300" />
                        <span className="text-xl font-black italic text-slate-100">VISA</span>
                    </div>

                    <div className="space-y-1 mb-6">
                        <p className="text-lg font-medium text-white tracking-widest text-shadow">
                            **** **** **** 4821
                        </p>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <div className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase">Titular</span>
                            <span className="text-slate-300 font-medium truncate max-w-[120px]">USUARIO EMPRESA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-slate-500 text-xs uppercase">Validade</span>
                            <span className="text-slate-300 font-medium">12/30</span>
                        </div>
                    </div>
                </div>

                {/* Placeholder add */}
                <button className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-800 rounded-xl p-6 text-slate-500 hover:text-slate-300 hover:border-slate-600 transition-colors min-h-[200px]">
                    <Plus className="h-8 w-8" />
                    <span className="font-medium">Cadastrar Novo Cartão</span>
                </button>
            </div>
        </div>
    );
}
