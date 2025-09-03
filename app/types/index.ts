export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: "in-progress" | "finished";
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export enum ProjectStatus {
  Finished = "finished",
  InProgress = "in-progress",
}
