import { Project, ProjectStatus } from "~/types";

export const projects: Project[] = [
  {
    status: ProjectStatus.InProgress,
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
      // "WebSocket",
      // "RabbitMQ",
      // "SSLCommerz",
    ],
    image: "", // Placeholder
    liveUrl: "https://ride.robiulhossain.com",
    githubUrl: "https://github.com/coder7475/ride-booking-system",
  },
  {
    status: ProjectStatus.InProgress,
    title: "Socket Programming Examples",
    description:
      "A collection of practical socket programming examples in JavaScript.",
    technologies: [
      "JavaScript",
      "Node.js",
      "ws",
      "Web Sockets",
      "Socket.io",
      "TCP/IP",
      "UDP",
    ],
    image: "", // Placeholder
    liveUrl: "", // No live deployment
    githubUrl: "https://github.com/coder7475/socket_programming",
  },
  {
    status: ProjectStatus.Finished,
    title: "Churn Prediction Pipeline",
    description:
      "Aim of this project is to develop a ml system to predict the behavior of customers as to retain customer.",
    technologies: [
      "Python",
      "Modular Architecture",
      "Machine Learning",
      "Pipeline",
      "FastAPI",
      "Flask",
      "Docker",
    ],
    image: "", // Placeholder
    liveUrl: "", // No live deployment
    githubUrl:
      "https://github.com/coder7475/model-training-with-modular-workflow",
  },
  {
    status: ProjectStatus.Finished,
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
    status: ProjectStatus.Finished,
    title: "YouTube Video Title Generator",
    description:
      "A Retrieval-Augmented Generation (RAG) system implemented in Python. Generates engaging, click-worthy YouTube video titles (with optional emojis and hashtags) powered by FastAPI, MongoDB Atlas Vector Search, and LLMs. Integrates LLMs with external data sources for enhanced question answering and information retrieval. Designed for modularity and extensibility.",
    technologies: [
      "Python",
      "RAG",
      "LLM",
      "LangChain",
      "FastAPI",
      "Docker",
      "Hugging Face",
      "MongoDB Atlas",
    ],
    image: "", // Placeholder
    liveUrl: "", // No live deployment
    githubUrl: "https://github.com/coder7475/rag-python",
  },

  {
    status: ProjectStatus.Finished,
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
