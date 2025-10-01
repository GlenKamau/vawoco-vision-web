import { Leaf, GraduationCap, HeartHandshake, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Leaf,
      title: "Green Initiative",
      description: "Promoting environmental sustainability through community-led conservation projects and eco-friendly practices.",
      impact: "500+ trees planted",
    },
    {
      icon: GraduationCap,
      title: "Education First",
      description: "Providing access to quality education and learning resources for underserved communities.",
      impact: "1,000+ students reached",
    },
    {
      icon: HeartHandshake,
      title: "Community Care",
      description: "Supporting local families with essential services, healthcare access, and social programs.",
      impact: "2,500+ families helped",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Empowering entrepreneurs and innovators with resources, mentorship, and funding opportunities.",
      impact: "50+ startups launched",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Discover the initiatives driving positive change in communities around
            the world. Each project is designed to create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-smooth animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-block px-4 py-2 bg-accent rounded-full">
                    <span className="text-sm font-semibold text-accent-foreground">
                      {project.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
