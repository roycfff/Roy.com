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
      title: "AI Trading Bots",
      description: "Sophisticated algorithmic trading systems powered by machine learning and advanced market analysis. These bots execute trades with precision, managing risk while maximizing returns across multiple asset classes.",
      icon: <Bot className="w-6 h-6 text-primary" />,
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "API Integration", "Real-time Analytics"],
      highlights: [
        "Achieved 15-25% annual returns with controlled drawdown",
        "Multi-asset trading across crypto, forex, and equities",
        "Real-time market sentiment analysis integration",
        "Advanced risk management with dynamic position sizing"
      ]
    },
    {
      title: "Financial Automation Suite",
      description: "Comprehensive financial management systems that automate complex processes including portfolio rebalancing, risk assessment, and regulatory compliance across multiple financial instruments.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      technologies: ["Python", "SQL", "REST APIs", "Docker", "Kubernetes", "Financial APIs"],
      highlights: [
        "Reduced manual processing time by 80%",
        "Automated compliance reporting and audit trails",
        "Real-time portfolio monitoring and alerts",
        "Integration with major financial data providers"
      ]
    },
    {
      title: "Web Development Projects",
      description: "Modern, responsive web applications built with cutting-edge technologies. Focus on performance, user experience, and scalable architecture for businesses across various industries.",
      icon: <Globe className="w-6 h-6 text-primary" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      highlights: [
        "Built 20+ production websites with 99.9% uptime",
        "Optimized Core Web Vitals for superior performance",
        "Implemented advanced SEO strategies",
        "Created custom CMS solutions for content management"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications focused on fintech solutions, trading platforms, and financial management tools with intuitive user interfaces and robust security.",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
      highlights: [
        "Launched apps with 50,000+ active users",
        "Implemented biometric authentication and encryption",
        "Real-time data synchronization across devices",
        "Published on both App Store and Google Play"
      ]
    },
    {
      title: "Crypto Investment Management",
      description: "Strategic cryptocurrency portfolio management with quantitative analysis, DeFi protocol integration, and yield optimization strategies generating consistent positive returns.",
      icon: <Coins className="w-6 h-6 text-primary" />,
      technologies: ["Web3.js", "Solidity", "DeFi Protocols", "Blockchain APIs", "Smart Contracts"],
      highlights: [
        "Generated 40%+ ROI through strategic DeFi positioning",
        "Developed custom yield farming strategies",
        "Built automated liquidity management systems",
        "Expert in cross-chain arbitrage opportunities"
      ]
    },
    {
      title: "Data Analytics Platform",
      description: "Advanced business intelligence and data visualization platform that transforms raw financial data into actionable insights through machine learning and predictive analytics.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "Machine Learning"],
      highlights: [
        "Processed 10TB+ of financial data daily",
        "Built predictive models with 85%+ accuracy",
        "Created real-time dashboard solutions",
        "Implemented automated anomaly detection systems"
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
            Portfolio Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative financial technology solutions, trading systems, and development projects 
            that demonstrate expertise in modern fintech and quantitative finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-heading text-primary">Ready for Your Next Project?</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your financial operations with cutting-edge technology solutions. 
              From AI-powered trading systems to comprehensive web platforms, let's build something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-accent-foreground">
              <span className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Custom Development
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Financial Systems
              </span>
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                AI Integration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}