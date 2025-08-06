export const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-background text-foreground border border-secondary-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
};
