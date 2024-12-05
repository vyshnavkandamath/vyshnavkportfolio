import project1 from "../assets/projects/healthfitness.png";
import project2 from "../assets/projects/dcmetroapp.png";
import project3 from "../assets/projects/portfoliopic.png";
import project4 from "../assets/projects/vibeshiftpic.png";

export const HERO_CONTENT = `Hello! I'm an aspiring software engineer with a passion for creating impactful applications. I bring front-end expertise in TypeScript, React, and Node.js, along with backend skills in Python and MongoDB, enabling me to build seamless, user-focused experiences. My experience spans the full stack, RESTful APIs, and Android development, allowing me to work effectively across both front and back ends of projects. Currently, I’m delving into Artificial Intelligence and Machine Learning, with a focus on Large Language Models, model training, and applying Retrieval-Augmented Generation (RAG) techniques. Welcome to my portfolio!`;

export const ABOUT_TEXT = `I'm a computer science major with a minor in law at the University of Maryland, College Park. I am expected to graduate in May 2025 with a Bachelor of Science. Throughout my studies, I’ve focused on essential theory and programming concepts, taking courses in Object-Oriented Programming, Web Development in JavaScript, Advanced Data Structures and Algorithms, Database Design, Computer Systems, Computer Network Security, Data Science, UI/UX Design, and Human-Computer Interaction. Over the past two years, I interned as a Software Engineer at Hughes Network Systems, where I developed a deep curiosity about how things work and a dedication to learning and adapting to new challenges. Outside of coding, I stay active through professional dancing, exploring new technologies, spending time with friends, and traveling.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "Software Engineer Intern",
    company: "Hughes Network Systems",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Python", "Robot Framework", "LangChain", "Google Cloud"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Software Engineer Intern",
    company: "Hughes Network Systems",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["TypeScript", "Node.js", "GitLab", "REST"],
  },
  {
    year: "May 2022 - Aug 2022",
    role: "Software Engineer Intern",
    company: "Mindgrasp.ai",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Flask", "JavaScript", "Google Firebase", "AJAX", "Agile"],
  }
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Health and Fitness Android App",
    image: project1,
    description:
      "A fully functional android mobile application that allows users to track fitness, calories, and progress goals",
    technologies: ["Kotlin", "Android Studio"],
  },
  {
    title: "DC Metro Navigation Application",
    image: project2,
    description:
      "Developed a DC Metro navigation app in Kotlin using Android Studio, integrating Google Maps for real-time tracking of 25+ routes and designing an intuitive interface that streamlined route selection for 20+ stations.",
    technologies: ["Kotlin", "Android Studio", "Google Maps Platform"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "VibeShift",
    image: project4,
    description:
      "A platform where you can recieve Spotify Playlist recommendations based on your geographic weather data.",
    technologies: ["HTML", "CSS", "Python", "Spotify API", "Flask"],
  },
];

export const CONTACT = {
  email: "vyshnavkandamath@gmail.com",
};
