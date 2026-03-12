"use client";

import { useState, useMemo } from "react";
import { Loader2, Calendar, DollarSign, Package, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewRequestPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Form State - Initialize empty
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [deadline, setDeadline] = useState("");
    const [observations, setObservations] = useState("");
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    // Date Logic
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split("T")[0];

    // UI State
    // Tabela de preços avulsos (conforme plano de negócios oficial)
    const avulsoPrecos: Record<string, { price: number; label: string }> = {
        "post-instagram":   { price: 29,   label: "Post Instagram Profissional" },
        "kit-artes":        { price: 97,   label: "Kit 5 Artes Redes Sociais" },
        "copy-anuncio":     { price: 59,   label: "Copy para Anúncio" },
        "bio-instagram":    { price: 39,   label: "Bio para Instagram Otimizada" },
        "criativo-meta":    { price: 79,   label: "Criativo para Meta Ads" },
        "google-business":  { price: 297,  label: "Cadastro no Google Business" },
        "criacao-bm":       { price: 297,  label: "Criação de BM na Meta" },
        "landing-page":     { price: 297,  label: "Landing Page Simples" },
        "site-institucional": { price: 1500, label: "Site Institucional" },
        "ecommerce":        { price: 3000, label: "E-commerce (base)" },
    };

    // Derived Pricing Logic
    const { estimatedPrice, isQuote } = useMemo(() => {
        if (!type) return { estimatedPrice: null, isQuote: false };
        const item = avulsoPrecos[type];
        if (!item) return { estimatedPrice: null, isQuote: true };
        return { estimatedPrice: item.price * quantity, isQuote: false };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, quantity]);

    const handleInitialSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!category || !type || !deadline) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        setIsConfirmModalOpen(true);
    };

    const handleFinalSubmit = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsConfirmModalOpen(false);
            alert("Solicitação enviada com sucesso!");
            router.push("/dashboard");
        }, 1500);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        // Adjust for timezone if needed, or just use UTC split logic for display
        return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    };

    return (
        <div className="w-full max-w-5xl mx-auto relative">
            <div className="flex flex-col space-y-2 mb-8">
                <h1 className="text-2xl font-bold">Nova Solicitação</h1>
                <p className="text-slate-400">Preencha os detalhes para um novo pedido ou orçamento.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Form */}
                <div className="lg:col-span-2">
                    <form id="request-form" onSubmit={handleInitialSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Categoria <span className="text-red-500">*</span></label>
                            <select
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); setType(""); }}
                                className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            >
                                <option value="" disabled>Selecione uma categoria...</option>
                                <option value="social">Social Media (Posts, Stories, Artes)</option>
                                <option value="copy">Copywriting & Texto</option>
                                <option value="setup">Setup Digital (BM, Google Business)</option>
                                <option value="web">Web (Landing Page, Site, E-commerce)</option>
                                <option value="video">Edição de Vídeo</option>
                                <option value="trafego">Gestão de Tráfego</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Serviço <span className="text-red-500">*</span></label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                disabled={!category}
                                className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            >
                                <option value="" disabled>{category ? "Selecione o serviço..." : "Selecione a categoria primeiro"}</option>
                                {category === "social" && <>
                                    <option value="post-instagram">Post Instagram Profissional — R$ 29</option>
                                    <option value="kit-artes">Kit 5 Artes Redes Sociais — R$ 97</option>
                                    <option value="criativo-meta">Criativo para Meta Ads — R$ 79</option>
                                </>}
                                {category === "copy" && <>
                                    <option value="copy-anuncio">Copy para Anúncio — R$ 59</option>
                                    <option value="bio-instagram">Bio para Instagram Otimizada — R$ 39</option>
                                </>}
                                {category === "setup" && <>
                                    <option value="google-business">Cadastro no Google Business — R$ 297</option>
                                    <option value="criacao-bm">Criação de BM na Meta — R$ 297</option>
                                </>}
                                {category === "web" && <>
                                    <option value="landing-page">Landing Page Simples — R$ 297</option>
                                    <option value="site-institucional">Site Institucional — R$ 1.500</option>
                                    <option value="ecommerce">E-commerce (base) — R$ 3.000</option>
                                </>}
                                {(category === "video" || category === "trafego") && <>
                                    <option value="sob-orcamento">Sob orçamento — consultar equipe</option>
                                </>}
                            </select>
                            {type === "sob-orcamento" && (
                                <p className="text-xs text-slate-400">Nossa equipe entrará em contato com um orçamento em até 24h.</p>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Quantidade (Artes/Peças) <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                    className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Prazo de Entrega Desejado <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        min={minDate}
                                        value={deadline}
                                        onChange={(e) => setDeadline(e.target.value)}
                                        className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [color-scheme:dark]"
                                        required
                                    />
                                </div>
                                <p className="text-[0.8rem] text-slate-400">
                                    Mínimo: {new Date(minDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })} (Amanhã)
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Observações</label>
                            <textarea
                                value={observations}
                                onChange={(e) => setObservations(e.target.value)}
                                className="flex min-h-[120px] w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Descreva detalhes importantes, referências ou links..."
                            />
                        </div>
                    </form>
                </div>

                {/* Right Column: Mini Checkout */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 rounded-lg border bg-slate-950/50 text-slate-100 shadow-sm">
                        <div className="p-6 space-y-4">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-primary" />
                                Resumo do Pedido
                            </h3>

                            <div className="space-y-2 text-sm border-b pb-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Serviço:</span>
                                    <span className="font-medium text-right max-w-[160px] truncate">{type ? (avulsoPrecos[type]?.label ?? "Sob orçamento") : "-"}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Qtd. Itens:</span>
                                    <span className="font-medium">{quantity}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-3 bg-slate-800/50 rounded-md border border-slate-700 mt-4">
                                    <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Prazo de Entrega</span>
                                    <span className="font-semibold text-base">{deadline ? formatDate(deadline) : "-"}</span>
                                </div>
                            </div>

                            <div className="py-2">
                                {!category ? (
                                    <div className="p-4 bg-slate-800/30 rounded-md text-center text-sm text-slate-400">
                                        Selecione uma categoria para ver a estimativa de preço.
                                    </div>
                                ) : !isQuote ? (
                                    <div className="flex flex-col items-center justify-center p-3 bg-slate-800/50 rounded-md border border-slate-700 mt-4">
                                        <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Valor</span>
                                        <span className="text-3xl font-bold text-primary">
                                            {formatCurrency(estimatedPrice || 0)}
                                        </span>
                                        {estimatedPrice && estimatedPrice >= 100 ? (
                                            <span className="text-sm text-slate-400 mt-1">
                                                em até {Math.max(1, Math.min(12, Math.floor(estimatedPrice / 100)))}x de {formatCurrency(estimatedPrice / Math.max(1, Math.min(12, Math.floor(estimatedPrice / 100))))}
                                            </span>
                                        ) : null}
                                        <div className="flex items-center gap-1.5 mt-3 text-[10px] text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                                            <Package className="h-3 w-3" />
                                            <span>Preço de tabela (Pacote/Assinatura)</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-2 bg-slate-800/50 p-3 rounded-md">
                                        <div className="flex items-center gap-2 font-medium">
                                            <Info className="h-4 w-4 text-blue-500" />
                                            <span>Sob Orçamento</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                form="request-form"
                                type="submit"
                                disabled={isLoading || !category}
                                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-cta text-cta-foreground shadow hover:bg-cta/90 h-10 px-4 py-2"
                            >
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isQuote ? "Solicitar Orçamento" : "Prosseguir para Pagamento"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {isConfirmModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
                    <div className="w-full max-w-lg rounded-lg border bg-slate-900 p-6 shadow-lg animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
                            <h2 className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                Confirmar Pedido
                            </h2>
                            <p className="text-sm text-slate-400">
                                Por favor, revise os dados antes de finalizar.
                            </p>
                        </div>

                        <div className="space-y-4 py-4 border-y">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider">Categoria</span>
                                    <span className="font-semibold capitalize">{category}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider">Serviço</span>
                                    <span className="font-semibold">{avulsoPrecos[type]?.label ?? type}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider">Quantidade</span>
                                    <span className="font-semibold">{quantity}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider">Prazo</span>
                                    <span className="font-semibold">{formatDate(deadline)}</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider">Parcelamento</span>
                                    <span className="font-semibold">Até {estimatedPrice ? Math.max(1, Math.min(12, Math.floor(estimatedPrice / 100))) : 1}x sem juros</span>
                                </div>
                                <div className="col-span-2">
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider">Valor</span>
                                    <span className="text-lg font-bold text-primary">
                                        {isQuote ? "Sob Orçamento" : formatCurrency(estimatedPrice || 0)}
                                    </span>
                                </div>
                            </div>

                            {observations && (
                                <div className="bg-slate-800/30 p-3 rounded-md text-sm border">
                                    <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Observações</span>
                                    <p className="whitespace-pre-wrap">{observations}</p>
                                </div>
                            )}

                            <div className="bg-yellow-50 text-yellow-800 p-3 rounded-md text-xs flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                <p>
                                    Ao confirmar, o pedido será enviado para nossa equipe. {isQuote ? "Você receberá o orçamento em breve." : "O valor final pode sofrer ajustes caso haja complexidade extra."}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-800 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mt-2 sm:mt-0"
                                onClick={() => setIsConfirmModalOpen(false)}
                                disabled={isLoading}
                            >
                                Voltar
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-cta text-cta-foreground shadow hover:bg-cta/90 h-9 px-4 py-2"
                                onClick={handleFinalSubmit}
                                disabled={isLoading}
                            >
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
