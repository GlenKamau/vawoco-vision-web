import { Star } from "lucide-react";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Hear from the communities and partners we work with about the impact
            of our initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
