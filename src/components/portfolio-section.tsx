"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, TrendingUp, Globe, Smartphone, Coins, BarChart3, Code, Zap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  highlights: string[];
  delay: number;
}

const ProjectCard = ({ title, description, icon, technologies, highlights, delay }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <Card className="group bg-card border-border hover:border-primary/30 transition-all duration-300 h-full">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-heading text-primary group-hover:text-primary/90 transition-colors">
              {title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium text-foreground mb-3">Key Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-foreground mb-3">Achievements</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function PortfolioSection() {
  const projects = [
    {
      title: "Trading Strategy Development",
      description: "Development of trading strategies for commodities and various assets. Focus on technical analysis, risk management, and building systematic approaches to market opportunities.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      technologies: ["Technical Analysis", "Risk Management", "Market Research", "Trading Platforms"],
      highlights: [
        "Developed systematic trading approaches for commodities",
        "Focus on asset diversification and risk control",
        "Continuous strategy optimization and backtesting",
        "Active learning and adaptation to market conditions"
      ]
    },
    {
      title: "Automation Systems",
      description: "Building practical automation solutions to streamline workflows and improve efficiency. Creating tools that save time and reduce manual repetitive tasks.",
      icon: <Zap className="w-6 h-6 text-primary" />,
      technologies: ["Python", "APIs", "Workflow Automation", "Scripting"],
      highlights: [
        "Built custom automation tools for various workflows",
        "Automated repetitive tasks and data processing",
        "Integration with different platforms and services",
        "Focus on practical, time-saving solutions"
      ]
    },
    {
      title: "Web Development Projects",
      description: "Creating modern, responsive websites using contemporary technologies. Focus on clean design, good user experience, and functional web applications.",
      icon: <Globe className="w-6 h-6 text-primary" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vibe Coding"],
      highlights: [
        "Built several web applications with modern frameworks",
        "Focus on responsive design and user experience",
        "Clean, maintainable code practices",
        "Continuous learning and skill development"
      ]
    },
    {
      title: "Media Editing & Production",
      description: "Professional image and video editing for various projects. Creating visual content with attention to detail and aesthetic quality.",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      technologies: ["Video Editing", "Image Editing", "Adobe Suite", "Visual Design"],
      highlights: [
        "Edited images and videos for different purposes",
        "Focus on quality and visual storytelling",
        "Experience with professional editing software",
        "Creative approach to media production"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Skills & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my work in trading, automation, web development, and media production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-heading text-primary">Let's Work Together</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Interested in collaborating on trading strategies, automation projects, or web development? 
              Let's discuss how we can work together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}