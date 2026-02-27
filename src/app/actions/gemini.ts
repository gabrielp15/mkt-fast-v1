"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa o SDK usando a chave vinda das variáveis de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateMarketingCopy(prompt: string): Promise<{ success: boolean; data?: string[]; error?: string }> {
    if (!process.env.GEMINI_API_KEY) {
        return { success: false, error: "A chave da API do Gemini (GEMINI_API_KEY) não foi configurada no servidor." };
    }

    try {
        // Escolhendo o modelo (gemini-2.5-flash)
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const systemInstruction = `
            Você é um especialista em Marketing Digital e Copywriting focado em conversão.
            O usuário vai descrever uma oferta, um produto, ou um tema para um post de redes sociais ou banner.
            Sua missão é gerar 3 sugestões de frases curtas e criativas (copys) que possam ser usadas diretamente na IMAGEM/ARTE do post (portanto, frases visuais e de impacto).
            Retorne APENAS as 3 frases, cada uma em uma nova linha, sem numeração, sem aspas, e sem textos adicionais.
        `.trim();

        const fullPrompt = `${systemInstruction}\n\nO pedido do usuário é:\n"${prompt}"`;

        const result = await model.generateContent(fullPrompt);
        const response = result.response;
        const text = response.text();

        // Separa as linhas não vazias
        const suggestions = text.split("\n").map(s => s.trim()).filter(s => s.length > 0);

        // Garante que retorne no máximo 3 sugestões ou o que vier
        return { success: true, data: suggestions.slice(0, 3) };

    } catch (error: any) {
        console.error("Erro na Server Action generateMarketingCopy:", error);
        return { success: false, error: "Ocorreu um erro ao comunicar com a inteligência artificial. Tente novamente mais tarde." };
    }
}
