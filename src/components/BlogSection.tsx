import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                <div className="aspect-video bg-gradient-hero"></div>
                <div className="p-6">
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
          <Button asChild size="lg" variant="outline" className="border-2">
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
