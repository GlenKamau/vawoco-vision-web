import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TagSelection from "@/components/TagSelection";
import { Calendar, User, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { blogPosts, allTags } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

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

  // Get latest posts for sidebar (exclude current post)
  const latestPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 5);

  // Filter sidebar posts based on selected filters
  const filteredSidebarPosts = latestPosts.filter((p) => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const tagMatch = selectedTags.length === 0 || selectedTags.some((tag) => p.tags.includes(tag));
    return categoryMatch && tagMatch;
  });

  // Get all unique categories
  const allCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

  // Get more blog posts for the bottom section (different from sidebar)
  const moreBlogPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 6);

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
            
            <div className="max-w-6xl mx-auto">
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
            <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
              <img
                src={post.image}  
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            </div>
          </div>
        </section>

        {/* Content with Sidebar */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Left Side */}
                <div className="lg:col-span-2">
                  <div
                    className="prose prose-lg max-w-none animate-fade-in"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                      color: "hsl(var(--foreground))",
                    }}
                  />
                </div>

                {/* Sidebar - Right Side */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-8">
                    {/* Latest Posts */}
                    <div className="bg-card rounded-2xl p-6 shadow-card">
                      <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Latest Posts
                      </h3>
                      <div className="space-y-4">
                        {filteredSidebarPosts.map((latestPost) => (
                          <Link
                            key={latestPost.id}
                            to={`/blog/${latestPost.id}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={latestPost.image}
                                alt={latestPost.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-smooth line-clamp-2">
                                  {latestPost.title}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {latestPost.date}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Category Filters */}
                    <div className="bg-card rounded-2xl p-6 shadow-card">
                      <h3 className="font-display font-bold text-lg mb-4">Categories</h3>
                      <div className="space-y-3">
                        {allCategories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryToggle(category)}
                            />
                            <Label
                              htmlFor={`category-${category}`}
                              className="text-sm cursor-pointer"
                            >
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tag Filters */}
                    <div className="bg-card rounded-2xl p-6 shadow-card">
                      <h3 className="font-display font-bold text-lg mb-4">Tags</h3>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {allTags.map((tag) => (
                          <div key={tag} className="flex items-center space-x-2">
                            <Checkbox
                              id={`tag-${tag}`}
                              checked={selectedTags.includes(tag)}
                              onCheckedChange={() => handleTagToggle(tag)}
                            />
                            <Label
                              htmlFor={`tag-${tag}`}
                              className="text-sm cursor-pointer"
                            >
                              {tag}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tag Selection */}
        <TagSelection selectedTags={[]} onTagToggle={() => {}} />

        {/* More Blog Posts */}
        {moreBlogPosts.length > 0 && (
          <section className="py-20 bg-gradient-subtle border-t border-border">
            <div className="container mx-auto px-4">
              <h2 className="font-display font-bold text-3xl mb-12 text-center">
                More Blog Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {moreBlogPosts.map((blogPost, index) => (
                  <article
                    key={blogPost.id}
                    className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth animate-scale-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-48 gradient-hero group-hover:shadow-glow transition-smooth relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-smooth"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-smooth">
                          {blogPost.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {blogPost.date}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                        {blogPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {blogPost.excerpt}
                      </p>
                      <Button asChild variant="ghost" size="sm" className="group-hover:bg-primary/10 transition-smooth">
                        <Link to={`/blog/${blogPost.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </article>
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
