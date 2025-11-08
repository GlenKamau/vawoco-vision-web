import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CTAimage from "@/assets/CTAimage.png";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Animated Character */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <img 
                  src={CTAimage} 
                  alt="Join us" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            </motion.div>

            {/* Right side - CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left"
            >
              <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg md:text-xl text-foreground mb-10 leading-relaxed">
                Join us in creating positive change. Whether you want to volunteer,
                partner with us, or support our initiatives, there are many ways to
                get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-lg h-14 px-10 shadow-glow hover:shadow-hover transition-smooth hover:scale-105 group"
                >
                  <Link to="/contact">
                    <span className="mr-2">Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-10 border-2 hover:bg-primary/10 transition-smooth hover:scale-105"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
