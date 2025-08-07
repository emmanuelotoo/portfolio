"use client";
import { motion } from "framer-motion";

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

export default function Experience() {
  return (
    <section className="mb-16">
      <div className="space-y-4">
        {/* Coming Soon Experience */}
        <motion.div
          className="relative z-10 -mx-1 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground bg-secondary p-4 text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-sm text-secondary-foreground/70">
              {/* Empty date for coming soon */}
            </span>
            <h3 className="text-sm font-sm">
              Coming soon
              <AnimatedDots />
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}