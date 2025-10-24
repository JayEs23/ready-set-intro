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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why This Problem Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Challenges Hindering AI Adoption and Defining the Core Question
            </p>
          </div>

          <div className="mb-16">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              African organizations need AI to answer policy questions, follow procedures, prepare cases, and support maintenance and operations. Adoption stalls because:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <challenge.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-semibold">Result:</span> slow decisions, compliance risk, duplicated work, and lost productivity. A sovereign RAG approach is AI that answers from your own documents with citations and guardrails that directly fixes these issues.
            </p>
          </div>

          <div className="mt-12 p-8 bg-gradient-primary rounded-xl text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">The Core Question</h3>
            <p className="text-lg leading-relaxed">
              How can an in-country, multi-industry RAG platform use safe connectors and robust evaluations to deliver accurate, auditable, fast answers in highly regulated African sectors, while meeting local data-protection laws and staying financially sustainable?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
