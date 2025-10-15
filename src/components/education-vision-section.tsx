"use client";

import { GraduationCap, Lightbulb, Shield, Users, TrendingUp, BookText, Computer, Library } from "lucide-react";

interface EducationItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface VisionItem {
  title: string;
  titleHebrew: string;
  description: string;
  descriptionHebrew: string;
  icon: React.ComponentType<{ className?: string }>;
}

const educationItems: EducationItem[] = [
  {
    title: "Advanced Mathematics (5 Units)",
    description: "High-level mathematical proficiency for quantitative analysis",
    icon: BookText
  },
  {
    title: "English Literature (10 Units)",
    description: "Advanced English proficiency for international markets",
    icon: Library
  },
  {
    title: "Capital Markets & Trading",
    description: "Professional courses in forex, crypto, and traditional markets",
    icon: TrendingUp
  },
  {
    title: "AI Systems Integration - Kernelios",
    description: "Cutting-edge studies in artificial intelligence and fintech",
    icon: Computer
  }
];

const visionItems: VisionItem[] = [
  {
    title: "Innovation",
    titleHebrew: "חדשנות",
    description: "AI-driven fintech breakthroughs",
    descriptionHebrew: "פריצות דרך בפינטק מבוססות בינה מלאכותית",
    icon: Lightbulb
  },
  {
    title: "Discipline",
    titleHebrew: "משמעת",
    description: "Military discipline as business tool",
    descriptionHebrew: "משמעת צבאית ככלי עסקי",
    icon: Shield
  },
  {
    title: "Leadership",
    titleHebrew: "מנהיגות",
    description: "Young leadership from navy to capital markets",
    descriptionHebrew: "מנהיגות צעירה מהחיל הימי לשווקי ההון",
    icon: Users
  },
  {
    title: "Growth",
    titleHebrew: "צמיחה",
    description: "Continuous learning and self-investment",
    descriptionHebrew: "למידה מתמשכת והשקעה עצמית",
    icon: TrendingUp
  }
];

export default function EducationVisionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Section */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold text-primary font-heading">
                  Education
                </h2>
              </div>
              <div className="text-2xl font-light text-muted-foreground font-heading mb-2">
                השכלה
              </div>
              <p className="text-muted-foreground max-w-md mx-auto">
                Academic foundation and professional development in finance and technology
              </p>
            </div>

            <div className="grid gap-6">
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Values Section */}
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold text-primary font-heading">
                  Vision & Values
                </h2>
              </div>
              <div className="text-2xl font-light text-muted-foreground font-heading mb-2">
                חזון וערכים
              </div>
              <p className="text-muted-foreground max-w-md mx-auto">
                Core principles driving success in fintech and business leadership
              </p>
            </div>

            <div className="grid gap-6">
              {visionItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col gap-1 mb-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <h4 className="text-lg font-light text-muted-foreground font-heading">
                          {item.titleHebrew}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed font-light" dir="rtl">
                          {item.descriptionHebrew}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}