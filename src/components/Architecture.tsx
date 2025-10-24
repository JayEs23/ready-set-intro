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
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Architecture Unveiled
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the secure, precise, and flexible system design powering data access and AI-driven insights
            </p>
          </div>

          {/* Architecture flow visualization */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30 transform -translate-y-1/2 hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {architectureSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-2 border-border hover:border-primary transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50" />
                        <div className="relative p-4 bg-gradient-primary rounded-full">
                          <step.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground text-sm">
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

          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              End-to-End Security & Compliance
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              Every layer of our architecture is designed with security and compliance at its core. From encrypted data connections to air-gapped deployment options, Regence AI ensures your sensitive information never leaves your control while delivering powerful AI capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
