import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Globe } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      value: "VAWOCO Center, Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 700 000 000",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@vawoco.com",
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.vawoco.com",
    },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", handle: "@Vawoco", url: "#" },
    { icon: Instagram, name: "Instagram", handle: "@Vawoco", url: "#" },
    { icon: Linkedin, name: "LinkedIn", handle: "Vawoco", url: "#" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Contact VAWOCO Phone Repair
              </h1>
              <p className="text-xl text-foreground/70 font-medium mb-8">
                We'd love to hear from you.
              </p>
              
              <div className="text-lg text-foreground/80 leading-relaxed space-y-4">
                <p>Have a phone that needs fixing? Want to donate your old device, partner with us, or learn mobile repair?</p>
                <p className="font-semibold">You're in the right place.</p>
                <p>At VAWOCO, every message matters — because every connection brings us closer to a sustainable future.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-8