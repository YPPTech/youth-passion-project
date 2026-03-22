"use client";

import Image from "next/image";

/**
 * Replace placeholder files in public/photos/ with full-resolution screenshots:
 * - class-scratch-online.png
 * - class-chess-online.png
 */
const photos = [
  {
    src: "/photos/class-scratch-online.png",
    alt: "YPP online class: instructor and students on video chat while sharing a Scratch coding project in the browser.",
    caption: "Coding in Scratch — live video, shared screen, and peers learning together.",
  },
  {
    src: "/photos/class-chess-online.png",
    alt: "YPP online chess class: instructor and students on video with a Lichess lesson board and YPP curriculum on screen.",
    caption: "Chess on Lichess — small-group instruction with a YPP intermediate lesson on the board.",
  },
] as const;

type ClassInActionGalleryProps = {
  subtitle: string;
  className?: string;
};

export default function ClassInActionGallery({ subtitle, className = "" }: ClassInActionGalleryProps) {
  return (
    <section
      className={`border-y border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-16 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-balance text-3xl font-bold text-[var(--ypp-deep)] sm:text-4xl">
            What class looks like
          </h2>
          <p className="font-body mx-auto mt-3 max-w-2xl text-pretty text-base text-[var(--ypp-muted)] sm:text-lg">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {photos.map(({ src, alt, caption }) => (
            <figure
              key={src}
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[var(--ypp-border)] bg-[var(--ypp-blush)]/30 shadow-[var(--shadow-sm)]"
            >
              <div className="relative aspect-[16/10] w-full bg-[var(--ypp-border)]/40">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-[center_15%] sm:object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="font-body border-t border-[var(--ypp-border)] bg-[var(--ypp-white)] px-4 py-4 text-left text-sm leading-relaxed text-[var(--ypp-muted)] sm:px-5 sm:text-base">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
