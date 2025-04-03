"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/app/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <AnimatePresence>
        {!showNav && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <h1 className="text-xl font-bold tracking-wide">J-VERS</h1>
          </motion.div>
        )}
        {showNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center space-x-2"
          >
            <h1 className="text-xl font-bold tracking-wide">J-VERS</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav links */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden md:flex justify-center items-center space-x-10 text-sm font-semibold"
          >
            {navLinks.map((link) => (
              <Link href={link.href} key={link.label} className="uppercase">
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Right: Language + Menu Icon (Always Visible) */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:block text-xl">
          <span className="opacity-60">EN</span>{" "}
          <span className="opacity-100 font-semibold">| DE</span>
        </div>
        <button
          className="p-5 rounded-md backdrop-blur border border-white/20 cursor-pointer hover:border-white/90 transition-all ease-in-out duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-full bg-[#c3aad8] md:hidden flex flex-col items-end px-6 py-4 space-y-4 text-right font-medium">
          <Link href="#">CASE STUDIES</Link>
          <Link href="#">CAREER</Link>
          <Link href="#">CONTACTS</Link>
          <div className="text-sm">
            <span className="opacity-60">EN</span>{" "}
            <span className="opacity-100 font-semibold">| DE</span>
          </div>
        </div>
      )}
    </header>
  );
}