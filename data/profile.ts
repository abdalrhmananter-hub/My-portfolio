export const profile = {
  name: "Abdelrahman Mohamed Antar",
  first: "Abdelrahman", last: "Antar",
  title: "Full Stack Developer",
  email: "abdalrhmanantar@gmail.com", phone: "+20 122 518 9963", location: "Alexandria, Egypt",
  linkedin: "https://linkedin.com/in/abdelrahmananter", github: "https://github.com/abdalrhmananter-hub",
  cv: "/Abdelrahman_Mohamed_Antar_CV.pdf",
  intro: "I am a full-stack developer who builds web applications with React, TypeScript, Node.js and Express. I build RESTful APIs with authentication and role-based access control, and work with MongoDB and PostgreSQL. I am an AWS Certified Cloud Practitioner.",
  about: "Full Stack Developer with hands-on experience building web applications using React, TypeScript, Node.js and Express.js. Experienced in RESTful APIs, authentication, role-based access control, and databases such as MongoDB and PostgreSQL. Familiar with AWS and Docker.",
};
export const skillGroups = [
  { title: "Frontend Development", items: ["JavaScript", "TypeScript", "React", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
  { title: "Backend Architecture", items: ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "node-cron", "Winston"] },
  { title: "Databases", items: ["MongoDB", "Mongoose", "PostgreSQL", "SQL Server", "SQL"] },
  { title: "Security", items: ["JWT", "Authentication", "Authorization", "RBAC", "bcrypt", "HttpOnly Cookies"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD (fundamentals)", "Git", "GitHub", "GitLab"] },
];
export const experience = {
  role: "Full Stack Developer Intern", period: "Sep 2026 – Present", org: "Ministry of Justice, Egypt", project: "Government Document Digitization System",
  bullets: [
    "Built a full-stack web application for digitizing and managing government documents, integrating an existing OCR service through HTTP APIs.",
    "Built a responsive React.js interface for single and bulk uploads, document management and OCR result visualization.",
    "Built RESTful APIs with Node.js and Express.js, with authentication, role-based access control (Admin and User) and audit logging.",
    "Implemented human review and data-correction workflows, backed by a PostgreSQL database.",
  ],
  tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
};
export const education = [
  { title: "Bachelor's Degree in Mechatronics Engineering", meta: "Faculty of Engineering, AIET · Graduated 2022" },
  { title: "AI-Based Software Development Diploma", meta: "Digilians Initiative, with the National Telecommunication Institute (NTI) · 9-month program" },
];
export const certifications = [{ title: "AWS Certified Cloud Practitioner", meta: "Amazon Web Services · Issued Jul 2026, expires Jul 2029" }];
