import { motion } from "framer-motion";
import { Heart, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import catalystLogo from "@/assets/catalyst-logo.png";
import adelphiLogo from "@/assets/adelphi-logo.png";
import ikeaLogo from "@/assets/ikea-logo.png";

const SponsorsSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-6xl mx-auto" {...fadeIn}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full"
            >
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Our Partners</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Funding and <span className="text-primary">Support</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  We gratefully acknowledge the support from <span className="font-semibold text-primary">Adelphi</span> and the <span className="font-semibold text-primary">IKEA Foundation</span> under the Circular Economy Catalyst (CEC) Program. This partnership has accelerated our growth from one to about 20 repair shops, strengthened our apprenticeship model, and empowered hundreds of youths and women with technical and business skills — transforming our initiative into a sustainable, community-driven enterprise.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">20 Repair Shops</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Hundreds Empowered</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-xs p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={catalystLogo}
                  alt="Circular Economy Catalyst"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-xs p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={adelphiLogo}
                  alt="Adelphi Research"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-xs p-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={ikeaLogo}
                  alt="IKEA Foundation"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                More Support <span className="text-primary">Required</span>
              </h3>
              <p className="text-lg leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                To scale our impact, we invite partners and funders to join us in expanding our tech-based capacity-building programs. With your support, we can establish more repair hubs, empower more youth and women with practical, future-ready skills, turning today's waste into tomorrow's opportunity - fostering sustainable livelihoods and advancing a circular economy.
              </p>

              <div className="flex flex-col items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 max-w-2xl"
                >
                  <p className="text-foreground/80 italic">
                    Our project is supported by <span className="font-semibold text-primary">IKEA Foundation</span>, implemented by <span className="font-semibold text-primary">Adelphi</span> under Circular Economy Catalyst program
                  </p>
                </motion.div>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                >
                  <Heart className="w-5 h-5" />
                  Become a Partner
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
