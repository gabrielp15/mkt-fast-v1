"use client";

import { useState } from "react";
import { Sparkles, Image as ImageIcon, Send, Loader2 } from "lucide-react";
import { generateMarketingCopy } from "@/app/actions/gemini";

export default function IaArtesPage() {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<string[]>([]);
    const [error, setError] = useState("");

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError("");
        setResults([]);

        try {
            const response = await generateMarketingCopy(prompt);

            if (response.success && response.data) {
                setResults(response.data);
            } else {
                setError(response.error || "Erro desconhecido ao gerar sugestões.");
            }
        } catch (err: any) {
            setError(err.message || "Erro de rede ao conectar com o servidor.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    <Sparkles className="w-8 h-8 text-primary" />
                    Sugestões de Copy com IA
                </h1>
                <p className="text-muted-foreground">
                    Descreva sobre o que é o seu post e nossa IA sugerirá pequenos textos de impacto para você colocar em cima da sua arte.
                </p>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm space-y-6">
                <div className="space-y-4">
                    <label className="text-sm font-medium">Sobre o que será o seu design / post?</label>
                    <div className="flex gap-2">
                        <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Ex: Uma promoção de Dia dos Pais para uma loja de ferramentas, com 30% de desconto..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !prompt.trim()}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 w-full sm:w-auto"
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        Gerar Ideias
                    </button>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                </div>
            </div>

            {results.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <ImageIcon className="w-5 h-5" />
                        Ideias para a sua imagem:
                    </h2>
                    <div className="grid gap-3">
                        {results.map((copy, idx) => (
                            <div key={idx} className="bg-muted p-4 rounded-lg relative group">
                                <p className="text-foreground font-medium italic">{copy}</p>
                                <button
                                    onClick={() => navigator.clipboard.writeText(copy)}
                                    className="absolute top-2 right-2 p-2 bg-background border rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                                >
                                    Copiar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
