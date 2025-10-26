import { AlertTriangle, Clock, Shield, FileSearch, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    icon: Database,
    title: "Data residency and secrecy",
    description: "Banking secrecy, patient health privacy, and public records laws require data to remain in the country.",
  },
  {
    icon: FileSearch,
    title: "Auditability gaps",
    description: "Many AI tools hallucinate, don't show citations, and lack clear who-did-what logs.",
  },
  {
    icon: Clock,
    title: "Latency and reliability",
    description: "Hosting models outside Africa slows responses and reduces trust.",
  },
  {
    icon: AlertTriangle,
    title: "Fragmented content",
    description: "Knowledge is scattered across SharePoint, document systems, ERPs/CRMs/EMRs, email, file servers, and data warehouses.",
  },
];

const ProblemStatement = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-accent opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-2">
              <span className="text-primary font-semibold text-sm">THE CHALLENGE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Why AI Adoption
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">Stalls in Africa</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              African organizations face critical barriers preventing AI deployment
            </p>
          </div>

          {/* Challenge cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl border border-primary/30 group-hover:shadow-glow transition-all duration-500">
                      <challenge.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground mb-3">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Result statement */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl blur-xl" />
            <div className="relative bg-secondary/50 backdrop-blur-md border border-border rounded-2xl p-8">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-bold text-primary">Impact:</span> Delayed decisions, compliance violations, redundant workflows, and productivity losses. Sovereign RAG solves this by providing AI-powered answers grounded in your documents, with full citations and compliance guardrails.
              </p>
            </div>
          </div>

          {/* Core question */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-glow">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative p-10 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Core Question</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                How can an in-country, multi-industry RAG platform deliver accurate, auditable, and fast AI answers in highly regulated African sectors while meeting local data-protection laws and maintaining financial sustainability?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
