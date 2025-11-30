import { GoogleGenAI, Chat, GenerateContentStreamResult } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

class GeminiService {
  private ai: GoogleGenAI | null = null;
  private chatSession: Chat | null = null;

  constructor() {
    // Only initialize if API key is available
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        this.ai = new GoogleGenAI({ apiKey });
      } catch (error) {
        console.warn("Failed to initialize Gemini AI:", error);
      }
    }
  }

  private initializeChat() {
    if (!this.ai) {
      throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in your environment.");
    }
    
    this.chatSession = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  public async sendMessageStream(message: string): Promise<GenerateContentStreamResult> {
    if (!this.ai) {
      throw new Error("Gemini API key is not configured. Please set GEMINI_API_KEY in your environment.");
    }
    
    if (!this.chatSession) {
      this.initializeChat();
    }
    
    if (!this.chatSession) {
       throw new Error("Failed to initialize chat session");
    }

    return this.chatSession.sendMessageStream({ message });
  }
}

export const geminiService = new GeminiService();