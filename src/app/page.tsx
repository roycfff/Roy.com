import HeroSection from "@/components/hero-section";
import AboutSkillsSection from "@/components/about-skills-section";
import EducationVisionSection from "@/components/education-vision-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        <HeroSection />
        
        <div className="relative z-10">
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