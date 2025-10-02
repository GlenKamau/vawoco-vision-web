import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Sparkles className="w-24 h-24 text-white/20 animate-glow" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm animate-float shadow-glow">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm animate-float shadow-glow" style={{ animationDelay: "0.5s" }}>
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-primary-foreground animate-fade-in">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 animate-fade-in">
            Join us in creating positive change. Whether you want to volunteer,
            partner with us, or support our initiatives, there are many ways to
            get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg h-12 px-8 shadow-glow hover:shadow-hover transition-smooth hover:scale-110"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-12 px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth hover:scale-110"
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
