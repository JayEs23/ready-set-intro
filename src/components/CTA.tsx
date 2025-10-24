import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 transform rotate-12 translate-x-1/3 -translate-y-1/3" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-dark opacity-10 transform -rotate-12 -translate-x-1/3 translate-y-1/3" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Enterprise with Sovereign AI?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Join leading African organizations in securing their data while unlocking the power of AI. Get started with Regence AI today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 backdrop-blur-sm h-12 text-lg"
            />
            <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 h-12 shadow-glow whitespace-nowrap group">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Quick setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
