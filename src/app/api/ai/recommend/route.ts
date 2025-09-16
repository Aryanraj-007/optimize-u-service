import { NextResponse } from "next/server";
import { askAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { goal } = await req.json();
  const courses = `
  1. Executive Presence & Influence
  2. Leading High-Performance Teams
  3. Strategy to Execution
  `;

  const answer = await askAI(
    `A user wants help with: ${goal}.
    Suggest which course from this list is best: ${courses}.
    Answer in 2 sentences.`
  );

  return NextResponse.json({ answer });
}
