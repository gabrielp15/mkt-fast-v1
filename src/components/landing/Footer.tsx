import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-6 md:px-8 md:py-0 border-t border-slate-900 bg-slate-950">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-slate-400 md:text-left">
                    © 2026 Fast MKT. Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm font-medium text-slate-400 transition-colors hover:text-primary">Termos</Link>
                    <Link href="#" className="text-sm font-medium text-slate-400 transition-colors hover:text-primary">Privacidade</Link>
                </div>
            </div>
        </footer>
    );
}
