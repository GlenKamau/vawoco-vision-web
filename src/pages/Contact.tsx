import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Zap, Star } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import SpinningKeywords from "@/components/SpinningKeywords";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@vawoco.org",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Community St, City, State 12345",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Image & Text */}
        <section className="py-20 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-hover group">
                  <img src={contactHero} alt="Contact us" className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-75 transition-smooth"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
                  Let's Start a{" "}
                  <SpinningKeywords keywords={["Conversation", "Partnership", "Journey", "Connection"]} className="text-5xl md:text-6xl" />
                </h1>
                <p className="text-xl text-muted-foreground">Have questions or want to get involved? We'd love to hear from you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Background Animated Elements */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: "0.5s" }}>
            <Mail className="w-16 h-16 text-primary/5" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <div className="inline-block p-2 bg-primary/10 rounded-xl mb-4 animate-float">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-3xl mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 group hover:bg-primary/5 p-4 rounded-xl transition-smooth cursor-pointer"
                        >
                          <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth group-hover:scale-110">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 group-hover:text-primary transition-smooth">{info.title}</h3>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-card animate-scale-in hover:shadow-hover transition-smooth">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg animate-float">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display font-bold text-2xl">
                    Send us a Message
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 group-hover:text-primary transition-smooth">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="transition-smooth focus:shadow-glow"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 group-hover:text-primary transition-smooth">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="transition-smooth focus:shadow-glow"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 group-hover:text-primary transition-smooth">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="transition-smooth focus:shadow-glow"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-hero hover:opacity-90 shadow-glow hover:shadow-hover transition-smooth hover:scale-105 group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
