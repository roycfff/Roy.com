"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface AboutSkillsSectionProps {
  className?: string;
}

export default function AboutSkillsSection({ className }: AboutSkillsSectionProps) {
  const projects = [
    {
      title: "Trading Strategy Platform",
      description: "Advanced trading strategies for commodities and assets with systematic approaches and risk management",
      logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/FTWCys7kpxbF4KpABKlCzbKKPzD3/social-images/social-1760528213015-d423050d-3563-459a-963a-1db43952f5f8.jfif",
      url: "https://guardme-safe-zone.lovable.app/auth",
      siteName: "GuardMe Safe Zone"
    },
    {
      title: "ai match",
      description: "Discover, compare, and build your perfect AI package with AI Match. Streamline your workflow and boost efficiency with our intelligent recommendation platform.",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3e6f12c3-af71-4a8e-bdb7-dafeaac12b2a/generated_images/modern-minimalist-logo-for-web-developme-a62c1619-20251015110813.jpg",
      url: "https://ai-match-09a2d309.base44.app",
      siteName: "Web Project"
    },
    {
      title: "Automation Systems",
      description: "Custom automation tools and workflows that streamline processes and increase efficiency",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3e6f12c3-af71-4a8e-bdb7-dafeaac12b2a/generated_images/sleek-minimalist-logo-for-automation-sys-f655e448-20251015110823.jpg",
      url: "https://your-automation-project.com",
      siteName: "Automation Project"
    }
  ];

  // Helper to get favicon URL
  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).origin;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
      return null;
    }
  };

  // Helper to get display domain
  const getDisplayDomain = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return '';
    }
  };

  return (
    <section className={`py-20 bg-background ${className || ""}`}>
      <div className="container max-w-7xl mx-auto px-4">
        {/* About Me Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hebrew Text */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              
              <div className="text-right dir-rtl space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  שמי רוי, בן 21, יזם צעיר עם רקע ייחודי בצבא והים. התחלתי את דרכי בטרייד בגיל 17 וצברתי ניסיון רב בשווקים הפיננסיים. כיום אני מתמחה בפיתוח מערכות בינה מלאכותית מתקדמות ובאלגוריתמים חכמים לטרייד, תוך שילוב הידע הטכני שלי עם הניסיון הייחודי שצברתי בשירות הצבאי. המטרה שלי היא להוביל מהפכה בעולם הפיננסים דרך בינה מלאכותית ואלגוריתמים חכמים שיעזרו לאנשים להשיג עצמאות כלכלית.
                </p>
              </div>
            </div>

            {/* English Mission Statement */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-heading text-primary mb-6">
                  Mission Statement
                </h3>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Leading the future of <span className="text-primary font-medium">smart trading</span> through 
                  cutting-edge AI and algorithmic solutions.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Combining military precision with <span className="text-primary font-medium">financial innovation</span> 
                  to democratize access to sophisticated trading technologies.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Empowering individuals and institutions to achieve 
                  <span className="text-primary font-medium"> financial independence</span> through 
                  intelligent automation and data-driven strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-12 text-center">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const faviconUrl = getFaviconUrl(project.url);
              const displayDomain = getDisplayDomain(project.url);
              
              return (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 relative overflow-hidden block">

                  {/* Golden accent border */}
                  <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-b from-primary/20 to-primary/5 transition-all duration-500 group-hover:w-1"></div>
                  
                  {/* Project Logo */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-primary/20 transition-colors duration-300 relative">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading text-primary mb-4 group-hover:text-primary/90 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Site Badge with Favicon */}
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-primary/10">
                    {faviconUrl && (
                      <img
                        src={faviconUrl}
                        alt={`${project.siteName} favicon`}
                        className="w-4 h-4"
                      />
                    )}
                    <span className="text-sm text-primary/70 group-hover:text-primary transition-colors duration-300 font-medium">
                      {displayDomain}
                    </span>
                  </div>
                  
                  {/* Subtle hover effect */}
                  <div className="absolute bottom-0 right-0 w-0 h-0 bg-primary/5 transition-all duration-500 group-hover:w-full group-hover:h-full -z-10"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}