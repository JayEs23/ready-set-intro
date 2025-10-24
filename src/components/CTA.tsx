import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-success/20 rounded-full border border-success/40">
              <span className="text-success font-semibold text-sm">PRE-SEED ROUND OPEN</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Join Africa's AI Infrastructure Revolution
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're raising a pre-seed round to accelerate deployments across Nigeria, Kenya, and South Africa. Be part of the founding investor group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 hover:bg-primary-foreground/15 transition-all">
              <Mail className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                For Investors
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Get our investment deck, financial projections, and schedule a deep-dive session with our founding team.
              </p>
              <Button size="lg" className="w-full bg-accent hover:bg-accent-dark text-accent-foreground shadow-glow group">
                Request Investment Deck
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-8 hover:bg-primary-foreground/15 transition-all">
              <Calendar className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                For Enterprises
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Schedule a technical demo and pilot deployment discussion. Early customers receive preferential pricing.
              </p>
              <Button size="lg" variant="outline" className="w-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                Schedule Product Demo
              </Button>
            </Card>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email for updates" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 backdrop-blur-sm h-12 text-base max-w-md"
              />
              <Button size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold px-8 h-12 shadow-glow whitespace-nowrap">
                Stay Updated
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Quarterly investor updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Product roadmap access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Early adopter benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mini card component used in CTA
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl transition-all ${className}`}>
    {children}
  </div>
);

export default CTA;
