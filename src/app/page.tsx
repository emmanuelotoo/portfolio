import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Navbar } from "@/components/navbar";
import { Status } from "@/components/status";
import { Skills } from "@/components/skills";
import { FeaturedProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col py-40 md:py-52">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-8 md:max-w-lg">
          <Main />
          <Status />
          <Skills />
          <FeaturedProjects />
          <Navbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}
