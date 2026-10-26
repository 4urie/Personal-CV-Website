export const profile = {
  name: "Aurie D. Nellas",
  preferredName: "Aurie",
  title: "Full-Stack Developer | BSIT Student",
  alternativeHeadline: "Aspiring Software Developer",
  location: "Panabo City, Davao del Norte, Philippines",
  email: "nellasaurie5@gmail.com",
  github: "https://github.com/4urie",
  domain: "https://4urie.me",
  introduction:
    "I am a fourth-year Bachelor of Science in Information Technology student at Davao del Norte State College with a strong interest in full-stack development, mobile applications, databases, and Internet of Things technologies. I enjoy building practical software solutions, exploring new technologies, and turning ideas into functional applications. Through my academic projects, I continue to strengthen my development skills and prepare for professional opportunities in the technology industry.",
  objective:
    "To apply and continuously improve my knowledge of software development, web and mobile technologies, database management, and IoT systems while contributing to meaningful technology projects. I aim to grow as a software developer, gain practical industry experience, and build reliable, user-focused solutions.",
};

export const skillGroups = [
  { title: "Web development", icon: "code", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Laravel", "Django"] },
  { title: "Mobile development", icon: "smartphone", items: ["Flutter", "Dart"] },
  { title: "Database & backend", icon: "database", items: ["Supabase", "PostgreSQL", "MySQL", "SQL", "Prisma"] },
  { title: "Tools & technology", icon: "cpu", items: ["Git", "GitHub", "Linux basics", "Arduino", "ESP32", "Raspberry Pi", "Microsoft Excel"] },
];

export const strengths = ["Problem-solving", "Teamwork", "Continuous learning", "Software development"];

export const projects = [
  {
    name: "FeedSmart", category: "IoT · Academic capstone", icon: "utensils",
    description: "An academic smart feeding system that brings together ESP32 hardware, sensors, feeding automation, and a Flutter mobile application. Supabase supports the connected application experience.",
    technologies: ["ESP32", "Flutter", "Supabase", "Sensors", "Embedded systems"],
  },
  {
    name: "AquaServe / SmartFeed", category: "Mobile application", icon: "droplets",
    description: "A mobile water-ordering application project built with Flutter and Supabase. Planned feature areas include AI-assisted ordering, order tracking, quick reorder, notifications, delivery scheduling, ratings, and an administrative dashboard.",
    technologies: ["Flutter", "Supabase", "Mobile development"],
  },
  {
    name: "OmniRead", category: "Education · Web application", icon: "book-open",
    description: "A reading comprehension system designed for Grade 7 students, using interactive learning activities to support reading comprehension. Local AI integration is powered by Ollama.",
    technologies: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Ollama"],
  },
  {
    name: "Library Management System", category: "Web application", icon: "library",
    description: "A library management system project for a local library context, with catalog discovery through an Online Public Access Catalog and barcode functionality.",
    technologies: ["Laravel", "MySQL", "Barcode", "OPAC"],
  },
  {
    name: "Personal Developer Portfolio", category: "Personal website", icon: "panels-top-left",
    description: "A personal portfolio and CV designed to present my background, skills, academic work, and contact information in one accessible, responsive place.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://4urie.me",
  },
];
