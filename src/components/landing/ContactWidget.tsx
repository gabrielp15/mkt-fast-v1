"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { sendContactEmail } from "@/app/actions/contact";

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openContactWidget", handleOpen);
    return () => window.removeEventListener("openContactWidget", handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Por favor, valide o captcha antes de enviar.");
      return;
    }

    setStatus("loading");
    try {
      const response = await sendContactEmail({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        assunto: formData.assunto,
        mensagem: formData.mensagem,
      });

      if (response.error) {
        alert(response.error);
        setStatus("idle");
        return;
      }

      setStatus("success");
      setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
      });
      setCaptchaToken(null);
      
    } catch (e) {
      console.error(e);
      alert("Ocorreu um erro ao enviar. Tente novamente.");
      setStatus("idle");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-gradient-to-r from-[#E64A19] to-[#FF6D00] p-4 flex justify-between items-center text-white">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 bg-slate-900 overflow-y-auto max-h-[70vh]">
            {status === "success" ? (
              <div className="text-center py-8 text-white">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="font-medium text-lg mb-2">Mensagem enviada com sucesso!</h4>
                <p className="text-sm text-slate-400 mb-6">Em breve entraremos em contato com você.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="w-full inline-flex items-center justify-center transition-colors hover:bg-slate-700 bg-slate-800 rounded-md px-4 py-2 text-sm font-medium text-white"
                >
                    Enviar outra mensagem
                </button>
              </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <p className="text-sm text-slate-400 mb-2">
                        Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
                    </p>
                    <input
                        required
                        minLength={3}
                        maxLength={100}
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        type="text"
                        placeholder="Nome Completo"
                        className="w-full rounded-md bg-slate-800 border-slate-700 text-sm p-2 text-white outline-none focus:ring-2 focus:ring-[#E64A19]"
                    />
                    <input
                        required
                        maxLength={100}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="E-mail"
                        className="w-full rounded-md bg-slate-800 border-slate-700 text-sm p-2 text-white outline-none focus:ring-2 focus:ring-[#E64A19]"
                    />
                    <input
                        required
                        minLength={10}
                        maxLength={20}
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="Telefone / WhatsApp"
                        className="w-full rounded-md bg-slate-800 border-slate-700 text-sm p-2 text-white outline-none focus:ring-2 focus:ring-[#E64A19]"
                    />
                    <input
                        required
                        minLength={3}
                        maxLength={100}
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        type="text"
                        placeholder="Assunto"
                        className="w-full rounded-md bg-slate-800 border-slate-700 text-sm p-2 text-white outline-none focus:ring-2 focus:ring-[#E64A19]"
                    />
                    <div className="relative">
                        <textarea
                            required
                            minLength={10}
                            maxLength={2000}
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder="Sua Mensagem..."
                            rows={3}
                            className="w-full rounded-md bg-slate-800 border-slate-700 text-sm p-2 pb-6 text-white outline-none focus:ring-2 focus:ring-[#E64A19] resize-none"
                        />
                        <span className="absolute bottom-2 right-3 text-[10px] text-slate-500">
                          {formData.mensagem.length}/2000
                        </span>
                    </div>
                    <div className="flex justify-center mt-1 min-h-[65px] w-full overflow-hidden">
                        <Turnstile
                            siteKey="1x00000000000000000000AA"
                            onSuccess={(token) => setCaptchaToken(token)}
                            options={{ theme: "dark" }}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#E64A19] to-[#FF6D00] px-4 py-2 text-sm font-medium text-white shadow transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                        {status === "loading" ? "Enviando..." : (
                            <>
                                Enviar Mensagem <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
              </form>
            )}
          </div>
        </div>
      )}

      {!isOpen && (
        <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-gradient-to-r from-[#E64A19] to-[#FF6D00] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform hover:shadow-[0_8px_20px_-6px_rgba(230,74,25,0.6)] focus:outline-none"
        >
            <MessageCircle className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}
