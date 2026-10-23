export const personalInfo = {
  name: "Naveen S Gawadi",
  role: "CSE (AI & ML) Student",
  headline: "Aspiring AI Engineer & Full-Stack Developer",
  location: "Bangalore, Karnataka, India",
  email: "naveengawadi@gmail.com",
  linkedin: "https://linkedin.com/in/naveen-gawadi",
  github: "https://github.com/naveensg-dev",
  bio: "Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at AJIET, VTU. Passionate about building functional full-stack web applications, exploring machine learning workflows, and developing hardware-assisted systems that solve tangible, real-world problems.",
  status: "Open to Internships & Collaborative Projects",
  languages: ["English", "Kannada", "Hindi", "Telugu"]
};

export const stats = [
  { label: "Engineering Major", value: "AI & ML", detail: "VTU 2024–2028" },
  { label: "Academic CGPA", value: "7.3 / 10", detail: "AJIET" },
  { label: "Core Projects", value: "2+", detail: "Web & IoT Assistive" },
  { label: "Industry Certifications", value: "4", detail: "HP LIFE & Intel" },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Core languages for software development, data manipulation, and systems programming.",
    skills: [
      { name: "Python", type: "Resume Skill", badge: "Primary", highlight: "AI & Scripting" },
      { name: "Java", type: "Resume Skill", badge: "Core", highlight: "OOP & Architecture" },
      { name: "SQL", type: "Resume Skill", badge: "Core", highlight: "Relational Queries" },
      { name: "C", type: "Resume Skill", badge: "Foundational", highlight: "Systems & Embedded" },
    ]
  },
  {
    category: "Frontend & Web Technologies",
    description: "Modern web user interface development with component-driven architecture.",
    skills: [
      { name: "React.js", type: "Project & Resume", badge: "Frontend", highlight: "Components & State" },
      { name: "HTML5 / CSS3", type: "Web Standard", badge: "Semantic", highlight: "Responsive Layouts" },
      { name: "Tailwind CSS", type: "Web Styling", badge: "Modern UI", highlight: "Utility-first Design" },
      { name: "JavaScript (ES6+)", type: "Core Web", badge: "Scripting", highlight: "Async & APIs" },
    ]
  },
  {
    category: "Databases & Cloud Storage",
    description: "Data persistence engines ranging from relational schemas to cloud NoSQL stores.",
    skills: [
      { name: "MySQL", type: "Resume Skill", badge: "RDBMS", highlight: "Relational Modeling" },
      { name: "PostgreSQL", type: "Resume Skill", badge: "RDBMS", highlight: "Advanced SQL" },
      { name: "Firebase Firestore", type: "Project Technology", badge: "NoSQL", highlight: "Real-time Sync" },
    ]
  },
  {
    category: "Developer & AI Tools",
    description: "Version control platforms, interactive notebooks, and ML runtime environments.",
    skills: [
      { name: "Git", type: "Resume Skill", badge: "VCS", highlight: "Branching & Workflow" },
      { name: "GitHub", type: "Resume Skill", badge: "Platform", highlight: "CI/CD & Collaboration" },
      { name: "Jupyter Notebook", type: "Resume Skill", badge: "Analysis", highlight: "Data Exploration" },
      { name: "Google Colab", type: "Resume Skill", badge: "Cloud ML", highlight: "GPU Experimentation" },
    ]
  },
  {
    category: "Productivity & Documentation",
    description: "Professional documentation, data presentation, and technical reporting tools.",
    skills: [
      { name: "MS Excel", type: "Resume Skill", badge: "Analysis", highlight: "Data Organization" },
      { name: "MS Word", type: "Resume Skill", badge: "Documentation", highlight: "Technical Writing" },
      { name: "MS PowerPoint", type: "Resume Skill", badge: "Presentations", highlight: "Visual Communication" },
    ]
  }
];

export const projects = [
  {
    id: "digital-mirror",
    title: "Digital Mirror — Habit Tracker",
    tagline: "Gamified Habit Tracker with Real-Time Global Leaderboards",
    featured: true,
    category: "Full-Stack Web Application",
    technologies: ["React.js", "Firebase", "Firestore", "Vercel", "GitHub CI/CD"],
    summary: "Developed and deployed a full-stack habit-tracking web application designed to help users build consistency through gamified streak tracking and live competitive rankings.",
    highlights: [
      "Designed and structured the Firestore NoSQL database schema for low-latency queries and user profile management.",
      "Engineered real-time synchronization using onSnapshot listeners for instant UI updates across multi-device sessions.",
      "Implemented gamified streak tracking calculation engine and a live global leaderboard to drive user retention.",
      "Configured automated deployment workflows on Vercel backed by GitHub-based CI/CD pipelines."
    ],
    demoUrl: "https://naveensg-dev.github.io",
    repoUrl: "https://github.com/naveensg-dev",
    interactiveFeature: "streak-simulator",
    metrics: [
      { label: "Sync Engine", value: "Real-time onSnapshot" },
      { label: "Deployment", value: "Vercel CI/CD" },
      { label: "Database", value: "Firestore NoSQL" }
    ]
  },
  {
    id: "sensored-handicapped-stick",
    title: "Sensored Handicapped Stick",
    tagline: "IoT Assistive Device for Visually Impaired Individuals",
    featured: true,
    category: "Embedded Systems & IoT",
    technologies: ["Arduino Uno", "Ultrasonic Sensor", "C", "Hardware Prototyping"],
    summary: "An assistive hardware solution engineered to detect obstacles in real time, helping visually impaired individuals navigate surroundings safely with acoustic and tactile feedback.",
    highlights: [
      "Programmed threshold-based obstacle detection algorithms in C running on the Arduino Uno microcontroller.",
      "Integrated dual-alert feedback mechanisms featuring both audio buzzer frequencies and physical haptic vibration.",
      "Calibrated ultrasonic rangefinder echo timings to ensure reliable low-latency proximity triggers across varied materials.",
      "Collaborated effectively within a 6-member engineering team, contributing to schematic review, testing, and embedded logic."
    ],
    demoUrl: null,
    repoUrl: "https://github.com/naveensg-dev",
    metrics: [
      { label: "Hardware", value: "Arduino Uno" },
      { label: "Sensors", value: "Ultrasonic Proximity" },
      { label: "Team Size", value: "6-Member Team" }
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering — CSE (AI & ML)",
    institution: "AJ Institute of Engineering and Technology, VTU",
    period: "2024 – 2028",
    score: "CGPA: 7.3 / 10",
    status: "Currently Pursuing (Second Year)",
    focus: "Specializing in Artificial Intelligence and Machine Learning, Algorithms, Data Structures, Object-Oriented Design, and Database Systems.",
    location: "Mangaluru / Karnataka, India"
  },
  {
    degree: "Pre-University Course — PCMC",
    institution: "Hanumanth Benne Pre-University College",
    period: "2022 – 2024",
    score: "83%",
    status: "Completed",
    focus: "Physics, Chemistry, Mathematics, and Computer Science foundation with distinction performance.",
    location: "Karnataka, India"
  }
];

export const certifications = [
  {
    title: "Data Science and Analytics",
    issuer: "HP LIFE",
    category: "Data Science",
    description: "Comprehensive training in analytical methodologies, data interpretation, business decision analytics, and data-driven problem solving.",
    tags: ["Data Analytics", "HP LIFE", "Decision Science"]
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    category: "Artificial Intelligence",
    description: "Foundational conceptual curriculum covering artificial intelligence paradigms, cognitive computing principles, and societal applications.",
    tags: ["AI Fundamentals", "HP LIFE", "Machine Learning"]
  },
  {
    title: "AI Aware",
    issuer: "Intel AI for All",
    category: "AI Literacy",
    description: "National AI literacy initiative covering foundational AI architectures, ethical considerations, and real-world domain use cases.",
    tags: ["Intel", "AI for All", "AI Literacy"]
  },
  {
    title: "AI Appreciate",
    issuer: "Intel AI for All",
    category: "AI Application",
    description: "Advanced domain exploration exploring AI project lifecycle, neural perception concepts, and practical impact of automated systems.",
    tags: ["Intel", "AI Lifecycle", "Computer Vision & NLP"]
  }
];

export const extracurriculars = [
  {
    title: "AI Talk Session — Hackerspace Mangaluru",
    subtitle: "DevDays Mangaluru Community Session",
    type: "Community & Developer Engagement",
    description: "Participated in an intensive technical talk session at Hackerspace Mangaluru during DevDays Mangaluru. Engaged actively with software developers, AI practitioners, and open-source contributors on cutting-edge developer tooling, modern machine learning workflows, and practical applications in engineering.",
    takeaways: [
      "Explored emerging developer tools and modern AI ecosystems.",
      "Connected with local engineering and open-source practitioners.",
      "Gained industry perspectives on AI productization and scalable architecture."
    ]
  }
];
