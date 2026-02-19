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
    slug: "what-i-would-have-done-in-my-cs-year",
    title: "what i would have done in my cs year",
    date: "24th dec, 2025",
    summary: "first post",
    content: 
    "its "
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
