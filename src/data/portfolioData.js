/**
 * PORTFOLIO DATA CONFIGURATION
 * Single source of truth based directly on Vivek Yadav's Resume.
 */

export const personalInfo = {
  name: "Vivek Yadav",
  role: "Software Developer",
  headline: "Software Developer | Java | Spring Boot | REST APIs",
  status: "Open to Work / Entry-Level Opportunities",

  // Profile Photo
  profileImage: "/profile.jpg",

  // Real Contact Details
  email: "vivekyadav.11v@gmail.com",
  phone: "+91 9450646646",
  github: "https://github.com/withvivek",
  linkedin: "https://www.linkedin.com/in/vivekydv09/",
  resumeUrl: "https://drive.google.com/file/d/1FmAqDbBdh0Iga1UwC1hkuFxSm9ugHEQO/view?usp=sharing",

  // Hero introduction
  shortIntro:
    "B.Tech Information Technology graduate with hands-on experience in Java, Spring Boot, SQL, and database management. Good understanding of OOP, DBMS, REST APIs, and problem-solving. Skilled in developing backend applications and working with relational databases. Seeking an entry-level Software Engineering role to apply my technical skills and grow.",

  // Concise Recruiter-focused About section
  aboutMe:
    "I am a B.Tech Information Technology graduate with a strong foundation in Java, Spring Boot, SQL, REST APIs, and database management. I have worked on full-stack projects involving backend development, RESTful APIs, relational databases, authentication, and practical application workflows. I am currently looking for an entry-level Software Developer opportunity where I can apply my technical skills and continue learning.",

  // Centralized Links
  links: {
    email: "vivekyadav.11v@gmail.com",
    emailHref: "mailto:vivekyadav.11v@gmail.com",
    phone: "+91 9450646646",
    phoneHref: "tel:+919450646646",
    github: "https://github.com/withvivek",
    linkedin: "https://www.linkedin.com/in/vivekydv09/",
    resume: "https://drive.google.com/file/d/1FmAqDbBdh0Iga1UwC1hkuFxSm9ugHEQO/view?usp=sharing"
  }
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming and query languages",
    skills: ["Java", "Python", "SQL"]
  },
  {
    category: "Core / Programming",
    description: "Core computer science fundamentals",
    skills: [
      "Object-Oriented Programming (OOPs)",
      "Database Management System (DBMS)",
      "JDBC"
    ]
  },
  {
    category: "Backend",
    description: "Frameworks, data access & REST architecture",
    skills: ["Spring Boot", "Spring Data JPA", "REST API"]
  },
  {
    category: "Tools",
    description: "Version control & API development workflow",
    skills: ["Git & GitHub", "Postman"]
  }
];

export const projectsData = [
  {
    id: "stock-mentor",
    title: "Stock Mentor - Smart Investment Learning Platform",
    tagline: "Smart Investment Learning Platform",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "React.js",
      "MongoDB Atlas",
      "Groq AI",
      "Alpha Vantage API"
    ],
    descriptionPoints: [
      "Developed a full-stack stock analysis application with a Spring Boot backend and React.js frontend for monitoring and analyzing stock market data.",
      "Integrated Alpha Vantage APIs to fetch real-time and historical stock data and implemented RESTful APIs for efficient data processing and management.",
      "Integrated Groq AI to provide AI-powered stock insights and summaries, with MongoDB Atlas used for storing application data."
    ],
    githubUrl: "https://github.com/withvivek/Stock-Mentor"
  },
  {
    id: "lifespring-care",
    title: "LifeSpring Care – Healthcare Appointment Booking System",
    tagline: "Healthcare Appointment Booking System",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA (Hibernate)",
      "MySQL",
      "JSP"
    ],
    descriptionPoints: [
      "Developed a full-stack healthcare system with patient, doctor, and admin modules for managing appointments and user data.",
      "Implemented RESTful APIs with CRUD operations using Spring Boot and Spring Data JPA.",
      "Built an appointment workflow with slot validation and an admin dashboard for managing hospitals, doctors, appointments, and users."
    ],
    githubUrl: "https://github.com/withvivek/LifeSpring-Care-SmartHealthCare"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Noida Institute of Engineering and Technology (NIET), Greater Noida",
    duration: "2022 – 2026",
    score: "CGPA: 7.8 / 10 (77%)",
    featured: true
  },
  {
    degree: "Intermediate (Class 12)",
    institution: "SRVS Sansthan, Chandauli",
    duration: "2021",
    score: "Percentage: 68.8%",
    featured: false
  },
  {
    degree: "High School (Class 10)",
    institution: "Brijnandani Convent School, Chandauli",
    duration: "2019",
    score: "Percentage: 70.2%",
    featured: false
  }
];

export const certificationsData = [
  {
    title: "Java Programming: Arrays, Lists and Structured Data",
    issuer: "Coursera",
    category: "Java Programming",
    credentialUrl: "https://coursera.org/share/e73ee14aebcc090f775bdb2bf24e5d59"
  },
  {
    title: "Object Oriented Programming in Java",
    issuer: "Coursera",
    category: "OOP & Architecture",
    credentialUrl: "https://coursera.org/share/2e7abc48df5be4e9b3210834543e644f"
  },
  {
    title: "Python Basics",
    issuer: "Coursera",
    category: "Programming Fundamentals",
    credentialUrl: "https://coursera.org/share/c95400c22d7807727f0349e1b0cd7c34"
  },
  {
    title: "Database Management System",
    issuer: "Infosys SpringBoard",
    category: "DBMS & SQL",
    credentialUrl: null
  }
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];
