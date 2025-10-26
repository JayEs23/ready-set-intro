import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Zap, Scale, ShoppingCart } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    industry: "Financial Services",
    applications: [
      "Policy/procedure copilot (credit, risk, AML/KYC) with citations",
      "Credit-file assembler (core banking + DMS + email)",
      "Compliance Q&A mapped to internal controls",
    ],
  },
  {
    icon: Heart,
    industry: "Healthcare",
    applications: [
      "Non-diagnostic clinical/admin Q&A",
      "Discharge-summary drafts",
      "Claims/tariff rules—PHI stays in-country",
    ],
  },
  {
    icon: Zap,
    industry: "Energy & Mining",
    applications: [
      "Maintenance copilot (OEM manuals + work orders + telemetry)",
      "EHS assistant across MSDS/permits with auditable outputs",
    ],
  },
  {
    icon: Scale,
    industry: "Public Sector / Justice",
    applications: [
      "Policy copilot (acts, regulations, circulars, judgments)",
      "Bilingual support",
      "Case-prep assistant that bundles exhibits with chain-of-custody logs",
    ],
  },
  {
    icon: ShoppingCart,
    industry: "Telco / Utilities / Manufacturing / Retail",
    applications: [
      "Field-ops copilot (SOPs + tickets + schematics)",
      "Procurement/contracts Q&A",
      "Store/branch assistant (product and promo info)",
    ],
  },
];

const UseCases = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-accent opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary font-semibold text-sm">USE CASES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground max-w-4xl">
              Proven Applications Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Critical Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Purpose-built AI copilots and assistants delivering measurable impact in highly regulated sectors
            </p>
          </div>

          {/* Use case cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary/20 rounded-xl border border-primary/30 group-hover:shadow-glow transition-all duration-500">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {useCase.industry}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className="min-w-1.5 w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover/item:shadow-glow transition-all" />
                        <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                          {app}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
