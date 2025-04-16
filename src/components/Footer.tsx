
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background py-12 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold font-heading relative z-10 flex items-center justify-center md:justify-start"
            >
              <span className="text-primary">Atul</span>
              <span className="text-portfolio-purple">.</span>
              <span className="text-portfolio-blue">dev</span>
            </a>
            <p className="text-muted-foreground mt-2">
            Full Stack Developer in the making, passionate about building intuitive interfaces and impactful digital experiences.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline" 
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground text-sm mt-8">
          © {new Date().getFullYear()} Atul Sahu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
