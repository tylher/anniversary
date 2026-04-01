import { stats } from "@/data/content";
import AnimatedSection from "../ui/AnimatedSection";
import Image from "next/image";
import CountUp from "../ui/CountUp";
const NumbersSection = () =>{
  return (
    <section className="py-12 px-8 relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(160,80,106,0.03)_0%,transparent_70%),radial-gradient(circle_at_20%_80%,rgba(120,79,43,0.02)_0%,transparent_50%)] bg-cream" style={{
//   background: `
//     radial-gradient(circle at 50% 50%, rgba(160, 80, 106, 0.03) 0%, transparent 70%),
//     radial-gradient(circle at 20% 80%, rgba(120, 79, 43, 0.02) 0%, transparent 50%)
//   `
}}>
    <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="mb-8 opacity-60">
            <Image width={64} height={64} alt="Gold botanical divider"
             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLebcEhoohoGRx2onqkR3sqf3IFaZLfj5G0xw_3SRqgA_m39PNGiKQwQQULq_OA1eMjGSUN4Zlk2tBG3OUaTgb41hVjFxFHy8ApxWXSzaq4_V1_TByFS-H77Gm3M-Z-CguglbfyvMPuHUzB9ugxiWk-XBAeCo_JcAOLVjKADeG0kBMmXTW7J0NN0XK96fThwxpiqoYKWqhRfPOcRGofDKVmm59WkXuvXFKDcwLZ3NmPCufjqeeF308kKtANtlq8JKxVaEw2TadqVFx"
             style={{
                filter: "brightness(0) saturate(100%) invert(86%) sepia(18%) saturate(769%) hue-rotate(331deg) brightness(101%) contrast(102%)"
  }}></Image>
        </div>


      {/* Heading fades up when it scrolls into view */}
      <AnimatedSection variant="fadeUp" className="text-center mb-6">
        <h2 className="font-display italic text-display text-espresso  text-4xl md:text-5xl text-primary-container text-center">
          One year holds so much
        </h2>
        {/* Gold decorative line */}
        <div className="w-24 h-px bg-gold mx-auto mt-6" />
      </AnimatedSection>

      {/*
        staggerContainer makes each stat card animate in
        one after another (not all at once)
      */}
      <AnimatedSection
        variant="staggerContainer"
        as="div"
        delay={0.3}
        className="grid grid-cols-2 md:grid-cols-4  justify-between gap-12 w-full"
      >
        {stats.map((stat) => {
          /*
            Each child uses staggerChild —
            the container controls the timing delay between them
          */
         return(
          <AnimatedSection
            key={stat.label}
            variant="staggerChild"
            isChild={true} 
            className="text-center"
          >
            <p className="font-display font-bold italic text-stat text-deep-rose  text-7xl md:text-8xl mb-4">
             <CountUp
                  target={stat.number}
                  duration={10}       // 0.01 seconds to count up
                />

            </p>

            <div className="relative pb-2">
                  <p className="font-body uppercase  text-sm
                          text-espresso/70 mt-2 text-[10px] tracking-[0.2em] font-semibold">
              {stat.label}
            </p>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-secondary-fixed/60 transition-all duration-700 group-hover:w-full"></div>
            </div>
            
          
          </AnimatedSection>
         )
          
        })}
      </AnimatedSection>
    </div>
    </section>
  )
}

export default NumbersSection