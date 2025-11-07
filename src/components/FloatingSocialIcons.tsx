import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const FloatingSocialIcons = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-card hover:shadow-hover hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-110 group"
          aria-label={social.label}
          tabIndex={0}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
