import { Card, CardContent } from "@/components/ui/card";
import { Server, Building2, TrendingUp, DollarSign, Package, Gauge } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "What it is",
    description: "A sovereign (in-country) RAG + agent platform (search, chat, and simple actions) operated from modular on-site AI data centers or Tier-III co-location (co-lo) facilities that ensures data never leaves the country.",
  },
  {
    icon: Building2,
    title: "Who it serves",
    description: "Banks/insurers, telcos, hospitals, utilities, energy, mining, manufacturing/retail, ministries, regulators and courts.",
  },
  {
    icon: TrendingUp,
    title: "Why now",
    description: "Demand for Generative AI is high, but residency, privacy, auditability, latency, and cost block production use. Regence AI solves this with in-country compute, industry-tuned RAG, and governed, auditable outputs.",
  },
  {
    icon: DollarSign,
    title: "Compliance by default",
    description: "Mapped controls for Nigeria (NDPR), South Africa (POPIA), Kenya (DPA 2019), Ghana (DPA 2012); data localization, encryption, full logs, and customer-managed keys.",
  },
  {
    icon: Package,
    title: "Enterprise-grade RAG",
    description: "Answers are grounded in your documents with citations, domain templates, and safety guardrails.",
  },
  {
    icon: Gauge,
    title: "Low latency",
    description: "In-country GPUs for fast replies; air-gapped mode for sensitive agencies.",
  },
];

const deploymentOptions = [
  {
    title: "Right-sized cost",
    description: "Start small (a single 20–40 ft container with 100–400 kW IT load) and scale; or deploy in an existing Tier-III co-lo.",
  },
  {
    title: "Industry packs",
    description: "Prebuilt pipelines, evaluators, and prompts for banking, health, energy/mining, public sector, and more.",
  },
];

const SolutionOverview = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Regence AI Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive sovereign AI platform ensuring data residency, compliance, and industry focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-gradient-primary w-fit rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="border-accent/30 bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
