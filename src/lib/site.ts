// Single source of truth for portfolio content. Edit values here to update the site.
import radarImg from "@/assets/project-radar.jpg";
import genaiImg from "@/assets/project-genai.jpg";
import roadmapImg from "@/assets/project-roadmap.jpg";

export const profile = {
  name: "Muhammad Afnan Shakeel",
  shortName: "Afnan",
  logo: "AFNAN.DEV",
  role: "Software Engineering Student | Exploring AI & Intelligent Systems",
  location: "Pakistan",
  email: "afnanqureshi4444@gmail.com",
  github: "https://github.com/afnan-dev01",
  githubHandle: "afnan-dev01",
  linkedin: "https://www.linkedin.com/in/muhammad-afnan-shakeel-6545143b6",
  linkedinHandle: "muhammad-afnan-shakeel",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Programming & Development",
    icon: "code",
    skills: ["Python programming fundamentals", "Technical project development"],
  },
  {
    title: "Artificial Intelligence",
    icon: "brain",
    skills: [
      "Generative AI fundamentals",
      "Agentic AI concepts & workflows",
      "Basic Machine Learning model training",
    ],
  },
  {
    title: "Hardware & Embedded Systems",
    icon: "cpu",
    skills: ["Arduino", "Embedded systems", "Sensors & hardware integration"],
  },
  {
    title: "Professional Skills",
    icon: "users",
    skills: ["Problem solving", "Team collaboration"],
  },
] as const;

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  details: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  slogan?: string;
  highlight?: string;
  /** Add a repository or demo URL here once available. */
  link?: string;
};

export const projects: Project[] = [
  {
    id: "radar",
    index: "01",
    title: "Arduino-Based Radar System",
    kicker: "Hardware · Embedded",
    description:
      "An Arduino-based radar detection system that uses an ultrasonic sensor mounted on a servo motor to scan its surroundings and detect nearby objects.",
    details: [
      "Scans the surrounding area using a servo-mounted ultrasonic sensor.",
      "Detects nearby objects and signals them with a buzzer.",
      "Demonstrates practical knowledge of Arduino, sensors, hardware integration and embedded systems.",
    ],
    tags: ["Arduino", "Ultrasonic Sensor", "Servo Motor", "Buzzer", "Embedded Systems"],
    image: radarImg,
    imageAlt: "Arduino board wired to an ultrasonic sensor on a servo motor, emitting a radar sweep",
  },
  {
    id: "genai",
    index: "02",
    title: "Generative AI & Agentic AI",
    kicker: "Training · Hackathon",
    description:
      "Participation in Generative AI and Agentic AI training and collaborative hackathon activities, gaining exposure to AI-powered applications and intelligent agents.",
    details: [
      "Explored AI-powered applications and how intelligent agents work.",
      "Practised prompt engineering and AI-based problem solving.",
      "Worked collaboratively in hackathon activities.",
    ],
    tags: ["Generative AI", "Agentic AI", "Prompt Engineering", "AI Problem Solving"],
    image: genaiImg,
    imageAlt: "Glowing neural network surrounded by small orbiting AI agents",
  },
  {
    id: "roadmap",
    index: "03",
    title: "Roadmap to Success",
    kicker: "Agentic AI Career & Learning Assistant",
    description:
      "A collaborative AI project that helps students plan their learning journey with personalized career guidance and adaptive learning roadmaps.",
    details: [
      "Personalized career guidance",
      "Skill-gap identification",
      "Daily learning missions",
      "Practical projects",
      "AI evaluation",
      "Adaptive learning roadmaps",
    ],
    tags: ["Agentic AI", "Collaborative Project", "Hackathon"],
    image: roadmapImg,
    imageAlt: "Luminous winding path with milestone nodes rising toward a horizon",
    slogan: "Plan → Learn → Practice → Evaluate → Adapt",
    highlight: "Top 20 · Hackathon",
  },
];

export const activities = [
  {
    title: "Generative AI Training",
    body: "Participated in Generative AI training, building an understanding of AI-powered applications and prompt engineering.",
    icon: "sparkles",
  },
  {
    title: "Agentic AI Training",
    body: "Learned the concepts and workflows behind intelligent agents and how they approach AI-based problem solving.",
    icon: "bot",
  },
  {
    title: "Collaborative Hackathon",
    body: "Worked with a team on Roadmap to Success, an Agentic AI learning assistant that reached a Top 20 position.",
    icon: "trophy",
  },
  {
    title: "Hands-on Project Development",
    body: "Built practical projects such as an Arduino-based radar system and gained basic experience training machine learning models.",
    icon: "wrench",
  },
] as const;
