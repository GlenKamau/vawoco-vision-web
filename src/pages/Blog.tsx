import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-foreground text-center mb-6 animate-fade-in">
              Our Blog
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto animate-fade-in">
              Stories, insights, and updates from our work creating positive change in communities around the world.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" size="sm">All Posts</Button>
              {categories.map((category) => (
                <Button key={category} variant="ghost" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth h-full flex flex-col">
                    <div className="aspect-video bg-gradient-hero"></div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-smooth">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
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
