"use client";
import { useState } from "react";

export default function AIWidget() {
  const [goal, setGoal] = useState("");
  const [response, setResponse] = useState("");

  async function handleRecommend() {
    const res = await fetch("/api/ai/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal }),
    });
    const data = await res.json();
    setResponse(data.answer);
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-4">AI Course Guide</h1>
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Tell me your learning goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button
        onClick={handleRecommend}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Get Recommendation
      </button>
      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-50">{response}</div>
      )}
    </div>
  );
}
