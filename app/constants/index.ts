import { Project } from "~/types";

export const projects: Project[] = [
  {
    status: "in-progress",
    title: "Ride Booking System",
    description:
      "A scalable and secure ride booking platform designed for reliability and performance. Implements robust role-based access control, comprehensive RESTful APIs, and efficient data management with Express.js and Mongoose. The frontend is built with React and Redux for a seamless user experience.",
    technologies: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "RestAPIs",
      "Turborepo",
      "Express",
      "Mongoose",
      "JWT",
      "RBAC",
      "OTP",
      "React",
      "Redux",
      "ShadCn",
      "WebSocket",
      "RabbitMQ",
      "SSLCommerz",
    ],
    image: "", // Placeholder
    liveUrl: "https://ride-booking-system-wine.vercel.app/",
    githubUrl: "https://github.com/coder7475/ride-booking-system",
  },
  {
    status: "finished",
    title: "School Management APIs",
    description:
      "A mini school management apis, built with Node.js, NestJs, TypeScript, Drizzle and PostgreSQL. Features include user authentication, role-based access, student and teacher management, class scheduling, and more. Designed for scalability and maintainability.",
    technologies: [
      "Drizzle",
      "PostgreSQL",
      "Node.js",
      "NestJS",
      "TypeScript",
      "JWT",
      "RBAC",
      "RestAPIs",
      "Docker",
      "Swagger",
      "Vercel",
    ],
    image: "", // Placeholder
    liveUrl: "https://school-management-apis.vercel.app/api", // No live deployment
    githubUrl: "https://github.com/coder7475/school_management_apis",
  },
  {
    status: "finished",
    title: "Auth Shops",
    description:
      "A full-stack authentication Built with NestJs, TypeScript, Prisma, and PostgreSQL, with a pnpm monorepo architecture.",
    technologies: [
      "NestJs",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Redux",
      "TailwindCss",
      "ShadCn",
      "Vercel",
      "Cloudflare",
      "DNS",
      "JWT",
      "OOP",
    ],
    image: "", // Placeholder
    liveUrl: "https://shops.robiulhossain.com",
    githubUrl: "https://github.com/coder7475/auth-shops",
  },
  {
    status: "finished",
    title: "Library Management System",
    description:
      "A full-stack library management application featuring an Express backend with MongoDB and Mongoose, and a modern React frontend using Redux Toolkit and Shadcn UI. Includes robust CRUD operations, book borrowing workflows, genre-based filtering, pagination, interactive modals, and type-safe forms for a seamless user experience.",
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
