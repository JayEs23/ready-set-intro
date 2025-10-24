import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Co-location SaaS",
    subtitle: "Multi-tenant infrastructure",
    price: "$12k–$25k",
    period: "/month + usage",
    features: [
      "2-3 industry packs included",
      "Data isolation guaranteed",
      "99.9% uptime SLA",
      "Standard connectors",
      "Community support",
    ],
    cta: "Start Trial",
    highlighted: false,
  },
  {
    name: "Dedicated Instance",
    subtitle: "Single-tenant with reserved GPUs",
    price: "$35k–$95k",
    period: "/month + setup",
    features: [
      "Reserved GPU allocation",
      "Custom connectors included",
      "99.95% uptime SLA",
      "Priority support",
      "Dedicated account manager",
      "Advanced monitoring",
    ],
    cta: "Schedule Demo",
    highlighted: true,
  },
  {
    name: "Air-Gapped Sovereign",
    subtitle: "On-site modular data centers",
    price: "$1.8M–$5.5M",
    period: "per container + $25k–60k/mo opex",
    features: [
      "Complete offline operation",
      "1-6 container scalability",
      "Maximum security clearance",
      "White-glove deployment",
      "24/7 dedicated support",
      "Custom SLA terms",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const revenueModel = [
  { metric: "Year 1 ARR", value: "$2.5M–$4M", description: "2-3 lighthouse customers + 12-18 pilots" },
  { metric: "Year 2 ARR", value: "$9M–$14M", description: "Expansion to 12-18 enterprise accounts" },
  { metric: "Year 3 ARR", value: "$20M–$28M", description: "Multi-country presence, 25-35 accounts" },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-success/10 rounded-full border border-success/30">
              <span className="text-success font-semibold text-sm">REVENUE MODEL</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Pricing Built for Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Flexible tiers that grow with your needs, from pilot to enterprise-wide deployment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`${
                  tier.highlighted 
                    ? 'border-2 border-accent shadow-glow scale-105 relative' 
                    : 'border-border'
                } transition-all duration-300 hover:shadow-card`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className={`${tier.highlighted ? 'bg-gradient-accent' : 'bg-gradient-primary'} text-primary-foreground p-8 rounded-t-xl`}>
                  <div className="text-sm font-semibold mb-2 opacity-90">
                    {tier.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold">
                    {tier.price}
                  </div>
                  <div className="text-sm opacity-90 mt-2">
                    {tier.period}
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      tier.highlighted 
                        ? 'bg-accent hover:bg-accent-dark text-accent-foreground shadow-glow' 
                        : 'bg-primary hover:bg-primary-light text-primary-foreground'
                    }`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Revenue projections */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-10">
              3-Year Revenue Projections
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {revenueModel.map((item, index) => (
                <Card key={index} className="border-accent/30 bg-accent/5 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-sm text-muted-foreground mb-2 font-semibold">
                      {item.metric}
                    </div>
                    <div className="text-4xl font-bold text-accent mb-3">
                      {item.value}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Unit economics */}
          <div className="bg-gradient-primary p-10 rounded-2xl text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Strong Unit Economics
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">65%</div>
                <div className="text-sm opacity-80">Gross Margin</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">3.2x</div>
                <div className="text-sm opacity-80">LTV/CAC Ratio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">8-12mo</div>
                <div className="text-sm opacity-80">Payback Period</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">120%</div>
                <div className="text-sm opacity-80">Net Revenue Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
