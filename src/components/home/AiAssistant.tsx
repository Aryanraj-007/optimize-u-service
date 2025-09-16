import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const AiAssistant = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Meet Your AI Coach</h2>
        <p className="mt-4 text-gray-600">
          Get instant recommendations, ask questions, and stay on track with our
          24/7 AI coaching assistant.
        </p>
        <Link
          href="/ai-widget"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"
        >
          Try AI Assistant
        </Link>
      </motion.div>
    </section>
  );
};

export default AiAssistant;
