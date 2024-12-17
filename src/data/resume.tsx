import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Farel Ganlaky",
  initials: "FG",
  url: "https://farel",
  location: "Maroc, MA",
  locationLink: "",
  description:
    "Goal-oriented AI Software Developer | ML/DL Enthusiast. I like the sweet spot between research and software development.",
  summary:
    "I'm a passionate AI Engineer based in Morocco, with a robust foundation in front-end and back-end development, coupled with a deep interest in AI research. I specialize in leveraging state-of-the-art research to build innovative software solutions. My career goal is to [bridge the gap between cutting-edge AI research and practical applications, to create meaningful and impactful technologies.](/#education)",
  avatarUrl: "/me.jpg",
  ogImage: "https://yyassif.dev/og-image.png",
  skills: [
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Node.js",
    "Next.js",
    "Flask",
    "FastAPI",
    "React",
    "zustand",
    "zod",
    "TailwindCSS",
    "LLMs (Large Language Models)",
    "vector databases",
    "TensorFlow",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "OpenAI-Gym",
    "OpenCV",
    "PostgreSQL",
    "Supabase",
    "Neon",
    "Docker",
    "CI/CD",
    "GCP",
    "Git & GitHub / GitLab",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "farelganlaky@gmail.com",
    tel: "+212771244570",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Farelart",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/farel-ganlaky-395293252/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/FGanlaky",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:farelganlaky@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "AI Movement - UM6P",
      href: "https://aim.um6p.ma/en/home/",
      badges: [],
      location: "Rabat, Morocco",
      title: "AI Research Assistant",
      logoUrl: "/assets/work/aim.png",
      start: "Feb 2024",
      end: "Aug 2024",
      description: "Work on the integration of machine learning into the branch-and-bound to efficiently sove VRP with trucks and drones as well as software development.",
    },
    {
      company: "Chien.com",
      href: "https://www.chien.com/",
      badges: [],
      location: "Remote",
      title: "SEO Engineer(Freelancer)",
      logoUrl: "/assets/work/logo.webp",
      start: "Aug 2023",
      end: "Present",
      description:
        "",
    },
    {
      company: "Wetillix",
      badges: [],
      href: "https://wetillix.com/fr",
      location: "On-site",
      title: "Java Software Engineer",
      logoUrl: "/assets/work/wetillix.png",
      start: "Jul 2021",
      end: "Sept 2021",
      description: "",
    },
    {
      company: "Alitcha",
      href: "https://www.alitchateam.com/",
      badges: [],
      location: "Bénin",
      title: "Co-founder(Part-time)",
      logoUrl: "/assets/work/alitcha.png",
      start: "Jan 2022",
      end: "Present",
      description:
        "",
    },
    {
      company: "Simplypay(Canada)",
      href: "https://simplypay.ca/en/home/",
      badges: [],
      location: "Remote, Canada",
      title: "Sales Representatice",
      logoUrl: "/assets/work/simplypay.jpg",
      start: "April 2022",
      end: "Oct 2022",
      description:
        "",
    },
    
  ],
  education: [
    {
      school: "University of Moulay Ismail - ENSAM-Meknes",
      href: "http://www.ensam-umi.ac.ma/?lang=en",
      degree: "Master of Engineering in Artificial Intelligence & Data Science",
      logoUrl: "/assets/education/ensam.png",
      start: "2019",
      end: "2024",
    },
    
  ],
  projects: [
    {
      title: "ScrapeRAG",
      href: "https://github.com/Farelart/scrapeRag",
      dates: "December 2024 - Present",
      active: true,
      description:
        "ScrapeRAG – An AI-powered GitHub code analysis tool that pulls source code and commits from a repository, enabling interactive chat to retrieve relevant code snippets and insights.",
      technologies: [
        "OpenAI",
        "Gemini",
        "Next.js",
        "TypeScript",
        "Neon",
        "PgVector",
        "Clerk",
        "GoogleAuth",
        "TailwindCSS",
        "LangChain",
        "Docker",
        "Vercel",
        "RAG"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/scrapeRag",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/scraperag.png",
      video: "",
    },
    {
      title: "TDVRP app(Research internship)",
      href: "https://github.com/Farelart/VRP_app",
      dates: "Feb 2024 - Aug 2024",
      active: true,
      description:
        "An interactive application designed to generate extensive datasets for VRP (Vehicle Routing Problem) involving trucks and drones, and to simulate routes generated by our models.",
      technologies: ["FastAPI", "Gurobi", "Numpy", "Operational Research", "Imitation Learning", "Google Maps api","HTMX"],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/VRP_app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/vrp_app.png",
      video: "",
    },
    {
      title: "Petsoft",
      href: "https://github.com/Farelart/pet-soft",
      dates: "December 2024",
      active: true,
      description:
        "A pet management software that allows users to manage their pets, appointments, and medical records. It also includes a chatbot that provides information on pet care.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Server actions",
        "Typescript",
        "OpenAI"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/pet-soft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/petsoft.png",
      video: "",
    },
    
     {
      title: "Evento",
      href: "https://github.com/Farelart/Bytegrad_Professional_React_NextJS/tree/main/evento",
      dates: "November 2024",
      active: true,
      description:
        "A platform that allows users to view and filter events accross cities.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Server actions",
        "Typescript"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/Bytegrad_Professional_React_NextJS/tree/main/evento",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/envento.png",
      video: "",
    },
     {
      title: "RmtDev",
      href: "https://github.com/Farelart/Bytegrad-professional-JS/tree/main/rmtDev",
      dates: "October 2024",
      active: true,
      description:
        "A job board platform that allows users to view and apply to job offers.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Server actions",
        "Typescript"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/Bytegrad-professional-JS/tree/main/rmtDev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/rmtDev.png",
      video: "",
    },
     {
      title: "CorpComment",
      href: "https://github.com/Farelart/Bytegrad_Professional_React_NextJS/tree/main/corpComponent",
      dates: "November 2024",
      active: true,
      description:
        "A feedback platform that allows users to leave feedback on companies.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Server actions",
        "Typescript"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/Bytegrad_Professional_React_NextJS/tree/main/corpComponent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/corpComment.png",
      video: "",
    },
    {
      title: "GI-IADS Plateform",
      href: "https://github.com/MasrourTawfik/GIA-Platform",
      dates: "Oct 2023 - Jan 2024",
      active: true,
      description:
        "A nocode platform that allows users to create and deploy Machine Learning models without writing a single line of code. It uses a drag-and-drop interface to create and train models.",
      technologies: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Flask",
        "Scikit-learn",
        "tensorflow",
        "numpy",
        "matplotlib",
        "clustering",
        "Transfer learning"
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/MasrourTawfik/GIA-Platform/tree/master/frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/MasrourTawfik/GIA-Platform/tree/master/backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/giia.png",
      video: "",
    },
    {
      title: "Recommender System",
      href: "https://github.com/Farelart/Shop-recommender",
      dates: "November 2023 - December 2023",
      active: true,
      description:
        "A hybrid recommender system that combines popularity filtering and content-based filtering(BERT classification + cosine similarity) to recommend relevant posts and songs.",
      technologies: [
        "Transformers",
        "BERT",
        "NLP",
        "Hugging Face",
        "GPT-3",
        "Fine-tuning",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Scikit-learn",
        "Tensorflow",
        "Hadoop"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/Shop-recommender",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "/assets/projects/spotify-recommender.png",
      video: "",
    },
    {
      title: "PPE Detection",
      href: "https://github.com/Farelart/YOLO-custom-PPE-detection",
      dates: "November 2023 - December 2023",
      active: true,
      description: "PPE and Fire detection for heavy-industries workers. Made using transfer learning with Yolo v8.",
      technologies: [
        "YOLOv8",
        "Flask",
        "Bootstrap",
        "Javascript",
        "Roboflow",
        "Tensorflow",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Farelart/YOLO-custom-PPE-detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/ppe.png",
      video: "",
    },
    {
      title: "My Frontend Mentor Profile",
      href: "https://www.frontendmentor.io/profile/Farelart",
      dates: "Present",
      active: true,
      description:
        "Feel free to explore my Frontend Mentor profile to see the projects I've worked on. I try to complete one project every week",
      technologies: [
        "Next.js",
        "React.js",
        "Javascript",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.frontendmentor.io/profile/Farelart",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/projects/frontendmentor.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      mlh: "",
      links: [
        {
          title: "",
          href: "",
          icon: "",
        },
      ],
    },
  ],
} as const;
