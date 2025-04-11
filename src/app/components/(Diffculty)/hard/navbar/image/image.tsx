import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { opacity } from '@/lib/animations';
import styles from "@/app/components/(Diffculty)/hard/navbar/image/style.module.scss"
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
      {
        src !== "" &&
        <Image 
        src={`/images/${src}`}
        fill={true}
        alt="image"
        /> 
      }
    </motion.div>
  )
}