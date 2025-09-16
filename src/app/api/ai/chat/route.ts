import { NextResponse } from "next/server";
import { askAI } from "@/lib/ai";

export async function POST(req: Request) {
  const { question } = await req.json();
  const answer = await askAI(
    `You are a coaching assistant. Answer clearly: ${question}`
  );
  return NextResponse.json({ answer });
}
