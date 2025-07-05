import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Projects from "./Projects";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-portfolio-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-portfolio-purple/10 rounded-full blur-3xl" />
      
      <div className="section-container flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">
                Atul Sahu
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-muted-foreground">
              Founder | Developer | Techy
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <a  href="#contact">
              <Button size="lg" className="gap-2">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Button>
              </a>
              <a href="#projects">
                <Button size="lg" variant="outline" className="gap-2">
                  View Projects
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/AtulSahu778" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/atulsahu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/Ofc_atul" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sahuatul2005@gmail.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-2xl blur opacity-75 animate-pulse-slow"></div>
            <div className="relative glass-card p-6 h-[450px] animate-float flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-muted overflow-hidden">
                  <img src="/sideatul.png" alt="" />
                  <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-primary">
                    AS
                  </div>
                </div>
                <div className="bg-portfolio-code text-white font-mono p-4 rounded-md text-left text-sm">
                  <div><span className="text-portfolio-purple">const</span> <span className="text-portfolio-blue">developer</span> = {"{"}</div>
                  <div className="pl-4">name: <span className="text-green-400">'Atul Sahu'</span>,</div>
                  <div className="pl-4">skills: [<span className="text-green-400">'HTML'</span>, <span className="text-green-400">'CSS'</span>, <span className="text-green-400">'JavaScript'</span>, <span className="text-green-400">'ReactJS'</span>],</div>
                  <div className="pl-4">loves: <span className="text-green-400">'Building amazing products'</span></div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
