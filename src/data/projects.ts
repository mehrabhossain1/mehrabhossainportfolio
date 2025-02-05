import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Shopr",
    href: "/projects",
    tags: [
      "Nextjs15",
      "Sanity.io",
      "Tailwindcss",
      "Typescript",
      "Framer Motion",
      "Zustand",
      "Clerk",
      "Stripe",
    ],
    image: {
      LIGHT: "/images/projects/shopr.webp",
      DARK: "/images/projects/shopr.webp",
    },
  },
  {
    index: 1,
    title: "Uni Management",
    href: "/projects",
    tags: [
      "React.js",
      "TypeScript",
      "Ant Design",
      "Redux",
      "Redux Toolkit",
      "React Router DOM",
      "React Hook Form",
      "Redux Persist",
      "Shadcn UI",
      "Express.js",
      "Mongoose",
      "Zod",
      "Tailwindcss",
    ],
    image: {
      LIGHT: "/images/projects/uni3.png",
      DARK: "/images/projects/uni3.png",
    },
  },
  {
    index: 2,
    title: "Zentry",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "GSAP"],
    image: {
      LIGHT: "/images/projects/zentry.webp",
      DARK: "/images/projects/zentry.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Shopr - Ecommerce",
    favicon: "/images/projects/logos/shopr.png",
    imageUrl: [
      "/images/projects/shopr.webp",
      "/images/projects/shopr2.png",
      "/images/projects/shopr3.png",
      "/images/projects/shopr4.png",
    ],
    description:
      "A modern e-commerce web application with seamless payment integration. Users can browse products, add items to their cart, and securely complete purchases. Built with a responsive design for a smooth shopping experience on any device",
    sourceCodeHref: "https://github.com/mehrabhossain1/shopr",
    liveWebsiteHref: "https://shopr-rho.vercel.app",
  },
  {
    name: "University Management System",
    favicon: "/images/projects/logos/university.png",
    imageUrl: [
      "/images/projects/uni2.png",
      "/images/projects/uni1.png",
      "/images/projects/uni3.png",
    ],
    description:
      "A comprehensive university management app designed to streamline academic operations. It supports three user roles: Admin, Faculty, and Student, each with role-specific functionalities.",
    sourceCodeHref:
      "https://github.com/mehrabhossain1/university-management-frontend",
    liveWebsiteHref: "https://university-management-swart-rho.vercel.app",
  },
  {
    name: "At-Taqwa IT Agency",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/attaqwa1.png",
      "/images/projects/attaqwa2.png",
    ],
    description:
      "A modern and dynamic IT agency website showcasing services, projects, and expertise. Built with an engaging UI and smooth animations using Framer Motion for an interactive user experience.",
    sourceCodeHref: "https://github.com/mehrabhossain1/At-Taqwa-IT",
    liveWebsiteHref: "https://at-taqwa-it.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/logo.gif",
    imageUrl: ["/images/projects/port1.png", "/images/projects/port2.png"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/mehrabhossain1/mehrabhossainportfolio",
    liveWebsiteHref: "https://mehrab-hossain.vercel.app",
  },
  {
    name: "Live Docs",
    favicon: "/images/projects/live_docs.png",
    imageUrl: ["/images/projects/live_docs.png"],
    description:
      "LiveDocs is a collaborative application, an improved Google Docs that manages millions of collaborators in real-time.",
    sourceCodeHref: "https://github.com/mehrabhossain1/live_docs",
    liveWebsiteHref: "https://live-docs-sable-five.vercel.app",
  },
  {
    name: "Zentry",
    favicon: "/images/projects/zentry.webp",
    imageUrl: ["/images/projects/zentry.webp"],
    description:
      "Build a visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling",
    sourceCodeHref: "https://github.com/mehrabhossain1/zentry",
    liveWebsiteHref: "https://zentry-ivory.vercel.app",
  },
  {
    name: "Syndicate IT",
    favicon: "/images/projects/synit1.png",
    imageUrl: ["/images/projects/synit1.png"],
    description:
      "Build a visually captivating website. Where we bring innovative digital solutions to businesses of all sizes. Our modern, fast, and user-friendly website ensures seamless navigation and accessibility for our clients.",
    sourceCodeHref: "https://github.com/mehrabhossain1/syndicate-IT",
    liveWebsiteHref: "https://syndicate-it.vercel.app",
  },
  {
    name: "Syndicate Travels",
    favicon: "/images/projects/syntravels1.png",
    imageUrl: ["/images/projects/syntravels1.png"],
    description:
      "Welcome to Syndicate Travels, your gateway to unforgettable travel experiences! Our modern and intuitive website is designed to make trip planning fast, easy, and hassle-free.",
    sourceCodeHref: "https://github.com/mehrabhossain1/syndicate-travels",
    liveWebsiteHref: "https://syndicatetravels.vercel.app",
  },
];
