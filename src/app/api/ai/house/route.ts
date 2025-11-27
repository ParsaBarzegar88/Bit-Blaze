import OpenAI from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI({
  baseURL: process.env.LIARA_AI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "openai/gpt-4o-mini",
    messages: [{ role: "user", content: message }],
    response_format: { type: "json_object" },
    temperature: 0.3,
    max_tokens: 800,
  });

  return Response.json(completion.choices[0].message.content);
}
