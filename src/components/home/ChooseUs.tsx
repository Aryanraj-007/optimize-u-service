"use client";

import { motion } from "framer-motion";
import React from "react";

const features = [
  {
    title: "Transform Leadership & Culture",
    desc: "We help HR and C-suite leaders tackle M&A integration, change fatigue, communication gaps, and leadership pipeline challenges.",
  },
  {
    title: "Trusted Executive Coaching",
    desc: "Our seasoned coaches guide leaders to model the behaviors that drive trust, alignment, and measurable results.",
  },
  {
    title: "AI + Human Advantage",
    desc: "Blend world-class coaching with AI-powered insights to accelerate learning and sustain cultural transformation.",
  },
  {
    title: "Proven Partner for Growth",
    desc: "OptimizeU is the partner of choice for organizations serious about unlocking human potential and scaling performance.",
  },
];

// Parent container animation (stagger)
const container: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

// Each card animation
const card: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const ChooseUs = () => {
  return (
    <section className="relative mx-auto px-[90px] py-24 text-center">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-primary-blue/5 -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-16"
      >
        Why Choose <span className="text-primary-blue">OptimizeU?</span>
      </motion.h2>

      {/* Feature Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {features.map((f, i) => (
          <motion.div
            key={i + 1}
            variants={card}
            whileHover={{
              scale: 1.04,
              rotateX: 1,
              rotateY: -1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="p-8 flex flex-col items-center rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-3 px-2 text-primary-blue leading-tight">
              {f.title}
            </h3>
            <p className="text-gray-500 leading-tight text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ChooseUs;
