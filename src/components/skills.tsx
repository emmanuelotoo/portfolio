import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Wrench,
  Code2
} from "lucide-react";
import { 
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman
} from "react-icons/si";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-3 h-3" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-3 h-3" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3 h-3" /> },
        { name: "C++", icon: <SiCplusplus className="w-3 h-3" /> },
        { name: "HTML", icon: <SiHtml5 className="w-3 h-3" /> },
        { name: "CSS", icon: <SiCss3 className="w-3 h-3" /> },
      ]
    },
    {
      title: "Frameworks / Libraries",
      icon: <Globe className="w-3 h-3" />,
      skills: [
        { name: "React", icon: <SiReact className="w-3 h-3" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3" /> },
        { name: "Express.js", icon: <SiExpress className="w-3 h-3" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-3 h-3" /> },
        { name: "Framer Motion", icon: <SiFramer className="w-3 h-3" /> },
      ]
    },
    {
      title: "Backend & Runtime",
      icon: <Server className="w-3 h-3" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-3 h-3" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-3 h-3" /> },
        { name: "SQL", icon: <Database className="w-3 h-3" /> },
      ]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-3 h-3" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-3 h-3" /> },
        { name: "GitHub", icon: <SiGithub className="w-3 h-3" /> },
        { name: "VS Code", icon: <Code2 className="w-3 h-3" /> },
        { name: "Vercel", icon: <SiVercel className="w-3 h-3" /> },
        { name: "Postman", icon: <SiPostman className="w-3 h-3" /> },
      ]
    }
  ];
  
  return (
    <div className="space-y-4">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-white">
            {category.icon}
            <span>&lt; {category.title} /&gt;</span>
          </div>
          <div className="flex flex-wrap gap-2 ml-5">
            {category.skills.map((skill) => (
              <span 
                key={skill.name} 
                className="flex items-center gap-1.5 px-2 py-1 text-xs text-secondary-foreground bg-surface rounded-md hover:bg-surface/70 transition-colors cursor-default"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
