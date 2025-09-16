import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6">
        {/* <h1 className="text-2xl font-bold text-primary-blue">OptimizeU</h1> */}
        <Link href="/">
          <Image
            src={Logo}
            alt="OptimizeU"
            title="OptimizeU"
            className="w-52 h-24 object-cover"
            width={500}
            height={350}
          />
        </Link>

        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/ai-widget">AI Assistant</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
