import { AlertTriangle, Clock, Shield, FileSearch, Database, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    icon: Database,
    title: "Data Sovereignty Crisis",
    stat: "89%",
    description: "of African enterprises cite data residency as the #1 blocker to AI adoption. Banking, healthcare, and government data cannot legally leave national borders.",
  },
  {
    icon: Clock,
    title: "Latency & Reliability Gap",
    stat: "300ms+",
    description: "average response time when hosting models abroad. Local compute delivers 3-5x faster responses and meets uptime requirements for mission-critical operations.",
  },
  {
    icon: FileSearch,
    title: "Compliance & Auditability",
    stat: "73%",
    description: "of regulated enterprises reject AI tools that hallucinate, lack citations, or don't maintain audit trails—creating massive liability exposure.",
  },
  {
    icon: AlertTriangle,
    title: "Fragmented Knowledge",
    stat: "60%",
    description: "of enterprise knowledge trapped across disconnected systems—SharePoint, ERPs, document stores, and legacy databases—making AI integration nearly impossible.",
  },
];

const ProblemStatement = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-destructive/10 rounded-full border border-destructive/30">
              <span className="text-destructive font-semibold text-sm">THE $15B PROBLEM</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              AI Adoption Stalled Across Africa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              While global enterprises race ahead with AI, African organizations face unique barriers that existing solutions fail to address.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                      <challenge.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-bold text-xl text-foreground">
                          {challenge.title}
                        </h3>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded">
                          {challenge.stat}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-primary p-10 rounded-2xl text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-bold">The Business Impact</h3>
              </div>
              <p className="text-xl leading-relaxed mb-6 opacity-90">
                These barriers cost African enterprises <span className="text-accent font-bold">$15B annually</span> in lost productivity, compliance penalties, and missed opportunities—while competitors in other regions surge ahead with AI-powered operations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-primary-foreground/20">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">45%</div>
                  <div className="text-sm opacity-80">Slower decision-making</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">3x</div>
                  <div className="text-sm opacity-80">Higher compliance costs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">$2M+</div>
                  <div className="text-sm opacity-80">Average annual loss per enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
