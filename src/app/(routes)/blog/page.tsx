"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Hello World",
    date: "November 2025",
    summary: "First post",
    content: "Welcome to my blog. I'll be writing about technology, software engineering, and other things I find interesting here."
  }
];

export default function Blog() {
  // State to track which post is expanded
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="mb-16">
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="relative z-10 flex flex-col gap-1 p-4 cursor-pointer rounded-lg hover:bg-surface/30 transition-colors"
            onClick={() => toggleExpand(post.id)}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {/* Title and date on the same line */}
            <div className="flex items-baseline justify-between gap-12 sm:gap-16">
              <h3 className="text-sm sm:text-base font-medium text-white whitespace-nowrap">
                {post.title}
              </h3>
              <span className="text-xs sm:text-sm text-secondary-foreground/70 whitespace-nowrap flex-shrink-0">
                {post.date}
              </span>
            </div>
            
            {/* Summary on the next line */}
            <span className="text-xs sm:text-sm text-secondary-foreground">
              {post.summary}
            </span>
            
            <AnimatePresence>
              {expandedId === post.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-xs sm:text-sm text-secondary-foreground/90 leading-relaxed">
                    {post.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
