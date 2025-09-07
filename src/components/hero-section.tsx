"use client";

import { ChartSpline, ChartCandlestick, ChartBarIncreasing } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative min-h-screen bg-background overflow-hidden ${className}`}>
      {/* Background Chart Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-32">
          <ChartSpline className="w-full h-full text-primary" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-48 h-24 rotate-12">
          <ChartCandlestick className="w-full h-full text-primary" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-28 -rotate-6">
          <ChartBarIncreasing className="w-full h-full text-primary" />
        </div>
        <div className="absolute top-3/4 right-1/3 w-40 h-20 rotate-45">
          <ChartSpline className="w-full h-full text-primary" />
        </div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Main Content */}
            <div className="lg:col-span-8 text-center lg:text-right">
              {/* Logo - Made Bigger */}
              <div className={`mb-8 flex justify-center lg:justify-end transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-2 border-primary/20">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757169622557-jv63bciea78.jpeg"
                    alt="Roy Davidi Logo - Golden Horse"
                    className="object-cover object-center w-full h-full" />
                </div>
              </div>

              {/* Main Heading - More Professional, Thin, Elegant, Smaller */}
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight tracking-wide transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <span className="text-primary block mb-2 font-thin tracking-widest" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.2em' }}>
                  רוי
                </span>
                <span className="text-foreground text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block font-extralight tracking-[0.3em]" style={{ fontFamily: 'var(--font-sans)' }}>
                  ROY
                </span>
              </h1>

              {/* Subtitle - Smaller and more elegant */}
              <p className={`text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <span className="text-primary font-light tracking-wider">Fintech</span>
                <span className="mx-3 text-primary">•</span>
                <span className="text-primary font-light tracking-wider">Algo</span>
                <span className="mx-3 text-primary">•</span>
                <span className="text-primary font-light tracking-wider">AI Systems Integration</span>
              </p>

              {/* CTA Button */}
              <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }>
                <button
                  className="group relative px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:text-background hover:shadow-lg hover:shadow-primary/25"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}>

                  <span className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="relative z-10">
                    <span className="block sm:inline">צור קשר עכשיו</span>
                    <span className="mx-2 hidden sm:inline">/</span>
                    <span className="block sm:inline">Let's Work Together</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Portrait Photo */}
            <div className={`lg:col-span-4 flex justify-center lg:justify-start transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`
            }>
              <div className="relative">
                <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757169700678-3d5yubj9b0s.jpeg"
                    alt="Roy Davidi Portrait"
                    className="w-full h-full object-cover object-center" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                
                {/* Decorative Golden Frame */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl -z-10 blur-sm"></div>
                
                {/* Floating Chart Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
                  <ChartSpline className="w-4 h-4 text-background" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse delay-1000">
                  <ChartCandlestick className="w-4 h-4 text-background" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
          }>
            <div className="flex flex-col items-center text-muted-foreground">
              <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mb-2"></div>
              <div className="animate-bounce">
                <ChartBarIncreasing className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
    </section>);

}