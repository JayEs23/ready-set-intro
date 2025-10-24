import { Card, CardContent } from "@/components/ui/card";
import { Database, Search, MessageSquare, Activity, Boxes } from "lucide-react";

const architectureSteps = [
  {
    number: "1",
    icon: Database,
    title: "Secure Data Ingestion",
    description: "Read-only connectors with PII/PHI redaction, customer-owned encryption keys, and real-time sync to 20+ enterprise systems.",
  },
  {
    number: "2",
    icon: Search,
    title: "Hybrid Indexing",
    description: "Dual vector + BM25 indexes with re-ranking. Handles PDFs, tables, scans, and structured data with near-real-time updates.",
  },
  {
    number: "3",
    icon: MessageSquare,
    title: "Grounded Generation",
    description: "RAG-enforced answers with mandatory citations. Model abstains when confidence is low. Policy filters prevent out-of-scope responses.",
  },
  {
    number: "4",
    icon: Activity,
    title: "Continuous Monitoring",
    description: "Real-time evaluation of groundedness, toxicity, bias. Full audit trails for compliance and human-in-the-loop dispute resolution.",
  },
  {
    number: "5",
    icon: Boxes,
    title: "Flexible Infrastructure",
    description: "Deploy in co-lo, modular containers (1-6 units, 8-64 GPUs each), or air-gapped environments. Scale as your needs grow.",
  },
];

const technicalSpecs = [
  { label: "Response Time", value: "< 100ms", highlight: true },
  { label: "Uptime SLA", value: "99.95%" },
  { label: "GPU Utilization", value: "85%+" },
  { label: "Concurrent Users", value: "10K+" },
  { label: "Data Throughput", value: "1TB/day" },
  { label: "Citation Accuracy", value: "98%+" },
];

const Architecture = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm">TECHNICAL ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on proven technologies with proprietary optimizations for African deployments.
            </p>
          </div>

          {/* Architecture flow */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-accent opacity-30 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-6">
              {architectureSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-2 border-border hover:border-accent transition-all duration-300 h-full hover:shadow-glow group">
                    <CardContent className="p-6 text-center">
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative p-5 bg-gradient-primary rounded-full">
                          <step.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-9 h-9 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground shadow-glow">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Technical specs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              Performance Benchmarks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className={`text-center ${spec.highlight ? 'border-accent bg-accent/5' : 'border-border'}`}>
                  <CardContent className="p-6">
                    <div className={`text-3xl font-bold mb-2 ${spec.highlight ? 'text-accent' : 'text-foreground'}`}>
                      {spec.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {spec.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Security & Compliance Framework
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-accent">Infrastructure Security</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Zero-trust networking with mutual TLS</li>
                    <li>• Just-in-time privileged access</li>
                    <li>• Customer-managed encryption keys (CMK)</li>
                    <li>• Region-locked data and backups</li>
                    <li>• Air-gapped deployment options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4 text-accent">Regulatory Compliance</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• NDPR, POPIA, Kenya DPA 2019, Ghana DPA 2012</li>
                    <li>• Model Risk Management (SR 11-7)</li>
                    <li>• Full audit trails and explainability</li>
                    <li>• SOC2 and ISO27001 in progress</li>
                    <li>• Sector-specific certifications (banking, health)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
