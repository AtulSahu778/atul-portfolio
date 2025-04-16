
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-portfolio-blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img 
              src="/atul-sqr1.png" alt="" 
              />
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-8xl font-bold text-primary"></div>
              </div>
              
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/5e1a46f4-b505-4576-9d8d-997129b3b9e5.png" 
                  alt="Atul Sahu" 
                  className="object-cover"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>

            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Hello, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">
                Atul Sahu
              </span>
            </h3>
            
            <p className="text-muted-foreground">
              I'm a passionate frontend developer skilled in HTML, CSS, and JavaScript. I love building smooth, user-friendly interfaces that bring ideas to life.
            </p>
            
            <p className="text-muted-foreground">
              I'm currently exploring full-stack development and leveling up through hackathons and real-world projects. When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.
            </p>


            <a href="/Atul-Resume.pdf" download>
              <Button className="gap-2">
                <FileText className="h-4 w-4" /> Download Resume
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

