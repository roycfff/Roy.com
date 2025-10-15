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
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3e6f12c3-af71-4a8e-bdb7-dafeaac12b2a/generated_images/professional-minimalist-logo-for-a-tradi-85fcbd3a-20251015110806.jpg",
      url: "guardme-safe-zone.lovable.app" // Replace with your real project URL
    },
    {
      title: "Web Development Projects",
      description: "Modern web applications built with React, Next.js, and cutting-edge technologies using Vibe Coding principles",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3e6f12c3-af71-4a8e-bdb7-dafeaac12b2a/generated_images/modern-minimalist-logo-for-web-developme-a62c1619-20251015110813.jpg",
      url: "https://your-web-project.com" // Replace with your real project URL
    },
    {
      title: "Automation Systems",
      description: "Custom automation tools and workflows that streamline processes and increase efficiency",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3e6f12c3-af71-4a8e-bdb7-dafeaac12b2a/generated_images/sleek-minimalist-logo-for-automation-sys-f655e448-20251015110823.jpg",
      url: "https://your-automation-project.com" // Replace with your real project URL
    }
  ];

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
                  
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>
                  
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