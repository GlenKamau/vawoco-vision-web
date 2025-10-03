import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogHero from "@/assets/blog-hero.jpg";
import SpinningKeywords from "@/components/SpinningKeywords";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Image & Text */}
        <section className="py-20 bg-gradient-subtle relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/4 left-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="w-16 h-16 text-primary/10" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
            <Star className="w-12 h-12 text-secondary/10" />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1 animate-scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-hover group">
                  <img
                    src={blogHero}
                    alt="Creative blog workspace"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-75 transition-smooth"></div>
                  <div className="absolute top-6 left-6 animate-float">
                    <div className="p-3 bg-white/90 rounded-xl shadow-glow">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Text */}
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="inline-block p-2 bg-primary/10 rounded-xl mb-4 animate-float">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
                  Stories of{" "}
                  <SpinningKeywords 
                    keywords={["Impact", "Change", "Hope", "Progress"]}
                    className="text-5xl md:text-6xl"
                  />
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Discover insights, updates, and inspiring stories from the frontlines of community transformation.
                </p>
                <p className="text-lg text-muted-foreground">
                  From environmental sustainability to education and innovation, explore how we're making a difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subtitle Section */}
        <section className="py-12 bg-background/50 backdrop-blur-sm border-y border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Join us on our journey as we share real stories, proven solutions, and transformative initiatives 
              that are reshaping communities and building a sustainable future for all.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Background Animated Elements */}
          <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-10 animate-float" style={{ animationDelay: "0.7s" }}>
            <BookOpen className="w-20 h-20 text-primary/5" />
          </div>
          <div className="absolute bottom-1/3 right-10 animate-float" style={{ animationDelay: "1.3s" }}>
            <Zap className="w-16 h-16 text-secondary/5" />
          </div>
          <div className="absolute top-1/4 right-1/4 animate-float" style={{ animationDelay: "0.9s" }}>
            <TrendingUp className="w-14 h-14 text-primary/8" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 gradient-hero group-hover:shadow-glow transition-smooth relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-smooth"></div>
                    <div className="absolute bottom-4 right-4 animate-float">
                      <Sparkles className="w-6 h-6 text-white/50" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-smooth">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="ghost" size="sm" className="group-hover:bg-primary/10 transition-smooth group/btn">
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Blog;
