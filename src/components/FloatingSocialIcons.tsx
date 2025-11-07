import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const FloatingSocialIcons = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hsl(221, 88%, 54%)" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hsl(203, 89%, 53%)" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hsl(329, 70%, 58%)" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hsl(201, 100%, 35%)" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hsl(0, 100%, 50%)" },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-card hover:shadow-hover transition-smooth hover:scale-110 group"
          aria-label={social.label}
          tabIndex={0}
          style={{ 
            color: social.color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = social.color;
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '';
            e.currentTarget.style.color = social.color;
          }}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
