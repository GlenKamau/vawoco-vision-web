import { ArrowRight, Heart, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroEwaste from "@/assets/hero-ewaste.jpg";
import heroRecycling from "@/assets/hero-recycling.jpg";
import heroPhoneRepair from "@/assets/hero-phone-repair.jpg";

const slides = [
  { image: heroEwaste },
  { image: heroRecycling },
  { image: heroPhoneRepair },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <Carousel
        className="w-full h-screen absolute inset-0 z-0"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                <img
                  src={slide.image}
                  alt={`VAWOCO E-waste management ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-smooth z-20" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-smooth z-20" />
      </Carousel>

      {/* Overlaid Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Animated Icons */}
            <div className="flex items-center gap-6 mb-8 animate-fade-in">
              <div className="p-4 bg-primary/20 rounded-2xl backdrop-blur-sm shadow-glow animate-float">
                <Smartphone className="w-12 h-12 text-primary" />
              </div>
              <div className="p-4 bg-secondary/20 rounded-2xl backdrop-blur-sm shadow-glow animate-float" style={{ animationDelay: "0.5s" }}>
                <Heart className="w-12 h-12 text-secondary" />
              </div>
              <div className="p-4 bg-primary-glow/20 rounded-2xl backdrop-blur-sm shadow-glow animate-float" style={{ animationDelay: "1s" }}>
                <Users className="w-12 h-12 text-primary-glow" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in leading-tight">
              Giving discarded phones a{" "}
              <span className="text-primary animate-pulse-slow">second life</span> —<br />
              and people a{" "}
              <span className="text-secondary animate-pulse-slow">first chance</span>.
            </h1>

            {/* Subheading */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                At VAWOCO, we transform E-waste into Opportunity.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                By collecting, sorting, and refurbishing discarded phones, we create affordable devices, meaningful jobs, and a cleaner planet.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                size="lg"
                className="gradient-hero hover:opacity-90 text-lg h-14 px-8 shadow-glow transition-smooth hover:scale-105 group"
              >
                <Link to="/contact">
                  <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Donate a Phone
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-smooth hover:scale-105 group"
              >
                <Link to="/services">
                  <Smartphone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book a Repair
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-2 border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-smooth hover:scale-105 group"
              >
                <Link to="/contact">
                  <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 animate-bounce shadow-glow">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
