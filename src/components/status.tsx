import { Download, Mail } from "lucide-react";

export const Status = () => (
  <div className="flex items-center justify-between gap-2 sm:gap-4">
    <a 
      href="mailto:eotoo218@gmail.com"
      className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground hover:text-white transition-colors duration-300 group py-2 px-1 min-h-[44px]"
    >
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
      <span className="leading-tight">Available for opportunities</span>
      <Mail className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
    </a>
    <a 
      href="/cv.pdf" 
      download="Emmanuel_Otoo_CV.pdf"
      className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-secondary-foreground hover:text-white transition-colors duration-300 group py-2 px-1 min-h-[44px]"
    >
      <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-0.5 transition-transform duration-300 flex-shrink-0" />
      <span className="whitespace-nowrap">download cv</span>
    </a>
  </div>
);
