"use client";

import { Pricing } from "@/components/landing/Pricing";

export default function PlanPage() {
    return (
        <div className="w-full relative">
            <div className="flex flex-col space-y-2 mb-4 max-w-5xl mx-auto px-4 mt-6">
                <h1 className="text-2xl font-bold">Meu Plano Atual</h1>
                <p className="text-slate-400">Verifique os benefícios do seu pacote ou assine um novo para ter design ilimitado.</p>
            </div>
            
            {/* Importando a pricing page estilo a da home, como solicitado */}
            <div className="transform scale-[0.95] origin-top">
                <Pricing />
            </div>
        </div>
    );
}
