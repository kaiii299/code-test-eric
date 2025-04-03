"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/app/constants";
import WaveText from "../text-animations/wave-text";
import { motion } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
};

const NavItem = ({ label, href }: NavLink) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      href={href}
      className="uppercase"
    >
      <WaveText
        text={label}
        animate={hovered}
        className="text-white text-2xl font-semibold"
      />
    </motion.a>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Scrolls with page: Logo + Nav Links */}
      <div className="absolute top-0 left-0 w-full h-[72px] px-6 flex items-center justify-between z-[200]">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="md:text-2xl font-bold tracking-wide">J-VERS</h1>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden md:flex justify-center items-center space-x-10 md:text-xl font-semibold">
          {navLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>

        <div></div>
      </div>

      {/* Fixed: Top-right (Language + Menu) */}
      <div className="fixed top-0 right-0 h-[72px] px-6 flex items-center space-x-4 z-[250]">
        {/* Language Selector */}
        <div className="hidden md:block text-xl">
          <span className="opacity-60">EN</span>{" "}
          <span className="opacity-100 font-semibold">| DE</span>
        </div>

        {/* Menu Toggle Button */}
        <button
          className="p-3 rounded-md backdrop-blur border border-white/20 cursor-pointer hover:border-white/90 transition-all ease-in-out duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed top-[72px] right-0 w-full bg-[#c3aad8] md:hidden flex flex-col items-end px-6 py-4 space-y-4 text-right font-medium z-40">
          <Link href="#">CASE STUDIES</Link>
          <Link href="#">CAREER</Link>
          <Link href="#">CONTACTS</Link>
          <div className="text-sm">
            <span className="opacity-60">EN</span>{" "}
            <span className="opacity-100 font-semibold">| DE</span>
          </div>
        </div>
      )}
    </>
  );
}
