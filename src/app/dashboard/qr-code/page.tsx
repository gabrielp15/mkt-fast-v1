"use client";

import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { Download, QrCode as QrCodeIcon, Palette, Link as LinkIcon, Phone, Mail, FileText, Image as ImageIcon, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";

type PayloadType = "url" | "tel" | "mailto" | "text";

export default function QrCodePage() {
    const [payloadType, setPayloadType] = useState<PayloadType>("url");
    const [payloadValue, setPayloadValue] = useState("");
    const [fgColor, setFgColor] = useState("#000000");
    const [isRounded, setIsRounded] = useState(false);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoSizePct, setLogoSizePct] = useState<number>(25);
    const [isWhatsapp, setIsWhatsapp] = useState(true);
    const qrRef = useRef<HTMLDivElement>(null);

    const getFinalPayload = () => {
        if (!payloadValue) return " ";
        switch (payloadType) {
            case "tel":
                const cleanPhone = payloadValue.replace(/\D/g, '');
                return isWhatsapp ? `https://wa.me/${cleanPhone}` : `tel:${cleanPhone}`;
            case "mailto": return `mailto:${payloadValue}`;
            case "url": return payloadValue.startsWith('http') ? payloadValue : `https://${payloadValue}`;
            default: return payloadValue;
        }
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogoPreview(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDownload = () => {
        const svg = document.getElementById("qr-code-svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            const padding = 20;
            canvas.width = img.width + (padding * 2);
            canvas.height = img.height + (padding * 2);

            if (ctx) {
                // Background
                ctx.fillStyle = "#FFFFFF";

                if (isRounded) {
                    // Draw rounded rect background
                    const radius = 32;
                    ctx.beginPath();
                    ctx.roundRect(0, 0, canvas.width, canvas.height, radius);
                    ctx.fill();
                } else {
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }

                // Draw QR Code
                ctx.drawImage(img, padding, padding);

                // Draw Logo if exists
                if (logoPreview) {
                    const logoImg = new Image();
                    logoImg.onload = () => {
                        const logoSize = canvas.width * (logoSizePct / 100);
                        const logoX = (canvas.width - logoSize) / 2;
                        const logoY = (canvas.height - logoSize) / 2;

                        // Draw white circle background for logo
                        ctx.beginPath();
                        ctx.arc(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2 + 4, 0, 2 * Math.PI);
                        ctx.fillStyle = "#FFFFFF";
                        ctx.fill();

                        // Draw logo
                        ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);

                        triggerDownload(canvas.toDataURL("image/png"));
                    };
                    logoImg.src = logoPreview;
                } else {
                    triggerDownload(canvas.toDataURL("image/png"));
                }
            }
        };
        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    };

    const triggerDownload = (dataUrl: string) => {
        const downloadLink = document.createElement("a");
        downloadLink.download = "mkt-fast-qrcode.png";
        downloadLink.href = dataUrl;
        downloadLink.click();
    };

    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    <QrCodeIcon className="w-8 h-8 text-primary" />
                    Criar QR Code
                </h1>
                <p className="text-muted-foreground">
                    Crie códigos QR altamente personalizados para seus links, campanhas e contatos.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Editor */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Types */}
                    <div className="bg-card border rounded-xl p-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Tipo de Conteúdo</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <button
                                onClick={() => setPayloadType("url")}
                                className={cn("flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-colors", payloadType === "url" ? "bg-primary/10 border-primary text-primary" : "hover:bg-muted")}
                            >
                                <LinkIcon className="w-5 h-5" />
                                <span className="text-xs font-medium">Link / URL</span>
                            </button>
                            <button
                                onClick={() => setPayloadType("tel")}
                                className={cn("flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-colors", payloadType === "tel" ? "bg-primary/10 border-primary text-primary" : "hover:bg-muted")}
                            >
                                <Phone className="w-5 h-5" />
                                <span className="text-xs font-medium">WhatsApp / Tel</span>
                            </button>
                            <button
                                onClick={() => setPayloadType("mailto")}
                                className={cn("flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-colors", payloadType === "mailto" ? "bg-primary/10 border-primary text-primary" : "hover:bg-muted")}
                            >
                                <Mail className="w-5 h-5" />
                                <span className="text-xs font-medium">E-mail</span>
                            </button>
                            <button
                                onClick={() => setPayloadType("text")}
                                className={cn("flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-colors", payloadType === "text" ? "bg-primary/10 border-primary text-primary" : "hover:bg-muted")}
                            >
                                <FileText className="w-5 h-5" />
                                <span className="text-xs font-medium">Texto Livre</span>
                            </button>
                        </div>

                        <div className="mt-6 space-y-4">
                            {payloadType === "tel" && (
                                <div className="flex items-center gap-3 bg-muted/50 p-2 rounded-lg w-max border">
                                    <button
                                        onClick={() => setIsWhatsapp(false)}
                                        className={cn("px-4 py-1.5 text-sm font-medium rounded-md transition-colors", !isWhatsapp ? "bg-background shadow-sm border text-foreground" : "text-muted-foreground hover:text-foreground")}
                                    >
                                        Telefone
                                    </button>
                                    <button
                                        onClick={() => setIsWhatsapp(true)}
                                        className={cn("px-4 py-1.5 text-sm font-medium rounded-md transition-colors", isWhatsapp ? "bg-[#25D366] shadow-sm text-white" : "text-muted-foreground hover:text-foreground")}
                                    >
                                        WhatsApp
                                    </button>
                                </div>
                            )}

                            <div>
                                <label className="text-sm font-medium mb-1.5 block">
                                    {payloadType === "url" && "URL do Destino"}
                                    {payloadType === "tel" && (isWhatsapp ? "Número do WhatsApp (com DDD)" : "Número de Telefone (com DDD)")}
                                    {payloadType === "mailto" && "Endereço de E-mail"}
                                    {payloadType === "text" && "Texto que será exibido"}
                                </label>
                                {payloadType === "text" ? (
                                    <textarea
                                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]"
                                        placeholder="Digite seu texto aqui..."
                                        value={payloadValue}
                                        onChange={(e) => setPayloadValue(e.target.value)}
                                    />
                                ) : (
                                    <input
                                        type={payloadType === "mailto" ? "email" : payloadType === "tel" ? "tel" : "url"}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder={
                                            payloadType === "url" ? "https://..." :
                                                payloadType === "tel" ? "5511999999999" :
                                                    "contato@empresa.com"
                                        }
                                        value={payloadValue}
                                        onChange={(e) => setPayloadValue(e.target.value)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Customization */}
                    <div className="bg-card border rounded-xl p-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Personalização Visual</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm font-medium mb-1.5 flex items-center gap-2">
                                    <Palette className="w-4 h-4 text-primary" /> Cor Principal
                                </label>
                                <div className="flex gap-2 items-center">
                                    <div className="relative rounded-md overflow-hidden h-10 w-24 border">
                                        <input
                                            type="color"
                                            value={fgColor}
                                            onChange={(e) => setFgColor(e.target.value)}
                                            className="absolute -top-2 -left-2 w-32 h-16 cursor-pointer"
                                        />
                                    </div>
                                    <span className="text-sm font-mono text-muted-foreground uppercase bg-muted px-2 py-1 rounded">{fgColor}</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-1.5 flex items-center gap-2">
                                    <LayoutTemplate className="w-4 h-4 text-primary" /> Estilo da Borda
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer p-2 border rounded-lg hover:bg-muted/50 transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={isRounded}
                                        onChange={(e) => setIsRounded(e.target.checked)}
                                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm">Bordas Arredondadas</span>
                                </label>
                            </div>

                            <div className="sm:col-span-2 space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-1.5 flex items-center gap-2">
                                        <ImageIcon className="w-4 h-4 text-primary" /> Inserir Logo no Centro
                                    </label>
                                    <div className="flex items-center gap-4">
                                        {logoPreview ? (
                                            <div className="relative">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={logoPreview} alt="Logo preview" className="w-16 h-16 object-contain rounded border p-1 bg-white" />
                                                <button
                                                    onClick={() => setLogoPreview(null)}
                                                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-sm hover:bg-destructive/90"
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="relative flex-1">
                                                <input
                                                    type="file"
                                                    accept="image/png, image/jpeg, image/svg+xml"
                                                    onChange={handleLogoUpload}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <div className="flex items-center justify-center border-2 border-dashed rounded-lg p-4 text-sm text-muted-foreground hover:bg-muted/50 hover:border-primary/50 transition-colors">
                                                    Clique ou arraste um logo (PNG/JPG)
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {logoPreview && (
                                    <div className="pt-4 border-t w-full">
                                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-full backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300">
                                            <div className="text-sm font-medium flex items-center gap-2 pl-2 whitespace-nowrap">
                                                <span className="text-muted-foreground">Tamanho do Logo</span>
                                                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-mono">{logoSizePct}%</span>
                                            </div>
                                            <div className="flex-1 flex items-center pr-2">
                                                <input
                                                    type="range"
                                                    min="10"
                                                    max="35"
                                                    value={logoSizePct}
                                                    onChange={(e) => setLogoSizePct(Number(e.target.value))}
                                                    className="w-full h-1.5 bg-secondary/30 rounded-full appearance-none cursor-pointer accent-primary hover:bg-secondary/50 transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Sticky Column */}
                <div className="lg:col-span-2">
                    <div className="sticky top-6 bg-card border rounded-xl p-6 shadow-sm flex flex-col items-center justify-center space-y-6">
                        <h3 className="font-semibold text-lg w-full text-center border-b pb-4">Pré-visualização</h3>

                        <div
                            ref={qrRef}
                            className={cn(
                                "bg-white p-5 border shadow-sm relative transition-all duration-300",
                                isRounded ? "rounded-3xl" : "rounded-xl"
                            )}
                        >
                            <QRCode
                                id="qr-code-svg"
                                value={getFinalPayload()}
                                size={220}
                                fgColor={fgColor}
                                level="Q"
                                className="w-full h-auto max-w-[220px]"
                            />
                            {/* Visual Logo Overlay Placeholder (not strictly the exported one, but visual feedback) */}
                            {logoPreview && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div
                                        className="bg-white p-1 rounded-full shadow-sm flex items-center justify-center overflow-hidden"
                                        style={{
                                            width: `${logoSizePct}%`,
                                            height: `${logoSizePct}%`,
                                            maxWidth: '90px',
                                            maxHeight: '90px'
                                        }}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={logoPreview} alt="Logo overlay" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={handleDownload}
                            disabled={!payloadValue}
                            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 max-w-[260px]"
                        >
                            <Download className="w-5 h-5" />
                            Baixar QR Code (PNG)
                        </button>
                        <p className="text-xs text-muted-foreground text-center flex items-center gap-1.5 opacity-80">
                            <QrCodeIcon className="w-3 h-3" /> Teste antes de imprimir ou compartilhar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
