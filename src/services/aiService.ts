import { streamText } from "ai";
import { openRouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openRouter("meta-llama/llama-3.3-70b-instruct:free"),
      prompt,
      system:
        "Eres un bartender experto en cocteles y bebidas. Genera una receta de bebida con los ingredientes que se te den. No incluyas pasos, solo la receta.",
    });

    return result.textStream;
  },
};
