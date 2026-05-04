"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { getAllPosts } from "@/lib/blog-data";

const notes = [
  {
    title: "data structures & algorithms",
    description: "notes on dsa concepts and problem solving",
    href: "https://emmanuelotoo.notion.site/dsa-notes",
  },
  {
    title: "operating systems",
    description: "notes on os fundamentals",
    href: "https://www.notion.so/emmanuelotoo/os-2bbf3e590c9280a199c8c607bb9676cb",
  },
];

export default function Thoughts() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="text-sm text-secondary-foreground/50 mb-4 px-4">
          notes
        </h2>
        <motion.div className="relative flex flex-col gap-4">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex flex-col gap-1 rounded-lg p-4 text-secondary-foreground hover:bg-surface/30 transition-colors"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="relative z-10 text-sm font-sm">{note.title}</h3>
              {note.description && (
                <p className="text-sm text-secondary-foreground relative z-10">
                  {note.description}
                </p>
              )}
              {note.href && (
                <a
                  href={note.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary-foreground/50 hover:text-white transition-colors mt-1 w-fit"
                >
                  notion ↗
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section>
        <h2 className="text-sm text-secondary-foreground/50 mb-4 px-4">
          blog
        </h2>
        <motion.div className="relative flex flex-col gap-4">
          {posts.map((post: BlogPost) => (
            <Link
              key={post.slug}
              href={`/thoughts/${post.slug}`}
              className="block"
            >
              <motion.div
                className="relative z-10 flex flex-col gap-1 rounded-lg p-4 text-secondary-foreground hover:bg-surface/30 transition-colors cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="relative z-10 text-sm font-sm">{post.title}</h3>
                <p className="text-sm text-secondary-foreground relative z-10">
                  {post.date}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
