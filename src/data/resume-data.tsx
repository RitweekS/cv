import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ritweek Kumar",
  initials: "RK",
  location: "Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software Engineer with 3+ years in Full Stack Web and Mobile Development. Passionate about learning through experimentation and product development, with a foundation in DevOps to support scalable, efficient solutions.",
  summary:
    "Passionate Software Developer with a strong foundation in full-stack development, cloud computing, and DevOps practices. Proven track record in designing and implementing scalable, resilient, and user-centric applications. Adept at leveraging modern technologies to solve complex problems and deliver impactful solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/98692049?s=400&u=3e7961b48ad4cf0b082072122c672ac5fb240c9d&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "ritweeksingh8@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RitweekS",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritweek2001/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ritweek_singh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sarala Birla University",
      degree: "Bachelor of Computer Applications",
      start: "2019",
      end: "2022",
    },
    {
      school: "Lovely Professional University",
      degree: "Master of Computer Applications",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Bootlabs",
      link: "https://www.bootlabstech.com/",
      badges: ["hybrid"],
      title: "Software Engineer",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQHMWKmgnND5DQ/company-logo_200_200/company-logo_200_200/0/1630593268424/bootlabs_technologies_logo?e=1738800000&v=beta&t=r95dKIvmyTEZuN8jppIPLaKbgRaJmyIVGptI42TPK40",
      start: "2024",
      end: "present",
      description:""
    },
    {
      company: "MapmyIndia",
      link: "https://www.mapmyindia.com/",
      badges: ["onsite"],
      title: "Software Developer",
      logo: "https://www.mapmyindia.com/images/logo-m.png",
      start: "2023",
      end: "2024",
      description:
        "Worked on the development of an SDK to enable support for maps, traffic congestion, and route optimization. Technologies: React Native, TypeScript, Redux",
    },
    {
      company: "MapmyIndia",
      link: "https://www.mapmyindia.com/",
      badges: ["onsite"],
      title: "Software Associate",
      logo: "https://www.mapmyindia.com/images/logo-m.png",
      start: "2022",
      end: "2023",
      description:
        "Worked on the development of the GSNT application. Technologies: React Native,React, TypeScript, Redux",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Golang",
    "Node.js/ExpressJS",
    "SQL/NoSQL → Prisma,GORM",
    "WebSockets",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Docker Compose",
    "CI/CD"
  ],
  projects: [
    {
      title: "GSTN",
      techStack: [
        "React native",
        "TypeScript",
        "React",
      ],
      description:
        "",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
    
  ],
} as const;
