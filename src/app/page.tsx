"use client";

import HeroSection from "@/components/home/HeroSection";
import ChooseUs from "@/components/home/ChooseUs";
import CoursePreview from "@/components/home/CoursePreview";
import AiAssistant from "@/components/home/AiAssistant";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ArticleSection from "@/components/home/ArticleSection";
import ServicesSection from "@/components/home/ServiceSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us */}
      <ChooseUs />

      <ServicesSection />

      {/* Articles */}
      <ArticleSection />

      {/* Courses Preview */}
      <CoursePreview />

      {/* AI Assistant Teaser */}
      <AiAssistant />

      {/* Footer */}
      <Footer />
    </main>
  );
}
