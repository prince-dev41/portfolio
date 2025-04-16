import { Globe2Icon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prince Ekpinse",
  age: 19,
  initials: "PE",
  url: "https://conorq.com",
  location: "Cotonou, Republic of Benin",
  title: "Front-end Developer @Freelance",
  about: [
    "I'm a Front-End Developer passionate about building intuitive, responsive, and creative web experiences. With a strong foundation in React, Next.js, and Tailwind CSS, I specialize in translating ideas into clean, functional interfaces that elevate user engagement and bring digital products to life.",
    
    "Whether working on personal SaaS projects like LinkVibe, H-Calendar or contributing to tech-for-good initiatives, I thrive at the intersection of design and code. I also explore API integrations, real-time analytics, and user-first experiences to push the limits of what front-end can do.",
    
    "Beyond development, I'm an active voice in the African tech community on LinkedIn, sharing my journey, building in public, and inspiring others to create with purpose. I'm always open to exciting freelance opportunities and innovative collaborations."
  ],
  locationLink: "https://www.google.com/maps/place/boulder",
  description: "Security Engineer | Cloud Infrastructure Security | Secure Software Development",
  summary: "Security engineer with expertise in developing secure full-stack applications, implementing zero-trust deployment pipelines, and automating security controls. Focused on proactive security design patterns for cloud infrastructure (AWS, GCP) and container technologies.",
  avatarUrl: "/me.png",
  skills: [
    "Cloud Security (AWS/GCP)",
    "CI/CD Security",
    "Docker Containerization",
    "Infrastructure as Code",
    "Zero-Trust Architecture",
    "Security Automation",
    "Terraform",
    "Ansible",
    "TypeScript/JavaScript",
    "Python",
    "Next.js/React",
    "FastAPI",
    "SQL/Database Security",
    "GitHub Actions",
    "Linux Administration",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "conorquinlan@cloud.com",
    tel: "+12064503502",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cqdev-co",
        icon: HomeIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/conorgquinlan",
        icon: HomeIcon,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/realconorcodes",
        icon: HomeIcon,
        navbar: true,
      },
    },
  },
  coreCompetencies: [
    {
      area: "Application Security",
      skills: ["Secure SDLC implementation", "Dependency vulnerability management", "Authentication/authorization design", "API security", "Input validation"]
    },
    {
      area: "Infrastructure Security",
      skills: ["Container security", "Cloud security posture management", "IaC security scanning", "Network segmentation", "Encryption implementation"]
    },
    {
      area: "DevSecOps",
      skills: ["CI/CD pipeline security", "Secret management", "Automated security testing", "Compliance as code", "Security monitoring"]
    },
  ],
  work: [
    {
      company: "Cyera",
      href: "https://cyera.io",
      badges: ["Security", "Full-Stack"],
      location: "Boulder, CO",
      title: "Security Engineer",
      logoUrl: "/logos/cyera.svg",
      start: "September 2024",
      end: "Present",
      description:
        "Worked on securing the Cyera Infrastructure and Application using various open-source tools and technologies.  Key accomplishments:",
      highlights: [
        "Built and containerized a security bot on GCR to automate security tasks and detections, significantly reducing routine manual work for engineers and saving money",
        "Designed and implemented an AWS RDS PostgreSQL database with encryption at rest and in transit to protect sensitive data, ensuring compliance with best data protection standards",
        "Developed and maintained tools, scripts, and platforms for enhanced security observability and control",
        "Proactively fortified container security by systematically updating Docker images to the latest stable versions and remediating critical/high/moderate CVEs in alignment with CIS Benchmarks and OWASP best practices",
        "Strengthened application security posture and ensured compliance with stringent security frameworks across repositories and infrastructure",
        "Developed secure authentication patterns using TypeScript, TailwindCSS and ShishCN",
        "Implemented least-privilege principle for security automation using GitHub Actions"
      ]
    },
    {
      company: "PearAI",
      href: "https://trypear.ai",
      badges: ["Open Source", "Security"],
      location: "Boulder, CO",
      title: "Open-Source Contributor",
      logoUrl: "/ekpinse.webp",
      start: "June 2024",
      end: "Present",
      description:
        "Contributed security-focused improvements to open source projects. Key accomplishments:",
      highlights: [
        "Developed a CI/CD pipeline for an open-source application, ensuring builds are tested across Linux, Mac, and Windows platforms, enhancing efficiency and reliability",
        "Contributed to PearAI's Server and Submodule, integrating key features like Anthropic support, Gemini support, and applying Secure Software Engineering practices. Integrated ML fail-safe measures to ensure sleek user experience",
        "Performed code reviews and maintained best practices for managing a large GitHub repository, ensuring robust and secure coding standards",
        "Integrated secure Terraform deployment patterns for AWS infrastructure",
        "Implemented secure API integrations for Google Gemini"
      ]
    },
    {
      company: "Netskope",
      badges: ["Security", "SOC"],
      href: "/ekpinse.webp",
      location: "Clayton, MO",
      title: "Information Security Intern",
      logoUrl: "/logos/netskope.png",
      start: "January 2024",
      end: "September 2024",
      description:
        "Implemented secure infrastructure automation practices for AWS deployments. Key accomplishments:",
      highlights: [
        "Automated end-to-end deployment utilizing Ansible and Terraform to deploy AWS infrastructure using GitHub Actions, implementing robust security through AWS Security Groups and using GitHub Actions secrets management",
        "Led the migration of a Hack app from development to production using IaC, ensuring optimal performance, scalability, and security that showcases production-ready configurations",
        "Implemented Security Stack monitoring dashboard utilizing scheduled GitHub Actions workflows that refreshed Docker Soaker dashboard using Python scripts",
        "Deployed OpenCTI using Docker, GCP, and Ansible, with seamless integration of CI/CD pipelines",
        "Expert in sourcegraph, shared components, file cryptography and Ready to enhance threat intelligence",
        "Proven ability to design scalable, reliable, and secure cloud infrastructure while automating deployment processes for optimal efficiency"
      ]
    },
  ],
  education: [
    {
      school: "HECM University",
      href: "https://du.edu",
      degree: "B.S. in Software and Computer Science;",
      logoUrl: "/logos/du.svg",
      start: "October 2023",
      end: "October 2026",
    },
  ],
  projects: [
    {
      title: "Portfolio",
      href: "https://www.conorq.com",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Developed a portfolio website to demonstrate my skills and system design capabilities.",
      technologies: [
        "NextJS",
        "TypeScript",
        "ShadCN",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://conorq.com",
          icon: <Globe2Icon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cqdev-co/portfolio",
          icon: HomeIcon,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Security - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      logo: "/aws-security-cert.png"
    },
  ],
} as const;