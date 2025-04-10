import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/app/styles/nav-style.module.css"
import { translate, blur } from "@/lib/animations";

// Define types
type LinkItem = {
  title: string;
  href: string;
};

type SelectedLink = {
  isActive: boolean;
  index: number;
};

type Props = {
  links: LinkItem[];
  selectedLink: SelectedLink;
  setSelectedLink: (value: SelectedLink) => void;
};

export default function Body({ links, selectedLink, setSelectedLink }: Props) {
  const getChars = (word: string) => {
    return word.split("").map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => (
        <Link key={`l_${index}`} href={link.href}>
          <motion.p
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            variants={blur}
            animate={
              selectedLink.isActive && selectedLink.index !== index
                ? "open"
                : "closed"
            }
          >
            {getChars(link.title)}
          </motion.p>
        </Link>
      ))}
    </div>
  );
}
