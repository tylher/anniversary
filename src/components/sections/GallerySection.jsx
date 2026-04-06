'use client';
import { photos } from "@/data/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Clamp colSpan to the current grid column count
const useColumns = () => {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)       setCols(2);
      else if (w < 1024) setCols(3);
      else               setCols(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cols;
};

const GallerySection = () => {
  const cols = useColumns();

  return (
    <main className="pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-primary-container z-20 relative overflow-hidden">

      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 text-center mb-10 sm:mb-14 md:mb-20 px-4 sm:px-6">
        <h3 className="font-script text-secondary-fixed-dim text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
          A year of beautiful moments
        </h3>
        <h2 className="font-serif-italic italic text-surface text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight opacity-90">
          Our Gallery
        </h2>
      </header>

      {/* Grid */}
      <section
        className="
          grid px-3 sm:px-4 md:px-6
          grid-cols-2 auto-rows-[140px]
          sm:grid-cols-3 sm:auto-rows-[130px]
          lg:grid-cols-4 lg:auto-rows-[120px]
          gap-2 sm:gap-3
        "
      >
        {photos.map((photo, i) => {
          // Clamp spans so items never overflow the active column count
          const colSpan = Math.min(photo.colSpan, cols);
          const rowSpan = Math.min(
            photo.rowSpan,
            photo.colSpan > cols ? photo.rowSpan + 1 : photo.rowSpan
          );

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, rotate: photo.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
              animate={{ rotate: [photo.rotate, -photo.rotate] }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                rotate: {
                  duration: 0.5 + i * 0.04,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
                opacity: { duration: 0.8, delay: i * 0.08 },
                y:       { duration: 0.8, delay: i * 0.08 },
              }}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow:    `span ${rowSpan}`,
                transformOrigin: 'top center',
              }}
              className={`flex flex-col ${photo.caption ? 'bg-white p-2 sm:p-3 pb-3 sm:pb-4 shadow-xl' : ''}`}
            >
              <div className="relative flex-1 rounded-sm overflow-hidden">
                <Image
                  src={photo.src}
                  fill
                  alt={photo.alt}
                  className="object-cover"
                />
              </div>

              {photo.caption && (
                <p className="font-script text-primary-container text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2 leading-tight">
                  {photo.caption}
                </p>
              )}
            </motion.div>
          );
        })}
      </section>

      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
        <svg className="fill-tertiary-fixed" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.2C87.4,-33.3,90,-17.7,89.1,-2.4C88.2,12.8,83.8,27.7,75.4,40.6C67.1,53.5,54.8,64.4,40.8,71.2C26.8,78.1,11,80.8,-3.8,87.4C-18.7,94,-32.5,104.5,-44.7,101.4C-56.9,98.3,-67.5,81.6,-75.4,66.8C-83.3,52,-88.4,39,-90.6,25.6C-92.8,12.3,-92.1,-1.5,-88.6,-14.8C-85.1,-28.1,-78.9,-40.8,-69.4,-51C-59.8,-61.2,-46.9,-68.9,-34.1,-76.8C-21.3,-84.7,-8.7,-92.8,2.7,-97.5C14.1,-102.2,28.2,-103.5,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </main>
  );
};

export default GallerySection;