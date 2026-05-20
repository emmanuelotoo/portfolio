import { EntryCard } from "@/components/entry-card";
import { SectionHeader } from "@/components/section-header";

const projects = [
  {
    title: "sakai bot",
    description: "never miss sakai updates again",
    href: "https://github.com/emmanuelotoo/sakai-bot",
  },
  {
    title: "easy send",
    description: "send mtn momo payments by texting your own whatsapp",
    href: "https://github.com/emmanuelotoo/easy-send",
  },
];

export default function Projects() {
  return (
    <section>
      <SectionHeader label="projects" />
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <EntryCard
            key={project.title}
            title={project.title}
            subtitle={project.description}
            externalHref={project.href}
            externalLabel="github"
          />
        ))}
      </div>
    </section>
  );
}
