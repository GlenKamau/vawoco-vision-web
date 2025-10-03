import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Leaf, GraduationCap, HeartHandshake, Lightbulb, ArrowLeft, CheckCircle, Users, Target, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectGreen from "@/assets/project-green.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectCommunity from "@/assets/project-community.jpg";
import projectInnovation from "@/assets/project-innovation.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  const projects: Record<string, any> = {
    "green-initiative": {
      icon: Leaf,
      title: "Green Initiative",
      description: "Our Green Initiative promotes environmental sustainability through community-led conservation projects.",
      impact: "500+ trees planted",
      image: projectGreen,
      fullDescription: "Our Green Initiative is a comprehensive environmental program that addresses climate change through community action. We partner with local organizations, schools, and volunteers to create sustainable environmental solutions that benefit both people and the planet.",
      goals: [
        "Plant 1,000 trees by end of 2025",
        "Establish 20 community gardens",
        "Train 500 environmental advocates",
        "Reduce community carbon footprint by 30%"
      ],
      achievements: [
        "500+ trees planted across 5 neighborhoods",
        "10 community gardens established",
        "200+ volunteers trained in conservation",
        "5 schools adopted eco-friendly practices"
      ]
    },
    "education-first": {
      icon: GraduationCap,
      title: "Education First",
      description: "Education First provides access to quality education and learning resources for underserved communities.",
      impact: "1,000+ students reached",
      image: projectEducation,
      fullDescription: "Education First believes every child deserves access to quality education. We provide comprehensive educational support including tutoring, mentorship, technology access, and scholarship opportunities to ensure no student is left behind.",
      goals: [
        "Reach 2,000 students by 2026",
        "Provide 100 full scholarships annually",
        "Partner with 30 schools",
        "Launch digital learning platform"
      ],
      achievements: [
        "1,000+ students receiving tutoring support",
        "15 school partnerships established",
        "50 scholarships awarded this year",
        "Technology labs in 5 community centers"
      ]
    },
    "community-care": {
      icon: HeartHandshake,
      title: "Community Care",
      description: "Community Care supports local families with essential services, healthcare access, and social programs.",
      impact: "2,500+ families helped",
      image: projectCommunity,
      fullDescription: "Community Care provides a comprehensive support network for families facing challenges. From food assistance to healthcare coordination, we ensure families have access to the resources they need to thrive and build stronger, healthier communities.",
      goals: [
        "Serve 5,000 families annually",
        "Open 2 new community centers",
        "Provide 100,000 meals per year",
        "Offer mental health support programs"
      ],
      achievements: [
        "2,500+ families receiving ongoing support",
        "3 community centers operational",
        "50,000+ meals distributed",
        "Free health screenings for 1,000+ people"
      ]
    },
    "innovation-hub": {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Innovation Hub empowers entrepreneurs and innovators with resources, mentorship, and funding opportunities.",
      impact: "50+ startups launched",
      image: projectInnovation,
      fullDescription: "Innovation Hub is our entrepreneurship accelerator program that transforms ideas into successful businesses. We provide co-working spaces, mentorship, business training, and access to funding to help entrepreneurs build sustainable companies that create jobs and economic opportunity.",
      goals: [
        "Launch 100 startups by 2026",
        "Create 500 new jobs",
        "Provide $1M in micro-loans",
        "Expand to 3 new locations"
      ],
      achievements: [
        "50+ successful startup launches",
        "200+ jobs created",
        "$500K in micro-loans distributed",
        "70% startup success rate"
      ]
    }
  };

  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-display font-bold text-4xl mb-4">Project Not Found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden text-gray-900">
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 animate-float"
            style={{ animationDelay: "0.7s" }}
          >
            <Sparkles className="w-16 h-16 text-gray-400" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/3 animate-float"
            style={{ animationDelay: "1.2s" }}
          >
            <TrendingUp className="w-12 h-12 text-gray-500" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center text-gray-700 hover:text-black mb-8 transition-smooth group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-smooth" />
              Back to Home
            </Link>

            <div className="inline-block p-3 bg-gray-200 rounded-2xl mb-4 animate-float">
              <Icon className="w-8 h-8 text-gray-800" />
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mb-6 animate-fade-in">
              {project.title}
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl animate-fade-in">
              {project.description}
            </p>
          </div>
        </section>


        {/* Project Image */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-hover animate-scale-in group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="inline-block px-6 py-3 bg-white/95 rounded-full shadow-lg">
                  <span className="text-lg font-bold text-primary">{project.impact}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Description */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block p-2 bg-primary/10 rounded-xl mb-4 animate-float">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-bold text-4xl mb-6 animate-fade-in">About This Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Goals & Achievements */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-10 left-10 animate-float">
            <Target className="w-16 h-16 text-primary/10" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: "0.5s" }}>
            <CheckCircle className="w-20 h-20 text-secondary/10" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Goals */}
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl animate-float">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-3xl">Our Goals</h2>
                </div>
                <div className="space-y-4">
                  {project.goals.map((goal: string, index: number) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card hover:shadow-hover transition-smooth group"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-smooth" />
                      <p className="text-muted-foreground group-hover:text-foreground transition-smooth">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-secondary/10 rounded-xl animate-float" style={{ animationDelay: "0.5s" }}>
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="font-display font-bold text-3xl">Key Achievements</h2>
                </div>
                <div className="space-y-4">
                  {project.achievements.map((achievement: string, index: number) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card hover:shadow-hover transition-smooth group"
                    >
                      <TrendingUp className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-smooth" />
                      <p className="text-muted-foreground group-hover:text-foreground transition-smooth">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: "0.3s" }}>
            <Users className="w-16 h-16 text-white/15" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-6 animate-fade-in">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
              Be part of this transformative project and help us create lasting impact in our communities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-hover transition-smooth hover:scale-105 group">
                Get Involved
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
