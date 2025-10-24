import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='1'%3E%3Cpath d='M0 0h1v1H0V0zm40 40h1v1h-1v-1zM20 20h1v1h-1v-1zm20 0h1v1h-1v-1zM0 20h1v1H0v-1zm40 0h1v1h-1v-1zM0 40h1v1H0v-1zm20 0h1v1h-1v-1zm40-20h1v1h-1v-1zm0 20h1v1h-1v-1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Funding banner */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-success/10 backdrop-blur-sm rounded-full border border-success/30">
            <TrendingUp className="w-5 h-5 text-success" />
            <span className="text-primary-foreground font-semibold">Pre-Seed Funding Round Open</span>
            <span className="px-3 py-1 bg-success text-success-foreground text-xs font-bold rounded-full">NOW</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-tight animate-fade-in">
            Sovereign AI Infrastructure for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Africa</span>
          </h1>

          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-6 max-w-4xl leading-relaxed font-light">
            Deploy enterprise-grade AI that never leaves your borders. Built for African banks, governments, and regulated industries.
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-3xl leading-relaxed">
            Regence AI delivers RAG-powered solutions with complete data sovereignty, regulatory compliance, and industry-specific models—all running in-country with sub-100ms latency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-10 py-7 text-lg shadow-glow group">
              Request Investment Deck
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-10 py-7 text-lg backdrop-blur-sm">
              Schedule Product Demo
            </Button>
          </div>

          {/* Market indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="text-3xl font-bold text-accent mb-1">$2.8B</div>
              <div className="text-sm text-primary-foreground/70">African AI Market by 2030</div>
            </div>
            <div className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="text-3xl font-bold text-accent mb-1">500M+</div>
              <div className="text-sm text-primary-foreground/70">Target Users</div>
            </div>
            <div className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/70">Data Sovereignty</div>
            </div>
            <div className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10">
              <div className="text-3xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-primary-foreground/70">Core Industries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
