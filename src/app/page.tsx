import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        <HeroSection />
        
        <div className="relative z-10">
          <ProjectsSection className="border-t border-primary/10" />
          
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}