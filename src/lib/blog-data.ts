export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "hello-world",
    title: "hello world",
    date: "30th nov, 2025",
    summary: "first post",
    content: "welcome to my blog. I'll be writing about technology, software engineering, and other things I find interesting here."
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
