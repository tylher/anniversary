import { Flower2 } from "lucide-react"
import Image from "next/image"
import { MdFavorite } from "react-icons/md";
import AnimatedSection from "../ui/AnimatedSection";

const HeroSection = ()=>{
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center  bg-linear-to-br from-espresso via-[#4A202A] to-[#6B2D40] mt-12">
            <div className="absolute inset-0 opacity-60" style={{
                background:'radial-gradient(circle at 20% 30%, rgba(253, 195, 151, 0.15) 0%, transparent 40%),radial-gradient(circle at 80% 70%, rgba(255, 217, 225, 0.1) 0%, transparent 40%)'
                }}>

            </div>

            <div style={{
                    'pointerEvents': 'none',
                    'position': 'absolute',
                    'inset': 0,
                    'overflow': 'hidden'}}>
                    <div className="absolute top-[10%] left-[15%] opacity-20 rotate-45 scale-75">
                    <span className="material-symbols-outlined text-tertiary-fixed text-6xl" data-icon="local_florist"><Flower2/></span>
                    </div>
                    <div className="absolute top-[40%] right-[10%] opacity-10 -rotate-12 scale-110">
                    <span className="material-symbols-outlined text-tertiary-fixed text-5xl" data-icon="local_florist"><Flower2/></span>
                    </div>
                    <div className="absolute bottom-[20%] left-[25%] opacity-15 rotate-90">
                    <span className="material-symbols-outlined text-tertiary-fixed text-5xl" data-icon="local_florist"><Flower2/></span>
                    </div>
            </div>


            <div className="absolute top-0 left-0 p-8 md:p-12 opacity-40 pointer-events-none">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLebcEhoohoGRx2onqkR3sqf3IFaZLfj5G0xw_3SRqgA_m39PNGiKQwQQULq_OA1eMjGSUN4Zlk2tBG3OUaTgb41hVjFxFHy8ApxWXSzaq4_V1_TByFS-H77Gm3M-Z-CguglbfyvMPuHUzB9ugxiWk-XBAeCo_JcAOLVjKADeG0kBMmXTW7J0NN0XK96fThwxpiqoYKWqhRfPOcRGofDKVmm59WkXuvXFKDcwLZ3NmPCufjqeeF308kKtANtlq8JKxVaEw2TadqVFx"
                        alt="Gold botanical line art of eucalyptus leaves"
                        width={192}
                        height={192}
                        className="w-32 h-32 md:w-48 md:h-48"
                        style={{
                        filter: 'brightness(0) saturate(100%) invert(86%) sepia(18%) saturate(769%) hue-rotate(331deg) brightness(101%) contrast(102%)'
                        }}
                    />
            </div>

                {/* Bottom right botanical — rotated 180° */}
            <div className="absolute bottom-0 right-0 p-8 md:p-12 opacity-40 pointer-events-none rotate-180">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-oMTTsukzZueQ0_nQ70iRF5wtgFU_luFiq5518jbg8Q-wjxfWRRX9YZZCA2WkHeZ9xFHhy6Zjl8q3OCgHWbJRVjTx0LoPn210cVl1Eh9M7RJV7mx6MC5-ucNiv1-G4dgd830ADQ2FBnuCeDaCvyz9Mn7JzCV_I4pG8BpIvJn1mHBPGtjncVOgDz5tKdhhgYwP82Kkbu_jzDdu5ot8vUcEyQkA8kh4dhkzoj7LN3Nk_N0cxk_qgfZn5e6-OygXaGnk_i8DB5xkNBc6"
                        alt="Gold botanical line art of roses"
                        width={192}
                        height={192}
                        className="w-32 h-32 md:w-48 md:h-48"
                        style={{
                        filter: 'brightness(0) saturate(100%) invert(86%) sepia(18%) saturate(769%) hue-rotate(331deg) brightness(101%) contrast(102%)'
                        }}
                    />
            </div>


            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pb-10 mb-20">
                    <AnimatedSection as="p" delay={0.1} variant="typingContainer"  className="font-script text-lg md:text-xl gold-gradient-text mb-4 tracking-wide opacity-90" style={  {background: 'linear-gradient(to right, #ffdcc3, #f4bb8f, #ffdcc3)',
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"}} typingText={'A love story worth remembering'} />
                                    
                    <h1 className="font-display italic text-4xl md:text-7xl 2xl:text-9xl text-surface-bright leading-tight drop-shadow-2xl">
                                    One Year <span className="block md:inline text-tertiary-fixed-dim not-italic">/</span> <span className="text-tertiary-fixed-dim">of Us</span>
                    </h1>
                    <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <AnimatedSection className="font-script text-4xl md:text-5xl text-surface-bright" variant="slideLeft" delay={0.5} as="div" >
                        Otitooluwa
                    </AnimatedSection>
                    <AnimatedSection className="text-secondary-fixed text-3xl md:text-4xl" delay={0.6} variant="fadeUp">&amp;</AnimatedSection>
                    <AnimatedSection className="font-script text-4xl md:text-5xl text-surface-bright" variant="slideRight" delay={0.8} as="div" >
                        Adedamola
                    </AnimatedSection>
                    </div>
                    <div className="mt-9 flex flex-col items-center">
                    <div className="p-4 mb-4 rounded-xl bg-surface-bright/5 backdrop-blur-sm border border-outline-variant/20 animate-pulse">
                    <span className="material-symbols-outlined text-tertiary-fixed text-3xl" data-icon="favorite" style={{fontVariationSettings: 'FILL' }}><MdFavorite/></span>
                    </div>
                    <p className="font-body uppercase tracking-[0.3em] text-xs md:text-sm text-secondary-fixed/80">
                                        March 28, 2025 — March 28, 2026
                                    </p>
                    </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
            <span className="font-body uppercase tracking-widest text-[10px] text-surface-bright mb-4">The Journey</span>
            <div className="w-px h-16 bg-linear-to-b from-secondary-fixed to-transparent relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary-fixed rounded-full shadow-[0_0_8px_#ffdcc3]"></div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection