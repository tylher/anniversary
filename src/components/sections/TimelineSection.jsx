'use client';
import { useScroll, useSpring, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { entries } from "@/data/content";

const TimelineSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <div>
      {/* Hero Header */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center bg-linear-to-br from-primary-container to-[#9e5530] px-6 overflow-hidden">
        <div className="z-10">
          <span className="block uppercase tracking-[0.4em] text-white/60 text-xs mb-6 font-medium">
            CELEBRATING ONE YEAR
          </span>
          <h1 className="font-display italic text-4xl sm:text-6xl md:text-8xl text-white leading-tight">
            Our Journey Together
          </h1>
          <p className="font-script text-2xl sm:text-4xl md:text-5xl text-secondary-fixed mt-4">
            a love story
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
          <span className="uppercase tracking-widest text-[10px] text-white mb-2">SCROLL</span>
          <div className="w-px h-16 bg-linear-to-b from-white to-transparent" />
        </div>
      </header>

      {/* Timeline */}
      <section className="relative min-h-screen my-12 md:my-20" ref={containerRef}>

        {/* Timeline line — left-aligned on mobile, centered on desktop */}
        <motion.div
          className="absolute left-6 md:left-[calc(50%-1px)] top-0 bg-secondary/20 w-0.5 origin-top min-h-full"
          style={{ scaleY }}
        />

        <div className="flex flex-col gap-16 md:gap-20">
          {entries.map((etry, index) => (
            <div className="relative w-full" key={index}>

              {/* Dot — follows line position */}
              <AnimatedSection
                className="absolute top-0 left-4.5 md:left-[calc(50%-6px)] w-3 h-3 rounded-full bg-secondary"
                variant="fadeUp"
                showOnce={false}
              />

              <section
                className={`relative flex flex-col md:items-center md:justify-center
                  pl-14 md:pl-0
                  md:gap-52 gap-8
                  ${etry.layout === 'text-right'
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                  }`}
              >
                {/* Text block */}
                <AnimatedSection
                  className={`w-full md:w-1/2 flex flex-col items-start text-left
                    ${etry.layout === 'text-right'
                      ? 'md:text-right md:items-end'
                      : 'md:text-left md:items-start'
                    }`}
                  variant="slideLeft"
                  delay={0.3}
                >
                  <span className="inline-block px-4 sm:px-6 py-2 rounded-full bg-[#d9c4a8] text-tertiary-container font-medium text-xs tracking-widest mb-4 md:mb-6">
                    {etry.season}
                  </span>
                  <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ink mb-4 md:mb-6">
                    {etry.title}
                  </h2>
                  <p className="font-body text-on-surface-variant leading-relaxed text-base sm:text-lg max-w-md">
                    {etry.body}
                  </p>
                  <p className="font-script text-xl sm:text-2xl text-secondary mt-6 md:mt-8">
                    {etry.quote}
                  </p>
                </AnimatedSection>

                {/* Image block */}
                <AnimatedSection
                  variant="slideRight"
                  className={`w-full md:w-1/2 relative flex items-end
                    ${etry.layout === 'text-right' ? 'justify-start' : 'md:justify-end'}`}
                >
                  <div className="relative w-full max-w-xs sm:max-w-sm md:w-80 h-72 sm:h-80 md:h-96">
                    <Image
                      className="rounded-sm shadow-xl object-cover overflow-hidden"
                      fill
                      alt={etry.image.alt}
                      src={etry.image.src}
                    />
                    <span className="absolute -bottom-6 font-script text-2xl sm:text-3xl text-secondary">
                      {etry.month}
                    </span>
                  </div>
                </AnimatedSection>
              </section>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TimelineSection;