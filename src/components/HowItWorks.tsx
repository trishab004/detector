import { FileText, Brain, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Article",
      description: "Paste the URL or text of any news article or social media post you want to verify.",
      step: "01",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI analyzes content, checks multiple sources, and evaluates credibility indicators.",
      step: "02",
    },
    {
      icon: CheckCircle2,
      title: "Get Results",
      description: "Receive an instant credibility score with a clear, trustworthy summary and source verification.",
      step: "03",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to verify any news article or online content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 text-center space-y-4">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute text-8xl font-bold text-primary/5">{step.step}</div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
