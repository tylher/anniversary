'use client';
import { reasons } from "@/data/content";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const ReasonsSection = () => {
  return (
    <main
      className="bg-botanical-texture py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-blush"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(253, 249, 244, 0.3) 0%, transparent 40%)
        `,
      }}
    >
      {/* Header */}
      <header className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <motion.p
          className="font-script text-2xl sm:text-3xl text-on-tertiary-fixed-variant leading-none"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          a little reminder
        </motion.p>

        <motion.h1
          className="font-display italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-container leading-tight"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          365 reasons
        </motion.h1>

        <motion.h2
          className="font-body text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-on-surface-variant font-medium px-4 sm:px-0"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          But here are a few of our favourites
        </motion.h2>
      </header>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {reasons.map((reason) => (
          <motion.article
            key={reason.id}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="group relative bg-cream border border-outline-variant/30
              p-6 sm:p-8 md:p-10
              min-h-40 sm:min-h-48 md:min-h-52
              flex flex-col justify-center items-center
              transition-colors duration-300
              hover:bg-secondary cursor-default
              shadow-sm hover:shadow-xl rounded-sm"
          >
            {/* Reason number */}
            <span className="absolute top-4 right-5 sm:top-6 sm:right-8 font-script text-lg sm:text-xl text-outline-variant group-hover:text-surface-bright/50 transition-colors">
              {reason.id}
            </span>

            {/* Reason text */}
            <p className="font-display italic text-base sm:text-lg md:text-xl text-primary-container group-hover:text-surface-bright text-center px-2 sm:px-4 leading-relaxed transition-colors">
              {reason.text}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </main>
  );
};

export default ReasonsSection;