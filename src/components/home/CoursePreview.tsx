import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CoursePreview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Executive Presence & Influence",
              desc: "Communicate with confidence.",
            },
            {
              title: "Leading High-Performance Teams",
              desc: "Build thriving teams.",
            },
            {
              title: "Strategy to Execution",
              desc: "Turn plans into measurable impact.",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 rounded-xl shadow-md border bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
              <Link
                href="/courses"
                className="mt-4 inline-block text-blue-600 font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
