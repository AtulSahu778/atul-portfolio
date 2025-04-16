
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Apple Clone",
    description: "A pixel-perfect front-end clone of Apple's official website, built to replicate the clean aesthetics, smooth animations, and responsive layout Apple is known for. This project showcases my skills in modern HTML, CSS, and JavaScript, with an emphasis on layout precision, interactivity, and design detail.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "Responsive"],
    image: "/apple1.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Gramseva",
    description: "Hackathon project to support rural populations with healthcare and sustainable development solutions. Focused on accessibility and user-friendly interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "Hackathon"],
    image: "/screenshot.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  
  {
    id: 3,
    title: "YouTube Clone",
    description: "A frontend YouTube replica built with HTML, CSS & JavaScript. Features responsive design and interactive elements that mimic the real platform.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description: "A clean UI clone of the Amazon website with product listings, cart functionality, and responsive layout for different screen sizes.",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal animated portfolio showcasing my frontend work, designed and deployed with love. Features smooth animations and interactive elements.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className="rounded-full"
          >
            All
          </Button>
          
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
