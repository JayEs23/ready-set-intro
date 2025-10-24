import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Zap, Scale, ShoppingCart } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    industry: "Financial Services",
    market: "$850M TAM",
    applications: [
      "Automated credit risk assessment with real-time document analysis",
      "AML/KYC compliance copilot that cites regulatory sources",
      "Customer service agents with complete transaction history context",
      "Internal policy Q&A mapped to Basel III and local banking regulations",
    ],
  },
  {
    icon: Heart,
    industry: "Healthcare",
    market: "$420M TAM",
    applications: [
      "Clinical decision support with PHI remaining in-country",
      "Automated discharge summaries and patient handoff notes",
      "Insurance claims validation against approved tariff schedules",
      "Medical research assistant across institutional knowledge bases",
    ],
  },
  {
    icon: Zap,
    industry: "Energy & Mining",
    market: "$380M TAM",
    applications: [
      "Predictive maintenance using OEM manuals + telemetry data",
      "EHS compliance assistant across MSDS, permits, and regulations",
      "Exploration data analysis with geological report synthesis",
      "Operations optimization with auditable decision tracking",
    ],
  },
  {
    icon: Scale,
    industry: "Government & Justice",
    market: "$520M TAM",
    applications: [
      "Legal research assistant with citation to acts and case law",
      "Multilingual policy drafting and translation tools",
      "Case preparation with chain-of-custody audit trails",
      "Citizen service chatbots with verified information sources",
    ],
  },
  {
    icon: ShoppingCart,
    industry: "Retail & Telco",
    market: "$630M TAM",
    applications: [
      "Customer service automation with product catalog integration",
      "Supply chain optimization with procurement history analysis",
      "Field operations support using SOPs and service tickets",
      "Sales enablement with competitive intelligence and pricing data",
    ],
  },
];

const UseCases = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-sm">$2.8B TOTAL ADDRESSABLE MARKET</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Revenue Streams Across Five Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Each industry represents a billion-dollar opportunity with distinct use cases and regulatory requirements.
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-glow group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                    <div className="p-5 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform">
                      <useCase.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-foreground">
                          {useCase.industry}
                        </h3>
                        <span className="px-4 py-1.5 bg-success/10 text-success text-sm font-bold rounded-full border border-success/30">
                          {useCase.market}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {useCase.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="min-w-[6px] w-[6px] h-[6px] rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-sm">
                          {app}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-10 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">$45M</div>
                <div className="text-sm opacity-80">Year 1 Revenue Target</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">65%</div>
                <div className="text-sm opacity-80">Gross Margin</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">18</div>
                <div className="text-sm opacity-80">Enterprise Pilots in Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
