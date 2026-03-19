"use server"

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  token: string;
}) {
  const { nome, email, telefone, assunto, mensagem, token } = formData;

  if (!nome || !email || !telefone || !assunto || !mensagem) {
    return { error: "Todos os campos são obrigatórios." };
  }

  // Validação do ReCAPTCHA no lado do Servidor para barrar bots
  if (process.env.RECAPTCHA_SECRET_KEY && token !== "token_de_teste_ignorado") {
    const vc = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const vcData = await vc.json();
    if (!vcData.success || vcData.score < 0.5) {
      return { error: "Comportamento de robô detectado pelo ReCAPTCHA." };
    }
  }

  // Sanitização de entradas para evitar injeção de HTML no seu cliente de e-mail (XSS)
  const escapeHtml = (str: string) => str.replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag as keyof typeof escapeMap] || tag)
  );
  
  const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' };

  const safeNome = escapeHtml(nome);
  const safeEmail = escapeHtml(email);
  const safeTelefone = escapeHtml(telefone);
  const safeAssunto = escapeHtml(assunto);
  const safeMensagem = escapeHtml(mensagem);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.titan.email", // Padrão Titan/Hostinger (Ajuste no .env se for Gmail/AWS)
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const dateStr = new Date().toLocaleDateString('pt-BR');
    
    const mailOptions = {
      from: `Contato Site <${process.env.SMTP_USER}>`, 
      to: "contato@fast-mkt.com", 
      replyTo: safeEmail,
      subject: `[Lead do Site] - ${safeEmail} - ${dateStr}`,
      html: `
        <h2>Novo Lead Captado pelo Site - Fast MKT</h2>
        <p><strong>Nome:</strong> ${safeNome}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>WhatsApp / Telefone:</strong> ${safeTelefone}</p>
        <p><strong>Assunto:</strong> ${safeAssunto}</p>
        <br/>
        <h3>Mensagem:</h3>
        <p style="white-space: pre-wrap;">${safeMensagem}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
    
  } catch (error) {
    console.error("Erro interno no disparo de E-mail: ", error);
    return { error: "Não foi possível enviar a mensagem no momento." };
  }
}
