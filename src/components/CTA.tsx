import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CTA = () => {
  const handleLaunchAI = () => {
    window.open("https://fakenewsdetectorforstudents-hudcvbcqbn2tno8rxisceu.streamlit.app/", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Ready to Verify the Truth?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join thousands of students who are fighting misinformation and becoming better critical thinkers.
        </p>
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
    </section>
  );
};

export default CTA;
