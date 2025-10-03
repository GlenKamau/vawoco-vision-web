import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Award, Heart, Sparkles, TrendingUp, Zap, Star } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import SpinningKeywords from "@/components/SpinningKeywords";

const About = () => {
  const team = [
    {
      name: "Dr. Emily Carter",
      role: "Founder & Executive Director",
      description: "Leading Vawoco's mission with 15+ years of experience in community development.",
    },
    {
      name: "James Peterson",
      role: "Director of Programs",
      description: "Overseeing all community initiatives and ensuring impactful project delivery.",
    },
    {
      name: "Maria Gonzales",
      role: "Director of Partnerships",
      description: "Building strategic relationships with organizations and community leaders.",
    },
    {
      name: "Robert Kim",
      role: "Director of Innovation",
      description: "Developing new approaches to maximize community impact through technology.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create sustainable positive change in communities through innovative programs, strategic partnerships, and dedicated service.",
    },
    {
      icon: Users,
      title: "Our Vision",
      description: "A world where every community has the resources, support, and opportunities needed to thrive and prosper.",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "We believe in collaborative, community-led solutions that address root causes and create lasting transformation.",
    },
    {
      icon: Award,
      title: "Our Impact",
      description: "Serving 4,000+ beneficiaries across multiple programs, with a commitment to measurable, sustainable outcomes.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Image & Text */}
        <section className="relative py-20 bg-gradient-subtle overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/4 right-1/4 animate-float" style={{ animationDelay: "0.7s" }}>
            <Sparkles className="w-16 h-16 text-primary/10" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-hover group">
                  <img src={aboutHero} alt="Vawoco team collaboration" className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-75 transition-smooth"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
                  Empowering Communities Through{" "}
                  <SpinningKeywords keywords={["Innovation", "Collaboration", "Sustainability", "Excellence"]} className="text-5xl md:text-6xl" />
                </h1>
                <p className="text-xl text-muted-foreground">We are a community-focused organization dedicated to creating meaningful, lasting change through innovative programs and collaborative partnerships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Background Animated Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block p-2 bg-primary/10 rounded-xl mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display font-bold text-4xl mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2015, Vawoco Organization began with a simple but powerful idea: that communities thrive when they have access to the right resources, support, and opportunities. What started as a small grassroots initiative has grown into a comprehensive organization serving thousands of people across multiple programs.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey has been marked by a commitment to listening to community needs, adapting our approaches based on feedback and outcomes, and always putting the people we serve at the center of everything we do. We believe in empowering communities to lead their own transformations, providing the tools and support needed for sustainable change.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, Vawoco operates four major program areas—environmental sustainability, education, community care, and innovation—each designed to address critical needs and create pathways to prosperity. Our holistic approach recognizes that these areas are interconnected and that lasting change requires addressing multiple dimensions of community wellbeing simultaneously.
                </p>
                <p className="text-muted-foreground">
                  But our work is far from done. With climate change accelerating, educational disparities persisting, and economic inequality growing, the need for dedicated, community-focused organizations has never been greater. We continue to evolve and expand our impact every day, driven by the belief that together, we can build stronger, more resilient communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-4xl text-center mb-16 animate-fade-in">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-2xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Animated Icons */}
          <div className="absolute top-10 left-10 animate-float">
            <Users className="w-12 h-12 text-primary/10" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: "0.5s" }}>
            <Award className="w-16 h-16 text-secondary/10" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4 animate-float">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="font-display font-bold text-4xl text-center mb-16 animate-fade-in">
              Meet Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-32 h-32 mx-auto mb-4 gradient-hero rounded-full group-hover:shadow-glow transition-smooth group-hover:scale-110"></div>
                  <h3 className="font-display font-semibold text-xl mb-1 group-hover:text-primary transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
