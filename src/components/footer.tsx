import { Github, Mail, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Time } from "./time";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 sm:gap-4">
        <a 
          href="https://github.com/emmanuelotoo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Github className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-white" />
        </a>
        <a 
          href="https://www.linkedin.com/in/emmanuel-thisara-otoo-6b9a291b0/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Linkedin className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-white" />
        </a>
        <a 
          href="https://x.com/emmanuelotoo_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <FaXTwitter className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-white" />
        </a>
        <a 
          href="mailto:eotoo218@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Mail className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-white" />
        </a>
      </div>
      <div className="text-xs sm:text-sm">
        <div className="text-secondary-foreground">
          <Time />
        </div>
      </div>
      
    </footer>
  );
};