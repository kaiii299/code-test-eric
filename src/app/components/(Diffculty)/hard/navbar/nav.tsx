"use client";
import { motion } from "framer-motion";
import { height } from "@/lib/animations";
import { navLinks } from "@/lib/constants";
import { useState } from "react";
import Body from "./body/body";
import Footer from "./footer/footer";
import NavImageComponent from "./image/image";
import styles from "./style.module.scss"

const Nav = () => {
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
