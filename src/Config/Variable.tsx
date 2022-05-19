import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import design from "../Images/design.svg";
import development from "../Images/development.svg";
import maintenance from "../Images/maintenance.svg";
import design_dark from "../Images/design_dark.svg";
import development_dark from "../Images/development_dark.svg";
import maintenance_dark from "../Images/maintenance_dark.svg";
import html from "../Images/html.svg";
import css from "../Images/css.svg";
import javascript from "../Images/javascript.svg";
import bootstrap from "../Images/bootstrap.svg";
import sass from "../Images/sass.svg";
import react from "../Images/react.svg";
import git from "../Images/git.svg";
import typescript from "../Images/typescript.svg";
import mantine from "../Images/mantine.svg";

export const NavLinks = ["Home", "About", "Portfolio", "Contact"];
export const SocialLinks = [
  {
    icon: <FaGithubSquare size="2rem" />,
    link: "https://github.com/markpedong",
  },
  {
    icon: <FaLinkedin size="2rem" />,
    link: "https://www.linkedin.com/in/markpedong/",
  },
  {
    icon: <FaTwitterSquare size="2rem" />,
    link: "https://www.twitter.com",
  },
  {
    icon: <FaInstagramSquare size="2rem" />,
    link: "https://www.instagram.com",
  },
];

export const Skills = [
  {
    title: "design",
    logo: design,
    logo_dark: design_dark,
    description:
      "I can create a site that meets your requirements and incorporates your suggestions. I can also build the site from the ground up and collaborate with you throughout the process.",
  },
  {
    title: "development",
    logo: development,
    logo_dark: development_dark,
    description:
      "Development of website that will suit the client needs and provide the features and functions need for the certain website so that I could perfom the task efficiently.",
  },
  {
    title: "maintenance",
    logo: maintenance,
    logo_dark: maintenance_dark,
    description:
      "Updating website frequently so that it can be more user-friendly and more effective. I will do my best to make sure that the website is always up-to-date.",
  },
];

export const ProgramsUsing = [
  {
    title: "html",
    logo: html,
  },
  {
    title: "css",
    logo: css,
  },
  {
    title: "javascript",
    logo: javascript,
  },
  {
    title: "bootstrap",
    logo: bootstrap,
  },
  {
    title: "sass",
    logo: sass,
  },
  {
    title: "react",
    logo: react,
  },
  {
    title: "git",
    logo: git,
  },
  {
    title: "typescript",
    logo: typescript,
  },
  {
    title: "mantine",
    logo: mantine,
  },
];
