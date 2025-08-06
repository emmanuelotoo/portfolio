"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <div className="flex flex-col">
          <h1 className="font-ppModwest text-2xl">emmanuel otoo</h1>
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

      <p className="mb-2">
        passionate about building innovative software solutions and exploring new technologies.{" "}
        experienced in full-stack development with a focus on creating impactful applications.
      </p>

      <p>{`in my downtime, i enjoy reading and staying updated with the latest in tech.`}</p>

      
    </section>
  );
};
