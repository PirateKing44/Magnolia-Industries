import { GoogleGenAI, Chat, GenerateContentStreamResult } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

class GeminiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;

  constructor() {
    // Assuming process.env.API_KEY is available as per instructions
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  public initializeChat() {
    this.chatSession = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }

  public async sendMessageStream(message: string): Promise<GenerateContentStreamResult> {
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