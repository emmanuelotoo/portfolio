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
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiDigitalocean,
  SiMysql
} from "react-icons/si";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Python", icon: <SiPython className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "C++", icon: <SiCplusplus className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Frameworks / Libraries",
      icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "React", icon: <SiReact className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Express.js", icon: <SiExpress className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Framer Motion", icon: <SiFramer className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Backend & Runtime",
      icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "MySQL", icon: <SiMysql className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "GitHub", icon: <SiGithub className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "VS Code", icon: <Code2 className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Vercel", icon: <SiVercel className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "DigitalOcean", icon: <SiDigitalocean className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    }
  ];
  
  return (
    <div className="space-y-3 sm:space-y-4">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white">
            {category.icon}
            <span>&lt; {category.title} /&gt;</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-4 sm:ml-5">
            {category.skills.map((skill) => (
              <span 
                key={skill.name} 
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-secondary-foreground bg-surface rounded-md hover:bg-surface/70 transition-colors cursor-default min-h-[32px] sm:min-h-[36px]"
              >
                {skill.icon}
                <span className="whitespace-nowrap">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
