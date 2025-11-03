import { motion } from "framer-motion";
import { useState } from "react";
import { Users, Leaf, TrendingUp, Briefcase, Phone, GraduationCap, Recycle, Shield, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TripleBottomLineSection = () => {
  const [activeTab, setActiveTab] = useState("social");

  const impacts = {
    social: {
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:border-blue-500/50",
      items: [
        {
          icon: Briefcase,
          text: "Creating employment opportunities for youth and women in phone repair and collection of used devices.",
        },
        {
          icon: TrendingUp,
          text: "Supporting small repair and collection enterprises started by our trained beneficiaries.",
        },
        {
          icon: GraduationCap,
          text: "Offering hands-on training in phone collection, sorting, and repair to empower vulnerable groups.",
        },
      ],
    },
    environmental: {
      icon: Leaf,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      hoverColor: "hover:border-green-500/50",
      items: [
        {
          icon: Phone,
          text: "Promoting safe collection and sorting of used and discarded phones.",
        },
        {
          icon: Recycle,
          text: "Repairing and refurbishing phones to extend their lifespan and reduce e-waste.",
        },
        {
          icon: Shield,
          text: "Raising awareness on responsible e-waste management and proper disposal of old devices.",
        },
      ],
    },
    economic: {
      icon: TrendingUp,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      hoverColor: "hover:border-amber-500/50",
      items: [
        {
          icon: DollarSign,
          text: "Enhancing the livelihoods of youth and women through sustainable income opportunities.",
        },
        {
          icon: Briefcase,
          text: "Enabling self-employment among trained participants who start their own phone repair or collection ventures.",
        },
      ],
    },
  };

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
        staggerChildren: 0.15,
      },
    },
    viewport: { once: true },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-6xl mx-auto" {...fadeIn}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
            Our Triple Bottom Line <span className="text-primary">Impact</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 animate-fade-in">
            Transforming lives, protecting the planet, and driving economic growth
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-card/50 backdrop-blur-sm">
              <TabsTrigger
                value="social"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-500 py-4 flex items-center gap-2 transition-all"
              >
                <Users className="w-5 h-5" />
                <span className="hidden sm:inline">Social Impact</span>
                <span className="sm:hidden">Social</span>
              </TabsTrigger>
              <TabsTrigger
                value="environmental"
                className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500 py-4 flex items-center gap-2 transition-all"
              >
                <Leaf className="w-5 h-5" />
                <span className="hidden sm:inline">Environmental</span>
                <span className="sm:hidden">Environ.</span>
              </TabsTrigger>
              <TabsTrigger
                value="economic"
                className="data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-500 py-4 flex items-center gap-2 transition-all"
              >
                <TrendingUp className="w-5 h-5" />
                <span className="hidden sm:inline">Economic Impact</span>
                <span className="sm:hidden">Economic</span>
              </TabsTrigger>
            </TabsList>

            {Object.entries(impacts).map(([key, impact]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  className="space-y-6"
                >
                  {impact.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      whileHover={{ x: 10 }}
                      className="group"
                    >
                      <Card className={`bg-card/50 backdrop-blur-sm border-border/50 ${impact.hoverColor} transition-all duration-300 hover:shadow-glow`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 ${impact.bgColor} rounded-xl group-hover:scale-110 transition-transform`}>
                              <item.icon className={`w-6 h-6 ${impact.color}`} />
                            </div>
                            <p className="text-muted-foreground leading-relaxed flex-1 pt-2">
                              {item.text}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

        </motion.div>
      </div>
    </section>
  );
};

export default TripleBottomLineSection;
