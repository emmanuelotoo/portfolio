"use client";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const RevealStack = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={container}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={item}>{children}</motion.div>
);
