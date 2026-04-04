import { getAllPosts } from "@/lib/blog-data";
import BlogList from "./blog-list";

export default function Blog() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
