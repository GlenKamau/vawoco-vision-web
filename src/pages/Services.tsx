import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Wrench, 
  Smartphone, 
  GraduationCap, 
  Recycle, 
  Battery, 
  Droplets, 
  Zap,
  Shield,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-subtle pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <Sparkles className="absolute top-40 left-1/4 w-8 h-8 text-primary/30 animate-pulse" />
            <Sparkles className="absolute bottom-40 right-1/3 w-6 h-6 text-secondary/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                Repairing phones.{" "}
                <span className="text-primary">Restoring lives.</span>
              </h1>
              
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <p className="text-foreground font-semibold">
                  At VAWOCO, our work goes far beyond fixing devices — we repair communities.
                </p>
                <p>
                  Every service we offer is designed to make technology more sustainable, more affordable, and more empowering.
                </p>
                <p className="font-semibold text-foreground">Our model creates a full circle of impact:</p>
                <ul className="space-y-2 max-w-2xl mx-auto">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>We collect discarded phones.</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>We repair and refurbish them.</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>We sell and service them affordably.</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>We train youth and employ women, ensuring the benefits reach everyone.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 1: Repair Services */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Wrench className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    Professional & Affordable<br />
                    <span className="text-primary">Mobile Phone Repairs</span>
                  </h2>
                </div>
                
                <p className="text-xl font-semibold text-foreground mb-4">
                  Your phone deserves a second chance — and so do you.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  We provide high-quality, low-cost phone repairs for individuals, small businesses, and organizations.
                </p>
                
                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-foreground">Our repair services include:</p>
                  <ul className="space-y-2">
                    {[
                      { icon: Battery, text: "Battery replacement & power issues" },
                      { icon: Smartphone, text: "Screen and display replacement" },
                      { icon: Droplets, text: "Water-damage repair" },
                      { icon: Zap, text: "Charging port and button fixes" },
                      { icon: Shield, text: "Software troubleshooting" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <item.icon className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Each repair you book helps fund youth training and provides employment for women in our collection network.
                </p>
                
                <Button asChild size="lg" className="gradient-hero hover:opacity-90 shadow-glow transition-smooth hover:scale-105">
                  <Link to="/contact">
                    Book your repair today
                  </Link>
                </Button>
              </div>
              
              <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-card hover:shadow-hover transition-all">
                    <Wrench className="w-32 h-32 text-primary mx-auto mb-6 group-hover:rotate-12 transition-transform" />
                    <div className="text-center space-y-4">
                      <p className="text-2xl font-bold">Expert Technicians</p>
                      <p className="text-muted-foreground">Fast, reliable, and affordable repairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Refurbished Phone Sales */}
        <section className="relative py-24 overflow-hidden bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-card hover:shadow-hover transition-all">
                    <Smartphone className="w-32 h-32 text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-center space-y-4">
                      <p className="text-2xl font-bold">Quality Assured</p>
                      <p className="text-muted-foreground">Up to 70% less than new devices</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-2xl">
                    <Smartphone className="w-10 h-10 text-secondary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    Restored Phones,<br />
                    <span className="text-secondary">Renewed Value</span>
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Every year, millions of phones are discarded — most still have years of life left. At VAWOCO, we bring these devices back to life.
                </p>
                
                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-foreground">What we offer:</p>
                  <ul className="space-y-2">
                    {[
                      "Carefully refurbished smartphones in excellent condition",
                      "Affordable prices — up to 70% less than new",
                      "Quality assurance and warranty (1–3 months)",
                      "Environmentally responsible refurbishment process"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <DollarSign className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Buying from VAWOCO means more than saving money — it means supporting jobs, sustainability, and inclusion.
                </p>
                
                <Button asChild size="lg" className="gradient-accent hover:opacity-90 shadow-glow transition-smooth hover:scale-105">
                  <Link to="/contact">
                    Shop refurbished phones
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Training & Youth Empowerment */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    Equipping Youth with<br />
                    <span className="text-primary">Future-Ready Skills</span>
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  We believe in technology as a tool for empowerment.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Our training programs teach young people — especially those unemployed or out of school — how to repair and maintain mobile phones professionally.
                </p>
                
                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-foreground">Program features:</p>
                  <ul className="space-y-2">
                    {[
                      "6–12-week hands-on repair training",
                      "Technical, business, and customer service skills",
                      "Mentorship from experienced technicians",
                      "Internship or job placement opportunities"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Through these programs, youth gain both technical ability and confidence — unlocking pathways to self-reliance.
                </p>
                
                <Button asChild size="lg" className="gradient-hero hover:opacity-90 shadow-glow transition-smooth hover:scale-105">
                  <Link to="/contact">
                    Join our training program
                  </Link>
                </Button>
              </div>
              
              <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-card hover:shadow-hover transition-all">
                    <Users className="w-32 h-32 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-center space-y-4">
                      <p className="text-2xl font-bold">Empowering Youth</p>
                      <p className="text-muted-foreground">Building skills for sustainable careers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Phone Collection & Recycling */}
        <section className="relative py-24 overflow-hidden bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-card hover:shadow-hover transition-all">
                    <Recycle className="w-32 h-32 text-secondary mx-auto mb-6 group-hover:rotate-180 transition-transform duration-700" />
                    <div className="text-center space-y-4">
                      <p className="text-2xl font-bold">Circular Economy</p>
                      <p className="text-muted-foreground">From waste to opportunity</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-2xl">
                    <Recycle className="w-10 h-10 text-secondary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    Turning E-Waste into<br />
                    <span className="text-secondary">Empowerment</span>
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Our collection network is powered by women and youth from vulnerable communities.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  They help us collect discarded and broken phones from households, offices, and businesses.
                </p>
                
                <p className="text-muted-foreground mb-8">
                  Once collected, phones are sorted by condition — those that can be repaired are refurbished, while others are responsibly recycled.
                </p>
                
                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-foreground">Why it matters:</p>
                  <ul className="space-y-2">
                    {[
                      "Prevents toxic e-waste from polluting the environment",
                      "Creates dignified income for women and youth",
                      "Promotes reuse and recycling in local communities"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild size="lg" className="gradient-accent hover:opacity-90 shadow-glow transition-smooth hover:scale-105">
                  <Link to="/contact">
                    Donate your old phone
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <TrendingUp className="absolute top-1/3 right-1/4 w-12 h-12 text-primary/20 animate-pulse" />
            <Sparkles className="absolute bottom-1/3 left-1/4 w-8 h-8 text-secondary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
                <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                  Every phone that passes through VAWOCO carries a story of renewal — of resources saved, people trained, and futures rebuilt.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  We're not just fixing devices.
                </p>
                <p className="text-2xl font-display font-bold">
                  We're <span className="text-primary">repairing the future</span> — one phone, one person, one opportunity at a time.
                </p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 shadow-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-xl md:text-2xl font-semibold mb-6">
                  When you repair or buy from VAWOCO, you power our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="gradient-hero hover:opacity-90 shadow-glow transition-smooth hover:scale-105">
                    <Link to="/contact">
                      Get Started Today
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-smooth hover:scale-105">
                    <Link to="/about">
                      Learn More About Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Services;
