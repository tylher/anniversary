import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import NumbersSection from "@/components/sections/NumberSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import SummarySection from "@/components/sections/SummarySection";
import TimelineSection from "@/components/sections/TimelineSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeroSection /> 
        <NumbersSection/>
        <SummarySection/>
        <TimelineSection/>
      </main>
    </div>
  );
}
