"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex max-w-full flex-col py-20 px-4 sm:py-32 md:py-40 lg:py-52">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex-col gap-6 sm:gap-7 md:gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground/20 mb-4">
              404
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-foreground mb-2">
              Page not found
            </h2>
            <p className="text-secondary-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-6 py-3 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background"
            >
              Go home
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-secondary-foreground/20 text-foreground rounded-md hover:bg-surface/50 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background"
            >
              View projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
