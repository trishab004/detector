import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">Fake News Detector</span>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p>© 2025 Fake News Detector. Empowering students with truth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
