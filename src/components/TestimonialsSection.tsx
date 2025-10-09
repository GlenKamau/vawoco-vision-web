import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      content:
        "Vawoco has transformed our community through their innovative programs. Their dedication to sustainable development is truly inspiring.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Project Beneficiary",
      content:
        "The support and resources provided by Vawoco have been life-changing. They truly care about making a lasting impact.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Partner Organization",
      content:
        "Working with Vawoco has been an incredible experience. Their professionalism and passion are unmatched.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full gradient-radial dark:opacity-50"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4 animate-float">
            <Quote className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Hear from the communities and partners we work with about the impact
            of our initiatives.
          </p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth animate-scale-in group hover:scale-105 cursor-pointer h-full"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary group-hover:animate-glow transition-smooth"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-smooth">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground transition-smooth" />
          <CarouselNext className="hover:bg-primary hover:text-primary-foreground transition-smooth" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
