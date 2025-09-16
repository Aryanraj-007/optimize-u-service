"use client";
import Link from "next/link";

const courses = [
  {
    slug: "executive-presence",
    title: "Executive Presence & Influence",
    description: "Communicate with clarity, confidence, and credibility.",
  },
  {
    slug: "high-performance-teams",
    title: "Leading High-Performance Teams",
    description: "Psychological safety, accountability, and velocity.",
  },
  {
    slug: "strategy-execution",
    title: "Strategy to Execution",
    description: "From roadmap to measurable impact.",
  },
];

export default function CoursesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Our Courses</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="block border rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-gray-600 mt-2">{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
