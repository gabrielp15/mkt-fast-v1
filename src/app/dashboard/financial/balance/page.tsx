"use client";

import { Wallet, ArrowDownRight, ArrowUpRight, Copy } from "lucide-react";

export default function BalancePage() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 px-4 mt-6">
            <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-primary" /> Meu Saldo
                </h1>
                <p className="text-slate-400">Aqui você gerencia seus créditos pré-pagos e histórico de transações.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-md md:col-span-2">
                    <h2 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Saldo Disponível em Créditos</h2>
                    <span className="text-4xl md:text-5xl font-black text-white">R$ 500,00</span>
                    <p className="mt-2 text-sm text-slate-500">Equivalente a 5 tokens ou créditos para pedidos avulsos.</p>
                    
                    <div className="mt-8 flex flex-col md:flex-row gap-3">
                        <button className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm">
                            Adicionar Créditos
                        </button>
                        <button className="flex-1 border border-slate-700 text-slate-300 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                            Ver Planos de Assinatura
                        </button>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center justify-center p-6 shadow-md text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                        <Wallet className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Como usar meu saldo?</h3>
                    <p className="text-sm text-slate-400">O saldo em carteira pode ser usado para descontar orçamentos mais caros automaticamente ou realizar micro-pedidos de imediato!</p>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-md overflow-hidden">
                <div className="p-5 border-b border-slate-800">
                    <h3 className="font-bold text-lg">Histórico de Movimentações</h3>
                </div>
                <div className="divide-y divide-slate-800 p-0 text-slate-300 relative min-h-[150px]">
                    <div className="hidden items-center p-5 text-sm md:flex space-x-4 bg-slate-950/50">
                        <span className="flex-1 text-slate-500 font-medium">Transação</span>
                        <span className="w-32 text-slate-500 font-medium text-center">Data</span>
                        <span className="w-24 text-slate-500 font-medium text-right">Valor</span>
                    </div>
                    <div className="flex items-center justify-between p-5 text-sm hover:bg-slate-800/50 transition-colors">
                        <div className="flex-1 flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 text-green-500 rounded-full">
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-white">Recarga via PIX</span>
                                <span className="text-xs text-slate-500">TID: 981249821</span>
                            </div>
                        </div>
                        <span className="w-32 text-slate-400 text-center text-xs md:text-sm">11/03/2026</span>
                        <span className="w-24 font-bold text-green-400 text-right">+ R$ 500,00</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-5 text-sm hover:bg-slate-800/50 transition-colors">
                        <div className="flex-1 flex items-center gap-3">
                            <div className="p-2 bg-red-500/10 text-red-500 rounded-full">
                                <ArrowDownRight className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-white">Pagamento: Criativo Meta Ads (x2)</span>
                                <span className="text-xs text-slate-500">Ref: REQ-002</span>
                            </div>
                        </div>
                        <span className="w-32 text-slate-400 text-center text-xs md:text-sm">10/03/2026</span>
                        <span className="w-24 font-medium text-slate-300 text-right">- R$ 158,00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
