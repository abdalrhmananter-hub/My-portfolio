export type Project = {
  id: string; title: string; description: string; technologies: string[]; category: string;
  highlights: string[]; thumbnail?: string; gallery?: string[]; liveUrl?: string; githubUrl?: string;
};
// To add a project: drop images in public/images/projects/<id>/ and add an object below.
export const projects: Project[] = [
  {
    id: "shopsphere", title: "ShopSphere – E-Commerce Platform", category: "MERN Stack",
    description: "Full-stack e-commerce platform: a customer storefront, an admin dashboard and a REST API.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Joi", "Multer", "Cloudinary", "Tailwind CSS"],
    highlights: [
      "Three TypeScript applications: storefront and admin dashboard (React) and a Node.js/Express REST API on MongoDB.",
      "JWT authentication with bcrypt hashing, Joi validation and role-based access control for customers and admins.",
      "Product management with multi-image upload, plus storefront category filtering, search and sorting.",
      "Persistent per-user carts and a cash-on-delivery order flow, with order history and admin status updates.",
    ],
    thumbnail: "/images/projects/shopsphere/thumbnail.webp", gallery: [],
    githubUrl: "https://github.com/abdalrhmananter-hub/shopsphere-ecommerce",
  },
  {
    id: "hrm-system", title: "HRM System – Human Resource Management", category: "MERN Stack",
    description: "HR platform with automated payroll, attendance, leave management and real-time notifications.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.io", "JWT", "Joi", "Axios", "Tailwind CSS"],
    highlights: [
      "Scheduled payroll engine (node-cron) using MongoDB aggregation pipelines; a unique compound index prevents duplicate payroll records.",
      "Payroll rules for bonuses, attendance-based deductions, unpaid leave and late-minute penalties.",
      "Employee, attendance and leave modules with automatic late-minute calculation and an HR approval workflow.",
      "Socket.io notifications (JWT-authenticated, per-user rooms); APIs secured with JWT, HttpOnly refresh cookies, bcrypt and RBAC.",
    ],
    thumbnail: "/images/projects/hrm-system/thumbnail.webp", gallery: [],
    githubUrl: "https://github.com/abdalrhmananter-hub/HRM-System-Full-Application-Cycle",
  },
  {
    id: "addadak", title: "addadak – Smart Utility Management Ecosystem", category: "Team Graduation Project",
    description: "Microservices platform for monitoring, forecasting and paying for electricity, gas and water. DEPI diploma graduation project, built by a team of five.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "node-cron", "Axios", "Winston", "Microservices"],
    highlights: [
      "Developed the Data Collector microservice: a cron-scheduled pipeline pulling meter readings from provider APIs, with a run lock and Axios retries with exponential backoff.",
      "Per-utility validation, transformation, duplicate detection and MongoDB persistence with a compound index on meter number and reading date.",
      "Structured logging with Winston and process-level error handling.",
      "Contributed to the Metrics / Utility Service: tiered-tariff calculation, consumption history and invoice generation.",
    ],
    thumbnail: "/images/projects/addadak/thumbnail.webp", gallery: [],
    githubUrl: "https://github.com/Toka999/Addadak",
  },
  {
    id: "ministry-of-justice", title: "Government Document Digitization System", category: "Internship · Ministry of Justice",
    description: "Full-stack system for digitizing government documents with OCR, human review and role-based access.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    highlights: [
      "OCR integration over HTTP APIs, with single and bulk document upload.",
      "Human review and data-correction workflows that preserve the original OCR responses.",
      "Admin/User role-based access control and audit logging.",
    ],
  },
];
