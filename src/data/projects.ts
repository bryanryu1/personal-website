export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Project One",
    tagline: "A one-line description of what this project does.",
    description:
      "A couple of sentences giving more context: what problem it solves, why you built it, and who it's for.",
    details: [
      "The specific technical challenge you solved and how.",
      "A decision you made and the tradeoff behind it.",
      "The outcome or impact, if measurable.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/yourname/project-one",
    liveUrl: "https://project-one.example.com",
  },
  {
    id: "project-2",
    name: "Project Two",
    tagline: "A one-line description of what this project does.",
    description:
      "A couple of sentences giving more context: what problem it solves, why you built it, and who it's for.",
    details: [
      "The specific technical challenge you solved and how.",
      "A decision you made and the tradeoff behind it.",
      "The outcome or impact, if measurable.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL"],
    repoUrl: "https://github.com/yourname/project-two",
  },
  {
    id: "project-3",
    name: "Project Three",
    tagline: "A one-line description of what this project does.",
    description:
      "A couple of sentences giving more context: what problem it solves, why you built it, and who it's for.",
    details: [
      "The specific technical challenge you solved and how.",
      "A decision you made and the tradeoff behind it.",
      "The outcome or impact, if measurable.",
    ],
    tech: ["React Native", "Firebase"],
    repoUrl: "https://github.com/yourname/project-three",
  },
];
