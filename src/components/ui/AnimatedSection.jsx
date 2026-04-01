'use client';
const { motion } = require("framer-motion")


const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const slideLeft = {
  hidden:  { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

  const slideRight = {
  hidden:  { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}


const scaleUp = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.15,  // 120ms between each child
      delayChildren: 1,
    }
  }
}

const staggerChild = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const typingContainer = {
  hidden: {opacity:0},
  visible: {
    opacity:1,
    transition: {
      staggerChildren: 0.035, // typing speed
    }
  }
};

const typingChild = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const variants = {
  fadeUp,
  slideLeft,
  slideRight,
  scaleUp,
  staggerContainer,
  staggerChild,
  typingChild,
  typingContainer  
}


const AnimatedSection = ({
    children,
    variant='fadeUp',
    delay =0,
    className='',
    as = 'div',
    typingText,
    style={},
    typingSpeed,
    isChild=false,
    showOnce=true
})=>{
   const selectedVariant = variants[variant];

   const variantWithDelay = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...selectedVariant.visible?.transition,
        ...(delay > 0 && { delay }),
      }
    }
  }

 


  const MotionComponent = motion[as]||motion.div;
   if (typingText) {
    return (
      <MotionComponent
        className={className}
        variants={variants.typingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: showOnce, amount: 0.15 }}
        style={style}
      >
        {typingText.split("").map((char, i) => (
          <motion.span key={i} variants={variants.typingChild}>
            {char}
          </motion.span>
        ))}

        {/* Cursor */}
        <motion.span
          className="ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
        duration: 1,
        repeat: Infinity }}
        >
          |
        </motion.span>
      </MotionComponent>
    );
  }

  // ── CHILD MODE ───────────────────────────────────────────────────
  // No initial, no whileInView, no viewport
  // Parent controls when animation fires — child just responds
  if (isChild) {
    return (
      <MotionComponent
        className={className}
        variants={variantWithDelay}
      >
        {children}
      </MotionComponent>
    )
  }

    return(
        <MotionComponent className={className} variants={variantWithDelay}
      initial="hidden"
      whileInView="visible" viewport={{once:showOnce, amount:0.15}}>
            {children}
        </MotionComponent>
    )
}

export default AnimatedSection;