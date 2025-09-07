"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Send, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/10 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary/15 -rotate-12"></div>
      </div>

      <div className="container max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Motivational Content & Personal Photo */}
          <div className="space-y-8">
            {/* Personal Photo */}
            <div className="relative">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757169762138-pz4omf47jxh.jpeg"
                  alt="Roy's Portrait"
                  className="w-full h-full object-cover" />

              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-yellow-600 rounded-full flex items-center justify-center border-4 border-background">
                <Send className="w-6 h-6 text-black" />
              </div>
            </div>

            {/* Motivational Text */}
            <div className="space-y-6 text-center lg:text-right">
              <div className="space-y-4">
                <p className="text-xl text-primary font-medium">
                  מחפש שותפים, מעסיקים ויזמים
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Seeking partners, employers, and entrepreneurs to take businesses to the next level
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-muted/30 to-accent/30 rounded-xl border border-primary/10">
                <p className="text-2xl font-bold text-primary mb-2">
                  Let's build the future of fintech & AI together
                </p>
                <p className="text-muted-foreground">
                  Ready to transform your vision into reality
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open("https://www.linkedin.com/in/roy-davidi-798493376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "_blank")}>
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open("https://telegram.org", "_blank")}>

                <Send className="w-5 h-5 mr-2" />
                Telegram
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open("mailto:contact@example.com", "_blank")}>

                <Send className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="bg-gradient-to-br from-muted/40 to-accent/20 border-primary/10 shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-muted-foreground">
                  Ready to discuss your next project? Let's connect and explore opportunities together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-200"
                      placeholder="Your full name"
                      required />

                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-200"
                      placeholder="+1 (555) 000-0000" />

                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required />

                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                    required />

                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-black font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isSubmitting}>

                  {isSubmitting ?
                  <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </> :

                  <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  }
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>Response within 24 hours guaranteed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

}