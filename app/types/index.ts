export type ProjectCategory = "backend" | "fullstack" | "ai-ml" | "mobile";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: "in-progress" | "finished";
  category: ProjectCategory;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export enum ProjectStatus {
  Finished = "finished",
  InProgress = "in-progress",
}
