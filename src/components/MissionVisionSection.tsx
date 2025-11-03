import { motion } from "framer-motion";
import { Target, Eye, Heart, Smartphone, Users, Wrench, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionVisionSection = () => {
  const values = [
    { icon: Heart, label: "Sustainability" },
    { icon: Users, label: "Empowerment" },
    { icon: Target, label: "Integrity" },
    { icon: TrendingUp, label: "Innovation" },
    { icon: Briefcase, label: "Community" },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: "Advocacy on e-waste management",
    },
    {
      icon: Smartphone,
      title: "Collecting and sorting damaged and old mobile phones",
    },
    {
      icon: Wrench,
      title: "Repairing and refurbishing smartphones",
    },
    {
      icon: GraduationCap,
      title: "Training youth and women on phone repair",
    },
    {
      icon: Briefcase,
      title: "Empowering trained youth and women through employment or helping them establish their own enterprises",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-subtle">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mission, Vision, Values */}
        <motion.div className="max-w-6xl mx-auto mb-20" {...fadeIn}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Our <span className="text-primary">Foundation</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <motion.div
              {...fadeIn}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To enhance e-waste management through refurbishing and repairing used mobile phones as we empower vulnerable youth and women through improved livelihood.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a world where every discarded phone finds new purpose through circular innovation and green livelihoods.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h3 className="font-display text-2xl font-bold text-center mb-8">Our Core Values</h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="group text-center"
                >
                  <div className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                    <value.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm">{value.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Products & Services */}
        <motion.div className="max-w-6xl mx-auto" {...fadeIn}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Our Products & <span className="text-primary">Services</span>
          </h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.title}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
