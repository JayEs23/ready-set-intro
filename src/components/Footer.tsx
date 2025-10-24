import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-accent" />
                <span className="font-bold text-xl">REGENCE AI</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                A Sovereign AI Solutions for African Enterprises
              </p>
              <p className="text-sm text-primary-foreground/60">
                Regulatory-Grade, In-Country Retrieval-Augmented Generation (RAG) for African Enterprises and Government
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>Energy & Mining</li>
                <li>Public Sector</li>
                <li>Manufacturing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
              <p>© 2025 Regence AI. All rights reserved.</p>
              <p>Powered by Golden Gate University</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
