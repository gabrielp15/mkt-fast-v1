"use client";

import { motion } from "framer-motion";
import { Palette, Video, Megaphone, MonitorPlay } from "lucide-react";

const services = [
    {
        icon: <Palette className="h-10 w-10 text-primary" />,
        title: "Branding & Design",
        description: "Identidade visual, logotipos e materiais gráficos de alto impacto.",
    },
    {
        icon: <Megaphone className="h-10 w-10 text-primary" />,
        title: "Social Media",
        description: "Posts, stories e planejamento de conteúdo para suas redes.",
    },
    {
        icon: <Video className="h-10 w-10 text-primary" />,
        title: "Edição de Vídeo",
        description: "Cortes dinâmicos, legendas e tratamento de cor profissional.",
    },
    {
        icon: <MonitorPlay className="h-10 w-10 text-primary" />,
        title: "Motion Graphics",
        description: "Animações 2D e 3D para explicar seu produto ou serviço.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function Services() {
    return (
        <section id="services" className="flex flex-col items-center justify-center py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Serviços</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Tudo o que você precisa para destacar sua marca, em um só lugar.
                        </p>
                    </div>
                </div>
                <motion.div
                    className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={item} className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                            {service.icon}
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
