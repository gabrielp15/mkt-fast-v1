"use client";

import { HeartCrack } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function ExclusaoSolicitada() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 p-4 pt-20 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,rgba(2,6,23,1)_70%)]">
        <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 text-center shadow-[0_0_50px_-12px_rgba(239,68,68,0.25)] relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-500"></div>
          
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 mb-6 transition-transform hover:scale-105 duration-300">
            <HeartCrack className="h-10 w-10 text-red-500/90" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2 tracking-tight text-white">Sentiremos sua falta!</h1>
          
          <p className="text-slate-400 mb-8 leading-relaxed text-[17px] font-light mt-4">
            Sua solicitação de exclusão de conta foi enviada com sucesso ao nosso suporte.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            Foi incrível ter você com a gente. Nossas portas estarão sempre abertas caso decida voltar no futuro.
          </p>

          <Link
            href="/"
            className="inline-flex w-full h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#E64A19] to-[#FF6D00] text-[15px] font-semibold text-white shadow transition-all hover:scale-[1.02] hover:shadow-[0_8px_20px_-6px_rgba(230,74,25,0.5)]"
          >
            Voltar à Página Inicial
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
