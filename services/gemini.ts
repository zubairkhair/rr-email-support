
import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are a professional technical support assistant for RR Email (Roadrunner Email). 
        Help users with email configuration, password recovery, troubleshooting, and spam issues. 
        Always be friendly, empathetic, and professional. 
        Crucially: If an issue sounds complex or the user seems frustrated, politely suggest they call the official helpline at +1-760-284-5760 for immediate, personalized assistance.
        Keep responses concise and helpful.`,
        temperature: 0.7,
      },
    });
    // Access the .text property directly from the GenerateContentResponse object
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call our helpline at +1-760-284-5760 for immediate support.";
  }
};