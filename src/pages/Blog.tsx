import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/4 right-1/4 animate-float" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="w-16 h-16 text-white/20" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
            <TrendingUp className="w-12 h-12 text-white/15" />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="inline-block p-3 bg-white/20 rounded-2xl mb-4 animate-float mx-auto block w-fit">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-foreground text-center mb-6 animate-fade-in">
              Our Blog
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto animate-fade-in">
              Stories, insights, and updates from the frontlines of community transformation
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
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 gradient-hero group-hover:shadow-glow transition-smooth"></div>
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
                    <Button asChild variant="ghost" size="sm" className="group-hover:bg-primary/10 transition-smooth">
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
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
    </div>
  );
};

export default Blog;
