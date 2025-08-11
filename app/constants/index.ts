import { Project } from "~/types";

export const projects: Project[] = [
  {
    title: "English Quiz Test",
    description:
      "A modern, scalable digital competency assessment platform built with a TypeScript monorepo architecture using Turborepo. This system provides comprehensive functionality for students, supervisors, and administrators to assess and certify digital skills across levels A1 to C2, similar to standardized competency frameworks.",
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
    title: "Ride Booking System",
    description:
      "A secure, scalable, and role-based backend API for a ride booking system using Express.js and Mongoose.",
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
    title: "Library Management System",
    description:
      "A modern library management system built with React, TypeScript, Vite, Redux Toolkit, RTK Query, Tailwind CSS, and Shadcn UI. Includes CRUD, borrow flow, genre filter, pagination, modals, type-safe forms, and is ready to deploy.",
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
    title: "Custom WC Tool",
    description:
      "This is a custom implementation of the Unix wc (word count) command-line utility, developed as part of the challenge-wc from codingchallenges.fyi.",
    technologies: ["C++", "Make"],
    image: "", // Placeholder

    githubUrl:
      "https://github.com/coder7475/coding-challenges/tree/main/wc-tool",
  },
  {
    title: "Scripts",
    description: "Collection of Scripts to Automate Tasks",
    technologies: ["Bash", "Python", "Docker", "JavaScript"],
    image: "", // Placeholder
    githubUrl: "https://github.com/coder7475/scripts",
  },
  {
    title: "Sentiment Analysis Bangla",
    description:
      "A machine learning project for sentiment analysis on Bangla text. Utilizes various NLP techniques and models to classify Bangla sentences as positive, negative, or neutral. Includes data preprocessing, feature extraction, model training, and evaluation.",
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
