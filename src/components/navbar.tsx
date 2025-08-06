import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href="/projects"
        className="text-secondary-foreground transition-all duration-300 hover:text-white hover:translate-x-1 underline decoration-dashed underline-offset-[5px]"
      >
        projects
      </Link>
      <Link
        href="/experiences"
        className="text-secondary-foreground transition-all duration-300 hover:text-white hover:translate-x-1 underline decoration-dashed underline-offset-[5px]"
      >
        experiences
      </Link>
    </div>
  );
};
