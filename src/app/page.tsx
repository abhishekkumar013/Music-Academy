import FeaturredCourses from "@/components/FeaturredCourses";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Inatructors } from "@/components/Inatructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
     
      <HeroSection/>
      <FeaturredCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebiners/>

      <Inatructors/>
      <Footer/>
    </main>
  );
}
