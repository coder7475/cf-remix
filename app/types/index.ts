export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: "in-progress" | "finished";
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}
