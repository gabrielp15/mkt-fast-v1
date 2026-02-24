import { Download, CreditCard } from "lucide-react";

const invoices = [
    {
        id: "INV-001",
        date: "2024-05-01",
        amount: "R$ 997,00",
        status: "Pago",
    },
    {
        id: "INV-002",
        date: "2024-04-01",
        amount: "R$ 997,00",
        status: "Pago",
    },
];

export default function FinancialPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Financeiro</h1>
                    <p className="text-muted-foreground">Gerencie seus pagamentos e faturas.</p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Plano Atual</h3>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">Start</div>
                    <p className="text-xs text-muted-foreground">Renova em 01/06/2024</p>
                </div>
            </div>

            <div className="rounded-lg border shadow-sm">
                <div className="p-6 border-b">
                    <h3 className="text-lg font-medium">Faturas</h3>
                </div>
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Fatura</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Valor</th>
                                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {invoices.map((inv) => (
                                <tr key={inv.id} className="border-b transition-colors hover:bg-muted/50">
                                    <td className="p-4 align-middle font-medium">{inv.id}</td>
                                    <td className="p-4 align-middle">{inv.date}</td>
                                    <td className="p-4 align-middle">{inv.amount}</td>
                                    <td className="p-4 align-middle">
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 shadow hover:bg-green-100/80">
                                            {inv.status}
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle text-right">
                                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                            <Download className="h-4 w-4" />
                                            <span className="sr-only">Baixar</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
