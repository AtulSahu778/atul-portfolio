
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background border-t">
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image column: left on desktop, top on mobile */}
          <div className="flex justify-center md:justify-start items-center md:items-center mb-8 md:mb-0 md:pl-20 md:ml-20">
            <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple p-1 rounded-full shadow-lg">
              <div className="bg-white dark:bg-background rounded-full p-0.5">
                <img
                  src="/sideatul.png"
                  alt="Atul Sahu side profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Text column: right on desktop, below image on mobile */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Hello, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">
                Atul Sahu
              </span>
            </h3>
            
              <p className="text-muted-foreground">
              I'm a passionate frontend developer skilled in <span className="font-semibold">HTML, CSS, JavaScript, and React</span>, with a strong foundation in <span className="font-semibold">C and C++</span>. I enjoy creating smooth, user-friendly interfaces that bring ideas to life.
            </p>

          <p className="text-muted-foreground">
            I'm currently exploring <span className="font-semibold">full-stack development</span> and leveraging <span className="font-semibold">AI tools</span> to build innovative, real-world solutions. Beyond coding, I actively participate in hackathons, explore new technologies, and contribute to open-source projects.
          </p>



            <a href="/Atul-Resume1.pdf" download>
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

