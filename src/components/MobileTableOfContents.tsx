import { useState, useRef } from "react";

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
}

export default function MobileTableOfContents({ headings }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const tocHeadings = headings.filter((h) => h.depth <= 3);

  return (
    <nav
      className="xl:hidden fixed bottom-8 left-8 z-50 max-w-xs"
      aria-label="Quick navigation"
    >
      <details
        ref={detailsRef}
        open={isOpen}
        onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
        className="group flex flex-col"
      >
        <summary className="cursor-pointer flex items-center justify-between text-sm font-medium text-ctp-subtext1 hover:text-ctp-text transition-all bg-ctp-base/80 backdrop-blur-md border border-ctp-surface0/50 rounded-b-lg px-4 py-3 hover:bg-ctp-base/90 group-open:rounded-t-none animate-in fade-in slide-in-from-bottom-2 duration-300 list-none order-last">
          <span>Jump to section</span>
          <svg
            className="w-4 h-4 ml-2 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </summary>
        <ul
          className={`bg-ctp-base/80 backdrop-blur-md border border-ctp-surface0/50 rounded-t-lg px-4 py-3 space-y-2 max-h-80 overflow-y-auto transition-all duration-300 ease-out ${
            !isOpen ? "pointer-events-none" : ""
          }`}
          style={{
            transformOrigin: "bottom",
            transform: isOpen
              ? "translateY(0) scaleY(1)"
              : "translateY(100%) scaleY(0)",
            opacity: isOpen ? 1 : 0,
          }}
        >
          {tocHeadings.map((heading) => (
            <li
              key={heading.slug}
              className={`m-0 ${
                heading.depth === 2 ? "ml-4" : heading.depth === 3 ? "ml-8" : ""
              }`}
            >
              <a
                href={`#${heading.slug}`}
                className="ignored-link block text-sm transition-all duration-200 py-2 border-l-2 border-transparent pl-3 -ml-3 text-ctp-subtext1 hover:border-ctp-lavender hover:text-ctp-text"
                onClick={() => setIsOpen(false)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
