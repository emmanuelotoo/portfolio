import { Github, Mail, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Time } from "./time";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="https://github.com/emmanuelotoo" target="_blank" rel="noopener noreferrer">
          <Github className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-thisara-otoo-6b9a291b0/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
        <a href="https://x.com/emmanuelotoo_" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
        <a href="mailto:eotoo218@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="text-secondary-foreground size-4 transition-colors duration-300 hover:text-white" />
        </a>
      </div>
      <div className="text-sm">
        <div className="text-secondary-foreground">
          <Time />
        </div>
      </div>
      
    </footer>
  );
};