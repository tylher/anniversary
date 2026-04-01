import { MdFilterVintage } from "react-icons/md";

const Footer = () => {
    return(
        <footer className="bg-espresso dark:bg-black w-full min-h-96 flex flex-col justify-center items-center text-center text-[#fdf9f4] dark:text-[#fdf9f4] py-24 px-6 space-y-8">
<div className="relative flex items-center justify-center w-32 h-32 mb-4">
<div className="absolute inset-0 border-[0.5px] border-amber-200/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-2 border-[0.5px] border-amber-200/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        
<div className="absolute -top-2 left-1/2 -translate-x-1/2">
<span className="material-symbols-outlined text-amber-200/40 text-sm"><MdFilterVintage/></span>
</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
<span className="material-symbols-outlined text-amber-200/40 text-sm"><MdFilterVintage/></span>
</div>
<div className="absolute -left-2 top-1/2 -translate-y-1/2">
<span className="material-symbols-outlined text-amber-200/40 text-sm"><MdFilterVintage/></span>
</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2">
<span className="material-symbols-outlined text-amber-200/40 text-sm"><MdFilterVintage/></span>
</div>
        
</div>
<div className="space-y-2">
<h2 className="text-5xl font-script text-amber-200/90 leading-relaxed">
                    Otitooluwa &amp; Adedamola
                </h2>
<p className="text-xs font-sans-alt font-light tracking-[0.4em] text-stone-400 uppercase">
                    March 28, 2025 — March 28, 2026
                </p>
</div>
<div className="max-w-xl px-4 py-8">
<p className="text-4xl italic font-serif-display text-amber-100/90 leading-tight">
                    "One year down. A lifetime to go."
                </p>
</div>
<div className="w-24 h-px bg-linear-to-r from-transparent via-amber-200/40 to-transparent"></div>
<div className="pt-4 flex flex-col items-center space-y-6">
<div className="text-[10px] font-sans-alt font-light tracking-[0.3em] text-stone-500 flex items-center gap-2">
                    MADE WITH LOVE 
                
                </div>
                </div>
</footer>
    )
}

export default Footer;