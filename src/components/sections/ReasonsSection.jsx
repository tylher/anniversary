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
        <main className="bg-botanical-texture py-24 px-6 md:px-12 relative overflow-hidden bg-blush" style={{
    backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(253, 249, 244, 0.3) 0%, transparent 40%)
    `
  }}>
        <header className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <motion.p
          className="font-script text-3xl text-on-tertiary-fixed-variant leading-none"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          a little reminder
        </motion.p>
        <motion.h1
          className="font-display italic text-6xl md:text-8xl text-primary-container leading-tight"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          365 reasons
        </motion.h1>
        <motion.h2
          className="font-body text-sm tracking-[0.2em] uppercase text-on-surface-variant font-medium"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
        >
          But here are a few of our favourites
        </motion.h2>
        </header>

       <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
      {reasons.map((reason) => (
         <motion.article
            key={reason.id}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
            className="group relative bg-cream border border-outline-variant/30 p-10 min-h-52 flex flex-col justify-center items-center transition-colors duration-300 hover:bg-secondary cursor-default shadow-sm hover:shadow-xl rounded-sm"
          >
      <span className="absolute top-6 right-8 font-script text-xl text-outline-variant group-hover:text-surface-bright/50 transition-colors">
        {reason.id}
      </span>
      {/* <div className="mb-6">
        <span
          className="material-symbols-outlined text-secondary group-hover:text-surface-bright text-3xl transition-colors"
          data-icon={reason.icon}
        >
          {reason.icon}
        </span>
      </div> */}
      <p className="font-display italic text-lg md:text-xl text-primary-container group-hover:text-surface-bright text-center px-4 leading-relaxed transition-colors">
        {reason.text}
      </p>
    </motion.article>
      ))}
    </motion.div>
        </main>
    )
}

export default ReasonsSection;