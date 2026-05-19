"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "sakai bot",
    description: "never miss sakai updates again",
    href: "https://github.com/emmanuelotoo/sakai-bot",
  },
  {
    title: "easy send",
    description: "send mtn momo payments by texting your own whatsapp",
    href: "https://github.com/emmanuelotoo/easy-send",
  },
];

const AnimatedDots = () => {
  return (
    <span className="inline-flex">
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0,
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.2,
        }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
        }}
      >
        .
      </motion.span>
    </span>
  );
};

export default function Projects() {
  return (
    <motion.div className="relative flex flex-col gap-4">
      {projects.map((project, index) => {
        const card = (
          <motion.div
            key={index}
            className="relative z-10 flex flex-col gap-1 rounded-lg p-4 text-secondary-foreground hover:bg-surface/30 transition-colors"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="relative z-10 text-sm font-sm">
              {project.title || (
                <>
                  Coming soon
                  <AnimatedDots />
                </>
              )}
            </h1>
            {project.description && (
              <p className="text-sm text-secondary-foreground relative z-10">
                {project.description}
              </p>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-secondary-foreground/50 hover:text-white transition-colors mt-1 w-fit"
              >
                github ↗
              </a>
            )}
          </motion.div>
        );

        return card;
      })}
    </motion.div>
  );
}