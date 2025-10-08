import { motion } from "framer-motion";
import { Users, Leaf, TrendingUp, Heart, CheckCircle, Handshake, Phone, Recycle, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurImpact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  const stats = [
    { icon: Phone, value: "1,240+", label: "phones refurbished" },
    { icon: Users, value: "85+", label: "youth trained" },
    { icon: Heart, value: "57+", label: "women empowered" },
    { icon: Leaf, value: "12+", label: "tons of e-waste prevented" },
  ];

  const socialHighlights = [
    { icon: Users, text: "Over 85 youth trained in phone repair and refurbishment" },
    { icon: Heart, text: "57 women engaged in community phone collection" },
    { icon: Briefcase, text: "Dozens of jobs created across our repair and retail network" }
  ];

  const environmentalHighlights = [
    { icon: Recycle, text: "Over 1,200 phones rescued from waste streams" },
    { icon: Leaf, text: "12+ tons of e-waste prevented from landfills" },
    { icon: CheckCircle, text: "Reused components and responsible disposal of non-repairable parts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 font-medium">
              Social • Environmental • Economic
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Power of Repair</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>At VAWOCO, every repaired phone tells a story — of hope, dignity, and change.</p>
              <p>What began as a small initiative to reduce e-waste has become a movement to restore lives, protect the environment, and build an inclusive green economy.</p>
              <p>Our impact reaches far beyond technology.</p>
              <p className="text-xl font-semibold text-primary">We're repairing phones, yes — but more importantly, we're repairing the future.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeIn}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Users className="w-12 h-12 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Social Impact</h2>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Empowering People, Restoring Dignity</h3>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-12">
              <p>Discarded phones become tools of empowerment in our hands.</p>
              <p>Through our training programs, unemployed youth learn valuable repair and refurbishment skills that open pathways to stable livelihoods. Many of our trainees go on to start their own small businesses or join the growing circular tech industry.</p>
              <p>At the same time, vulnerable women and young people earn income by collecting discarded phones from homes, offices, and public spaces. This creates dignified work opportunities for those often excluded from formal employment.</p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 text-center">Highlights:</h4>
              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {socialHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-glow"
                  >
                    <highlight.icon className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground/80">{highlight.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <p className="text-xl font-semibold text-center text-primary">
              Empowerment isn't just a word — it's the purpose behind every phone we fix.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeIn}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Leaf className="w-12 h-12 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Environmental Impact</h2>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Reducing E-Waste, Restoring the Planet</h3>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-12">
              <p>Electronic waste (e-waste) is one of the fastest-growing pollution threats globally.</p>
              <p>VAWOCO tackles this challenge head-on by extending the life of phones and responsibly recycling unusable components.</p>
              <p>Every refurbished device means one less phone polluting landfills, and every part we recycle means fewer raw materials extracted from the Earth.</p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 text-center">Highlights:</h4>
              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {environmentalHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-glow"
                  >
                    <highlight.icon className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground/80">{highlight.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-primary">Our environmental philosophy is simple:</p>
              <p className="text-2xl font-bold mt-2">Reuse first. Repair always. Recycle responsibly.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Economic Impact Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeIn}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <TrendingUp className="w-12 h-12 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Economic Impact</h2>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Building a Circular Economy</h3>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
              <p>By combining social purpose with technical skill, VAWOCO creates a self-sustaining circular economy — one that benefits people and the planet.</p>
              <p>Our repairs and refurbished phone sales generate affordable access to technology for low-income customers, while reinvesting profits into training and community development.</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 mb-8">
              <p className="text-lg font-semibold mb-4">Every phone fixed and sold contributes to:</p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Income generation for collectors, technicians, and trainees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Affordable smartphone access for underserved communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Local economic activity within the green tech sector</span>
                </li>
              </ul>
            </div>

            <p className="text-xl font-semibold text-center text-primary">
              Our business model proves that doing good and doing business can go hand in hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Human Stories Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Human Stories — Lives Changed</h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
              <p>Behind every number, there's a person:</p>
              <ul className="space-y-4 ml-6">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>A young man who now runs his own repair kiosk after completing VAWOCO's training.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>A mother supporting her family by collecting discarded phones in her neighborhood.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>A student who can now afford a refurbished smartphone for schoolwork.</span>
                </li>
              </ul>
              <p className="font-medium">These are the true measures of impact — human transformation through technology with purpose.</p>
            </div>

            <div className="text-center text-2xl font-semibold text-primary italic">
              "When you help one phone live longer, you help one life move forward."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Impact Summary</h2>
            <p className="text-xl text-center mb-12 text-white/90">Since founding VAWOCO:</p>
            
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-smooth hover:scale-105"
                >
                  <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-xl font-semibold text-white">
                <CheckCircle className="w-6 h-6" />
                <span>Countless lives impacted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Impact */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Impact</h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-8">
              <p>At VAWOCO, we believe repair is an act of care — for people, for community, and for the planet.</p>
              <p>Your small action — booking a repair, donating an old phone, or supporting our training — helps multiply that impact.</p>
              <p>Together, we can build a future where technology empowers, not excludes.</p>
            </div>

            <div className="text-2xl font-bold text-primary mb-8">
              💚 Join the movement. Repair. Refurbish. Rebuild.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Handshake className="w-12 h-12 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Partnership & Collaboration</h2>
            </div>
            
            <p className="text-2xl font-semibold mb-8 text-primary">"Let's Create Impact Together"</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Donate old phones",
                "Sponsor training",
                "Provide repair tools or funding",
                "Partner with us for collection"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth"
                >
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-foreground/80 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="gradient-hero hover:opacity-90 shadow-glow hover:scale-105 transition-smooth">
              <Link to="/contact">Become a Partner</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurImpact;