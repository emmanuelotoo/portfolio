import { 
  Code, 
  Database, 
  Server, 
  Settings
} from "lucide-react";
import { 
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiAmazon
} from "react-icons/si";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "Java", icon: <SiOpenjdk className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Python", icon: <SiPython className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "SQL", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Core",
      icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Express.js", icon: <SiExpress className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Django", icon: <SiDjango className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "MySQL", icon: <SiMysql className="w-3 h-3 sm:w-4 sm:h-4" /> },
      ]
    },
    {
      title: "Infrastructure",
      icon: <Settings className="w-3 h-3 sm:w-4 sm:h-4" />,
      skills: [
        { name: "Docker", icon: <SiDocker className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "AWS", icon: <SiAmazon className="w-3 h-3 sm:w-4 sm:h-4" /> },
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
