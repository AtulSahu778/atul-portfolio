
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-xl font-bold font-heading relative z-10 flex items-center"
        >
          <span className="text-primary">Atul</span>
          <span className="text-portfolio-purple">.</span>
          <span className="text-portfolio-blue">dev</span>
        </a>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium underline-animation"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a href="/Atul-Resume1.pdf" download>
          <Button size="sm">Resume</Button>
          </a>
          
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-border transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-4 w-full">Resume</Button>
          </div>
        </div>
      )}
    </header>
  );
}
