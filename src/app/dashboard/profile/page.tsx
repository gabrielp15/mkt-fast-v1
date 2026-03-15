"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Phone, Save, Camera, Building2, MapPin, Calendar, Trash2, RefreshCw, X, AlertTriangle } from "lucide-react";

export default function ProfilePage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteReason, setDeleteReason] = useState("");
    const [deletePassword, setDeletePassword] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteAccount = (e: React.FormEvent) => {
        e.preventDefault();
        setIsDeleting(true);
        setTimeout(() => {
            setIsDeleting(false);
            setShowDeleteModal(false);
            router.push("/exclusao-solicitada");
        }, 800);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setShowModal(true);
        }, 1000);
    };

    return (
        <>
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>

            <div className="rounded-xl border bg-slate-950/80 text-slate-100 shadow">
                <div className="p-6 space-y-6">
                    <form onSubmit={handleSave} className="space-y-8">
                        
                        {/* Avatar Section */}
                        <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-slate-800 relative group/avatar">
                            <div className="relative">
                                <div className="h-24 w-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center overflow-hidden">
                                    <User className="h-10 w-10 text-slate-400" />
                                </div>
                                <button type="button" className="absolute bottom-0 right-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white border-2 border-slate-900 hover:bg-primary/90 transition-colors cursor-pointer">
                                    <Camera className="h-4 w-4" />
                                </button>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-100">Foto do Perfil</h3>
                                <p className="text-sm text-slate-400 mb-3 opacity-0 group-hover/avatar:opacity-100 transition-opacity">Formatos suportados: JPG, PNG ou GIF. Máximo de 2MB.</p>
                            </div>
                        </div>

                        {/* Dados Fixos (Não Modificáveis Diretamente) */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                Dados da Empresa / Pessoais
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">Esses dados de faturamento e registro só podem ser alterados solicitando uma revisão ao suporte.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="name">
                                        Nome Completo ou Razão Social
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                            <input
                                                id="name"
                                                readOnly
                                                className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-800/50 px-3 py-2 pl-9 text-sm text-slate-400 cursor-not-allowed"
                                                defaultValue="Usuário Exemplo LTDA"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="document">
                                        CPF / CNPJ
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                            <input
                                                id="document"
                                                readOnly
                                                className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-800/50 px-3 py-2 pl-9 text-sm text-slate-400 cursor-not-allowed"
                                                defaultValue="12.345.678/0001-90"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="email">
                                        Email de Contato principal
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                            <input
                                                id="email"
                                                readOnly
                                                className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-800/50 px-3 py-2 pl-9 text-sm text-slate-400 cursor-not-allowed"
                                                defaultValue="usuario@exemplo.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informações Modificáveis */}
                        <div className="space-y-4 pt-4 border-t border-slate-800">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                Informações Adicionais
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="phone">
                                        Telefone / WhatsApp
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <input
                                            id="phone"
                                            className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            defaultValue="(11) 99999-9999"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="dob">
                                        Data de Nascimento / Fundação
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <input
                                            id="dob"
                                            type="date"
                                            className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            defaultValue="2010-05-15"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="address">
                                        Endereço de Cobrança / Entrega
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <input
                                            id="address"
                                            className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            placeholder="Rua, Número, Bairro, CEP, Cidade - Estado"
                                            defaultValue="Av. Paulista, 1000, Bela Vista, 01310-100, São Paulo - SP"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="pt-4 border-t border-slate-800">
                            <h3 className="text-lg font-semibold mb-4">Alterar Senha</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="current-password">
                                        Senha Atual
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <input
                                            id="current-password"
                                            type="password"
                                            className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            placeholder="********"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" htmlFor="new-password">
                                        Nova Senha
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                        <input
                                            id="new-password"
                                            type="password"
                                            className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 pl-9 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                            placeholder="********"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800 gap-4">
                            <button
                                type="button"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 text-red-500 hover:bg-red-500/10 px-4 py-2 rounded-md font-medium transition-colors border border-transparent hover:border-red-500/20 text-sm"
                                onClick={() => setShowDeleteModal(true)}
                            >
                                <Trash2 className="h-4 w-4" />
                                Excluir Conta
                            </button>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-white shadow hover:bg-primary/90 h-10 px-6 py-2"
                            >
                                {isLoading ? (
                                    "Solicitando..."
                                ) : (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Solicitar Alterações
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        {/* Modal */}
        {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl max-w-sm w-full mx-4 relative transform transition-all">
                    <button 
                        onClick={() => setShowModal(false)}
                        className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div className="text-center space-y-4 pt-2">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                            <RefreshCw className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Solicitação Recebida</h3>
                        <p className="text-sm text-slate-400">
                            Solicitação de alteração enviada! Aguarde aprovação.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 w-full inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        )}

        {/* Modal de Exclusão de Conta */}
        {showDeleteModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="bg-slate-900 border border-red-500/20 rounded-xl shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)] max-w-md w-full relative transform transition-all overflow-hidden text-left">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-500" />
                    <button 
                        onClick={() => setShowDeleteModal(false)}
                        className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors z-10"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    
                    <form onSubmit={handleDeleteAccount} className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                                <AlertTriangle className="h-6 w-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white leading-tight">Excluir Conta</h3>
                                <p className="text-sm text-slate-400">Esta ação não pode ser desfeita.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">
                                    Por que você quer excluir sua conta?
                                </label>
                                <select 
                                    className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 text-slate-300"
                                    value={deleteReason}
                                    onChange={(e) => setDeleteReason(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Selecione um motivo...</option>
                                    <option value="financial">Motivos financeiros</option>
                                    <option value="not_used">Não uso mais a plataforma</option>
                                    <option value="missing_features">Faltam recursos que eu preciso</option>
                                    <option value="support">Problemas com o suporte</option>
                                    <option value="other">Outro motivo</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">
                                    Para confirmar, digite sua senha
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                    <input
                                        type="password"
                                        placeholder="Sua senha atual"
                                        className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 pl-9 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 text-slate-300"
                                        value={deletePassword}
                                        onChange={(e) => setDeletePassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowDeleteModal(false)}
                                className="inline-flex justify-center rounded-md border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={isDeleting}
                                className="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isDeleting ? "Processando..." : "Confirmar Exclusão"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
        </>
    );
}
