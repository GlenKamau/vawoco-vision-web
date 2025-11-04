import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Truck, 
  Package, 
  Wrench, 
  ShoppingCart, 
  GraduationCap, 
  Lightbulb,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import { motion } from "framer-motion";
import heroAnimation from "@/assets/hero-services-animation.jpg";
import serviceCollecting from "@/assets/service-collecting-new.jpg";
import serviceSorting from "@/assets/service-sorting.jpg";
import serviceRepairing from "@/assets/service-repairing-new.jpg";
import serviceReselling from "@/assets/service-reselling.jpg";
import serviceTraining from "@/assets/service-training-new.jpg";
import serviceSolution from "@/assets/service-solution.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Collecting",
      icon: Truck,
      image: serviceCollecting,
      description: "Gather discarded and unused mobile phones from individuals, businesses, and collection drives, preventing e-waste and giving devices a new life, and load them into the truck.",
      details: "Our truck regularly moves through estates and other drop-off points to collect e-waste, which is then transported to the workshop for proper sorting and processing.",
      color: "primary"
    },
    {
      id: 2,
      title: "Sorting",
      icon: Package,
      image: serviceSorting,
      description: "Every collected item — phones, chargers, batteries, and other electronic waste — is carefully sorted and evaluated at our workshop.",
      details: "Phones are assessed based on their condition, model, and repair potential, while other e-waste materials are categorized for repair, refurbishment, recycling, or safe disposal. This ensures that reusable components are recovered and harmful materials are handled responsibly, reducing environmental pollution and supporting a circular economy.",
      color: "secondary"
    },
    {
      id: 3,
      title: "Repairing",
      icon: Wrench,
      image: serviceRepairing,
      description: "Our skilled technicians repair faulty devices using safe and sustainable methods.",
      details: "Each phone is thoroughly cleaned, damaged components are replaced, and necessary software upgrades are performed to restore full functionality. Through this process, we extend the lifespan of devices, reduce e-waste, and ensure customers receive high-quality, affordable refurbished phones.",
      color: "primary"
    },
    {
      id: 4,
      title: "Reselling",
      icon: ShoppingCart,
      image: serviceReselling,
      description: "Refurbished phones are sold at affordable prices, generating a key revenue stream that sustains our operations.",
      details: "This model not only promotes access to technology for low-income communities but also drives environmental sustainability by keeping devices in use longer. With growing demand and proven social impact, the model is easily scalable across regions to create more green jobs and expand digital inclusion.",
      color: "secondary"
    },
    {
      id: 5,
      title: "Training",
      icon: GraduationCap,
      image: serviceTraining,
      description: "Empower youth and community members through hands-on mobile repair and apprenticeship programs.",
      details: "Beyond technical skills, trainees gain entrepreneurship and value addition skills such as refurbishing and repurposing components for resale. This approach not only creates green jobs and self-employment opportunities but also strengthens the circular economy by turning waste into valuable products — promoting long-term sustainability and community resilience. We intentionally encourage women to join our classes, promoting gender inclusion in the tech and repair sector.",
      color: "primary"
    },
    {
      id: 6,
      title: "Solution",
      icon: Lightbulb,
      image: serviceSolution,
      description: "Mobile repair can significantly reduce youth unemployment by equipping young people with practical, in-demand technical skills that lead directly to self-employment or job opportunities.",
      details: "With the growing use of smartphones, there's a constant need for repair services. Youth trained in this field can start small businesses, offer on-site repairs, or work with established shops — creating sustainable income while promoting digital inclusion and circular economy practices.",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-40 md:pt-48">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-subtle py-16">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <Sparkles className="absolute top-40 left-1/4 w-8 h-8 text-primary/30 animate-pulse" />
            <Sparkles className="absolute bottom-40 right-1/3 w-6 h-6 text-secondary/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <motion.div
                className="order-1 lg:order-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Our{" "}
                  <span className="text-primary">Services</span>
                </h1>
                
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p className="text-xl font-semibold text-foreground">
                    At VAWOCO, we create a complete circular economy for mobile devices — from collection to empowerment.
                  </p>
                  <p>
                    Our comprehensive services transform e-waste into opportunities, provide affordable technology access, and empower communities through skills training and employment.
                  </p>
                  <p>
                    Every service we offer contributes to environmental sustainability, economic growth, and social impact — creating a better future for all.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 lg:order-2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-hover group">
                  <img 
                    src={heroAnimation} 
                    alt="E-waste collection and sustainability circular economy" 
                    className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:opacity-75 transition-smooth"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-32">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'bg-muted/30 -mx-4 px-4 py-16 rounded-3xl' : ''
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`${isEven ? 'order-1' : 'order-2'}`}
                    >
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/20 to-${service.color === 'primary' ? 'secondary' : 'primary'}/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all`}></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all">
                          <img 
                            src={service.image} 
                            alt={`${service.title} service`} 
                            className="w-full h-[450px] object-cover group-hover:scale-105 transition-smooth"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                            <div className="flex items-center gap-4">
                              <div className={`p-4 bg-${service.color}/20 backdrop-blur-sm rounded-2xl`}>
                                <Icon className={`w-12 h-12 text-${service.color}`} />
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-white">{service.title}</p>
                                <p className="text-white/90">Transforming e-waste into opportunity</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`${isEven ? 'order-2' : 'order-1'}`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 bg-${service.color}/10 rounded-2xl`}>
                          <Icon className={`w-10 h-10 text-${service.color}`} />
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold">
                          <span className={`text-${service.color}`}>{service.title}</span>
                        </h2>
                      </div>
                      
                      <p className="text-lg text-foreground font-semibold mb-4">
                        {service.description}
                      </p>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {service.details}
                      </p>

                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className={`w-5 h-5 text-${service.color}`} />
                        <span>Part of our comprehensive circular economy approach</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="relative py-24 overflow-hidden bg-gradient-subtle">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            <Sparkles className="absolute top-1/3 right-1/4 w-12 h-12 text-primary/20 animate-pulse" />
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
                  When you choose VAWOCO, you power our mission.
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
