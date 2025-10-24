import { Shield, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent rounded-lg">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <span className="font-bold text-2xl">REGENCE AI</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Building Africa's sovereign AI infrastructure. Enabling enterprises to deploy cutting-edge AI while maintaining complete data sovereignty and regulatory compliance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Solutions</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="hover:text-accent transition-colors cursor-pointer">Financial Services</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Healthcare</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Energy & Mining</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Government</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Retail & Telco</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li className="hover:text-accent transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Investors</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-primary-foreground/60">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">Security</a>
                <a href="#" className="hover:text-accent transition-colors">Compliance</a>
              </div>
              <p className="text-sm text-primary-foreground/60">
                © 2025 Regence AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
