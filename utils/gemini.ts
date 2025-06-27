import { GoogleGenerativeAI, Schema } from '@google/generative-ai';

// Add type declaration for import.meta.env
declare global {
  interface ImportMeta {
    env: {
      VITE_GEMINI_API_KEY: string;
      [key: string]: any;
    };
  }
}

// Initialize the Gemini API with the API key from environment variables
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

// Get the Gemini-Pro model
const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

/**
 * Generate text using Gemini AI
 * @param prompt The prompt to send to Gemini
 * @returns The generated text response
 */
export async function generateText(prompt: string): Promise<string> {
  try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating text with Gemini:', error);
    return 'Sorry, there was an error generating a response.';
  }
}

/**
 * Generate text with structured output using Gemini AI
 * @param prompt The prompt to send to Gemini
 * @param schema The JSON schema for structured output
 * @returns The generated structured response
 */
export async function generateStructuredOutput<T>(prompt: string, schema: Schema): Promise<T | null> {
  try {
    const result = await geminiModel.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        responseSchema: schema,
      },
    });
    
    const response = await result.response;
    return JSON.parse(response.text()) as T;
  } catch (error) {
    console.error('Error generating structured output with Gemini:', error);
    return null;
  }
}

/**
 * Generate a chat response using Gemini AI
 * @param history Array of message objects with role and content
 * @returns The generated chat response
 */
export async function generateChatResponse(
  history: Array<{ role: 'user' | 'model'; content: string }>
): Promise<string> {
  try {
    const chat = geminiModel.startChat({
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      })),
    });
    
    const result = await chat.sendMessage('');
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating chat response with Gemini:', error);
    return 'Sorry, there was an error generating a response.';
  }
}
