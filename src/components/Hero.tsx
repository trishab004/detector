import { Button } from "@/components/ui/button";
import { Shield, Sparkles } from "lucide-react";

const Hero = () => {
  const handleLaunchAI = () => {
    window.open("https://fakenewsdetectorforstudents-hudcvbcqbn2tno8rxisceu.streamlit.app/", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-4 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">AI-Powered Fact Checking</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Stop the Spread of{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Misinformation
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Fake News Detector helps students verify online content instantly. Analyze articles, check credibility, 
          and get trustworthy summaries powered by AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            onClick={handleLaunchAI}
            variant="hero" 
            size="lg"
            className="text-lg px-10 py-6 h-auto"
          >
            <Shield className="w-5 h-5 mr-2" />
            Launch AI Detector
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
          {[
            { label: "Instant Analysis", value: "< 30 sec" },
            { label: "Accuracy Rate", value: "95%+" },
            { label: "Sources Checked", value: "1000+" },
            { label: "Students Helped", value: "10K+" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
