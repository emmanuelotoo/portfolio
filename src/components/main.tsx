import Image from "next/image";

export const Main = () => {
  return (
    <section className="flex-grow">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full overflow-hidden ring-1 ring-surface">
            <Image
              src="/profile.jpg"
              alt="Emmanuel Otoo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-ppModwest text-xl sm:text-2xl md:text-3xl">
              emmanuel otoo
            </h1>
            <h2 className="text-secondary-foreground mb-2 font-medium overflow-hidden text-sm sm:text-base">
              <span className="block">swe</span>
            </h2>
          </div>
        </div>
      </div>

      <p className="text-secondary-foreground text-sm sm:text-base">i enjoy building cool stuff, getting into football banter, and binge-watching shows.</p>
    </section>
  );
};
