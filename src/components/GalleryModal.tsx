import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: GalleryImage[];
};

export default function GalleryModal({ isOpen, onClose, title, images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = useMemo(() => {
    if (activeIndex === null) return null;
    return images[activeIndex] ?? null;
  }, [activeIndex, images]);

  const hasMany = images.length > 1;

  const goPrev = () => {
    setActiveIndex((i) => {
      if (images.length === 0) return null;
      if (i === null) return 0;
      return (i - 1 + images.length) % images.length;
    });
  };

  const goNext = () => {
    setActiveIndex((i) => {
      if (images.length === 0) return null;
      if (i === null) return 0;
      return (i + 1) % images.length;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeIndex !== null) setActiveIndex(null);
        else onClose();
      }

      if (activeIndex !== null && images.length > 1) {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, activeIndex, images.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <button
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          />

          {/* MODAL (taller) */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            className="relative w-[90vw] max-w-5xl rounded-3xl bg-white shadow-2xl"
            style={{ height: "70vh" }}
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
              <h3 className="font-semibold">{title}</h3>

              <button
                onClick={onClose}
                className="rounded-full border px-3 py-1 text-sm hover:bg-gray-100"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* hint */}
            <div className="px-6 pt-4 text-sm text-black/60">
              Click an image to view it full size
            </div>

            {/* BODY */}
            <div className="relative h-[calc(70vh-120px)] px-6 pb-6 pt-4">
              {hasMany && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-black/10 hover:bg-gray-50"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-black/10 hover:bg-gray-50"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}

              {/* GRID: more images per row */}
              <div className="h-full overflow-auto pr-1">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className="group relative overflow-hidden rounded-xl border border-black/10 hover:shadow-lg transition"
                      aria-label="Open image"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-36 object-cover"
                      />

                      {/* click hint overlay */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/20" />
                      <div className="pointer-events-none absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition">
                        <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-semibold">
                          Click to zoom
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LIGHTBOX */}
            <AnimatePresence>
              {active && (
                <motion.div
                  className="absolute inset-0 z-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    aria-label="Close image"
                  />

                  {/* arrows inside fullscreen */}
                  {hasMany && (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow border border-black/10 hover:bg-gray-50"
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow border border-black/10 hover:bg-gray-50"
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* close X */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-black/10 hover:bg-gray-50"
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  <motion.img
                    src={active.src}
                    alt={active.alt}
                    className="relative max-h-[80vh] max-w-[90%] rounded-2xl shadow-2xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}