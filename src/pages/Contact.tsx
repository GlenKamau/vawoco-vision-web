import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Community Street", "City, State 12345", "United States"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@vawoco.org", "support@vawoco.org"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 5PM", "Saturday: 10AM - 2PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-foreground text-center mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto animate-fade-in">
              Have questions or want to get involved? We'd love to hear from you. Reach out to us through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-smooth animate-scale-in text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 gradient-hero rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display font-bold text-3xl mb-6 text-center">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number (Optional)
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-hero hover:opacity-90"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display font-bold text-3xl mb-8 text-center">
              Find Us Here
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-muted rounded-2xl shadow-card flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder</p>
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
