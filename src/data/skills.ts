import { FramerMotionIcon, ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SiExpress, SiNextdotjs, SiPrisma } from "react-icons/si";

// Languages
import CsssSvg from "@/public/icons/css.svg";
import HtmlSvg from "@/public/icons/html.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import OpenAISvg from "@/public/icons/openai.svg";
// import PythonSvg from "@/public/icons/python.svg";
// import SassSvg from "@/public/icons/sass.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import MuiSvg from "@/public/icons/mui.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
// import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import AwsSvg from "@/public/icons/aws.svg";
import DockerSvg from "@/public/icons/docker.svg";
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      // {
      //   name: "SASS",
      //   icon: SassSvg,
      // },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      // {
      //   name: "Python",
      //   icon: PythonSvg,
      // },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      // {
      //   name: "Vite",
      //   icon: ViteSvg,
      // },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },

      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
  {
    sectionName: "Exploring",
    skills: [
      {
        name: "Open AI",
        icon: OpenAISvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
    ],
  },
];
