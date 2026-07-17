/* ==========================================================================
   HOME PAGE — CPZ Fitness (new ICA rebrand)
   Assembles all sections in conversion-optimized order
   ========================================================================== */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ForSection from "@/components/ForSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
// import TestimonialsSection from "@/components/TestimonialsSection"; // hidden until real testimonials are ready
import BookSection from "@/components/BookSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#121316", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ForSection />
      <AboutSection />
      <ProcessSection />
      {/* <TestimonialsSection /> — hidden until real client testimonials are available */}
      <BookSection />
      <Footer />
    </div>
  );
}
