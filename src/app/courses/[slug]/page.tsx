"use client";
import { useState } from "react";

const demoCourses = {
  "executive-presence": {
    title: "Executive Presence & Influence",
    description:
      "Build a compelling executive presence: signal credibility, navigate senior rooms, and drive outcomes through influence rather than authority.",
  },
  "high-performance-teams": {
    title: "Leading High-Performance Teams",
    description:
      "Create conditions for peak performance: clear goals, autonomy, feedback loops, and a learning culture that compounds.",
  },
  "strategy-execution": {
    title: "Strategy to Execution",
    description:
      "Convert strategy into action: clarify bets, define leading indicators, de-risk with fast feedback.",
  },
};

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = demoCourses[params.slug];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askAI() {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  }

  if (!course) return <div className="p-8">Course not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-4 text-gray-700">{course.description}</p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Ask AI about this course</h2>
        <textarea
          className="w-full border p-2 mt-2 rounded"
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={askAI}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Ask AI
        </button>
        {answer && (
          <div className="mt-4 p-4 border rounded bg-gray-50">{answer}</div>
        )}
      </div>

      <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded">
        Enroll Now
      </button>
    </div>
  );
}
