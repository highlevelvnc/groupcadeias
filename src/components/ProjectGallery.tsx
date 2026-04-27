"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { cn } from "@/lib/cn";

type Props = {
  images: string[];
  alt: string;
  className?: string;
};

/**
 * Galeria de projeto com lightbox modal.
 * Layout responsivo: grid 2 colunas mobile, 3 desktop.
 * Click numa imagem abre modal com navegação por teclado/swipe.
 */
export default function ProjectGallery({ images, alt, className }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <>
      <ul
        className={cn(
          "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
          className,
        )}
      >
        {images.map((src, i) => (
          <li key={`${src}-${i}`}>
            <button
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-100 shadow-precision transition-all hover:-translate-y-1 hover:shadow-precision-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              aria-label={`Abrir imagem ${i + 1} de ${images.length} em ecrã grande`}
            >
              <Image
                src={src}
                alt={`${alt} — fotografia ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-precision backdrop-blur transition-transform group-hover:scale-110"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" />
                </svg>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src, alt }))}
        carousel={{ finite: images.length === 1 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: "rgba(0, 30, 64, 0.95)" },
        }}
      />
    </>
  );
}
