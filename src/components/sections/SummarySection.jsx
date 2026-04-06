'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
})

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration: 0.7, ease: 'easeOut' },
  },
})

const slideIn = (direction, delay = 0) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
})

const viewport = { once: true, margin: '-80px' }

const SummarySection = () => {
  return (
    <section className="bg-surface py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">

        {/* ── Left column ── */}
        <div className="lg:col-span-5 relative">
          {/* Decorative blob */}
          <motion.div
            className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          <motion.h2
            className="font-display italic text-4xl sm:text-5xl md:text-6xl text-primary-container mb-6 md:mb-8 leading-tight"
            variants={slideIn('left', 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Where ordinary days somehow became the ones that{' '}
            <span className="text-on-tertiary-container">mattered most.</span>
          </motion.h2>

          <motion.p
            className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8 md:mb-12 max-w-md"
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Three hundred and sixty-five days of laughter, peace, and building
            a foundation that will weather any storm. This is our beginning.
          </motion.p>

          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <Link
              href="/gallery"
              className="group flex items-center space-x-4 bg-primary-container text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-500 hover:bg-secondary w-fit"
            >
              <span className="font-body uppercase tracking-widest text-xs">
                See Gallery
              </span>
              <MdArrowForward className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div
          className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 items-end"
          variants={slideIn('right', 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Left stack */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              className="aspect-3/4 rounded-sm overflow-hidden shadow-2xl relative w-full min-h-52 sm:min-h-64 md:min-h-75"
              variants={fadeIn(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: 'easeOut' } }}
            >
              <Image
                className="object-cover"
                fill
                alt="Couple together in soft warm sunlight"
                src="/images/year_1_silhouette.jpg"
              />
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 bg-surface-container-low rounded-sm italic font-display text-base sm:text-lg md:text-xl text-primary-container"
              variants={fadeUp(0.45)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              "I think of my relationship with you as a breath of fresh air,
              it is very healthy and I'm happy about it."
            </motion.div>
          </div>

          {/* Right stack */}
          <div className="space-y-4 sm:space-y-6 pb-10 sm:pb-16 md:pb-20">
            <motion.div
              className="p-4 sm:p-6 md:p-8 bg-tertiary-fixed/30 rounded-sm"
              variants={fadeUp(0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <span className="font-script text-2xl sm:text-3xl text-on-tertiary-fixed-variant block mb-2">
                Favour
              </span>
              <p className="font-display text-sm sm:text-base md:text-lg leading-relaxed text-on-tertiary-fixed-variant">
                Being with you feels like sitting by the beach, just watching
                the waves roll in. It's beautiful, peaceful, calm, steady, and
                grounding in a way that feels so natural.
              </p>
            </motion.div>

            <motion.div
              className="aspect-square rounded-sm overflow-hidden shadow-2xl relative"
              variants={fadeIn(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ scale: 1.02, transition: { duration: 0.5, ease: 'easeOut' } }}
            >
              <Image
                className="object-cover"
                fill
                alt="Close up of two people holding hands at sunset"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkoTnfvX1PfWm8PR71bkAoe3rvoZ8VWL-EBAaQn1oKQYlMVm0zgt6r9Icz3P4b_7-oi_r8P4aanrIh-uwXvgxA5YcI815JEBZQLa_0uWru-_nSDU8GNOWkMGGlApCs0j6F3jyQ-jeDNmQujmaj28-_yDCLQKP1rDD8-HJFPRtBd_8vI9tbkC2idEwBmsw513NGshGKqgczXWqQvhjc2VcTYDmIqyClZ7Vwja3xIuR7CPzOwQTq1NSXmucftt8Dq2jfx1jCpE3tbfv_"
              />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 font-script text-lg sm:text-2xl text-white drop-shadow-lg">
                Forever yours
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default SummarySection