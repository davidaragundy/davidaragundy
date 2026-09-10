import type { Project } from "@/features/projects/types/project";

export const projects: Project[] = [
  {
    name: "WiDS Guayaquil",
    description:
      "Site for the Women in Data Science conference at ESPOL. Handles registration for the conference, the datathon and NextGen.",
    url: "https://wids.espol.edu.ec",
    repository: "https://github.com/Taws-Espol/wids-website",
  },
  {
    name: "TAWS",
    description:
      "Site for TAWS, the ESPOL student club working on data science, AI, and web and mobile development.",
    url: "https://taws.espol.edu.ec",
    repository: "https://github.com/Taws-Espol/taws-website",
  },
  {
    name: "Twittesia",
    description:
      "A Twitter-like social network where every post, comment and chat disappears after 24 hours.",
    url: "https://twittesia.aragundy.com",
    repository: "https://github.com/davidaragundy/twittesia",
  },
];
