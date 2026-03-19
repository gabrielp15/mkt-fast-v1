"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Palette, Video, Megaphone, MonitorPlay, PenTool, LayoutTemplate, Briefcase } from "lucide-react";

export default function ServicesPage() {
  const [visible, setVisible] = useState(false);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Branding & Design",
      desc: "Identidade visual, logotipos e materiais gráficos de alto impacto que comunicam a essência da sua marca.",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Social Media",
      desc: "Posts, stories e planejamento de conteúdo estratégico para engajar e crescer sua audiência nas redes.",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Edição de Vídeo",
      desc: "Cortes dinâmicos, inserção de legendas animadas e tratamento de cor profissional para Reels, TikToks e YouTube.",
    },
    {
      icon: <MonitorPlay className="h-8 w-8" />,
      title: "Gestão de Tráfego",
      desc: "Campanhas otimizadas no Facebook, Instagram e Google Ads para maximizar seu retorno sobre o investimento (ROI).",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Copywriting",
      desc: "Textos persuasivos para anúncios, landing pages e e-mails que convertem visitantes em clientes fiéis.",
    },
    {
      icon: <LayoutTemplate className="h-8 w-8" />,
      title: "Desenvolvimento Web",
      desc: "Criação de landing pages e sites institucionais rápidos, modernos e focados totalmente em conversão.",
    },
  ];

  return (
    <>
      <style>{`
        .services-page {
          min-height: 100vh;
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
          opacity: 0.05;
          pointer-events: none;
        }

        .services-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .services-fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .services-stagger-1 { transition-delay: 0.1s; }
        .services-stagger-2 { transition-delay: 0.25s; }
        .services-stagger-3 { transition-delay: 0.4s; }
        .services-stagger-4 { transition-delay: 0.55s; }
        .services-stagger-5 { transition-delay: 0.7s; }
        .services-stagger-6 { transition-delay: 0.85s; }

        .service-card {
          border-radius: 16px;
          padding: 32px 24px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.06);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        @media (prefers-color-scheme: dark) {
          .service-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255,255,255,0.06);
          }
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #E64A19, #FF6D00, #FFB300);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .service-card:hover {
          background: linear-gradient(135deg, rgba(230,74,25,0.08) 0%, rgba(255,109,0,0.04) 100%);
          border-color: rgba(230,74,25,0.25);
          transform: translateY(-6px);
          box-shadow: 0 12px 24px -10px rgba(230,74,25,0.15);
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .service-card.active {
          background: linear-gradient(135deg, rgba(230,74,25,0.12) 0%, rgba(255,109,0,0.06) 100%);
          border-color: rgba(230,74,25,0.35);
        }
        .service-card.active::before {
          opacity: 1;
        }

        .services-section-label {
          font-family: inherit;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #E64A19;
          margin-bottom: 16px;
        }

        .services-hero-text {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .services-gradient-text {
          background: linear-gradient(135deg, #E64A19 0%, #FF6D00 50%, #FFB300 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(230,74,25,0.3), rgba(255,109,0,0.2), transparent);
          margin: 60px 0;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Header />

      <div className="services-page font-sans antialiased text-white bg-[#020617] bg-[radial-gradient(ellipse_at_center,rgba(255,101,30,0.15)_0%,rgba(2,6,23,1)_70%)]">
        <div className="grain" />

        {/* Ambient orbs */}
        <div className="glow-orb" style={{ width: 800, height: 800, background: "#ac4729", top: "-10%", left: "-10%", opacity: 0.4 }} />
        <div className="glow-orb" style={{ width: 600, height: 600, background: "#be4421", bottom: "10%", right: "-10%", opacity: 0.3 }} />
        <div className="glow-orb" style={{ width: 500, height: 500, background: "#FFB300", top: "50%", left: "20%", opacity: 0.15 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "160px 32px 80px", position: "relative", zIndex: 2 }}>

          <div className={`services-fade-up services-stagger-1 ${visible ? "show" : ""}`} style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="services-section-label" style={{ padding: "6px 16px", display: "inline-block" }}>O Que Fazemos</div>
            <h1 className="services-hero-text" style={{ marginBottom: 24 }}>
              Soluções completas para <br className="hidden md:block" />
              <span className="services-gradient-text">escalar o seu negócio</span>
            </h1>
            <p className="text-slate-300" style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: 800,
              margin: "0 auto",
            }}>
              Do design estratégico à gestão de campanhas de alta performance. Tudo o que sua marca precisa para se destacar no ambiente digital, em um só lugar.
            </p>
          </div>

          <div className="services-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 80,
          }}>
            {services.map((s, i) => (
              <div
                key={i}
                className={`service-card services-fade-up services-stagger-${Math.min(i + 2, 6)} ${visible ? "show" : ""} ${activeValue === i ? "active" : ""}`}
                onClick={() => setActiveValue(activeValue === i ? null : i)}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "rgba(230,74,25,0.1)",
                  border: "1px solid rgba(230,74,25,0.2)",
                  color: "#FF6D00",
                  marginBottom: 24,
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 16,
                  letterSpacing: -0.5,
                  color: "#fff",
                }}>
                  {s.title}
                </h3>
                <p className="text-slate-400" style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  fontWeight: 300,
                  flex: 1,
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="services-divider" />

          <div className={`services-fade-up services-stagger-4 ${visible ? "show" : ""}`} style={{ textAlign: "center", paddingBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Pronto para começarmos?</h2>
            <button onClick={() => window.dispatchEvent(new Event('openContactWidget'))} style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #E64A19, #FF6D00)",
              color: "white",
              padding: "16px 36px",
              borderRadius: 8,
              fontSize: 18,
              fontWeight: 600,
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 8px 20px -6px rgba(230,74,25,0.5)",
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 24px -8px rgba(230,74,25,0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(230,74,25,0.5)";
              }}>
              Acesse Agora
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
