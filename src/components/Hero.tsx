import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community engagement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in">
            Building Better
            <span className="block text-primary">Communities</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in max-w-2xl">
            Vawoco Organization is dedicated to creating positive change through
            innovative projects, community engagement, and sustainable development
            initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="gradient-hero hover:opacity-90 text-lg h-12 px-8"
            >
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-12 px-8 border-2 hover:bg-accent"
            >
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
