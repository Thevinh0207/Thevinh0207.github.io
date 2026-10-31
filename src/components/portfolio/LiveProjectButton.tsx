import { ArrowUpRight, Lock } from "lucide-react";

interface LiveProjectButtonProps {
  url?: string;
  isBlocked?: boolean;
}

export function LiveProjectButton({ url, isBlocked }: LiveProjectButtonProps) {
  const className =
    "inline-flex items-center gap-1.5 rounded-full border-2 transition-colors hover:bg-[var(--page-fg)]/10 font-medium uppercase tracking-widest px-3 py-2 text-[10px] sm:px-6 sm:py-2.5 sm:text-xs md:px-8 md:py-3 md:text-sm lg:px-10 lg:py-3.5 lg:text-base";
  const style = { borderColor: "var(--page-fg)", color: "var(--page-fg)" };
  
  const children = (
    <>
      <span className="hidden sm:inline">Ver proyecto</span>
      <span className="sm:hidden">Ver</span>
      {isBlocked ? (
        <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-80" />
      ) : (
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
      )}
    </>
  );

  if (isBlocked) {
    return (
      <div className="relative group inline-block">
        <button
          type="button"
          disabled
          className={`${className} opacity-30 cursor-not-allowed`}
          style={style}
        >
          {children}
        </button>
        <span 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 text-[10px] sm:text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-50"
          style={{
            background: "rgba(12, 12, 12, 0.9)",
            color: "#ffffff",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(4px)"
          }}
        >
          En desarrollo / Próximamente
        </span>
      </div>
    );
  }

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label="Ver proyecto en vivo"
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label="Ver proyecto en vivo"
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
