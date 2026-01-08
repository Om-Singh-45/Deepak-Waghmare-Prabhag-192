import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import AboutSection from "@/components/AboutSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Tricolor Stripe */}
      <div className="tricolor-stripe" />
      
      <VisionSection />
      <AboutSection />
      <JoinSection />
      <ContactSection />
    </div>
  );
};

export default Index;
