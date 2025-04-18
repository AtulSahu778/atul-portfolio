import React from "react";
import { Code, FileJson, Terminal, GitBranch, Github, MonitorPlay, Server, Figma, PencilRuler, Layout, Framer, Workflow, CloudCog, Bot } from "lucide-react";
import { Badge } from "./ui/badge";

type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "frontend" | "tools" | "learning";
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: Code, category: "frontend" },
  { name: "CSS", icon: FileJson, category: "frontend" },
  { name: "JavaScript", icon: Terminal, category: "frontend" },
  { name: "Figma", icon: Figma, category: "frontend" },
  { name: "Canva", icon: PencilRuler, category: "frontend" },
  { name: "Wix", icon: Layout, category: "frontend" },
  { name: "Framer", icon: Framer, category: "frontend" },
  
  // Tools
  { name: "Git", icon: GitBranch, category: "tools" },
  { name: "GitHub", icon: Github, category: "tools" },
  { name: "Vercel", icon: Workflow, category: "tools" },
  { name: "Netlify", icon: CloudCog, category: "tools" },
  { name: "Cursor AI", icon: Bot, category: "tools" },
  { name: "Windsurf AI", icon: Bot, category: "tools" },
  
  // Learning
  { name: "React", icon: MonitorPlay, category: "learning" },
  { name: "Node.js", icon: Server, category: "learning" },
  { name: "MongoDB", icon: Server, category: "learning" },
  { name: "Express.js", icon: Server, category: "learning" },
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
                  .map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="p-4 rounded-full bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 mb-4 backdrop-blur-sm">
                          <IconComponent className="w-8 h-8 text-portfolio-purple" />
                        </div>
                        <Badge variant="secondary" className="font-medium text-base">
                          {skill.name}
                        </Badge>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
