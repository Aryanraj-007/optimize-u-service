import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function askAI(prompt: string) {
  const res = await openai.chat.completions.create({
    model: "mistralai/mistral-7b-instruct", // ✅ free
    messages: [{ role: "user", content: prompt }],
  });
  return res.choices[0].message?.content || "";
}
