"use client";

import { useState, useRef } from "react";
import { UploadCloud, Image as ImageIcon, Sparkles, Wand2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BgRemoverPage() {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFile = (file: File) => {
        setSelectedFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleUploadClick = () => {
        setIsProcessing(true);
        // This is a placeholder for the actual API call
        setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    <ImageIcon className="w-8 h-8 text-primary" />
                    Removedor de Fundo
                </h1>
                <p className="text-muted-foreground">
                    Remova o fundo das suas imagens automaticamente usando inteligência artificial.
                </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                {!selectedFile ? (
                    <div
                        className={`border-2 border-dashed rounded-xl p-12 w-full max-w-lg transition-colors flex flex-col items-center justify-center gap-4 ${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/20 hover:border-primary/50"}`}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                    >
                        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <UploadCloud className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Arraste sua imagem aqui</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            Suporta JPG, PNG e WEBP. Até 10MB por arquivo.
                        </p>

                        <div className="relative mt-4">
                            <input
                                ref={fileInputRef}
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept="image/*"
                                onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                            />
                            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                                Procurar Arquivo
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-6 w-full max-w-md">
                        <div className="relative w-full aspect-square border rounded-xl overflow-hidden bg-muted/30 shadow-sm flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={previewUrl!} alt="Preview" className={cn("max-w-full max-h-full object-contain transition-opacity", isProcessing && "opacity-50 grayscale")} />

                            {isProcessing && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                    <Wand2 className="w-8 h-8 text-primary animate-bounce" />
                                    <p className="font-semibold text-primary drop-shadow-md">Removendo Fundo...</p>
                                </div>
                            )}

                            {!isProcessing && (
                                <button
                                    onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                                    className="absolute top-2 right-2 p-1.5 bg-background/80 hover:bg-destructive hover:text-destructive-foreground backdrop-blur rounded-full text-foreground transition-colors shadow-sm"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div className="w-full space-y-3">
                            <p className="text-sm text-center font-medium truncate px-4">{selectedFile.name}</p>
                            <button
                                onClick={handleUploadClick}
                                disabled={isProcessing}
                                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 gap-2"
                            >
                                <Wand2 className="w-5 h-5" />
                                {isProcessing ? "Processando..." : "Remover Fundo Agora"}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-primary/10 text-primary text-sm p-4 rounded-xl flex items-start gap-3 mt-4">
                <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                    <strong>Aviso de Atualização:</strong> Nossa integração open-source com a IA Mkt Fast está em fase final de testes e estará disponível para todos os usuários em breve! Por enquanto, você está vendo a versão prévia da interface.
                </p>
            </div>
        </div>
    );
}
