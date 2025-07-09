import React, { useState } from "react";
import { Badge } from "./ui/badge";

// Use only local images for best performance
const skills = [
  { name: "HTML", logo: "/logos/html.svg", category: "frontend" },
  { name: "CSS", logo: "/logos/css.svg", category: "frontend" },
  { name: "JavaScript", logo: "/logos/javascript.svg", category: "frontend" },
  { name: "Figma", logo: "/logos/figma.svg", category: "frontend" },
  { name: "Framer", logo: "/logos/framer.svg", category: "frontend" },
  { name: "React", logo: "/logos/react.svg", category: "frontend" },
  { name: "Git", logo: "/logos/git.svg", category: "tools" },
  { name: "GitHub", logo: "/logos/github.svg", category: "tools" },
  { name: "Vercel", logo: "/logos/vercel.svg", category: "tools" },
  { name: "Netlify", logo: "/logos/netlify.svg", category: "tools" },
  { name: "Node.js", logo: "/logos/nodejs.svg", category: "learning" },
  { name: "Next.js", logo: "/logos/nextjs.svg", category: "learning" },
  // Add more local skills as needed
];

const categories = [
  { id: "frontend", name: "Frontend" },
  { id: "tools", name: "Tools" },
  { id: "learning", name: "Learning" },
];

const fallbackLogo = "/logos/html.svg"; // fallback if logo missing

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const filteredSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section className="py-24 bg-background border-t">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            My favorite technologies and tools
          </p>
          <div className="inline-flex rounded-lg bg-muted p-1 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-5 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  activeTab === cat.id
                    ? "bg-background text-primary shadow"
                    : "text-muted-foreground hover:bg-background/70"
                }`}
                onClick={() => setActiveTab(cat.id)}
                aria-pressed={activeTab === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
                    <div 
                      key={skill.name}
              className="group flex flex-col items-center justify-center bg-white/5 rounded-xl p-6 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-primary/40"
                    >
              <div className="w-14 h-14 flex items-center justify-center mb-3 rounded-full bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 group-hover:from-portfolio-blue/20 group-hover:to-portfolio-purple/20 transition-colors">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`}
                  className="w-10 h-10 object-contain drop-shadow"
                  width="40"
                  height="40"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackLogo;
                  }}
                />
              </div>
              <span className="font-semibold text-base text-primary mb-1 text-center">
                {skill.name}
              </span>
              <Badge variant="secondary" className="text-xs px-2 py-0.5 mt-1">
                {categories.find((c) => c.id === skill.category)?.name}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
