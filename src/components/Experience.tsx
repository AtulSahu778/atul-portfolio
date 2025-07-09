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
    role: "B.Sc. Info. Technology Student",
    company: "St. Xavier's College, Ranchi",
    location: "Ranchi, Jharkhand",
    period: "2025 - Present",
    description: [
      "Currently pursuing 1st year of Bachelor of Science (BSc).",
      "Learning core subjects including Mathematics, Computer Science, and DSA.",
      "Actively building foundational knowledge in both theory and practicals to prepare for future specialization.",
    ],
  },
  {
    id: 2,
    role: "Founder ",
    company: "The Hustlers Community",
    location: "Ranchi, Jharkhand",
    period: "2024 - Last Year",
    description: [
      "Founded and currently lead the Hustlers Community with over 500 active members.",
      "Foster collaboration among students and developers through events, discussions, and peer learning.",
      "Built a supportive environment that encourages personal growth, networking, and project-based learning.",
    ],
    
  },
  {
    id: 3,
    role: "Robo Fest",
    company: "Infoage Institute Sundargarh",
    location: "Sundargarh, Odisha",
    period: "2023",
    description: [
      "Won RoboFest competition showcasing innovation in robotics and automation.",
      "Developed an IoT-based project to transform traditional homes into smart homes using sensors and microcontrollers.",
      "Built a Rubik's Cube solver using logic programming and mechanical design for autonomous solving.",
    ],
    
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background border-t">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg sm:text-lg text-muted-foreground mb-6">
            My professional journey so far
          </p>
        </div>
        {/* Optimized vertical timeline */}
        <div className="relative mx-auto max-w-2xl flex flex-col gap-12 items-center">
          {/* Centered vertical timeline */}
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative flex flex-col items-center z-10 animate-fade-in w-full">
              {/* Timeline dot and connector */}
              <div className="flex flex-col items-center w-full">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 border-4 border-background shadow-md" />
                {idx < experiences.length - 1 && <div className="w-1 h-8 sm:h-12 bg-gradient-to-b from-teal-400 to-indigo-600" />}
              </div>
              {/* Card */}
              <div className="w-full max-w-lg mt-8">
                <div className="relative bg-white/60 dark:bg-background/80 rounded-xl p-6 shadow-md border border-teal-100 dark:border-indigo-900 transition-all duration-200 mx-auto">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-400 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow border border-white/30">
                    {exp.period}
                  </span>
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="font-semibold text-lg text-teal-600 dark:text-teal-400">{exp.role}</span>
                  </div>
                  <span className="block font-medium text-indigo-700 dark:text-indigo-300 mb-1 text-base">
                    {exp.company} <span className="text-xs text-muted-foreground">({exp.location})</span>
                  </span>
                  <ul className="list-disc pl-5 text-muted-foreground text-base space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
