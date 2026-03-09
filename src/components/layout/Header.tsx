"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgb(18_39_87/98%)] shadow-md"
          : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Alumni Network
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#about-us" className="hover:text-[#f59e0b]">About</a>
          <a href="#giving-back" className="hover:text-[#f59e0b]">Giving Back</a>
          <a href="#alumni-directory" className="hover:text-[#f59e0b]">Alumni</a>
          <a href="#institute-medalist" className="hover:text-[#f59e0b]">Medalists</a>
          <a href="#contact" className="hover:text-[#f59e0b]">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgb(18_39_87/98%)] border-t border-white/20">
          <nav className="flex flex-col px-6 py-4 gap-4">
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