'use client';
import { useEffect, useRef, useState } from "react"

 const useCountUp = ({duration=2000,target})=>{
    const [count, setCount]= useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef= useRef(null)

  useEffect(()=>{
    const element = elementRef.current;
    if(!element)return;

    const observer = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting&&!hasStarted){
            setHasStarted(true);
        }

        
    },{threshold:0.5}
)

    observer.observe(element);

    return ()=> observer.disconnect();
  },[hasStarted]);


  useEffect(()=>{
    if (!hasStarted) return

    // If target is not a number (like ∞), do nothing
    if (typeof target !== 'number') {
      setCount(target)
      return
    }

    let startTime = null
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp

      // How far through the duration are we? (0 to 1)
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function — starts fast, slows at the end (easeOutQuart)
      const eased = 1 - Math.pow(1 - progress, 4)

      // Current count value
      setCount(Math.floor(eased * target))

      // Keep animating until progress reaches 1
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(target) // make sure it lands exactly on the target
      }
    }

    animationFrame = requestAnimationFrame(animate);

    ()=> cancelAnimationFrame(animationFrame)

  },[hasStarted,target,duration])


  return {elementRef,count}
 }

 export default useCountUp;