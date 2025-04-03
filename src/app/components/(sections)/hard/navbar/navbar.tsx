"use client";

import { useState } from "react";
import { navLinks } from "@/app/constants";
import WaveText from "../text-animations/wave-text";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
  className?: string;
  textSize?: string;
};

const NavItem = ({ label, href, className, textSize }: NavLink) => {
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
        className={`font-semibold ${className} ${
          textSize ? textSize : "text-xl"
        }`}
      />
    </motion.a>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {/* Scrolls with page: Logo + Nav Links */}
      <div className="absolute top-0 left-0 w-full h-[72px] px-6 flex items-center justify-between z-[200]">
        {/* Left: Logo */}
        <div
          className={`flex gap-2 justify-center items-baseline ${
            menuOpen ? "fixed" : "relative"
          }`}
        >
          <div>
            <Image
              src={"/images/LogoIcon.svg"}
              width={30}
              height={30}
              alt="Logo"
            />
          </div>

          <div>
            <span
              className={`md:text-2xl border-l-2 pl-1 font-bold tracking-wide ${
                menuOpen
                  ? "text-black border-black transition-all duration-200"
                  : "text-white border-white"
              }`}
            >
              J-VERS
            </span>
          </div>
        </div>

        {/* Center: Nav links */}
        <div className="relative">
          <nav
            className={`space-x-10 md:text-md font-semibold top-6 z-40 w-full h-[72px] ${
              menuOpen
                ? "fixed left-1/2 -translate-x-[0%]"
                : "relative left-1/2 -translate-x-[16.5%]"
            }`}
          >
            {navLinks.map((link) => (
              <NavItem
                key={link.label}
                {...link}
                className={`transition-all duration-200 ${
                  menuOpen ? "text-black" : "text-white"
                }`}
              />
            ))}
          </nav>
        </div>

        <div></div>
      </div>

      {/* Fixed: Top-right (Language + Menu) */}
      <div className="fixed top-0 right-0 h-[72px] px-6 flex items-center space-x-4 z-[250]">
        {/* Language Selector */}
        <div className="hidden md:block text-md">
          <span
            className={`opacity-60 cursor-pointer ${
              menuOpen ? "text-black" : "text-white"
            }`}
          >
            EN
          </span>{" "}
          <span
            className={`opacity-100 font-semibold cursor-pointer ${
              menuOpen ? "text-black" : "text-white"
            }`}
          >
            | DE
          </span>
        </div>

        {/* Menu Toggle Button */}
        <button
          className={`relative w-8 h-8 flex flex-col justify-center items-center group p-5 
            rounded-[5px] backdrop-blur border cursor-pointer
            transition-all ease-in-out duration-300
            ${
              menuOpen
                ? "bg-gray-300 border-black hover:border-black"
                : "bg-white/15 border-white/20 hover:border-white/90"
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: -3 },
              open: { rotate: 45, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={`w-6 h-[1px] absolute ${
              menuOpen ? "bg-black" : "bg-white"
            }`}
          />
          <motion.span
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={{
              closed: { rotate: 0, y: 3 },
              open: { rotate: -45, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={`w-6 h-[1px] absolute ${
              menuOpen ? "bg-black" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "45vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed bg-white text-black right-0 top-0 w-full flex flex-col items-end px-6 py-4 space-y-4 text-right font-medium z-40 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
              {/* Grid 1 */}
              <div className="flex flex-col items-start justify-end">
                <Image
                  src={"/images/home_img.jpg"}
                  width={300}
                  height={300}
                  alt="Images"
                />
              </div>

              {/* Grid 2 */}
              <div className="flex flex-col items-start justify-end">
                <div className="flex flex-row items-end justify-end space-x-20">
                  <div className="flex flex-col items-start justify-center space-y-2">
                    <NavItem
                      label="Home"
                      href="/"
                      textSize="text-4xl"
                      className="text-gray-500"
                    />
                    {navLinks.map((link) => (
                      <NavItem key={link.label} {...link} textSize="text-4xl" />
                    ))}
                  </div>

                  <div className="flex flex-col items-start justify-end z-[100] space-y-1">
                    <TiSocialLinkedinCircular size={25} />
                    <Link href="mailto:nihao.codenest@gmail.com">
                      <motion.div
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                      >
                        <WaveText
                          text="nihao.codenest@gmail.com"
                          className="text-md line-height-[1ch] cursor-pointer"
                          animate={hovered}
                        />
                      </motion.div>
                    </Link>
                    <span>Serangoon, Singapore 128440</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
