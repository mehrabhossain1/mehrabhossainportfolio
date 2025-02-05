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
    title: "Live Docs",
    href: "/projects",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Shadcn UI",
      "Liveblocks",
      "Lexical Editor",
      "Clerk",
    ],
    image: {
      LIGHT: "/images/projects/live_docs.png",
      DARK: "/images/projects/live_docs.png",
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
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
