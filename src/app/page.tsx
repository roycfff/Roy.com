import HeroSection from "@/components/hero-section";
import AboutSkillsSection from "@/components/about-skills-section";
import EducationVisionSection from "@/components/education-vision-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import { Waves } from "@/components/ui/wave-background";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative min-h-screen">
        {/* Wave background that covers entire page */}
        <div className="absolute inset-0 z-0 pointer-events-none">
        </div>
        {/* Content with higher z-index */}
        <div className="relative z-10">
        <div>
          <Waves 
            strokeColor="#FFD700" 
            backgroundColor="transparent"
            pointerSize={0}
          />
        
          <HeroSection />
        </div>
          
          <AboutSkillsSection className="border-t border-primary/10" />
          
          <EducationVisionSection />
          
          <PortfolioSection className="border-t border-primary/10" />
          
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}