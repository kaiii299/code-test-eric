import React from 'react'
import { motion } from 'framer-motion';
import styles from "@/app/styles/nav-style.module.css"
import Image from 'next/image';
import { opacity } from '@/lib/animations';

type Props ={
    src: String,
    selectedLink: SelectedLink
}

type SelectedLink = {
  isActive: boolean;
  index?: number;
};

export default function NavImageComponent({src, selectedLink}: Props) {
  return (
    <motion.div variants={opacity} initial="initial" animate={selectedLink.isActive ? "open" : "closed"} className={styles.imageContainer}>
        <Image 
        src={`/images/${src}`}
        fill={true}
        alt="image"
        />
    </motion.div>
  )
}