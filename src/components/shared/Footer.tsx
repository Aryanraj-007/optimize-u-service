import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">OptimizeU</h3>
          <p className="mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <nav className="mt-6 md:mt-0 space-x-6">
          <Link href="/courses">Courses</Link>
          <Link href="/ai-widget">AI Assistant</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
