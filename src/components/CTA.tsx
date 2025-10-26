import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Ready to Deploy
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">Sovereign AI?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join leading African enterprises and government organizations in securing their data while unlocking AI-powered transformation.
            </p>
          </div>

          {/* Email form */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-2xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-secondary/50 backdrop-blur-md border-border text-foreground placeholder:text-muted-foreground h-12 text-base focus:border-primary transition-all"
            />
            <Button size="lg" variant="accent" className="h-12 px-8 whitespace-nowrap group">
              Request Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              "No credit card required",
              "Free consultation",
              "Quick setup"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-lg border border-border">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-glow" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
