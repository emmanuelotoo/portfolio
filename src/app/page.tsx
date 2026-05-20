import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Navbar } from "@/components/navbar";
import { ErrorBoundary } from "@/components/error-boundary";
import { RevealStack, RevealItem } from "@/components/reveal";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col px-4 py-20 sm:py-32 md:py-40 lg:py-52">
      <div className="flex flex-grow items-center justify-center">
        <main
          id="main-content"
          role="main"
          aria-label="Portfolio content"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          <RevealStack className="flex flex-col gap-6 sm:gap-7 md:gap-8">
            <RevealItem>
              <ErrorBoundary>
                <Main />
              </ErrorBoundary>
            </RevealItem>

            <RevealItem>
              <nav role="navigation" aria-label="Main navigation">
                <Navbar />
              </nav>
            </RevealItem>

            <RevealItem>
              <ErrorBoundary>
                <Footer />
              </ErrorBoundary>
            </RevealItem>
          </RevealStack>
        </main>
      </div>
    </div>
  );
}
