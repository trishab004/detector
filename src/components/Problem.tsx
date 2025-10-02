import { AlertTriangle, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: TrendingUp,
      title: "Rapid Spread",
      description: "Misinformation spreads 6x faster than accurate information on social media platforms.",
    },
    {
      icon: Users,
      title: "Student Vulnerability",
      description: "Young people are the most active on social media, making them prime targets for fake news.",
    },
    {
      icon: AlertTriangle,
      title: "Critical Impact",
      description: "False information affects academic performance, critical thinking, and real-world decisions.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Misinformation Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In today's digital age, distinguishing fact from fiction has become increasingly challenging for students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-b from-card to-background border-border">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
