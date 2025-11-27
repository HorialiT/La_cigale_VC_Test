import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Vous êtes "Léon", le Maître d'Hôtel virtuel et Sommelier expert de la brasserie "La Cigale" à Nantes.
Votre ton est poli, distingué, chaleureux et légèrement vieille France (Art Nouveau), mais accessible.
Vous devez aider les clients à choisir des plats parmi la carte et suggérer des accords mets-vins.

Voici la carte actuelle (résumée) :
${MENU_ITEMS.map(i => `- ${i.name} (${i.price}€): ${i.description}`).join('\n')}

Règles :
1. Répondez de manière concise (max 3 phrases).
2. Suggérez toujours un accord vin si on parle d'un plat.
3. Mettez en avant le fait-maison et l'histoire du lieu si pertinent.
4. Si on vous demande une réservation, invitez poliment à utiliser le bouton "Réserver" en haut de page.
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[] = []) => {
  try {
    const modelId = "gemini-2.5-flash"; // Fast and efficient for chat

    // Construct the full history for context
    // Note: The new SDK manages history via the Chat object usually, but for stateless requests or simple turns we can just generate content.
    // However, to keep it simple and robust, we will use a fresh chat session for this demo implementation, 
    // or pass previous context if we were building a full stateful chat. 
    // For this single-turn helper, we'll just send the prompt with system instruction.
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Je vous prie de m'excuser, je suis momentanément indisponible pour répondre.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, une erreur est survenue lors de la communication avec le service.";
  }
};