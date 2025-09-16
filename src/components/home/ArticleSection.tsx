"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Article1 from "@/assets/images/article1.jpeg";
import Article2 from "@/assets/images/article2.jpeg";
import Article3 from "@/assets/images/article3.jpeg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ArticleData {
  title: string;
  desc: string;
  image: StaticImport;
  link: string;
}

const articles: ArticleData[] = [
  {
    title:
      "Augmented Humanity: In the Age of AI, Coaching is our Most Powerful Upgrade",
    desc: "AI is brilliant at processing data. But it cannot co-regulate another person's nervous system. It cannot create the felt sense of safety, trust, and presence that opens the door to transformation.",
    image: Article1,
    link: "#",
  },
  {
    title: "Culture is a Human Flourishing Challenge",
    desc: "For HR and C-Suite Leaders, the hardest challenges are human.",
    image: Article2,
    link: "#",
  },
  {
    title: "The Recognition Revolution",
    desc: "Acknowledging others' efforts is the secret currency of trust.",
    image: Article3,
    link: "#",
  },
  {
    title: "Future of Leadership in Hybrid Work",
    desc: "Discover strategies for building trust and alignment in distributed teams.",
    image: Article2,
    link: "#",
  },
];

// Parent container animation
const container: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

// Each card animation
const card: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ArticleSection = () => {
  return (
    <section className="px-[90px] mx-auto max-w-[1440px] py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Learn About <span className="text-primary-blue">Flourishing</span>
        </h2>
      </div>

      {/* Scrollable container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-x-auto hide-scrollbar py-2"
      >
        <div className="flex gap-8 snap-x snap-mandatory px-4 pb-4">
          {articles.map((article: ArticleData, i) => (
            <motion.div
              key={i + 1}
              variants={card}
              whileHover={{ scale: 1.02 }}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-[32%] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Article Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left flex flex-col justify-between h-60">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                  {article.desc}
                </p>
                <a
                  href={article.link}
                  className="mt-4 inline-block text-primary-blue font-semibold hover:translate-x-0.5"
                >
                  Continue Reading →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ArticleSection;
