import { Check } from "lucide-react";

const tiers = [
    {
        name: "Start",
        price: "R$ 997",
        features: ["5 Artes/mês", "Atendimento via Chat", "Prazo de 48h"],
    },
    {
        name: "Pro",
        price: "R$ 1.997",
        features: ["15 Artes/mês", "Edição de Vídeo (2)", "Atendimento Prioritário", "Prazo de 24h"],
        featured: true,
    },
    {
        name: "Agency",
        price: "R$ 4.997",
        features: ["Artes Ilimitadas", "Edição de Vídeo (10)", "Gerente de Conta", "Entrega em 12h"],
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="flex flex-col items-center justify-center py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planos Flexíveis</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Escolha o plano ideal para a velocidade do seu negócio.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-8 max-w-5xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`flex flex-col rounded-lg border p-6 shadow-sm ${tier.featured ? "border-primary bg-primary/5 shadow-md scale-105 z-10" : "bg-card"
                                }`}
                        >
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">{tier.name}</h3>
                                <div className="text-4xl font-bold">{tier.price}<span className="text-sm font-normal text-muted-foreground">/mês</span></div>
                            </div>
                            <ul className="my-6 space-y-2 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`mt-auto w-full rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${tier.featured
                                ? "bg-cta text-cta-foreground hover:bg-cta/90"
                                : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                }`}>
                                Assinar Agora
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
