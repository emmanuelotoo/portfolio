"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function Blog() {
  return (
    <section className="mb-16">
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
            <motion.div
              className="relative z-10 flex flex-col gap-1 p-4 cursor-pointer rounded-lg hover:bg-surface/30 transition-colors"
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
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
