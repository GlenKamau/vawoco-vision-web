import { Leaf, GraduationCap, HeartHandshake, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import projectGreen from "@/assets/project-green.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectCommunity from "@/assets/project-community.jpg";
import projectInnovation from "@/assets/project-innovation.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: "green-initiative",
      icon: Leaf,
      title: "Green Initiative",
      description: "Our Green Initiative promotes environmental sustainability through community-led conservation projects. We work with local communities to plant trees, create urban gardens, and implement eco-friendly practices that protect our planet for future generations.",
      impact: "500+ trees planted",
      image: projectGreen,
      longDescription: "This program focuses on environmental education, sustainable agriculture, and climate action. We've established community gardens in 10 neighborhoods and trained over 200 volunteers in conservation techniques.",
    },
    {
      id: "education-first",
      icon: GraduationCap,
      title: "Education First",
      description: "Education First provides access to quality education and learning resources for underserved communities. We believe every child deserves the opportunity to learn, grow, and reach their full potential through comprehensive educational support.",
      impact: "1,000+ students reached",
      image: projectEducation,
      longDescription: "Our education programs include after-school tutoring, scholarship opportunities, and technology access. We've partnered with 15 schools to provide educational materials and trained mentors for students.",
    },
    {
      id: "community-care",
      icon: HeartHandshake,
      title: "Community Care",
      description: "Community Care supports local families with essential services, healthcare access, and social programs. We provide comprehensive support systems that strengthen communities and help families overcome challenges together.",
      impact: "2,500+ families helped",
      image: projectCommunity,
      longDescription: "This initiative offers food assistance, healthcare coordination, and family counseling services. We operate 3 community centers providing daily support and have distributed over 50,000 meals to families in need.",
    },
    {
      id: "innovation-hub",
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Innovation Hub empowers entrepreneurs and innovators with resources, mentorship, and funding opportunities. We foster creativity and business development to drive economic growth and create sustainable employment in our communities.",
      impact: "50+ startups launched",
      image: projectInnovation,
      longDescription: "We provide co-working spaces, business training, and micro-loans to aspiring entrepreneurs. Our incubator program has helped launch startups with a 70% success rate, creating over 200 new jobs.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.12) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.10) 0%, transparent 65%),
            linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.05) 100%)
          `,
          backgroundSize: "400px 400px, 500px 500px, cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Soft overlay for focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
      </div>



      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Discover the initiatives driving positive change in communities around
            the world. Each project is designed to create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="group shadow-card hover:shadow-hover transition-all duration-500 animate-scale-in border-2 overflow-hidden hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-3xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.longDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="inline-block px-5 py-2 bg-accent rounded-full">
                      <span className="text-sm font-semibold text-accent-foreground">
                        {project.impact}
                      </span>
                    </div>
                    <Button 
                      asChild
                      variant="ghost" 
                      className="group/btn hover:text-primary"
                    >
                      <Link to={`/project/${project.id}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
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
