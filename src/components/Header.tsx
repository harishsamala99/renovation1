import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-display text-2xl font-bold transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          PrecisionCraft
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:5551234567"
            className={`flex items-center gap-2 font-body text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground/80 hover:text-primary"
                : "text-primary-foreground/80 hover:text-primary-foreground"
            }`}
          >
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <Button variant={isScrolled ? "default" : "hero"} size="default">
            Free Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 lg:hidden ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full bg-background shadow-elevated transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="container-section flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-body text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 px-4 font-body text-sm font-medium text-muted-foreground"
            >
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
            <Button variant="default" size="lg" className="mx-4">
              Get Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
