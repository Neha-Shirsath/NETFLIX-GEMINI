import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants";

const gemini = new GoogleGenAI({
  apiKey: GEMINI_KEY,
  dangerouslyAllowBrowser: true,
});
console.log("Gemini key loaded:", !!GEMINI_KEY);
export default gemini;
