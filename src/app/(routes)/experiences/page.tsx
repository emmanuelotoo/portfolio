"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="mb-16">
      <div className="space-y-4">
        {/* Vandzilah Technology Experience */}
        <motion.div
          className="relative z-10 -mx-1 flex flex-col gap-2 p-4 cursor-pointer rounded-lg hover:bg-surface/30 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start justify-between gap-6 sm:gap-8">
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-base font-medium text-white">
                Vandzilah Technology
              </h3>
              <span className="text-xs sm:text-sm text-secondary-foreground">
                Software Engineer Intern
              </span>
            </div>
            <span className="text-xs sm:text-sm text-secondary-foreground/70 whitespace-nowrap flex-shrink-0">
              September 2025 - Present
            </span>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-xs sm:text-sm text-secondary-foreground/90 leading-relaxed">
                  shipped production ready APIs and learned a ton along the way.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}