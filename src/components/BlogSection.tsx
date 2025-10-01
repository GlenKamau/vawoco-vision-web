import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4 animate-float">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Stay updated with our latest stories, news, and insights from the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                <div className="aspect-video bg-gradient-hero relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:scale-110 transition-smooth"></div>
                  <div className="absolute top-4 right-4 p-2 bg-primary rounded-lg shadow-glow animate-float">
                    <BookOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1 group-hover:text-primary transition-smooth">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-primary transition-smooth">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-smooth">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth hover:scale-105 shadow-card hover:shadow-glow">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
