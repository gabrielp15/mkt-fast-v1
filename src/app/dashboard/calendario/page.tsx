"use client";

import { useState } from "react";
import { Calendar, Info, ChevronLeft, ChevronRight, Sparkles, Plus, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Event {
    id: number;
    date: string;
    day: number;
    name: string;
    description: string;
    type: "holiday" | "promotion" | "campaign";
}

const mockEvents: Event[] = [
    { id: 1, date: "08/03/2026", day: 8, name: "Dia da Mulher", description: "Foque em campanhas de empoderamento e ofertas exclusivas.", type: "holiday" },
    { id: 2, date: "15/03/2026", day: 15, name: "Dia do Consumidor", description: "Excelente para promoções de agradecimento.", type: "promotion" },
    { id: 3, date: "20/03/2026", day: 20, name: "Início do Outono", description: "Lançamento da nova coleção e paleta de cores quentes.", type: "campaign" },
];

// Helper for generating Mar 2026 days (starts on Sunday, 31 days)
const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

export default function CalendarioPage() {
    const [selectedDay, setSelectedDay] = useState<number>(8); // Default to Dia da Mulher

    const getDayEvents = (day: number) => mockEvents.filter(e => e.day === day);
    const selectedEvents = getDayEvents(selectedDay);

    return (
        <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                        <Calendar className="w-8 h-8 text-primary" />
                        Calendário do Marketing
                    </h1>
                    <p className="text-muted-foreground">
                        Planeje suas campanhas antecipadamente com base nas principais datas.
                    </p>
                </div>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 gap-2 shrink-0">
                    <Plus className="w-4 h-4" />
                    Novo Evento
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Main Calendar View */}
                <div className="lg:col-span-3 bg-card border rounded-xl shadow-sm overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-bold">Março 2026</h2>
                        <div className="flex gap-1">
                            <button className="p-2 hover:bg-muted rounded text-muted-foreground"><ChevronLeft className="w-5 h-5" /></button>
                            <button className="px-3 py-1.5 text-sm font-medium hover:bg-muted rounded">Hoje</button>
                            <button className="p-2 hover:bg-muted rounded text-muted-foreground"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="flex-1 p-4">
                        <div className="grid grid-cols-7 gap-px bg-muted/50 border rounded-lg overflow-hidden">
                            {/* Weekdays */}
                            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                                <div key={day} className="bg-muted p-2 text-center text-xs font-semibold text-muted-foreground uppercase">
                                    {day}
                                </div>
                            ))}

                            {/* Days content */}
                            {daysInMonth.map((day) => {
                                const dayEvents = getDayEvents(day);
                                const isSelected = selectedDay === day;

                                return (
                                    <div
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={cn(
                                            "bg-card min-h-[100px] p-2 transition-colors cursor-pointer hover:bg-muted/30 group relative",
                                            isSelected && "ring-2 ring-inset ring-primary z-10 bg-primary/5"
                                        )}
                                    >
                                        <span className={cn(
                                            "inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-medium mb-1",
                                            isSelected ? "bg-primary text-primary-foreground" : "text-foreground group-hover:bg-muted",
                                            day === 15 && !isSelected && "bg-secondary text-secondary-foreground" // Pretend today is 15th
                                        )}>
                                            {day}
                                        </span>

                                        <div className="flex flex-col gap-1 mt-1">
                                            {dayEvents.map(event => (
                                                <div
                                                    key={event.id}
                                                    className={cn(
                                                        "text-xs px-1.5 py-0.5 rounded truncate font-medium",
                                                        event.type === 'holiday' ? "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" :
                                                            event.type === 'promotion' ? "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300" :
                                                                "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                                                    )}
                                                >
                                                    {event.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Selected Day Detail */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <div className="bg-card border rounded-xl shadow-sm p-5 flex flex-col h-full min-h-[300px]">
                        <h3 className="text-lg font-bold mb-4 pb-4 border-b">Agenda: {selectedDay} de Março</h3>

                        <div className="flex-1 flex flex-col gap-4">
                            {selectedEvents.length > 0 ? (
                                selectedEvents.map(event => (
                                    <div key={event.id} className="group relative rounded-lg border p-4 hover:border-primary/50 transition-colors">
                                        <div className="absolute top-4 left-0 w-1 h-8 bg-primary rounded-r-full" />
                                        <h4 className="font-semibold text-sm pl-2">{event.name}</h4>
                                        <p className="text-xs text-muted-foreground mt-2 pl-2">
                                            {event.description}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground opacity-60 m-auto">
                                    <Clock className="w-8 h-8 mb-2 stroke-1" />
                                    <p className="text-sm">Nenhum evento programado para este dia.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Suggestions Bottom Area */}
            <div className="bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-primary/20 rounded-xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Sparkles className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-primary">
                        <Sparkles className="w-5 h-5" />
                        Sugestões Inteligentes para Março
                    </h3>
                    <p className="text-sm text-foreground mb-4 max-w-2xl">
                        Nossa IA analisou seu calendário e gerou ideias proativas de campanhas para alavancar suas vendas neste mês.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-background/80 backdrop-blur border rounded-lg p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-1 block">Dia da Mulher</span>
                            <p className="text-sm font-medium mb-2">Campanha "Força em Dobro"</p>
                            <p className="text-xs text-muted-foreground">Ofereça compre 1 leve 2 em itens selecionados apenas para mulheres no dia 08.</p>
                        </div>
                        <div className="bg-background/80 backdrop-blur border rounded-lg p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-teal-500 mb-1 block">Dia do Consumidor</span>
                            <p className="text-sm font-medium mb-2">Cashback Surpresa</p>
                            <p className="text-xs text-muted-foreground">Envie um e-mail aos melhores clientes com 15% de volta nas compras da semana.</p>
                        </div>
                        <div className="bg-background/80 backdrop-blur border rounded-lg p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-500 mb-1 block">Engajamento Semanal</span>
                            <p className="text-sm font-medium mb-2">Quizz no Instagram</p>
                            <p className="text-xs text-muted-foreground">Gere expectativa para o Dia do Consumidor fazendo enquetes diárias no story.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-muted p-4 rounded-xl text-center">
                <p className="text-sm text-muted-foreground">
                    Em breve: Sincronização automática com o Google Agenda e lembretes por e-mail.
                </p>
            </div>
        </div>
    );
}
