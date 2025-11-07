import { Badge } from "@/components/ui/badge";
import { allTags, blogPosts } from "@/data/blogData";

interface TagSelectionProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const TagSelection = ({ selectedTags, onTagToggle }: TagSelectionProps) => {
  const getTagCount = (tag: string) => {
    return blogPosts.filter((post) => post.tags.includes(tag)).length;
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Filter by Tags</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {allTags.map((tag) => {
            const count = getTagCount(tag);
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className="transition-smooth"
              >
                <Badge
                  variant={isSelected ? "default" : "outline"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-smooth hover:scale-105 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "hover:bg-primary/10 hover:border-primary"
                  }`}
                >
                  {tag} ({count})
                </Badge>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TagSelection;
