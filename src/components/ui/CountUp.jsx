'use client'

import useCountUp from "@/hooks/useCountUp";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";



const CountUp = ({target, duration,className})=>{
    const { count, elementRef } = useCountUp( duration,target)
    if (typeof target !== 'number') {
    return <span>{target}</span>
  }

  return (
    // elementRef attaches the observer to this element
    <AnimatedNumber target={target} duration={duration} />
  )
}


function AnimatedNumber({ target, duration }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)

  // useInView from Framer Motion — true when element is on screen
  const isInView = useInView(ref, {
    once: true,       // only trigger once
    amount: 0.3,      // 30% visible before starting
  })

  useEffect(() => {
    if (!isInView) return

    // animate() from Framer Motion counts from 0 to target
    const controls = animate(0, target, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],  // easeOutQuart — fast then slows
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest))
      },
      onComplete: () => {
        setDisplayValue(target)  // land exactly on target
      }
    })

    // cleanup if component unmounts
    return () => controls.stop()

  }, [isInView, target, duration])

  return <span ref={ref}>{displayValue}</span>
}


export default CountUp;