import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Navbar } from "@/components/navbar";
import { Status } from "@/components/status";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col py-20 px-4 sm:py-32 md:py-40 lg:py-52">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex-col gap-6 sm:gap-7 md:gap-8">
          <Main />
          <Status />
          <Skills />
          <Navbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}
