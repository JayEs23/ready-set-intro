import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-md rounded-full border border-border shadow-subtle animate-scale-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-foreground font-semibold text-sm tracking-wider">REGENCE AI</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-[1.1] animate-fade-in">
            Sovereign AI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-primary">Infrastructure</span>
            <br />
            for Africa
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Regulatory-grade, in-country Retrieval-Augmented Generation (RAG) platform delivering secure, auditable AI solutions for enterprises and government.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" variant="accent" className="px-8 h-12 text-base group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 text-base">
              Schedule Demo
            </Button>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Shield, text: "Data Sovereignty" },
              { icon: Zap, text: "Sub-100ms Latency" },
              { icon: Globe, text: "Full Compliance" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary/30 backdrop-blur-sm rounded-lg border border-border">
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;
