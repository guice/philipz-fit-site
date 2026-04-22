/* ==========================================================================
   HOME PAGE — CPZ Fitness "Spartan Engineer" design
   Assembles all sections in conversion-optimized order
   ========================================================================== */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ForSection from "@/components/ForSection";
import AboutSection from "@/components/AboutSection";
import PipelineSection from "@/components/PipelineSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0f1012", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ForSection />
      <AboutSection />
      <PipelineSection />
      <TestimonialsSection />
      <CommunitySection />
      <BookSection />
      <Footer />
    </div>
  );
}
