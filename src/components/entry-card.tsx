import Link from "next/link";

type EntryCardProps = {
  title: string;
  subtitle?: string;
  internalHref?: string;
  externalHref?: string;
  externalLabel?: string;
};

export const EntryCard = ({
  title,
  subtitle,
  internalHref,
  externalHref,
  externalLabel,
}: EntryCardProps) => {
  const content = (
    <div className="relative z-10 flex flex-col gap-0.5 rounded-lg px-4 py-3 text-secondary-foreground transition-all duration-200 hover:translate-x-1 hover:bg-surface/30">
      <h3 className="relative z-10 text-sm">{title}</h3>
      {subtitle && (
        <p className="relative z-10 text-sm text-secondary-foreground">
          {subtitle}
        </p>
      )}
      {externalHref && (
        <a
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 w-fit text-xs text-secondary-foreground/50 transition-colors hover:text-accent"
        >
          {externalLabel} ↗
        </a>
      )}
    </div>
  );

  if (internalHref) {
    return (
      <Link href={internalHref} className="block">
        {content}
      </Link>
    );
  }

  return content;
};
