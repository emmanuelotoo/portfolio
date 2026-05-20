export const SectionHeader = ({ label }: { label: string }) => (
  <div className="mb-6 px-4">
    <h2 className="text-base tracking-wide text-secondary-foreground/70">
      {label}
    </h2>
    <div className="mt-2 h-px w-8 bg-secondary-foreground/20" />
  </div>
);
