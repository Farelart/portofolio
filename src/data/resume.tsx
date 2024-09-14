import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";



export const DATA = {
  name: "Yassine Yassif",
  initials: "YY",
  url: "https://yyassif.dev",
  location: "Quebec, CA",
  locationLink: "https://www.google.com/maps/place/quebec",
  description: "Goal-oriented Software Engineer | ML/DL Passionate. I am dedicated to building high-quality products.",
  summary:
    "I'm a passionate Software Engineer based in Quebec, Canada (Currently). With a strong foundation in Front-end, and Back-end technologies, alongside the focus on AI integration in my solutions. I specialize in creating dynamic, user-friendly web applications that not only meet client needs but also deliver an exceptional user experience. Mainly, [I pursued a double degree in computer science and engineering](/#education), and [competed in 3 hackathons for fun](/#hackathons).",
  avatarUrl: "/me.jpg",
  ogImage: "https://yyassif.dev/og-image.png",
  skills: [
    "TypeScript",
    "Python",
    "Java",
    "Rust",
    "C++",
    "Go",
    "R",
    "Node.js",
    "Next.js",
    "Django",
    "FastAPI",
    "React",
    "TailwindCSS",
    "LLMs (Large Language Models)",
    "PyTorch",
    "OpenAI-Gym",
    "OpenCV",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Git & GitHub / GitLab"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yassif.yassine@gmail.com",
    tel: "+1 581-672-6965",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yyassif",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yassineyassif",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yassineyassif",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:yassif.yassine@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "LMP3",
      href: "https://lmp3.ca",
      badges: [],
      location: "Rimouski, Canada",
      title: "Software Engineer",
      logoUrl: "/assets/work/lmp3.png",
      start: "Aug 2024",
      end: "Present",
      description: "",
    },
    {
      company: "PowerGO France",
      badges: [],
      href: "https://powergo.fr",
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/assets/work/powergo.png",
      start: "Feb 2024",
      end: "Jul 2024",
      description: "AI agents that use Retrieval-Augmented Generation (RAG) techniques to efficiently analyze enterprise documents. These agents will extract key insights to support data-driven decision-making.",
    },
    {
      company: "University of Quebec at Rimouski",
      href: "https://uqar.ca",
      badges: [],
      location: "Rimouski, Canada",
      title: "Software Architect",
      logoUrl: "/assets/work/uqar.png",
      start: "Jul 2023",
      end: "Oct 2023",
      description: "A robust IoT-based system architecture integrates real-time data logging with a user-friendly dashboard, utilizing cloud technology and LLM inference for data interpretation and action triggering.",
    },
    {
      company: "ONEE - Electricity Branch",
      href: "http://www.one.org.ma",
      badges: [],
      location: "Agadir, Morocco",
      title: "Networking Engineer",
      logoUrl: "/assets/work/onee.png",
      start: "Jul 2022",
      end: "Sep 2022",
      description: "Coordinated with Senior Engineers in validating a new protocol architecture for reliable and secure communication between various types of devices, such as sensors, RTUs and SCADA to achieve a robust control over the systems involved.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/assets/work/upwork.png",
      start: "Jan 2022",
      end: "Feb 2024",
      description: "I leverage AI expertise and web development skills to create customized and innovative solutions for my clients.",
    },
  ],
  education: [
    {
      school: "University of Moulay Ismail - ENSAM-Meknes",
      href: "http://www.ensam-umi.ac.ma/?lang=en",
      degree: "Bachelor's of Engineering in Artificial Intelligence & Data Science",
      logoUrl: "/assets/education/ensam.png",
      start: "2019",
      end: "2024",
    },
    {
      school: "Ibn Soulaiman Roudani High School",
      href: "https://www.facebook.com/ibnsoulaimanroudanitaroudant",
      degree: "Mathematical Sciences Baccalaureate",
      logoUrl: "/assets/education/ibn-soulaiman.png",
      start: "2016",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "LMP3",
      href: "https://lmp.ca",
      dates: "June 2024 - Present",
      active: true,
      description:
        "LMP3: Innovator Lab in advanced materials and manufacturing processes, focusing on Fishing 4.0, Drilling 4.0, and Manufacturing 4.0 for a sustainable industrial future.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Resend",
        "Strapi",
      ],
      links: [
        {
          type: "Website",
          href: "https://lmp3.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/projects/lmp3.png",
      video: "",
    },
    {
      title: "RAGMind",
      href: "https://github.com/yyassif/ragmind",
      dates: "March 2024 - Present",
      active: true,
      description: "RAGMind - RAG-Powered Conversational AI Assistant for Enterprise Data, Enforced by Generative AI.",
      technologies: [
        "OpenAI",
        "LiteLLM",
        "Next.js",
        "FastAPI",
        "TypeScript",
        "Supabase",
        "PgVector",
        "Resend",
        "Ollama",
        "GoogleAuth",
        "DuckDuckGo",
        "TailwindCSS",
        "LangChain",
        "LlamaIndex",
        "Sentry",
        "Docker",
        "Vercel",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/ragmind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/ragmind.png",
      video: "",
    },
    {
      title: "Fishing Boats Simulation in RL",
      href: "https://github.com/yyassif/gym-seaboat",
      dates: "June 2023 - July 2023",
      active: true,
      description: "Fishing Boats Simulation in OpenAI-Gym using Reinforcement Learning & PPO Algorithm, GUI Via PyGame.",
      technologies: [
        "OpenAI-Gym",
        "PyGame",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/gym-seaboat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/gym-seaboat.jpg",
      video: "",
    },
    {
      title: "PDF Document Q&A",
      href: "https://github.com/yyassif/nextjs-document-retrievalQA",
      dates: "February 2024 - March 2024",
      active: true,
      description: "Chat With Your Documents via RAG (Retrieval Augmented Generation) leveraging the power of LLMs & PgVecor Store.",
      technologies: [
        "OpenAI",
        "Next.js",
        "TypeScript",
        "Supabase",
        "PgVector",
        "Redis",
        "Ollama",
        "TailwindCSS",
        "LangChain",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/nextjs-document-retrievalQA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/document-qa.png",
      video: "",
    },
    {
      title: "Adeam.ma",
      href: "https://adeam.ma",
      dates: "January 2023 - September 2023",
      active: true,
      description:
        "Developed a platform featuring a landing page for team presentation and activities, and a dashboard providing students with digital course access and class-specific news feeds.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "NextAuth.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://adeam.ma",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/projects/adeam.png",
      video: "",
    },
    {
      title: "Squatex",
      href: "https://squatex.com",
      dates: "June 2023 - July 2023",
      active: true,
      description: "Squatex: Quebec's leader in renewable energy, driving innovation for a greener, sustainable future.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "tRPC",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://squatex.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/projects/squatex.png",
      video: "",
    },
    {
      title: "Amazon Prodcuts Recommendation via ALS Algorithm",
      href: "https://github.com/yyassif/docker-spark-hadoop-for-recommendation",
      dates: "December 2023",
      active: true,
      description:
        "Using All Big Data Technologies In Order To Apply ALS Algorithm To Recommend Amazon Prodcuts.",
      technologies: [
        "ALS Algorithm",
        "Spark",
        "Hadoop",
        "Scala",
        "Python",
        "Docker",
        "Makefile",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/docker-spark-hadoop-for-recommendation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/docker-spark-hadoop-for-recommendation.jpg",
      video: "",
    },
    {
      title: "Spotify Recommender",
      href: "https://github.com/yyassif/spotify-recommender",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Spotify Recommender System using collaborative filtering and content-based filtering.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Spotify-SDK",
        "FastAPI",
        "Scikit-learn"
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/yyassif/spotify-recommender",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/yyassif/spotify-fastapi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/spotify-recommender.png",
      video: "",
    },
    {
      title: "CV-Ranker",
      href: "https://github.com/yyassif/cvranker",
      dates: "June 2024",
      active: true,
      description: "CV Ranker Application using the Power of LLMs.",
      technologies: [
        "GPT-4o",
        "LangChain",
        "LlamaIndex",
        "FastAPI",
        "DuckDuckGO",
        "Docker",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/cvranker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/cvranker.jpg",
      video: "",
    },
    {
      title: "LGuide-AI",
      href: "https://github.com/yyassif/thinkai-lguide",
      dates: "May 2024",
      active: true,
      description: "LGuide-AI - Your Best Touristic Assistant, Empowered by Generative AI.",
      technologies: [
        "GPT-4o",
        "Google-Maps-API",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yyassif/thinkai-lguide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/lguideai.webp",
      video: "",
    },
    {
      title: "Headshot AI - Professional Headshots",
      href: "https://github.com/yyassif/headshot-ai",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        "Headshot AI, let you generates Professional AI Headshots in minutes with AI (Powered by Astria.ai).",
      technologies: [
        "Next.js",
        "Astria.AI",
        "Supabase",
        "Resend",
        "Shadcn UI",
        "TailwindCSS",
        "Magic UI",
        "Vercel",
        "Stripe",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/headshot-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/headshot-ai.png",
      video: "",
    },
    {
      title: "Data Augmentation by GANs",
      href: "https://github.com/yyassif/Data-Augmentation-GANs",
      dates: "April 2023 - June 2023",
      active: true,
      description:
        "Data Augmentation powered by GANs (Generative Adversarial Networks) architecture for industrial use cases, specifically Image Data Augmentation for quality inspection tasks.",
      technologies: [
        "PyTorch",
        "Pillow",
        "Pandas",
        "Numpy",
        "LaTex",
      ],
      links: [
        {
          type: "Overleaf",
          href: "https://www.overleaf.com/project/647782bbe6a354d0850c3e89",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/yyassif/Data-Augmentation-GANs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/Data-Augmentation-GANs.jpg",
      video: "",
    },
    {
      title: "kNN-Gzip - Deep Learning",
      href: "https://github.com/yyassif/kNN-Gzip-deep-learning",
      dates: "January 2024",
      active: true,
      description: "Simplistic Linear & Multiprocessed approach to sentiment analysis using Gzip Normalized Compression Distances with k nearest neighbors.",
      technologies: [
        "Gzip",
        "scikit-learn",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/kNN-Gzip-deep-learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/kNN-Gzip-deep-learning.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "UPF Coding Challenge",
      dates: "May 26th, 2021",
      location: "Fez, Morocco",
      description: "Solved all the problems securing the 2nd prize.",
      image: "/assets/hackatons/upf.png",
      mlh: "",
      links: [
        {
          title: "Gallery",
          href: "https://upf.ac.ma/detailevent.aspx?idevent=33",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "MCPC: Moroccan Collegiate Programming Contest",
      dates: "Oct 19th, 2021",
      location: "Morocco",
      description: "Solved 7 problems out of 12 in total, attaining the 18th place in the national elimination round.",
      image: "/assets/hackatons/mcpc.jpg",
      mlh: "",
      links: [
        {
          
          title: "Leaderboard",
          href: "https://x.com/mcpc__news/status/1450595581806747649",
          icon: <Icons.x className="size-3" />,
        }
      ],
    },
    {
      title: "ThinkAI Hackathon",
      dates: "May 16th - 19th, 2024",
      location: "Ben Guerir, Morocco",
      description: "Developed a virtual guide called LGuideAI that helps tourists to navigate morocco easily via the a geolocation system that serves for better discoveery of places.",
      image: "/assets/hackatons/thinkai.jpeg",
      mlh: "",
      links: [],
    },
  ]
} as const;
