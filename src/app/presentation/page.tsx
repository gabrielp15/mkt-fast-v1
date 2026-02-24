"use client";

import { Rocket, TrendingUp, Zap, Target, Users, DollarSign, CheckCircle } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

export default function PresentationPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans print:bg-white">
            {/* Navigation for web view (hidden in print) */}
            <nav className="fixed top-0 right-0 p-4 print:hidden z-50 flex items-center gap-4">
                <p className="text-sm text-muted-foreground bg-white/80 backdrop-blur px-3 py-1 rounded shadow-sm border border-slate-200">
                    Dica: Ative &quot;Gráficos de plano de fundo&quot; na impressão
                </p>
                <button
                    onClick={() => window.print()}
                    className="bg-cta text-cta-foreground px-4 py-2 rounded-md font-bold shadow-lg hover:bg-cta/90 transition-colors"
                >
                    Salvar como PDF
                </button>
            </nav>

            {/* Slide 1: Capa */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden page-break-after-always text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950" />
                <div className="z-10 text-center space-y-6 max-w-4xl px-6">
                    <div className="flex items-center justify-center gap-4 mb-8 scale-150">
                        <div className="relative flex items-center justify-center p-1">
                            <Rocket className="h-12 w-12 text-primary" />
                        </div>
                        <div className="flex flex-col leading-none font-bold tracking-tighter text-left">
                            <span className="text-4xl text-primary">FAST</span>
                            <span className="text-4xl text-cta -mt-2">MKT</span>
                        </div>
                    </div>
                    <h1 className="text-6xl font-extrabold tracking-tight text-white">
                        A Revolução do <br />
                        <span className="text-primary">Marketing Digital</span>
                    </h1>
                    <p className="text-2xl text-slate-400 max-w-2xl mx-auto">
                        Automação, inteligência e resultados rápidos para empresas que não podem esperar.
                    </p>
                    <div className="pt-12">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                            Pitch Deck 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Slide 2: O Problema */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white page-break-after-always py-20">
                <div className="max-w-5xl w-full px-12 grid grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 font-medium text-sm">
                            <TrendingUp className="w-4 h-4" /> O Desafio
                        </div>
                        <h2 className="text-5xl font-bold text-slate-900">
                            Marketing Tradicional é <span className="text-red-500">Lento</span> e <span className="text-red-500">Caro</span>.
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Pequenas e médias empresas perdem tempo gerenciando múltiplas ferramentas e freelancers, resultando em:
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3 text-lg text-slate-700">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
                                Altos custos fixos com agências.
                            </li>
                            <li className="flex items-center gap-3 text-lg text-slate-700">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
                                Falta de transparência nos resultados.
                            </li>
                            <li className="flex items-center gap-3 text-lg text-slate-700">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
                                Processos manuais e desconectados.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
                        <div className="space-y-4">
                            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                            <div className="h-4 bg-slate-200 rounded w-full"></div>
                            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                            <div className="h-32 bg-slate-200 rounded w-full mt-6 flex items-center justify-center text-slate-400">
                                Processos Lentos...
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 3: A Solução */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white page-break-after-always relative overflow-hidden py-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cta/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

                <div className="max-w-5xl w-full px-12 z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 border border-primary/20">
                            <Rocket className="w-4 h-4" /> A Solução FAST MKT
                        </div>
                        <h2 className="text-5xl font-bold">
                            Inteligência Artificial + <span className="text-cta">Experts em Marketing</span>.
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <Card title="Automação com Curadoria" icon={<Zap className="w-8 h-8 text-cta" />}>
                            IA gera velocidade na criação, mas nossos profissionais refinam cada detalhe estratégico.
                        </Card>
                        <Card title="Times Dedicados" icon={<Users className="w-8 h-8 text-primary" />}>
                            Copywriters, designers e gestores de tráfego reais desenvolvendo seus produtos e campanhas.
                        </Card>
                        <Card title="Resultado Escalonável" icon={<TrendingUp className="w-8 h-8 text-green-400" />}>
                            A qualidade de uma agência full-service, com a eficiência e o custo de uma plataforma SaaS.
                        </Card>
                    </div>
                </div>
            </section>

            {/* Slide 4: Modelo de Negócio */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white page-break-after-always py-20">
                <div className="max-w-6xl w-full px-12 grid grid-cols-2 gap-16 items-center">
                    <div className="order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
                            <DollarSign className="w-4 h-4" /> Monetização
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Modelo de Negócio Híbrido</h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Flexibilidade para atender desde o pequeno empreendedor até médias empresas em crescimento.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Assinatura (SaaS)</h3>
                                    <p className="text-slate-600">Receita recorrente via planos mensais ou anuais.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-cta" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Marketplace de Serviços</h3>
                                    <p className="text-slate-600">Comissão sobre serviços avulsos e pacotes de experts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-2 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                        {/* Planos */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Planos Recorrentes
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="font-semibold text-slate-700">Mensal</div>
                                    <div className="text-sm text-slate-500">Fluxo contínuo</div>
                                </div>
                                <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-bl-lg font-bold"> -20% </div>
                                    <div className="font-semibold text-blue-700">Anual</div>
                                    <div className="text-sm text-slate-500">Fidelidade</div>
                                </div>
                            </div>
                        </div>

                        {/* Pacotes e Avulso */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                                <div className="p-2 bg-green-100 rounded-lg text-cta shrink-0">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Pacotes de Créditos</h3>
                                    <p className="text-sm text-slate-500">Compra antecipada para uso sob demanda em campanhas específicas.</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600 shrink-0">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Serviços Avulsos</h3>
                                    <p className="text-sm text-slate-500">Contratação pontual de copywriting, design ou consultoria especializada.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 4.5: Nossa Plataforma (Screenshots simulados) */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-100 py-32 page-break-after-always">
                <div className="max-w-6xl w-full px-6 space-y-12">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 border border-primary/20">
                            <Users className="w-4 h-4" /> Experiência do Usuário
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Simples, Intuitiva e Poderosa.
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Uma visão real de como nossos clientes gerenciam todo o marketing em poucos cliques.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mockup 1: Tela de login */}
                        <div className="space-y-4 print:break-inside-avoid">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
                                Visual simples, direto, e objetivo.
                            </h3>
                            <BrowserWindow url="app.fastmkt.com/login">
                                <div className="bg-[#020617] relative aspect-[16/9]">
                                    <Image
                                        src="/images/login.PNG"
                                        alt="Login"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </BrowserWindow>
                        </div>

                        {/* Mockup 2: Dashboard */}
                        <div className="space-y-4 print:break-inside-avoid">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
                                Visão Geral
                            </h3>
                            <BrowserWindow url="app.fastmkt.com/dashboard">
                                <div className="bg-[#020617] relative aspect-[16/9]">
                                    <Image
                                        src="/images/dashboard-overview.PNG"
                                        alt="Dashboard Overview"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </BrowserWindow>
                        </div>

                        {/* Mockup 3: Nova Solicitação */}
                        <div className="space-y-4 print:break-inside-avoid">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-cta/20 text-green-800 flex items-center justify-center text-sm font-bold">3</span>
                                Solicitação Ágil
                            </h3>
                            <BrowserWindow url="app.fastmkt.com/new-request">
                                <div className="bg-[#020617] relative aspect-[16/9]">
                                    <Image
                                        src="/images/dashboard-new-request.PNG"
                                        alt="Nova Solicitação"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </BrowserWindow>
                        </div>

                        {/* Mockup 4: Financeiro */}
                        <div className="space-y-4 print:break-inside-avoid">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-bold">4</span>
                                Controle Financeiro Total
                            </h3>
                            <BrowserWindow url="app.fastmkt.com/financial">
                                <div className="bg-[#020617] relative aspect-[16/9]">
                                    <Image
                                        src="/images/dashboard-financial.PNG"
                                        alt="Financeiro"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </BrowserWindow>
                        </div>

                        {/* Mockup 5: Pedidos */}
                        <div className="space-y-4 print:break-inside-avoid">
                            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-bold">5</span>
                                Controle total de solicitações
                            </h3>
                            <BrowserWindow url="app.fastmkt.com/my-requests">
                                <div className="bg-[#020617] relative aspect-[16/9]">
                                    <Image
                                        src="/images/dashboard-requests.PNG"
                                        alt="Pedidos"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </BrowserWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 5: O Convite */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden page-break-after-always text-white">
                <div className="max-w-3xl text-center space-y-8 z-10">
                    <h2 className="text-5xl font-bold mb-8 text-primary">Vamos construir o futuro juntos?</h2>
                    <p className="text-2xl text-slate-400 leading-relaxed">
                        Estamos buscando um sócio estratégico para acelerar nosso crescimento e dominar o mercado de marketing para PMEs.
                    </p>
                </div>
            </section>

            <style jsx global>{`
        @media print {
            @page {
                size: landscape;
                margin: 0;
            }
            body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .page-break-after-always {
                page-break-after: always;
                break-after: always;
                min-height: 100vh;
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
            }
            img {
                max-width: 100% !important;
                height: auto !important;
            }
        }
      `}</style>
        </div>
    );
}

function Card({ title, icon, children }: { title: string, icon: ReactNode, children: ReactNode }) {
    return (
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl hover:border-primary/50 transition-colors">
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed">
                {children}
            </p>
        </div>
    )
}

function BrowserWindow({ url, children }: { url: string, children: ReactNode }) {
    return (
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white flex flex-col">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center">
                    <div className="inline-block px-3 py-0.5 rounded-md bg-white border text-[10px] text-slate-500 font-mono shadow-sm">
                        https://{url}
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden">
                {children}
            </div>
        </div>
    )
}

