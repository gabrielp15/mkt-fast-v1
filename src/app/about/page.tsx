import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Zap, Rocket, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <section className="flex-1 py-12 md:py-24 lg:py-32 container px-4 md:px-6 mx-auto flex flex-col items-center justify-center">
                <div className="max-w-3xl mx-auto space-y-12 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Sobre o Fast MKT</h1>
                        <p className="text-xl text-muted-foreground mx-auto max-w-[700px]">
                            A revolução do marketing ágil para empresas que não podem esperar.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3 justify-center">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Zap className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-bold">Velocidade</h3>
                            <p className="text-sm text-muted-foreground">Entregas em tempo recorde sem perder a qualidade.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Rocket className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-bold">Inovação</h3>
                            <p className="text-sm text-muted-foreground">Designs modernos e alinhados com as tendências globais.</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-bold">Confiança</h3>
                            <p className="text-sm text-muted-foreground">Transparência total e garantia de satisfação.</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-center mx-auto">
                        <p>
                            O Fast MKT nasceu da necessidade de desburocratizar o acesso a serviços de marketing de alta qualidade.
                            Sabemos que no mundo digital, o *timing* é tudo. Por isso, construímos uma plataforma que conecta sua
                            necessidade à nossa execução em questão de minutos.
                        </p>
                        <p>
                            Nossa missão é empoderar empreendedores e empresas com ferramentas visuais que vendem, eliminando
                            as longas reuniões e os prazos intermináveis das agências tradicionais.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
