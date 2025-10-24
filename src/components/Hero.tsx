import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent opacity-20 transform rotate-12 translate-x-1/3" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }} />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-dark opacity-15 transform -rotate-12 -translate-x-1/4" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }} />
      
      {/* Circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h6V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo placeholder */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground font-semibold tracking-wide">REGENCE AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            A Sovereign AI Solutions for{" "}
            <span className="text-accent">African Enterprises</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Regulatory-Grade, In-Country Retrieval-Augmented Generation (RAG) for African Enterprises and Government
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-6 text-lg shadow-glow group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm">
              Schedule Demo
            </Button>
          </div>

          {/* Key features badges */}
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Data Sovereignty</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Low Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Compliance Ready</span>
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
