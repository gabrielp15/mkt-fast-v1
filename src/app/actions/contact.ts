"use server"

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}) {
  const { nome, email, telefone, assunto, mensagem } = formData;

  if (!nome || !email || !telefone || !assunto || !mensagem) {
    return { error: "Todos os campos são obrigatórios." };
  }

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
      replyTo: email,
      subject: `[Lead do Site] - ${email} - ${dateStr}`,
      html: `
        <h2>Novo Lead Captado pelo Site - Fast MKT</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp / Telefone:</strong> ${telefone}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <br/>
        <h3>Mensagem:</h3>
        <p style="white-space: pre-wrap;">${mensagem}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
    
  } catch (error) {
    console.error("Erro interno no disparo de E-mail: ", error);
    return { error: "Não foi possível enviar a mensagem no momento." };
  }
}
