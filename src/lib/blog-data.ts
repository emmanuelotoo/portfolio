export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "thinking-isnt-progress-building-is",
    title: "thinking isn't progress. building is.",
    date: "4th apr, 2026",
    content: [
      "as i'm writing this, i have several 'checklists' in my notion.",

      "i've been thinking about doing daily leetcode since last december. i've been thinking about all the cool projects i'll be building - whether i should deploy my solutions to an ec2 instance or DO droplet. i've been thinking about where i'll be learning system design from.",

      "i mean, this does seem like a step in the right direction; but then it hit me - i've spent so much time thinking and building up plans in my head instead of actually executing.",

      "God knows how many things i would have done if i had actually 'just done it'.",

      "nobody sees your plans. people see what you build.",

      "this post itself is a shift in a new direction as i've been planning to do this since last year september.",

      "planning is important, thinking is important. but execution takes you a step forward, so i'm making a pledge to myself to build more, and learn in the process.",
    ].join("\n\n"),
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
