import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

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
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-foreground text-center mb-6 animate-fade-in">
              About Vawoco
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto animate-fade-in">
              We are a community-focused organization dedicated to creating meaningful, lasting change through innovative programs and collaborative partnerships.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-display font-bold text-4xl mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2015, Vawoco Organization began with a simple but powerful idea: that communities thrive when they have access to the right resources, support, and opportunities. What started as a small grassroots initiative has grown into a comprehensive organization serving thousands of people across multiple programs.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our journey has been marked by a commitment to listening to community needs, adapting our approaches based on feedback and outcomes, and always putting the people we serve at the center of everything we do.
                </p>
                <p className="text-muted-foreground">
                  Today, Vawoco operates four major program areas—environmental sustainability, education, community care, and innovation—each designed to address critical needs and create pathways to prosperity. But our work is far from done, and we continue to evolve and expand our impact every day.
                </p>
              </div>
              <div className="animate-scale-in">
                <img
                  src={aboutImage}
                  alt="Vawoco team collaboration"
                  className="rounded-2xl shadow-hover w-full"
                />
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-4xl text-center mb-16 animate-fade-in">
              Meet Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-32 h-32 mx-auto mb-4 gradient-hero rounded-full"></div>
                  <h3 className="font-display font-semibold text-xl mb-1">
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
