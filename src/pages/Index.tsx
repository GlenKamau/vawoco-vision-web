import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVisionSection from "@/components/MissionVisionSection";
import TripleBottomLineSection from "@/components/TripleBottomLineSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MissionVisionSection />
        <TripleBottomLineSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
