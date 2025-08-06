import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const FeaturedProjects = () => (
  <div className="space-y-3">
    <h3 className="text-sm font-medium text-white">Recent Work</h3>
    <div className="space-y-2">
      {[
        { name: "Portfolio Website", tech: "Next.js, TypeScript", url: "#" },
        { name: "E-commerce Platform", tech: "React, Node.js", url: "#" },
        { name: "Task Management App", tech: "Python, MongoDB", url: "#" }
      ].map((project) => (
        <div key={project.name} className="group cursor-pointer">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm text-secondary-foreground group-hover:text-white transition-colors">
                {project.name}
              </span>
              <ExternalLink className="w-3 h-3 text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xs text-secondary-foreground">
              {project.tech}
            </span>
          </div>
        </div>
      ))}
    </div>
    <Link 
      href="/projects" 
      className="text-xs text-secondary-foreground hover:text-white transition-colors inline-block"
    >
      View all projects →
    </Link>
  </div>
);
