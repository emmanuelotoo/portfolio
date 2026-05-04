import Link from "next/link";
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
    <div className="flex flex-col gap-20">
      <section>
        <h2 className="text-sm text-secondary-foreground/50 mb-4 px-4">
          notes
        </h2>
        <div className="flex flex-col gap-8">
          {notes.map((note, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col gap-0.5 rounded-lg px-4 py-3 text-secondary-foreground hover:bg-surface/30 hover:translate-x-1 transition-all duration-200"
            >
              <h3 className="relative z-10 text-sm">{note.title}</h3>
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
                  className="text-xs text-secondary-foreground/50 hover:text-white transition-colors mt-0.5 w-fit"
                >
                  notion ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm text-secondary-foreground/50 mb-4 px-4">
          blog
        </h2>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/thoughts/${post.slug}`}
              className="block"
            >
              <div className="relative z-10 flex flex-col gap-0.5 rounded-lg px-4 py-3 text-secondary-foreground hover:bg-surface/30 hover:translate-x-1 transition-all duration-200 cursor-pointer">
                <h3 className="relative z-10 text-sm">{post.title}</h3>
                <p className="text-sm text-secondary-foreground relative z-10">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
