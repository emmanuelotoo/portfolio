"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import { ExternalLink } from "lucide-react";

const roles = ["software engineer", "developer"];

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-grow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <motion.div
            className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-surface"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/profile.jpg"
              alt="Emmanuel Otoo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="flex flex-col">
            <motion.h1 
              className="font-ppModwest text-2xl cursor-default"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              emmanuel otoo
            </motion.h1>
            <h2 className="text-secondary-foreground mb-2 font-medium overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7 }}
                className="block"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </h2>
          </div>
        </div>
        {/* <a
          href="https://drive.google.com/file/d/176dguj4gOO-50Fi5G62Wwx6QFgitfyRB/view?usp=sharing"
          className="hidden md:flex items-center gap-1 text-base text-secondary-foreground"
          download="Gaurav_Kr_Singh_Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Resume"
        >
          resume <ExternalLink size={12} />
        </a> */}
      </div>

      <p className="mb-2 text-secondary-foreground leading-relaxed">
        I build <span className="text-white">solutions</span> that are 
        intuitive, accessible, and performant. Currently focused on 
        <span className="text-white"> full-stack development</span> and 
        exploring the intersection of design and technology.
      </p>

      <p className="text-secondary-foreground">{`in my downtime, i enjoy hitting the gym or watching anime.`}</p>

      
    </section>
  );
};
