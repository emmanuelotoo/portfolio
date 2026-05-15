"use client";

export const Loading = () => {
  return (
    <div className="flex max-w-full flex-col py-20 px-4 sm:py-32 md:py-40 lg:py-52" role="status" aria-label="Loading">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex-col gap-6 sm:gap-7 md:gap-8 animate-pulse">
          <div className="flex flex-col items-center gap-4">
            <div className="size-16 sm:size-20 rounded-full bg-surface" />
            <div className="h-5 w-32 rounded bg-surface" />
            <div className="h-3 w-16 rounded bg-surface" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-3 w-full rounded bg-surface" />
            <div className="h-3 w-4/5 rounded bg-surface" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-3 w-20 rounded bg-surface" />
            <div className="h-3 w-16 rounded bg-surface" />
            <div className="h-3 w-12 rounded bg-surface" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse" role="status" aria-label="Loading content">
      <div className="h-4 bg-surface rounded w-3/4"></div>
      <div className="h-4 bg-surface rounded w-1/2"></div>
      <div className="h-4 bg-surface rounded w-5/6"></div>
      <div className="h-8 bg-surface rounded w-full"></div>
    </div>
  );
};
