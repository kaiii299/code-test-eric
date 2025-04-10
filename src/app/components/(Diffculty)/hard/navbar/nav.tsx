"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/nav-style.module.css"
import { height } from "@/lib/animations";
import { navLinks } from "@/lib/constants";
import { useState } from "react";
import Body from "./body";
import Footer from "./footer";
import NavImageComponent from "./image";

type Props = {};

const Nav = (props: Props) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={navLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />

          <Footer />
        </div>

        <NavImageComponent
          src={navLinks[selectedLink.index].image}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
};

export default Nav;
