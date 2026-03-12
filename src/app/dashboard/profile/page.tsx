"use client";

import { useState } from "react";
import { User, Mail, Lock, Phone, Save, Camera, Building2, MapPin, Calendar, Trash2 } from "lucide-react";

export default function ProfilePage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert("Perfil atualizado com sucesso!");
        }, 1000);
    };

    return (
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
                                onClick={() => {
                                    if(confirm('Tem certeza de que deseja excluir sua conta permanentemente? Isso não pode ser desfeito.')){
                                        alert('Em revisão com o administrador.');
                                    }
                                }}
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
                                        <Save className="mr-2 h-4 w-4" />
                                        Solicitar Alterações
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
