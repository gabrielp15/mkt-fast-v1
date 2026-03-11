"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Logo } from "@/components/Logo";

export default function AboutPage() {
    const [visible, setVisible] = useState(false);
    const [activeValue, setActiveValue] = useState<number | null>(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const values = [
        {
            icon: "⚡",
            title: "Velocidade com Qualidade",
            desc: "Entregar rápido não significa entregar mal. Cada arte, cada campanha e cada entrega reflete o profissionalismo que o cliente merece — no menor tempo possível.",
        },
        {
            icon: "◎",
            title: "Simplicidade Radical",
            desc: "Se o cliente precisa de um manual pra usar nosso serviço, falhamos. Tudo precisa ser intuitivo: pedir, pagar, receber, crescer.",
        },
        {
            icon: "◈",
            title: "Transparência Total",
            desc: "Preço claro, prazo claro, resultado claro. Sem letras miúdas, sem contratos escondidos, sem surpresas na fatura.",
        },
        {
            icon: "△",
            title: "Hipótese Antes de Opinião",
            desc: "Não tomamos decisões por achismo. Testamos, medimos, aprendemos e pivotamos. Dados guiam o caminho, ego fica na porta.",
        },
        {
            icon: "∞",
            title: "Crescer Junto",
            desc: "O sucesso do cliente é o nosso sucesso. Se o corretor vendeu mais imóveis, se a clínica lotou a agenda — aí sim fizemos nosso trabalho.",
        },
        {
            icon: "▣",
            title: "Lean Até o Osso",
            desc: "Cada real gasto precisa justificar sua existência. Não contratamos antes de precisar, não automatizamos antes de validar, não escalamos antes de lucrar.",
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

        .about-page {
          min-height: 100vh;
           background: radial-gradient(ellipse at center, rgba(255,101,30,0.15) 0%, rgba(2,6,23,1) 70%);
           background-color: #020617; /* Fallback slate-950 */
          font-family: 'Outfit', sans-serif;
          color: #f5f5f5;
          overflow: hidden;
          position: relative;
        }

        .grain {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
        }

        .about-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .about-fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .about-stagger-1 { transition-delay: 0.1s; }
        .about-stagger-2 { transition-delay: 0.25s; }
        .about-stagger-3 { transition-delay: 0.4s; }
        .about-stagger-4 { transition-delay: 0.55s; }
        .about-stagger-5 { transition-delay: 0.7s; }
        .about-stagger-6 { transition-delay: 0.85s; }
        .about-stagger-7 { transition-delay: 1.0s; }
        .about-stagger-8 { transition-delay: 1.15s; }

        .value-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 28px 24px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }
        .value-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #E64A19, #FF6D00, #FFB300);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .value-card:hover {
          background: linear-gradient(135deg, rgba(230,74,25,0.08) 0%, rgba(255,109,0,0.04) 100%);
          border-color: rgba(230,74,25,0.25);
          transform: translateY(-4px);
        }
        .value-card:hover::before {
          opacity: 1;
        }
        .value-card.active {
          background: linear-gradient(135deg, rgba(230,74,25,0.12) 0%, rgba(255,109,0,0.06) 100%);
          border-color: rgba(230,74,25,0.35);
        }
        .value-card.active::before {
          opacity: 1;
        }

        .about-section-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #E64A19;
          margin-bottom: 16px;
        }

        .about-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(230,74,25,0.3), rgba(255,109,0,0.2), transparent);
          margin: 60px 0;
        }

        .about-hero-text {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
        }

        .about-gradient-text {
          background: linear-gradient(135deg, #E64A19 0%, #FF6D00 50%, #FFB300 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 768px) {
          .about-values-grid {
            grid-template-columns: 1fr !important;
          }
          .about-mvv-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

            <Header />

            <div className="about-page">
                <div className="grain" />

                {/* Ambient orbs */}
                <div className="glow-orb" style={{ width: 500, height: 500, background: "#E64A19", top: "-10%", right: "-5%" }} />
                <div className="glow-orb" style={{ width: 400, height: 400, background: "#FF6D00", bottom: "10%", left: "-8%" }} />
                <div className="glow-orb" style={{ width: 300, height: 300, background: "#BF360C", top: "50%", right: "20%" }} />

                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "160px 32px 60px", position: "relative", zIndex: 2 }}>

                    {/* Header / Logo */}
                    <div className={`about-fade-up about-stagger-1 ${visible ? "show" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
                        <div className="flex justify-center mb-12">
                            <Logo className="h-32 md:h-48 lg:h-56 drop-shadow-2xl" />
                        </div>
                        <p style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: 12,
                            letterSpacing: 6,
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.35)",
                        }}>
                            Marketing Rápido
                        </p>
                    </div>

                    <div className="about-divider" />

                    {/* Mission & Vision */}
                    <div className="about-mvv-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 0 }}>

                        {/* Mission */}
                        <div className={`about-fade-up about-stagger-2 ${visible ? "show" : ""}`}>
                            <div className="about-section-label">Missão</div>
                            <h2 style={{
                                fontSize: "clamp(22px, 3vw, 30px)",
                                fontWeight: 700,
                                lineHeight: 1.3,
                                marginBottom: 20,
                                letterSpacing: -0.5,
                            }}>
                                Democratizar o acesso ao{" "}
                                <span className="about-gradient-text">marketing profissional</span>{" "}
                                para quem mais precisa.
                            </h2>
                            <p style={{
                                fontSize: 15,
                                lineHeight: 1.75,
                                color: "rgba(255,255,255,0.55)",
                                fontWeight: 300,
                            }}>
                                Eliminar a burocracia e entregar resultados rápidos, acessíveis e de qualidade para pequenas e médias empresas no Brasil — sem que o cliente precise entender de marketing para crescer.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className={`about-fade-up about-stagger-3 ${visible ? "show" : ""}`}>
                            <div className="about-section-label">Visão</div>
                            <h2 style={{
                                fontSize: "clamp(22px, 3vw, 30px)",
                                fontWeight: 700,
                                lineHeight: 1.3,
                                marginBottom: 20,
                                letterSpacing: -0.5,
                            }}>
                                A principal plataforma de{" "}
                                <span className="about-gradient-text">marketing sob demanda</span>{" "}
                                do Brasil até 2028.
                            </h2>
                            <p style={{
                                fontSize: 15,
                                lineHeight: 1.75,
                                color: "rgba(255,255,255,0.55)",
                                fontWeight: 300,
                            }}>
                                Ser referência para MEIs e PMEs que buscam crescimento digital com agilidade, do mesmo modo que a Design Pickle revolucionou o mercado criativo nos Estados Unidos.
                            </p>
                        </div>
                    </div>

                    <div className="about-divider" />

                    {/* Values */}
                    <div className={`about-fade-up about-stagger-4 ${visible ? "show" : ""}`} style={{ marginBottom: 40 }}>
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <div className="about-section-label" style={{ marginBottom: 20 }}>Nossos Valores</div>
                            <h2 className="about-hero-text" style={{ marginBottom: 12 }}>
                                No que <span className="about-gradient-text">acreditamos</span>
                            </h2>
                            <p style={{
                                fontSize: 16,
                                color: "rgba(255,255,255,0.4)",
                                fontWeight: 300,
                                maxWidth: 500,
                                margin: "0 auto",
                            }}>
                                Seis princípios que guiam cada decisão, cada entrega e cada pivô.
                            </p>
                        </div>

                        <div className="about-values-grid" style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gap: 16,
                        }}>
                            {values.map((v, i) => (
                                <div
                                    key={i}
                                    className={`value-card about-fade-up about-stagger-${i + 3} ${visible ? "show" : ""} ${activeValue === i ? "active" : ""}`}
                                    onClick={() => setActiveValue(activeValue === i ? null : i)}
                                >
                                    <div style={{
                                        fontSize: 28,
                                        marginBottom: 16,
                                        background: "linear-gradient(135deg, #E64A19, #FF6D00)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}>
                                        {v.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        marginBottom: 10,
                                        letterSpacing: -0.3,
                                    }}>
                                        {v.title}
                                    </h3>
                                    <p style={{
                                        fontSize: 13,
                                        lineHeight: 1.7,
                                        color: "rgba(255,255,255,0.45)",
                                        fontWeight: 300,
                                    }}>
                                        {v.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-divider" />

                    {/* Footer quote */}
                    <div className={`about-fade-up about-stagger-8 ${visible ? "show" : ""}`} style={{ textAlign: "center", paddingBottom: 20 }}>
                        <p style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: 13,
                            color: "rgba(255,255,255,0.2)",
                            letterSpacing: 2,
                        }}>
                            FAST MKT © 2026 — Marketing Rápido
                        </p>
                        <p style={{
                            fontSize: 14,
                            color: "rgba(255,255,255,0.3)",
                            fontStyle: "italic",
                            marginTop: 12,
                            fontWeight: 300,
                        }}>
                            &ldquo;Não espere o produto perfeito. Lance imperfeito, melhore rápido.&rdquo;
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
