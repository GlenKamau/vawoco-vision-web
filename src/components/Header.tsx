import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import vawocoLogo from "@/assets/vawoco-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-smooth py-4 md:py-6 lg:py-8 ${
    isScrolled
      ? "bg-background/65 backdrop-blur-md shadow-card"
      : "bg-background/30 backdrop-blur-sm"
  }`}
>

      <div className="container mx-auto px-4 pt-6 pb-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
<img 
  src={vawocoLogo} 
  alt="Vawoco Logo" 
  className="h-24 md:h-40 lg:h-48 flex items-center w-auto transition-smooth group-hover:scale-110 group-hover:drop-shadow-glow"
/>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth hover:text-primary relative group ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-smooth scale-x-0 group-hover:scale-x-100"></span>
              </NavLink>
            ))}
            <Button asChild size="sm" className="gradient-hero hover:opacity-90 shadow-glow hover:shadow-hover transition-smooth hover:scale-105">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-card">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-sm font-medium transition-smooth hover:text-primary hover:bg-primary/5 rounded-lg px-3 ${
                    isActive ? "text-primary bg-primary/10" : "text-foreground/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              size="sm"
              className="w-full mt-4 gradient-hero hover:opacity-90 shadow-glow"
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Involved
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
