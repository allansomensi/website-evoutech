"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  label: string;
};

/** Vídeo mudo em loop que só baixa e toca quando aparece na tela. */
export default function LazyVideo({ src, poster, className, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={className}
    />
  );
}
