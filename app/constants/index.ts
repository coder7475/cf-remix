import { Project } from "~/types";

export const projects: Project[] = [
  {
    status: "in-progress",
    title: "English Quiz Test",
    description:
      "A digital competency assessment platform built with a TypeScript monorepo using Turborepo. Provides comprehensive features for students, supervisors, and admins to assess and certify digital skills across A1 to C2 levels.",
    technologies: [
      "Node.js",
      "Redis",
      "Redux",
      "React",
      "TypeScript",
      "MongoDB",
      "RESTAPIs",
      "Turborepo",
      "Express",
      "Mongoose",
    ],
    image: "",
    liveUrl: "https://quiz.robiulhossain.com/",
    githubUrl: "https://github.com/coder7475/english_test_quiz",
  },
  {
    status: "in-progress",
    title: "Ride Booking System",
    description:
      "A scalable, secure backend API for a ride booking platform. Features role-based access, RESTful endpoints, and robust data management using Express.js and Mongoose.",
    technologies: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "RESTAPIs",
      "Turborepo",
      "Express",
      "Mongoose",
    ],
    image: "", // Placeholder
    liveUrl: "https://ride-booking-system-wine.vercel.app/",
    githubUrl: "https://github.com/coder7475/ride-booking-system",
  },
  {
    status: "finished",
    title: "Library Management System",
    description:
      "A modern library management app with React, TypeScript, Redux Toolkit, and Shadcn UI. Supports CRUD, borrow flow, genre filtering, pagination, modals, and type-safe forms.",
    technologies: [
      "Node.js",
      "React",
      "Redux",
      "TypeScript",
      "Zod",
      "Shadcn",
      "Express",
    ],
    image: "", // Placeholder
    liveUrl: "https://library.robiulhossain.com",
    githubUrl: "https://github.com/coder7475/libraray_management_frontend",
  },
  {
    status: "finished",
    title: "Custom WC Tool",
    description:
      "A custom implementation of the Unix wc (word count) command-line utility, developed for a coding challenge. Supports counting lines, words, and characters efficiently.",
    technologies: ["C++", "Make"],
    image: "", // Placeholder
    githubUrl:
      "https://github.com/coder7475/coding-challenges/tree/main/wc-tool",
  },
  {
    status: "finished",
    title: "Scripts",
    description:
      "A collection of automation scripts for various tasks, including system management, data processing, and development workflows using Bash, Python, and Docker.",
    technologies: ["Bash", "Python", "Docker", "JavaScript"],
    image: "", // Placeholder
    githubUrl: "https://github.com/coder7475/scripts",
  },
  {
    status: "finished",
    title: "Sentiment Analysis Bangla",
    description:
      "A machine learning project for Bangla sentiment analysis. Uses NLP techniques and models to classify sentences as positive, negative, or neutral, with full data processing and evaluation.",
    technologies: [
      "Python",
      "scikit-learn",
      "NLTK",
      "Pandas",
      "Jupyter Notebook",
      "Machine Learning",
      "Natural Language Processing",
    ],
    image: "", // Placeholder
    githubUrl: "https://github.com/coder7475/sentiment_analysis_bangla",
  },
];
