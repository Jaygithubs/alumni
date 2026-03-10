"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[rgb(18_39_87/98%)]"
        >
          <img src="/Logo ashoka.png" alt="logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#about-us" className="hover:text-[#f59e0b]">About</a>
          <a href="#giving-back" className="hover:text-[#f59e0b]">Giving Back</a>
          <a href="#alumni-directory" className="hover:text-[#f59e0b]">Alumni</a>
          <a href="#institute-medalist" className="hover:text-[#f59e0b]">Medalists</a>
          <a href="#contact" className="hover:text-[#f59e0b]">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-[rgb(18_39_87/98%)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            <a href="#about-us" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#giving-back" onClick={() => setMenuOpen(false)}>Giving Back</a>
            <a href="#alumni-directory" onClick={() => setMenuOpen(false)}>Alumni</a>
            <a href="#institute-medalist" onClick={() => setMenuOpen(false)}>Medalists</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}