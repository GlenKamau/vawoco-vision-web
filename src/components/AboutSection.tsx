import { Users, Recycle, Smartphone, Sparkles } from "lucide-react";

const impactHighlights = [
  {
    icon: Users,
    text: "Empowering women and youth through phone collection, sorting and repair",
  },
  {
    icon: Recycle,
    text: "Reducing electronic waste and promoting circular economy",
  },
  {
    icon: Smartphone,
    text: "Providing affordable phones to low-income communities",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-subtle">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <Sparkles className="absolute top-40 left-1/4 w-8 h-8 text-primary/30 animate-pulse" />
        <Sparkles className="absolute bottom-40 right-1/3 w-6 h-6 text-secondary/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in text-center">
            Who We <span className="text-primary">Are</span>
          </h2>

          {/* Body */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              <span className="font-semibold text-foreground">VAWOCO is a Social Enterprise</span> that bridges technology, sustainability, and human potential.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              We collect discarded and damaged mobile phones from homes, offices, and organizations — often through vulnerable women and youth in the community.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              These devices are then sorted, repaired, and refurbished by our trained technicians and youth apprentices.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Refurbished phones are sold at affordable prices, extending device life and reducing e-waste — while every repairer finds new training and employment opportunities.
            </p>
          </div>

          {/* Impact Highlights */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              Impact <span className="text-primary">Highlights</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactHighlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-2xl md:text-3xl font-display font-semibold text-primary">
              Every phone we fix changes a life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
