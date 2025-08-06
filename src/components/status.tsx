import { Download } from "lucide-react";

export const Status = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-xs text-secondary-foreground">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      Available for opportunities
    </div>
    <a 
      href="/cv.pdf" 
      download="Emmanuel_Otoo_CV.pdf"
      className="flex items-center gap-1 text-xs text-secondary-foreground hover:text-white transition-colors duration-300 group"
    >
      <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform duration-300" />
      download cv
    </a>
  </div>
);
