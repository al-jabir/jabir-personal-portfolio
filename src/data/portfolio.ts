import {
  FaBootstrap,
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGreensock,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { BsLightningCharge, BsPhoneFlip } from "react-icons/bs";
import { FiLayers, FiMonitor, FiPenTool, FiZap } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import type { IconType } from "react-icons";

import project1 from '../assets/project/1.webp';
import project2 from '../assets/agency.png';
import project3 from '../assets/agency.png';
import project4 from '../assets/agency.png';
import project5 from '../assets/agency.png';

export type Skill = {
  name: string;
  level: number;
  category: "Frontend" | "Animation & UI" | "Backend Learning";
  icon: IconType;
};

export type Project = {
  title: string;
  category: "HTML" | "ReactJS" | "NextJS";
  description: string;
  stack: string[];
  image: string;
  live: string;
  repo: string;
  accent: string;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com/", icon: FaFacebookF },
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: FaLinkedinIn },
];

export const skillGroups: Skill[] = [
  { name: "HTML5", level: 95, category: "Frontend", icon: FaHtml5 },
  { name: "CSS3", level: 94, category: "Frontend", icon: SiCss },
  { name: "SCSS", level: 90, category: "Frontend", icon: FaSass },
  { name: "Bootstrap", level: 88, category: "Frontend", icon: FaBootstrap },
  { name: "JavaScript", level: 91, category: "Frontend", icon: SiJavascript },
  { name: "TypeScript", level: 84, category: "Frontend", icon: SiTypescript },
  { name: "ReactJS", level: 92, category: "Frontend", icon: FaReact },
  { name: "Next.js", level: 82, category: "Frontend", icon: SiNextdotjs },
  { name: "Redux Toolkit", level: 80, category: "Frontend", icon: SiRedux },
  { name: "GSAP", level: 86, category: "Animation & UI", icon: SiGreensock },
  { name: "Framer Motion", level: 88, category: "Animation & UI", icon: SiFramer },
  { name: "ScrollTrigger", level: 84, category: "Animation & UI", icon: BsLightningCharge },
  { name: "Responsive Design", level: 94, category: "Animation & UI", icon: BsPhoneFlip },
  { name: "Figma to HTML", level: 92, category: "Animation & UI", icon: SiFigma },
  { name: "Node.js", level: 68, category: "Backend Learning", icon: FaNodeJs },
  { name: "Express.js", level: 62, category: "Backend Learning", icon: SiExpress },
  { name: "MongoDB", level: 60, category: "Backend Learning", icon: SiMongodb },
];

export const services = [
  {
    title: "Frontend Web Development",
    icon: BiCodeAlt,
    description: "Responsive, accessible interfaces built with semantic markup, component systems, and polished interactions.",
  },
  {
    title: "ReactJS Development",
    icon: FaReact,
    description: "Scalable React apps with reusable UI, clean state flow, hooks, routing, and production-ready structure.",
  },
  {
    title: "Next.js Website Development",
    icon: SiNextdotjs,
    description: "SEO-friendly, fast-loading websites with modern rendering patterns and thoughtful architecture.",
  },
  {
    title: "Responsive Website Design",
    icon: FiMonitor,
    description: "Fluid layouts tuned for phones, tablets, laptops, and wide screens without losing visual rhythm.",
  },
  {
    title: "Landing Page Development",
    icon: FiLayers,
    description: "Conversion-focused landing pages with sharp content hierarchy, rich visuals, and fast delivery.",
  },
  {
    title: "Figma to HTML Conversion",
    icon: FiPenTool,
    description: "Pixel-aware implementation from Figma using clean CSS, Tailwind, Bootstrap, or SCSS workflows.",
  },
  {
    title: "UI Animation Integration",
    icon: HiOutlineSparkles,
    description: "GSAP, ScrollTrigger, and Framer Motion animations that feel premium without hurting performance.",
  },
  {
    title: "Performance Optimization",
    icon: FiZap,
    description: "Sharper loading, lighter bundles, optimized assets, and smooth interactions across devices.",
  },
];

export const projects: Project[] = [
  {
    title: "Travel Website",
    category: "ReactJS",
    description: "A cinematic booking interface with destination storytelling, responsive cards, and fluid transitions.",
    stack: ["ReactJS", "Tailwind", "Framer Motion"],
    image: project1,
    live: "#",
    repo: "#",
    accent: "#56f0c6",
  },
  {
    title: "Agency Website with GSAP",
    category: "HTML",
    description: "A bold agency experience with scroll-driven reveals, kinetic typography, and smooth section pacing.",
    stack: ["ReactJS", "GSAP", "ScrollTrigger"],
    image: project2,
    live: "#",
    repo: "#",
    accent: "#ff6f61",
  },
  {
    title: "Personal Portfolio Website",
    category: "ReactJS",
    description: "A high-end developer portfolio with dark mode, magnetic CTAs, and SEO-ready presentation.",
    stack: ["Vite", "React", "EmailJS"],
    image: project3,
    live: "#",
    repo: "#",
    accent: "#6ddcff",
  },
  {
    title: "Business Landing Page",
    category: "HTML",
    description: "A polished business page with conversion sections, animated statistics, and elegant content blocks.",
    stack: ["HTML5", "SCSS", "Bootstrap"],
    image: project4,
    live: "#",
    repo: "#",
    accent: "#f8c76b",
  },
  {
    title: "Dashboard UI",
    category: "NextJS",
    description: "A clean analytics dashboard with reusable widgets, charts-ready layout, and responsive navigation.",
    stack: ["React", "TypeScript", "Redux Toolkit"],
    image: project5,
    live: "#",
    repo: "#",
    accent: "#56f0c6",
  },
];

export const experiences = [
  {
    role: "Junior Frontend Developer",
    company: "ReactThemes",
    period: "Sep 2025 - Present",
    points: [
      "Building modern ReactJS websites with clean component architecture.",
      "Creating reusable UI components and animation-rich interfaces.",
      "Working with responsive layouts, scalable styles, APIs, and frontend functionality.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "PixelOne",
    period: "Mar 2025 - May 2025",
    points: [
      "Converted Figma designs into responsive HTML, CSS, Bootstrap, and JavaScript websites.",
      "Improved cross-browser compatibility and assisted frontend implementation tasks.",
      "Practiced production discipline through real design-to-code delivery cycles.",
    ],
  },
  {
    role: "Self Learning Journey",
    company: "MERN Stack Path",
    period: "2021 - Ongoing",
    points: [
      "Started learning web development in 2021 with HTML, CSS, JavaScript, and responsive design fundamentals.",
      "Progressed into ReactJS, TypeScript, animation libraries, and modern frontend architecture.",
      "Now learning advanced MERN Stack development with Node.js, Express.js, MongoDB, and full-stack project structure.",
    ],
  },
];

export const testimonials = [
  {
    name: "Mariam Akter",
    role: "Startup Founder",
    quote: "Al turned our rough concept into a polished React landing page with careful spacing, clean motion, and excellent mobile behavior.",
    rating: 5,
  },
  {
    name: "Nayeem Hasan",
    role: "Product Designer",
    quote: "His Figma-to-HTML work is thoughtful and precise. The final interface felt alive without becoming heavy or distracting.",
    rating: 5,
  },
  {
    name: "Sadia Rahman",
    role: "Project Lead",
    quote: "Reliable, detail-oriented, and strong with responsive layouts. He communicates clearly and ships frontend work with confidence.",
    rating: 5,
  },
];
