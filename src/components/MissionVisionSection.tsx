import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react"; 
import { Target, Eye, Heart, Users, TrendingUp, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import serviceAdvocacy from "@/assets/service-advocacy.jpg";
import serviceCollecting from "@/assets/service-collecting.jpg";
import serviceRepairing from "@/assets/service-repairing.jpg";
import serviceTraining from "@/assets/service-training-workshop.jpg";
import serviceEmployment from "@/assets/service-employment.jpg";

// Type Definition for clarity
interface Service {
    title: string;
    description: string;
    image: string;
}

const MissionVisionSection = () => {
    // --- Existing Data & Variants ---
    const values = [
        { icon: Heart, label: "Sustainability" },
        { icon: Users, label: "Empowerment" },
        { icon: Target, label: "Integrity" },
        { icon: TrendingUp, label: "Innovation" },
        { icon: Briefcase, label: "Community" },
    ];

    const services: Service[] = [
        {
            image: serviceAdvocacy,
            title: "Advocacy on e-waste management",
            description: "We actively champion policies and awareness campaigns to promote responsible electronic waste handling, aiming for a greener, cleaner environment and a circular economy for mobile devices."
        },
        {
            image: serviceCollecting,
            title: "Collecting and sorting damaged and old mobile phones",
            description: "Our structured collection points and sorting process ensure that damaged and end-of-life mobile phones are gathered safely, diverting hazardous materials from landfills and preparing them for renewal."
        },
        {
            image: serviceRepairing,
            title: "Repairing and refurbishing smartphones",
            description: "Our skilled technicians meticulously repair and refurbish used smartphones, giving them a second life. This reduces the demand for new manufacturing and makes technology accessible."
        },
        {
            image: serviceTraining,
            title: "Training youth and women on phone repair",
            description: "We run comprehensive, hands-on workshops and training programs, equipping vulnerable youth and women with the technical skills required for professional smartphone repair and refurbishment."
        },
        {
            image: serviceEmployment,
            title: "Empowering trained youth and women through employment or helping them establish their own enterprises",
            description: "Beyond training, we commit to creating sustainable livelihoods by either hiring graduates directly or providing the mentorship and resources necessary for them to launch successful phone repair enterprises."
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

    // --- Slideshow Logic ---
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    // SLIDESHOW SPEED CHANGE: 7000ms -> 5000ms
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); 
        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        enter: { x: 500, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -500, opacity: 0 }
    };

    const currentService = services[currentIndex];
    // --- End Slideshow Logic ---


    return (
        <section className="relative py-20 overflow-hidden bg-gradient-subtle">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Mission, Vision, Values (Unchanged) */}
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
                                    <p className="text-foreground leading-relaxed">
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
                                    <p className="text-foreground leading-relaxed">
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
                {/* --- END Mission, Vision, Values --- */}


                {/* --- START: REDESIGNED Products & Services (Wider Slideshow with Outward Arrows) --- */}
                <motion.div className="max-w-7xl mx-auto mt-20 relative" {...fadeIn}> 
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
                        Our Products & <span className="text-primary">Services</span>
                    </h2>

                    {/* Border size increased to border-4 */}
                    <div className="relative w-full overflow-hidden rounded-2xl shadow-elegant bg-card/50 backdrop-blur-md border-4 border-border/50">
                        
                        {/* --- Edge Animation Elements --- */}
                        <div className="absolute top-1/2 left-0 w-4 h-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-full h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        </div>
                        <div className="absolute top-1/2 right-0 w-4 h-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="w-full h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        </div>
                        {/* --- End Edge Animation Elements --- */}

                        {/* Slide Content Area (Curved Design Applied) */}
                        <div className="p-8 relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)' }}>

                            <AnimatePresence initial={false} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full min-h-[500px]" 
                                >
                                    {/* Content */}
                                    <div className="w-full md:w-1/2 order-2 md:order-1">
                                        <span className="text-primary font-bold text-xl mb-2 block">
                                            {String(currentIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                                        </span>
                                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                            {currentService.title}
                                        </h3>
                                        <p className="text-foreground leading-relaxed">
                                            {currentService.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <motion.div
                                        className="w-full md:w-1/2 order-1 md:order-2"
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                    >
                                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                                            <img
                                                src={currentService.image}
                                                alt={currentService.title}
                                                className="w-full h-80 object-cover" 
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                        </div>
                        
                        {/* Slide Dots (Indicators) */}
                        <div className="flex justify-center p-4">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                                    }`}
                                    aria-label={`Go to service ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Arrows (Moved Outside) */}
                    <button 
                        onClick={prevSlide}
                        // Moved further out and made visible on md:
                        className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all z-30 shadow-xl hidden md:block" 
                        aria-label="Previous service"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        // Moved further out and made visible on md:
                        className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 p-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all z-30 shadow-xl hidden md:block"
                        aria-label="Next service"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    
                </motion.div>
                {/* --- END REDESIGNED Products & Services --- */}
            </div>
        </section>
    );
};

export default MissionVisionSection;