import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-lg border border-primary/30">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-xl text-foreground">REGENCE AI</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Sovereign AI infrastructure for African enterprises. Regulatory-grade, in-country RAG platform delivering secure, auditable AI solutions.
              </p>
            </div>
            
            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Financial Services</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Healthcare</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Energy & Mining</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Public Sector</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Manufacturing</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 Regence AI. All rights reserved.</p>
              <p className="flex items-center gap-2">
                Built for Africa's AI future
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
