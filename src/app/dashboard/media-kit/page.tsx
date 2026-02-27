"use client";

import { FolderOpen, Download, Droplet, Type } from "lucide-react";

export default function MediaKitPage() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    <FolderOpen className="w-8 h-8 text-primary" />
                    Media Kit
                </h1>
                <p className="text-muted-foreground">
                    Acesse todos os materiais oficias, logos e identidade visual da Mkt Fast.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* Logo Section */}
                <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                    <div className="p-6 border-b bg-muted/30 flex items-center justify-center h-48">
                        {/* Fake Logo Preview */}
                        <div className="flex items-center justify-center p-4 bg-background border shadow-sm rounded-xl w-3/4 h-3/4">
                            <div className="flex flex-col items-center leading-none font-bold tracking-tighter">
                                <span className="text-3xl text-primary">SUA</span>
                                <span className="text-3xl text-cta -mt-1">MARCA</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg mb-4">Logo Oficial</h3>
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted transition-colors text-sm">
                                <span>Logo Fundo Claro (PNG)</span>
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted transition-colors text-sm">
                                <span>Logo Fundo Escuro (PNG)</span>
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted transition-colors text-sm">
                                <span>Arquivo Vetorizado (SVG)</span>
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Brading Utils */}
                <div className="space-y-6">
                    {/* Colors */}
                    <div className="bg-card border rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
                            <Droplet className="w-5 h-5 text-primary" />
                            Cores Principais
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="h-16 rounded border bg-primary shadow-inner"></div>
                                <div>
                                    <p className="text-sm font-medium">Primária</p>
                                    <p className="text-xs text-muted-foreground font-mono">#FF3B30 / var(--primary)</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-16 rounded border bg-[#FF9500] shadow-inner"></div>
                                <div>
                                    <p className="text-sm font-medium">Secundária (CTA)</p>
                                    <p className="text-xs text-muted-foreground font-mono">#FF9500 / var(--cta)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Typography */}
                    <div className="bg-card border rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
                            <Type className="w-5 h-5 text-primary" />
                            Tipografia
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Títulos (Geist Sans)</p>
                                <p className="text-2xl font-bold">Aa Bb Cc Dd Ee</p>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Código / Dados (Geist Mono)</p>
                                <p className="text-lg font-mono">123 456 789 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
