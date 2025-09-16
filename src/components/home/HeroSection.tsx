"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image1 from "@/assets/images/image1.jpg";
import Image2 from "@/assets/images/image2.jpg";
import Image3 from "@/assets/images/image3.jpg";

const images = [Image1, Image2, Image3];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Preload all images
  useEffect(() => {
    images.forEach((img) => {
      const preload = new window.Image();
      preload.src = img.src;
    });
  }, []);

  // auto-loop every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index].src}
            alt="Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager" // force eager load
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Unlock Your <span className="text-blue-400">Leadership</span>{" "}
          Potential
        </h1>
        <p className="mt-6 text-lg text-gray-200 w-4/5 mx-auto">
          Unleash human potential and supercharge performance through the
          transformational power of executive coaching.
        </p>
        <div className="mt-8 flex justify-center gap-4 items-center">
          <Link
            href="/courses"
            className="px-6 py-3 bg-primary-blue rounded-2xl hover:bg-blue-700 font-semibold w-44"
          >
            Explore Courses
          </Link>
          <Link
            href="/ai-widget"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-2xl font-semibold w-44"
          >
            Ask AI
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
