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
import figma from "../Images/figma.svg";
import premierepro from "../Images/premierepro.svg";
import photoshop from "../Images/photoshop.svg";
import word from "../Images/word.svg";
import Affiliate from "../Images/Affiliate.jpg";
import BlockChain from "../Images/BlockChain.jpg";
import BlockDetails from "../Images/BlockDetails.jpg";
import Calculator from "../Images/Calculator.jpg";
import Electricity from "../Images/Electricity.jpg";
import Item from "../Images/Item.jpg";
import Recipe from "../Images/Recipe.jpg";

export const NavLinks = ["home", "about", "portfolio", "contact"];
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

export const Learning = [
  {
    title: "figma",
    logo: figma,
  },
];

export const OtherPrograms = [
  {
    title: "premiere",
    logo: premierepro,
  },
  {
    title: "photoshop",
    logo: photoshop,
  },
  {
    title: "microsoft word",
    logo: word,
  },
];

export const ProjectArr = [
  {
    background: BlockDetails,
    written: "coded, designed",
    title: "BLOCKDETAILS",
    description:
      "I created this website as a Clone for CoinmarketCap and Coingecko!",
    techStack: [typescript, react, mantine],
    website: "https://block-details.web.app/",
    github: "https://github.com/markpedong/blockdetails",
  },
  {
    background: Affiliate,
    written: "coded, designed",
    title: "SOLITUDE",
    description:
      "Find discounted deals and discounts for your favorite products!",
    techStack: [react, bootstrap, sass],
    website: "https://solitude.web.app/",
    github: "https://github.com/markpedong/affiliate-marketing",
  },
  {
    background: BlockChain,
    written: "coded, designed",
    title: "BLOCKCHAIN PROJECTS",
    description:
      "Browse different network in order to find the Project you need!",
    techStack: [bootstrap, sass, javascript],
    website: "https://blockchainprojects.web.app/",
    github: "https://github.com/markpedong/blockchainprojects",
  },
  {
    background: Electricity,
    written: "coded, designed",
    title: "ELECTRICITY CALCULATOR",
    description: "Make lives easier by knowing the cost of the Electricty",
    techStack: [javascript, sass, bootstrap],
    website: "https://elec-calculator.web.app/",
    github: "https://github.com/markpedong/Electricity-Calculator",
  },
  {
    background: Recipe,
    written: "coded",
    title: "FORKIFY ©️JONASSCHMEDTMANN",
    description:
      "This is just a test project when I started learning Javascript!",
    techStack: [javascript, css, html],
    website: "https://forkify-markpedong.web.app/",
    github: "https://github.com/markpedong/Forkify-APP",
  },
  {
    background: Item,
    written: "coded, designed",
    title: "ITEM TRACKER",
    description:
      "This is just a test project when I started learning Javascript!",
    techStack: [javascript, css, html],
    website: "https://project05-item-tracker.web.app/",
    github: "https://github.com/markpedong/Item-Tracker",
  },
  {
    background: Calculator,
    written: "coded, designed",
    title: "CALCULATOR",
    description: "Basic Calculator that could solve arithmetic expressions",
    techStack: [javascript, css, html],
    website: "https://project01-calculator.web.app/",
    github: "https://github.com/markpedong/Calculator",
  },
];
