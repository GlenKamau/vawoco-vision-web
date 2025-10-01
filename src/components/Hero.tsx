import { ArrowRight, Recycle, Smartphone, Trash2 } from "lucide-react";
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
  {
    image: heroEwaste,
    icon: Trash2,
    title: "E-Waste Management",
    subtitle: "Sustainable Solutions",
    description: "Leading the way in responsible electronic waste disposal and environmental protection for a cleaner future.",
  },
  {
    image: heroRecycling,
    icon: Recycle,
    title: "Recycling Programs",
    subtitle: "Circular Economy",
    description: "Transforming waste into resources through innovative recycling initiatives and community engagement.",
  },
  {
    image: heroPhoneRepair,
    icon: Smartphone,
    title: "Mobile Phone Repair",
    subtitle: "Expert Service",
    description: "Professional repair services extending device lifespans and reducing electronic waste impact.",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-glow"></div>
      </div>

      {/* Carousel */}
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
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                      <div className="mb-6 flex items-center gap-4 animate-fade-in">
                        <div className="p-4 bg-primary/20 rounded-2xl backdrop-blur-sm shadow-glow animate-float">
                          <slide.icon className="w-12 h-12 text-primary" />
                        </div>
                        <span className="text-lg font-semibold text-primary">{slide.subtitle}</span>
                      </div>
                      
                      <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in">
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} className={i === slide.title.split(' ').length - 1 ? "block text-primary" : ""}>
                            {word}{i < slide.title.split(' ').length - 1 ? ' ' : ''}
                          </span>
                        ))}
                      </h1>
                      
                      <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in max-w-2xl">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                        <Button
                          asChild
                          size="lg"
                          className="gradient-hero hover:opacity-90 text-lg h-12 px-8 shadow-glow transition-smooth hover:scale-105"
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
                          className="text-lg h-12 px-8 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-smooth hover:scale-105"
                        >
                          <Link to="/contact">Get Involved</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-smooth" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-smooth" />
      </Carousel>

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
