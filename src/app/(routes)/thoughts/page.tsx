import { EntryCard } from "@/components/entry-card";
import { SectionHeader } from "@/components/section-header";
import { getAllPosts } from "@/lib/blog-data";

const notes = [
  {
    title: "data structures & algorithms",
    href: "https://emmanuelotoo.notion.site/dsa-notes",
  },
  {
    title: "operating systems",
    href: "https://www.notion.so/emmanuelotoo/os-2bbf3e590c9280a199c8c607bb9676cb",
  },
];

export default function Thoughts() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col gap-20">
      <section>
        <SectionHeader label="notes" />
        <div className="flex flex-col gap-8">
          {notes.map((note) => (
            <EntryCard
              key={note.title}
              title={note.title}
              externalHref={note.href}
              externalLabel="notion"
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader label="blog" />
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <EntryCard
              key={post.slug}
              title={post.title}
              subtitle={post.date}
              internalHref={`/thoughts/${post.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
