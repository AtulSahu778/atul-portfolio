import React from "react";
import { Code, FileJson, Terminal, GitBranch, Github, MonitorPlay, Server, Figma, PencilRuler, Layout, Framer, Workflow, CloudCog, Bot, Globe } from "lucide-react";
import { Badge } from "./ui/badge";

type Skill = {
  name: string;
  logo: string;
  category: "frontend" | "tools" | "learning";
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", logo: "/logos/html.svg", category: "frontend" },
  { name: "CSS", logo: "/logos/css.svg", category: "frontend" },
  { name: "JavaScript", logo: "/logos/javascript.svg", category: "frontend" },
  { name: "Figma", logo: "/logos/figma.svg", category: "frontend" },
  { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/480px-Canva_Logo.svg.png?20250414221227", category: "frontend" },
  { name: "Wix", logo: "https://www.svgrepo.com/show/333491/wix.svg", category: "frontend" },
  { name: "Framer", logo: "/logos/framer.svg", category: "frontend" },
  
  // Tools
  { name: "Git", logo: "/logos/git.svg", category: "tools" },
  { name: "GitHub", logo: "/logos/github.svg", category: "tools" },
  { name: "Vercel", logo: "/logos/vercel.svg", category: "tools" },
  { name: "Netlify", logo: "/logos/netlify.svg", category: "tools" },
  { name: "Cursor", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png", category: "tools" },
  
  // Learning
  { name: "React", logo: "/logos/react.svg", category: "learning" },
  { name: "Node.js", logo: "/logos/nodejs.svg", category: "learning" },
  { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", category: "learning" },
  { name: "Express.js", logo: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png", category: "learning" },
  { name: "Next.js", logo: "/logos/nextjs.svg", category: "learning" },
];

export default function Skills() {
  const categories = [
    { id: "frontend", name: "Frontend Development" },
    { id: "tools", name: "Development Tools" },
    { id: "learning", name: "Currently Learning" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            A collection of technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="glass-card p-8 backdrop-blur-lg animate-fade-in hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple"></div>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="p-4 rounded-full bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 mb-4 backdrop-blur-sm">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <Badge variant="secondary" className="font-medium text-base">
                        {skill.name}
                      </Badge>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
