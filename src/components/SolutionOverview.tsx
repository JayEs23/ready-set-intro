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
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-2">
              <span className="text-primary font-semibold text-sm">THE SOLUTION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Enterprise-Grade
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">Sovereign AI Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete infrastructure for secure, compliant, and high-performance AI deployment
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-1 group">
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 bg-primary/20 rounded-xl border border-primary/30 w-fit group-hover:shadow-glow transition-all duration-500">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Deployment options */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl blur-xl group-hover:opacity-10 transition-opacity" />
                <Card className="relative bg-secondary/50 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-500">
                  <CardContent className="p-8 space-y-3">
                    <h3 className="font-bold text-2xl text-foreground">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
