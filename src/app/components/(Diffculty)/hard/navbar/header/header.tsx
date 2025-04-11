"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "../nav";
import Image from "next/image";
import styles from "./style.module.scss"

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={"/images/LogoIcon.svg"}
              width={30}
              height={30}
              alt="Logo"
            />
            <span>J vers</span>
          </div>
        </Link>

        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`
            ${styles.el} 
            ${
              isActive
                ? "bg-gray-400 border border-black/50 transition-all duration-300"
                : "bg-white/30 backdrop-blur-md border border-white/30 transition-all duration-300"
            }
          `}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
