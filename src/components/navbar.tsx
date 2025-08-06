import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <Link
        href="/projects"
        className="text-secondary-foreground transition-all duration-300 hover:text-white hover:translate-x-1 underline decoration-dashed underline-offset-[5px] py-2 text-sm sm:text-base min-h-[44px] flex items-center"
      >
        projects
      </Link>
      <Link
        href="/experiences"
        className="text-secondary-foreground transition-all duration-300 hover:text-white hover:translate-x-1 underline decoration-dashed underline-offset-[5px] py-2 text-sm sm:text-base min-h-[44px] flex items-center"
      >
        experiences
      </Link>
    </div>
  );
};
