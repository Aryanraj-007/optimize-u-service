"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Service1 from "@/assets/images/leadership.jpg";
import Service2 from "@/assets/images/team-work.jpg";
import Service3 from "@/assets/images/optimizeu.png";
import Service4 from "@/assets/images/teach.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ServiceData {
  title: string;
  desc: string;
  image: StaticImport;
}

const services: ServiceData[] = [
  {
    title: "Leadership Coaching",
    desc: "Personalized coaching for executives and emerging leaders to unlock potential and deliver results.",
    image: Service1,
  },
  {
    title: "Workshops & Retreats",
    desc: "Interactive experiences that align leaders, energize teams, and accelerate cultural transformation.",
    image: Service2,
  },
  {
    title: "Hogan Assessments",
    desc: "Science-backed assessments to uncover strengths, risks, and motivators that shape leadership impact.",
    image: Service3,
  },
  {
    title: "Fractional Coaching",
    desc: "Add a part-time leadership expert to boost skills, performance, and culture with customized, scalable solutions.",
    image: Service4,
  },
];

// Animation variants
const container: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};
const card: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ServicesSection = () => {
  return (
    <section className="px-[90px] mx-auto max-w-[1440px] py-20">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-green-700 uppercase">
            Optimize Organizational Performance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            OptimizeU <span className="text-primary-blue">Services</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 max-w-xl text-gray-600">
          At OptimizeU, we offer fractional coaching services designed to
          enhance your team’s leadership skills and performance. Positively
          energize your leadership!
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-[360px] transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
