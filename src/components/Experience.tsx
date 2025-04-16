
import React from "react";

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description: [
      "Led a team of 5 developers in building a high-traffic e-commerce platform using React, Node.js, and MongoDB",
      "Implemented CI/CD pipeline that reduced deployment time by 70%",
      "Optimized database queries, resulting in a 50% reduction in page load times",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Innovations",
    location: "New York, NY",
    period: "2018 - 2020",
    description: [
      "Developed and maintained multiple client websites using JavaScript, React, and Express",
      "Collaborated with UX designers to implement responsive user interfaces",
      "Created RESTful APIs that integrated with third-party services",
    ],
  },
  {
    id: 3,
    role: "Front-End Developer",
    company: "Web Creations Co",
    location: "Austin, TX",
    period: "2016 - 2018",
    description: [
      "Built interactive user interfaces using HTML, CSS, and JavaScript",
      "Participated in code reviews and implemented feedback to improve code quality",
      "Worked with APIs to integrate data into front-end applications",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-portfolio-blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-6 text-muted-foreground">
            My professional journey in the tech industry:
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-ml-px"></div>
          
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div key={item.id} className="relative">
                <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute hidden md:block left-0 md:left-1/2 top-0 w-6 h-6 rounded-full border-4 border-primary bg-background md:-ml-3 z-10"></div>
                  
                  {/* Date block - Mobile version shows on left, desktop alternates */}
                  <div className="md:w-1/2 md:pr-12 md:pl-0 pl-10 mb-6 md:mb-0">
                    <div className={`md:text-right ${index % 2 === 0 ? 'md:text-left md:pl-12 md:pr-0' : ''}`}>
                      <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                        {item.period}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content block */}
                  <div className={`relative md:w-1/2 md:pl-12 pl-10 ${index % 2 === 0 ? 'md:pr-12 md:pl-0' : ''}`}>
                    {/* Mobile timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-4 border-primary bg-background -ml-2 md:hidden"></div>
                    
                    <div className="glass-card p-6 animate-fade-in">
                      <h3 className="text-xl font-bold">{item.role}</h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <span>{item.company}</span>
                        <span className="mx-2">•</span>
                        <span>{item.location}</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex">
                            <span className="mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
