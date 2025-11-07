import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Star, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import images
import heroTraining from "@/assets/impact-hero-training.jpg";
import statTraining from "@/assets/stat-training.jpg";
import statBusinesses from "@/assets/stat-businesses.jpg";
import statPhones from "@/assets/stat-phones.jpg";
import dividerCharacter from "@/assets/divider-character.png";
import carouselHumble from "@/assets/carousel-humble.jpg";
import carouselFunding from "@/assets/carousel-funding.jpg";
import carouselGrowth from "@/assets/carousel-growth.jpg";
import carouselApprentice from "@/assets/carousel-apprentice.jpg";
import fundingSupport from "@/assets/funding-support.jpg";
import ctaCharacter from "@/assets/cta-impact-character.png";

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Interactive 3D Tilt Card Component
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

const OurImpact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Humble Beginnings",
      image: carouselHumble,
      content: [
        "Started with one mobile repair shop.",
        "Earned income from service charges."
      ]
    },
    {
      title: "Capacity Building and Funding Support",
      image: carouselFunding,
      content: [
        "Received training & funding from Adelphi under Circular Economy Catalyst (CEC).",
        "Expanded from 1 to 3 shops in one year."
      ]
    },
    {
      title: "Growth and Diversification",
      image: carouselGrowth,
      content: [
        "20 active repair shops in three counties.",
        "One additional stream: sales of refurbished phones."
      ]
    },
    {
      title: "Business Model Shift",
      image: carouselApprentice,
      content: [
        "Dropped e-waste collection.",
        "Added apprenticeship fees as a revenue stream."
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="pt-40 md:pt-48 pb-20 relative overflow-hidden">
        {/* Animated Background Elements - Same as other heroes */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
          <Sparkles className="w-16 h-16 text-primary/10" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
          <Star className="w-12 h-12 text-secondary/10" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "0.7s" }}>
          <Heart className="w-14 h-14 text-primary/8" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Our Impact
              </h1>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                In just three years, we have trained over 200 youths, empowering them with hands-on mobile repair and e-waste management skills. Today, over 20 active repair shops are operating successfully across Nairobi, Kiambu, and Nyeri counties, creating jobs, promoting digital access, and advancing environmental sustainability through repair and reuse.
              </p>
            </motion.div>

            {/* Right Side - Interactive Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TiltCard className="relative rounded-3xl overflow-hidden shadow-hover">
                <img 
                  src={heroTraining} 
                  alt="Youth training in mobile phone repair workshop" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - "Impact So Far" */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact So Far</h2>
            <p className="text-xl text-foreground">Transforming lives, one phone at a time</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Stat 1 - 200 Trained */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-hover mb-6">
                <img 
                  src={statTraining} 
                  alt="Youth training program" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <div className="text-foreground/80">
                    <div className="text-5xl font-bold mb-2">
                      <AnimatedCounter target={200} />+
                    </div>
                    <div className="text-xl font-semibold">Youth Trained</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stat 2 - 50 Businesses */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-hover mb-6">
                <img 
                  src={statBusinesses} 
                  alt="Repair shop businesses" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <div className="text-foreground/80">
                    <div className="text-5xl font-bold mb-2">
                      <AnimatedCounter target={50} />+
                    </div>
                    <div className="text-xl font-semibold">Businesses Started</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stat 3 - 10,000 Phones */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-hover mb-6">
                <img 
                  src={statPhones} 
                  alt="Refurbished phones saved" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                  <div className="text-foreground/80">
                    <div className="text-5xl font-bold mb-2">
                      <AnimatedCounter target={10000} />+
                    </div>
                    <div className="text-xl font-semibold">Phones Saved</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paragraph Divider Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex-shrink-0"
            >
              <img 
                src={dividerCharacter} 
                alt="Sustainability mascot" 
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </motion.div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed">
                From one shop to twenty, from a vision to a movement — our journey is just beginning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Carousel Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-foreground/70">A story of growth and transformation</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative bg-muted/30 rounded-3xl overflow-hidden shadow-hover">
              <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                {/* Photo Side */}
                <motion.div
                  key={`photo-${currentSlide}`}
                  initial={{ opacity: 0, x: currentSlide % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${currentSlide % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <img 
                    src={carouselSlides[currentSlide].image} 
                    alt={carouselSlides[currentSlide].title} 
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent"></div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  key={`text-${currentSlide}`}
                  initial={{ opacity: 0, x: currentSlide % 2 === 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`flex flex-col justify-center p-8 md:p-12 ${currentSlide % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                    {carouselSlides[currentSlide].title}
                  </h3>
                  <ul className="space-y-4">
                    {carouselSlides[currentSlide].content.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3 text-lg text-foreground/80"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 hover:scale-110 transition-smooth"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 hover:scale-110 transition-smooth"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Funding and Support Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-hover group">
                  <img 
                    src={fundingSupport} 
                    alt="Partnership and funding support" 
                    className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold">Funding and Support</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We are deeply grateful for the funding and entrepreneurship support received from Adelphi and the IKEA Foundation under the Circular Economy Catalyst (CEC) Program. This partnership has been instrumental in accelerating our growth and deepening our impact. Through their support, we expanded from one to multiple repair shops, strengthened our apprenticeship model, and empowered hundreds of youths and women with technical and business skills — transforming our initiative into a sustainable movement.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More Support Required */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary-glow/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Animated Character */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <img 
                    src={ctaCharacter} 
                    alt="Join our impact" 
                    className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-xl -z-10"
                  />
                </motion.div>
              </motion.div>

              {/* Right Side - Text and CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    More Support Required
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                    To scale this impact further, we call upon more partners and funders to join us in expanding our capacity-building initiatives. With additional support, we can open more shops, equip more young people and women with employable skills, and create sustainable livelihoods — because this is where real, lasting impact happens.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="text-lg px-8 hover:scale-105 transition-smooth shadow-glow"
                  >
                    <Link to="/contact">Partner With Us</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="text-lg px-8 hover:scale-105 transition-smooth"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurImpact;
