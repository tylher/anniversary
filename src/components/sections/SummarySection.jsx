import Image from "next/image"
import { MdArrowForward } from "react-icons/md"

const SummarySection = ()=>{
    return (
        <section class="bg-surface py-32 px-8 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative">
<div className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-3xl"></div>
<h2 className="font-display italic text-5xl md:text-6xl text-primary-container mb-8 leading-tight">
                    Where ordinary days somehow became the ones that <span class="text-on-tertiary-container">mattered most.</span>
                </h2>
<p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12 max-w-md">
                    Three hundred and sixty-five days of laughter, peace, and building a foundation that will weather any storm. This is our beginning.
                </p>
<button className="group flex items-center space-x-4 bg-primary-container text-white px-8 py-4 rounded-md transition-all duration-500 hover:bg-secondary">
<span className="font-body uppercase tracking-widest text-xs">See Gallery</span>
<span className="material-symbols-outlined transition-transform group-hover:translate-x-2" data-icon="arrow_forward"><MdArrowForward/></span>
</button>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-6 items-end">
<div className="space-y-6">
<div className="aspect-3/4 rounded-sm overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] relative w-full h-full min-h-75">
<Image className="object-cover" fill alt="Couple laughing together in soft warm sunlight" src="/images/year_1_silhouette.jpg"/>
</div>
<div className="p-6 bg-surface-container-low rounded-sm italic font-display text-xl text-primary-container">
                        "I think of my relationship with you as a breath of fresh air, it is very healthy and I’m happy about it."
                    </div>
</div>
<div className="space-y-6 pb-20">
<div className="p-8 bg-tertiary-fixed/30 rounded-sm">
<span className="font-script text-3xl text-on-tertiary-fixed-variant block mb-2">Favour</span>
<p className="font-diaplay text-lg leading-relaxed text-on-tertiary-fixed-variant">
                            Being with you feels like sitting by the beach, just watching the waves roll in. It's beautiful, peaceful, calm, steady, and grounding in a way that feels so natural.
                        </p>
</div>
<div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative transition-transform duration-700 hover:scale-[1.02]">
<Image className="w-full h-full object-cover" width={100} height={100} alt="Close up of two people holding hands at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkoTnfvX1PfWm8PR71bkAoe3rvoZ8VWL-EBAaQn1oKQYlMVm0zgt6r9Icz3P4b_7-oi_r8P4aanrIh-uwXvgxA5YcI815JEBZQLa_0uWru-_nSDU8GNOWkMGGlApCs0j6F3jyQ-jeDNmQujmaj28-_yDCLQKP1rDD8-HJFPRtBd_8vI9tbkC2idEwBmsw513NGshGKqgczXWqQvhjc2VcTYDmIqyClZ7Vwja3xIuR7CPzOwQTq1NSXmucftt8Dq2jfx1jCpE3tbfv_"/>
<div className="absolute bottom-4 right-4 font-script text-2xl text-white drop-shadow-lg">Forever yours</div>
</div>
</div>
</div>
</div>
</section>
    )
}

export default SummarySection