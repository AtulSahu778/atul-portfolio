
import React from "react";
import { Html, Css, Javascript, Git, Github, ReactIcon, nodejs } from "lucide-react";
import { Badge } from "./ui/badge";

type Skill = {
  name: string;
  icon: React.ComponentType;
  category: "frontend" | "tools" | "learning";
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: Html, category: "frontend" },
  { name: "CSS", icon: Css, category: "frontend" },
  { name: "JavaScript", icon: Javascript, category: "frontend" },
  
  // Tools
  { name: "Git", icon: Git, category: "tools" },
  { name: "GitHub", icon: Github, category: "tools" },
  
  // Learning
  { name: "React", icon: ReactIcon, category: "learning" },
  { name: "Node.js", icon: nodejs, category: "learning" },
];

export default function Skills() {
  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "tools", name: "Tools & Frameworks" },
    { id: "learning", name: "Currently Learning" },
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-portfolio-purple/10 rounded-full blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground">
            I've worked with a variety of technologies in frontend development. 
            Here's an overview of my technical skills:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.id} className="glass-card p-6 animate-fade-in">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <div className="h-2 w-8 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple mr-3"></div>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="p-3 rounded-full bg-white/10 mb-3">
                          <Icon className="w-8 h-8 text-portfolio-purple" />
                        </div>
                        <Badge variant="secondary">{skill.name}</Badge>
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
