"use client";

import { BrainCog, LayoutGrid, Blocks, Proportions, Framer } from "lucide-react";

interface AboutSkillsSectionProps {
  className?: string;
}

export default function AboutSkillsSection({ className }: AboutSkillsSectionProps) {
  const skills = [
    {
      title: "AI Systems Integration",
      description: "Developing and implementing advanced AI solutions for trading systems and market analysis",
      icon: BrainCog,
    },
    {
      title: "Trading & Algo",
      description: "Algorithmic trading strategies, market analysis, and quantitative finance expertise",
      icon: LayoutGrid,
    },
    {
      title: "Web Development",
      description: "Full-stack development with modern technologies for financial applications",
      icon: Blocks,
    },
    {
      title: "Naval Experience",
      description: "Military leadership, strategic planning, and operational excellence in high-pressure environments",
      icon: Proportions,
    },
    {
      title: "Public Speaking",
      description: "Presenting complex financial concepts and AI technologies to diverse audiences",
      icon: Framer,
    },
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
                  שמי רועי, בן 21, יזם צעיר עם רקע ייחודי בצבא והים. 
                  התחלתי את דרכי בטרייד בגיל 16 וצברתי ניסיון רב בשווקים הפיננסיים.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  היום אני מתמחה בפיתוח מערכות AI מתקדמות לטרייד חכם, 
                  משלב בין הידע הטכני שלי לניסיון הבלעדי מהצבא.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  המטרה שלי היא להוביל מהפכה בעולם הפיננסים דרך בינה מלאכותית 
                  ואלגוריתמים חכמים שיעזרו לאנשים להשיג עצמאות כלכלית.
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

        {/* Skills Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-12 text-center">
            Core Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              
              return (
                <div
                  key={skill.title}
                  className="group bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Golden accent border */}
                  <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-b from-primary/20 to-primary/5 transition-all duration-500 group-hover:w-1"></div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading text-primary mb-4 group-hover:text-primary/90 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {skill.description}
                  </p>
                  
                  {/* Subtle hover effect */}
                  <div className="absolute bottom-0 right-0 w-0 h-0 bg-primary/5 transition-all duration-500 group-hover:w-full group-hover:h-full -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}