export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    id: "role-1",
    role: "Senior Software Engineer",
    company: "Company Name",
    location: "San Francisco, CA",
    start: "2023",
    end: "Present",
    summary:
      "One or two sentences describing the scope of this role and the team or product area you owned.",
    highlights: [
      "Led the design and rollout of a system that improved some key metric by a specific, credible amount.",
      "Partnered with product and design to ship a feature used by a meaningful number of users.",
      "Mentored junior engineers and helped establish practices that improved team velocity.",
    ],
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: "role-2",
    role: "Software Engineer",
    company: "Previous Company",
    location: "Remote",
    start: "2021",
    end: "2023",
    summary:
      "Short description of the team, the product, and your primary responsibilities.",
    highlights: [
      "Built and maintained a core service handling a significant volume of requests.",
      "Reduced latency or cost by a specific percentage through a concrete optimization.",
      "Collaborated cross-functionally to deliver a project end to end.",
    ],
    tech: ["Python", "AWS", "Docker", "GraphQL"],
  },
  {
    id: "role-3",
    role: "Software Engineering Intern",
    company: "Earlier Company",
    location: "New York, NY",
    start: "2020",
    end: "2021",
    summary:
      "What you worked on as an intern and what you learned or shipped.",
    highlights: [
      "Shipped a self-contained feature from design to production.",
      "Wrote tests and documentation that were adopted by the team.",
    ],
    tech: ["JavaScript", "Express", "MongoDB"],
  },
];
