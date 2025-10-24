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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Industry Applications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Unlock Industry Value with{" "}
              <span className="text-primary">Priority Use Cases</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore targeted, high-impact copilot and assistant solutions across key sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground pt-2">
                      {useCase.industry}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="min-w-[6px] w-[6px] h-[6px] rounded-full bg-accent mt-2" />
                        <span className="text-muted-foreground leading-relaxed">
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
