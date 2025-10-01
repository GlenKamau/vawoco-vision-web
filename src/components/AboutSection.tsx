import { Target, Heart, Users, Award, Sparkles } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Focused on creating lasting impact in communities worldwide",
    },
    {
      icon: Heart,
      title: "Compassionate",
      description: "Leading with empathy and understanding in everything we do",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Building partnerships to amplify our collective impact",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards in all our initiatives",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4 animate-float">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Vawoco Organization is a dynamic force for positive change, bringing
            together passionate individuals and innovative solutions to address
            the most pressing challenges facing our communities today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-smooth animate-scale-in text-center group hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-smooth group-hover:animate-float">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
