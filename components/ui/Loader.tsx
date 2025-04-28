"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [fadeOut, setFadeOut] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const start = Date.now();

    const handleLoad = () => {
      const duration = Date.now() - start;

      const remainingTime = 1000 - duration;

      if (remainingTime > 0) {
        setTimeout(() => setFadeOut(true), remainingTime);
      } else {
        setFadeOut(true);
      }
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timeout = setTimeout(() => {}, 600);

      return () => clearTimeout(timeout);
    }
  }, [fadeOut]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
            fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="animate-pulse">
            <Image
              src="/svg/animated_logo.svg"
              alt="Loading..."
              width={250}
              height={250}
              style={{
                height: "auto",

                width: "clamp(150px, 20vw, 300px)",

                objectFit: "contain",
              }}
              unoptimized
            />
          </div>
        </div>,

        document.body,
      )}

      {children}
    </>
  );
}
