import { Card, CardContent } from "@/components/ui/card";
import { Database, Search, MessageSquare, Activity, Boxes } from "lucide-react";

const architectureSteps = [
  {
    number: "1",
    icon: Database,
    title: "Data Connections",
    description: "Secure, read-only connectors to common systems (SharePoint/OneDrive, document/records systems, S3/MinIO, file shares, ERP/CRM/EMR, email, warehouses). Sensitive data is redacted (PII/PHI). Encryption and customer-owned keys are standard.",
  },
  {
    number: "2",
    icon: Search,
    title: "Search and Retrieve",
    description: "We build two indexes—one for meaning (vectors) and one for exact words (BM25)—to find the right passages. We handle PDFs, tables, and scans. Results are re-ranked for best relevance and kept fresh with near-real-time syncs.",
  },
  {
    number: "3",
    icon: MessageSquare,
    title: "Answering",
    description: "The model only answers from retrieved sources, applies policy filters, then cites what it used. If sources are weak, it abstains.",
  },
  {
    number: "4",
    icon: Activity,
    title: "Monitoring",
    description: "We measure groundedness, factuality, toxicity, and bias; support human-in-the-loop and disputes; and keep a full audit trail of prompts, sources, model, and parameters.",
  },
  {
    number: "5",
    icon: Boxes,
    title: "Deployment Options",
    description: "Modular Datacenter (on-site containers): 1–6 containers, 8–64 GPUs/container, integrated cooling and power. Co-lo Suite: secure cages in a Tier-III facility, with private fiber to customers. Air-gapped: no internet; updates are delivered via signed media.",
  },
];

const Architecture = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-2">
              <span className="text-primary font-semibold text-sm">ARCHITECTURE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-primary">Enterprise-Grade</span>
              <br />
              Technical Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five-stage pipeline delivering secure, accurate, and auditable AI responses
            </p>
          </div>

          {/* Architecture flow */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-6">
              {architectureSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow h-full group">
                    <CardContent className="p-6 text-center space-y-4">
                      {/* Icon with number badge */}
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative p-4 bg-primary/20 border border-primary/30 rounded-2xl group-hover:shadow-glow transition-all">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm shadow-glow">
                          {step.number}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg text-foreground">
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

          {/* Security section */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-glow">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative p-10 md:p-12 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                End-to-End Security & Compliance
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                Every layer engineered for security and regulatory compliance. From encrypted data connections to air-gapped deployment options, your sensitive information never leaves your control while delivering powerful AI capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
