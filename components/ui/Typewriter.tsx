"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export function Typewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText((prev) => prev.slice(0, -1));
        } else {
          setText((prev) => currentWord.slice(0, prev.length + 1));
        }

        if (!isDeleting && text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return (
    <span>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
