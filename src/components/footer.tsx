import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
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
          <FaGithub className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-accent" />
        </a>
        <a 
          href="https://www.linkedin.com/in/emmanuel-thisara-otoo-6b9a291b0/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <FaLinkedinIn className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-accent" />
        </a>
        <a 
          href="https://x.com/emmanuelotoo_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <FaXTwitter className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-accent" />
        </a>
        <a 
          href="mailto:eotoo218@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Mail className="text-secondary-foreground size-4 sm:size-5 transition-colors duration-300 hover:text-accent" />
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