import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="font-display font-bold text-4xl mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-subtle border-b border-border">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video gradient-hero rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none animate-fade-in"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: "hsl(var(--foreground))",
                }}
              />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-gradient-subtle border-t border-border">
            <div className="container mx-auto px-4">
              <h2 className="font-display font-bold text-3xl mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                      <div className="aspect-video bg-gradient-hero"></div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
