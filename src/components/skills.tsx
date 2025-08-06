export const Skills = () => {
  const skills = ["TypeScript", "React", "Next.js", "Node.js", "Python", "MongoDB"];
  
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-2 py-1 text-xs text-secondary-foreground bg-surface rounded-md hover:bg-surface/70 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};
