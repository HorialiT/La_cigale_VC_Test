import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from '../constants';

// Note: On n'initialise pas le client ici pour éviter un crash global de l'app 
// si la clé API est manquante au chargement de la page (page blanche).

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
    // On récupère la clé et on initialise le client uniquement au moment de l'appel
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.warn("API Key is missing. Please check your Vercel environment variables.");
      return "Le sommelier virtuel est indisponible pour le moment (Configuration technique manquante).";
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const modelId = "gemini-2.5-flash"; 

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