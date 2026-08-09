import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog-data";
import Comments from "@/components/comments";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6 animate-in fade-in duration-500">

      <header className="flex flex-col gap-2 border-b border-secondary-foreground/10 pb-6">
        <h1 className="text-xl sm:text-2xl font-medium text-white">{post.title}</h1>
        <time className="text-sm text-secondary-foreground/70">{post.date}</time>
      </header>

      <div className="flex flex-col gap-6 text-sm sm:text-base text-secondary-foreground leading-relaxed">
        {post.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <Comments />
    </article>
  );
}
