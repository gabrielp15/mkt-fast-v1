"use client";

import { useState, Fragment } from "react";
import { ChevronDown, ChevronUp, FileText, XCircle, AlertTriangle, Download } from "lucide-react";

interface Request {
    id: string;
    category: string;
    type: string;
    date: string;
    status: "Concluído" | "Em Andamento" | "Pendente" | "Cancelado" | "Cancelamento Solicitado" | "Cancelamento Em Andamento";
    details?: string;
    invoiceUrl?: string;
}

const initialRequests: Request[] = [
    {
        id: "REQ-001",
        category: "Social Media",
        type: "Post Instagram",
        date: "2024-05-10",
        status: "Concluído",
        details: "Pack de 5 posts para feed com tema 'Dia das Mães'. Inclui legendas.",
        invoiceUrl: "/invoices/inv-001.pdf"
    },
    {
        id: "REQ-002",
        category: "Design",
        type: "Logo",
        date: "2024-05-12",
        status: "Em Andamento",
        details: "Redesign da logomarca atual. Estilo minimalista, cores azul e cinza.",
    },
    {
        id: "REQ-003",
        category: "Vídeo",
        type: "Edição Reels",
        date: "2024-05-14",
        status: "Pendente",
        details: "Edição de vídeo bruto de 15min para formato Reels (60s). Cortes dinâmicos.",
    },
];

export default function DashboardPage() {
    const [requests, setRequests] = useState<Request[]>(initialRequests);
    const [expandedRequestIds, setExpandedRequestIds] = useState<string[]>([]);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [selectedRequestToCancel, setSelectedRequestToCancel] = useState<string | null>(null);
    const [cancellationReason, setCancellationReason] = useState("");

    const toggleExpand = (id: string) => {
        setExpandedRequestIds(prev =>
            prev.includes(id)
                ? prev.filter(requestId => requestId !== id)
                : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (expandedRequestIds.length === requests.length) {
            setExpandedRequestIds([]);
        } else {
            setExpandedRequestIds(requests.map(req => req.id));
        }
    };

    const handleOpenCancelModal = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setSelectedRequestToCancel(id);
        setIsCancelModalOpen(true);
    };

    const handleConfirmCancel = () => {
        if (selectedRequestToCancel) {
            setRequests(requests.map(req =>
                req.id === selectedRequestToCancel ? { ...req, status: "Cancelamento Solicitado" } : req
            ));
            setIsCancelModalOpen(false);
            setSelectedRequestToCancel(null);
            setCancellationReason("");
            // In a real app, you would send this to the API
            alert(`Solicitação de cancelamento enviada. Motivo: ${cancellationReason}`);
        }
    };

    return (
        <>
            <div className="flex items-center mb-6">
                <h1 className="text-lg font-semibold md:text-2xl">Meus Pedidos</h1>
            </div>
            <div className="rounded-lg border shadow-sm">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted bg-slate-200 dark:bg-slate-800">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground w-[50px]"></th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Categoria</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tipo</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    <div className="flex items-center justify-between gap-2">
                                        Status
                                        <button
                                            onClick={toggleAll}
                                            className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold text-white uppercase transition-all rounded shadow-md bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 border border-primary-foreground/20"
                                        >
                                            {expandedRequestIds.length === requests.length ? "Recolher" : "Expandir Tudo"}
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {requests.map((req) => (
                                <Fragment key={req.id}>
                                    <tr
                                        className="border-b transition-colors hover:bg-muted/50 cursor-pointer"
                                        onClick={() => toggleExpand(req.id)}
                                    >
                                        <td className="p-4 align-middle">
                                            {expandedRequestIds.includes(req.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                        </td>
                                        <td className="p-4 align-middle font-medium">{req.id}</td>
                                        <td className="p-4 align-middle">{req.category}</td>
                                        <td className="p-4 align-middle">{req.type}</td>
                                        <td className="p-4 align-middle">{req.date}</td>
                                        <td className="p-4 align-middle">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${req.status === "Concluído" ? "bg-green-100 text-green-800" :
                                                    req.status === "Em Andamento" ? "bg-blue-100 text-blue-800" :
                                                        req.status === "Cancelado" ? "bg-red-100 text-red-800" :
                                                            req.status === "Cancelamento Solicitado" || req.status === "Cancelamento Em Andamento" ? "bg-orange-100 text-orange-800" :
                                                                "bg-yellow-100 text-yellow-800"
                                                    }`}
                                            >
                                                {req.status}
                                            </span>
                                        </td>
                                    </tr>
                                    {expandedRequestIds.includes(req.id) && (
                                        <tr className="bg-muted/30">
                                            <td colSpan={6} className="p-6">
                                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                                    <div className="flex-1 space-y-2">
                                                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Detalhes do Pedido</h4>
                                                        <p className="text-base leading-relaxed">{req.details}</p>
                                                    </div>

                                                    <div className="flex flex-col gap-3 min-w-[200px] border-l pl-6 border-border/50">
                                                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">Ações</h4>

                                                        {req.status === "Concluído" && (
                                                            <>
                                                                <button
                                                                    className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-all hover:translate-x-1"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        alert("Baixando arquivos entregues...");
                                                                    }}
                                                                >
                                                                    <Download className="mr-2 h-4 w-4" />
                                                                    Baixar Arquivos
                                                                </button>
                                                                <button
                                                                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary hover:underline transition-all hover:translate-x-1"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        alert("Abrindo Nota Fiscal...");
                                                                    }}
                                                                >
                                                                    <FileText className="mr-2 h-4 w-4" />
                                                                    Visualizar Nota Fiscal
                                                                </button>
                                                            </>
                                                        )}

                                                        {req.status === "Pendente" && (
                                                            <button
                                                                className="inline-flex items-center text-sm font-medium text-destructive hover:underline transition-all hover:translate-x-1"
                                                                onClick={(e) => handleOpenCancelModal(e, req.id)}
                                                            >
                                                                <XCircle className="mr-2 h-4 w-4" />
                                                                Cancelar Solicitação
                                                            </button>
                                                        )}

                                                        {(req.status === "Cancelamento Solicitado" || req.status === "Cancelamento Em Andamento") && (
                                                            <span className="text-sm text-muted-foreground italic flex items-center gap-2">
                                                                <AlertTriangle className="h-4 w-4" />
                                                                Processando cancelamento...
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Cancel Modal Overlay */}
            {isCancelModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                    <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
                        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                            <h2 className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-destructive" />
                                Cancelar Solicitação
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Você tem certeza que deseja cancelar esta solicitação? Esta ação não pode ser desfeita.
                            </p>
                        </div>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <label htmlFor="reason" className="text-sm font-medium leading-none">
                                    Motivo do Cancelamento
                                </label>
                                <textarea
                                    id="reason"
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Por favor, nos conte o motivo..."
                                    value={cancellationReason}
                                    onChange={(e) => setCancellationReason(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                            <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                                onClick={() => setIsCancelModalOpen(false)}
                            >
                                Voltar
                            </button>
                            <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 h-9 px-4 py-2"
                                onClick={handleConfirmCancel}
                                disabled={!cancellationReason.trim()}
                            >
                                Confirmar Cancelamento
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
