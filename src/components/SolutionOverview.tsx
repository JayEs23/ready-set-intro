import { Card, CardContent } from "@/components/ui/card";
import { Server, Building2, Gauge, Lock, CheckCircle2, Zap } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "True Data Sovereignty",
    description: "Modular AI data centers and Tier-III co-location facilities ensure your data never crosses borders. Customer-managed encryption keys and air-gapped options for maximum security.",
  },
  {
    icon: Gauge,
    title: "Enterprise-Grade Performance",
    description: "Sub-100ms response times with in-country GPU clusters. 99.95% uptime SLA with automatic failover and load balancing across African regions.",
  },
  {
    icon: Lock,
    title: "Compliance by Design",
    description: "Pre-configured controls for NDPR, POPIA, DPA 2019, and Ghana DPA 2012. Full audit trails, citation tracking, and model risk management built-in.",
  },
  {
    icon: Building2,
    title: "Industry-Specific RAG",
    description: "Purpose-built pipelines for banking, healthcare, energy, government, and retail. Domain templates, evaluators, and safety guardrails pre-configured.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Hallucination Architecture",
    description: "Grounded answers with mandatory source citations. Model abstains when confidence is low. Human-in-the-loop for disputed outputs.",
  },
  {
    icon: Zap,
    title: "Flexible Deployment",
    description: "Scale from 20-40ft containers (100-400kW) to multi-site installations. Start small with co-lo, expand to dedicated infrastructure as you grow.",
  },
];

const deploymentTiers = [
  {
    name: "Co-location Start",
    description: "Multi-tenant infrastructure in Tier-III facilities",
    specs: ["2-3 industry packs", "99.9% uptime", "Shared GPU pool"],
  },
  {
    name: "Dedicated Instance",
    description: "Single-tenant with reserved compute",
    specs: ["Custom connectors", "99.95% uptime", "Private GPU allocation"],
  },
  {
    name: "Air-Gapped Sovereign",
    description: "On-site modular data centers, fully offline",
    specs: ["Maximum security", "1-6 containers", "Complete isolation"],
  },
];

const SolutionOverview = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm">THE REGENCE ADVANTAGE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Built for African Enterprises
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The first sovereign AI infrastructure purpose-built to meet Africa's unique regulatory, performance, and security requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-gradient-primary w-fit rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-10">
              Flexible Deployment Options
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {deploymentTiers.map((tier, index) => (
                <Card key={index} className="border-accent/30 hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <h4 className="font-bold text-2xl text-foreground mb-2">
                      {tier.name}
                    </h4>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="space-y-3">
                      {tier.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-accent p-10 rounded-2xl text-accent-foreground relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                First-Mover Advantage in a $2.8B Market
              </h3>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
                We're capturing the sovereign AI infrastructure market before international competitors understand the regulatory landscape. Our early deployments with pilot customers in Nigeria and Kenya position us to dominate as the market explodes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
