import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Tier A — Private RAG SaaS",
    subtitle: "Co-lo, multi-tenant",
    price: "$12k–$25k/month",
    usage: "(+ usage) incl. 2–3 industry packs",
    features: [
      "Data/indices siloed",
      "99.9% uptime",
      "Multi-tenant infrastructure",
      "2-3 industry packs included",
    ],
    highlighted: false,
  },
  {
    name: "Tier B — Dedicated RAG Appliance",
    subtitle: "Co-lo or modular on-site",
    price: "$35k–$95k/month",
    usage: "(+ setup)",
    features: [
      "Single-tenant",
      "Reserved GPUs",
      "Custom connectors",
      "99.95% uptime",
      "On-site or co-location options",
    ],
    highlighted: true,
  },
  {
    name: "Tier C — Air-Gapped Sovereign",
    subtitle: "On-site containers, fully offline",
    price: "$1.8M–$5.5M per container",
    usage: "+ $25k–$60k/month opex",
    features: [
      "Fully offline for classified workloads",
      "1-6 containers capacity",
      "Custom updates via signed media",
      "Maximum security",
    ],
    highlighted: false,
  },
];

const addOns = [
  "Extra connectors",
  "Domain tuning",
  "Evaluator packs",
  "24/7 SRE",
  "On-prem IMS/HSM",
  "Red-team assessments",
];

const Pricing = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Security, Compliance & Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection and flexible pricing tiers tailored to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`${
                  tier.highlighted 
                    ? 'border-2 border-accent shadow-xl shadow-accent/20 scale-105' 
                    : 'border-border'
                } transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader className={`${tier.highlighted ? 'bg-gradient-accent' : 'bg-primary'} text-primary-foreground p-6 rounded-t-xl`}>
                  <div className="text-sm font-semibold mb-2 opacity-90">
                    {tier.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold">
                    {tier.price}
                  </div>
                  <div className="text-sm opacity-90 mt-2">
                    {tier.usage}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      tier.highlighted 
                        ? 'bg-accent hover:bg-accent-dark text-accent-foreground' 
                        : 'bg-primary hover:bg-primary-light text-primary-foreground'
                    }`}
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Add-ons</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{addon}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 p-8 bg-gradient-primary text-primary-foreground rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Security, Privacy, Compliance</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Zero-trust networking (mutual TLS, short-lived certificates)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Just-in-time access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Privileged-access management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Region-locked backups</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Configurable control mappings for each country</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Model Risk Management (documentation, change logs, explainability, red-teaming)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Customers control their encryption keys and their own isolated environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
