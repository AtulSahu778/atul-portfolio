
import React from "react";

type Skill = {
  name: string;
  level: number; // 1-10
  category: "frontend" | "tools" | "learning";
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 9, category: "frontend" },
  { name: "CSS", level: 8, category: "frontend" },
  { name: "JavaScript", level: 7, category: "frontend" },
  { name: "Responsive Design", level: 8, category: "frontend" },
  { name: "UI/UX Fundamentals", level: 7, category: "frontend" },
  
  // Tools
  { name: "Tailwind CSS", level: 8, category: "tools" },
  { name: "Git & GitHub", level: 7, category: "tools" },
  { name: "Vercel", level: 8, category: "tools" },
  
  // Learning
  { name: "React", level: 2, category: "learning" },
  { name: "Next.js", level: 2, category: "learning" },
  { name: "Node.js", level: 2, category: "learning" },
  { name: "Express.js", level: 2, category: "learning" },
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
              
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level * 10}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-full"
                          style={{ width: `${skill.level * 10}%` }}
                        ></div>
                      </div>
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
