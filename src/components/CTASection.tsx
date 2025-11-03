import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-8">
            <div className="p-4 bg-primary/10 rounded-2xl backdrop-blur-sm animate-float shadow-glow border border-primary/20">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <div
              className="p-4 bg-secondary/10 rounded-2xl backdrop-blur-sm animate-float shadow-glow border border-secondary/20"
              style={{ animationDelay: "0.5s" }}
            >
              <Star className="w-10 h-10 text-secondary" />
            </div>
            <div
              className="p-4 bg-primary/10 rounded-2xl backdrop-blur-sm animate-float shadow-glow border border-primary/20"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in leading-relaxed max-w-2xl mx-auto">
            Join us in creating positive change. Whether you want to volunteer,
            partner with us, or support our initiatives, there are many ways to
            get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="text-lg h-14 px-10 shadow-glow hover:shadow-hover transition-smooth hover:scale-105 group"
            >
              <Link to="/contact">
                <span className="mr-2">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-14 px-10 border-2 hover:bg-primary/10 transition-smooth hover:scale-105"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
