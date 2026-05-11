import { FaBootstrap, FaFacebookF, FaGithub, FaHtml5, FaLinkedinIn, FaNodeJs, FaReact, FaSass } from 'react-icons/fa6';
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
} from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { BsLightningCharge, BsPhoneFlip } from 'react-icons/bs';
import { FiLayers, FiMonitor, FiPenTool, FiZap } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import type { IconType } from 'react-icons';

import project1 from '../assets/images/project/techure.webp';
import project2 from '../assets/images/project/hotel-bd.webp';
import project3 from '../assets/images/project/xiomi.webp';
import project4 from '../assets/images/project/prozen.webp';
import project5 from '../assets/images/project/travo.webp';
import project6 from '../assets/images/project/agency.webp';

export type Skill = {
  name: string;
  level: number;
  category: 'Frontend' | 'Animation & UI' | 'Backend Learning';
  icon: IconType;
};

export type Project = {
  title: string;
  category: 'HTML' | 'ReactJS';
  description: string;
  stack: string[];
  image: string;
  live: string;
  repo: string;
  accent: string;
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'Facebook', href: 'https://facebook.com/', icon: FaFacebookF },
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedinIn },
];

export const skillGroups: Skill[] = [
  { name: 'HTML5', level: 95, category: 'Frontend', icon: FaHtml5 },
  { name: 'CSS3', level: 94, category: 'Frontend', icon: SiCss },
  { name: 'SCSS', level: 90, category: 'Frontend', icon: FaSass },
  { name: 'Bootstrap', level: 88, category: 'Frontend', icon: FaBootstrap },
  { name: 'JavaScript', level: 91, category: 'Frontend', icon: SiJavascript },
  { name: 'TypeScript', level: 84, category: 'Frontend', icon: SiTypescript },
  { name: 'ReactJS', level: 92, category: 'Frontend', icon: FaReact },
  { name: 'Next.js', level: 82, category: 'Frontend', icon: SiNextdotjs },
  { name: 'Redux Toolkit', level: 80, category: 'Frontend', icon: SiRedux },
  { name: 'GSAP', level: 86, category: 'Animation & UI', icon: SiGreensock },
  { name: 'Framer Motion', level: 88, category: 'Animation & UI', icon: SiFramer },
  { name: 'ScrollTrigger', level: 84, category: 'Animation & UI', icon: BsLightningCharge },
  { name: 'Responsive Design', level: 94, category: 'Animation & UI', icon: BsPhoneFlip },
  { name: 'Figma to HTML', level: 92, category: 'Animation & UI', icon: SiFigma },
  { name: 'Node.js', level: 68, category: 'Backend Learning', icon: FaNodeJs },
  { name: 'Express.js', level: 62, category: 'Backend Learning', icon: SiExpress },
  { name: 'MongoDB', level: 60, category: 'Backend Learning', icon: SiMongodb },
];

export const services = [
  {
    title: 'Frontend Web Development',
    icon: BiCodeAlt,
    description:
      'Responsive, accessible interfaces built with semantic markup, component systems, and polished interactions.',
  },
  {
    title: 'ReactJS Development',
    icon: FaReact,
    description:
      'Scalable React apps with reusable UI, clean state flow, hooks, routing, and production-ready structure.',
  },
  {
    title: 'Next.js Website Development',
    icon: SiNextdotjs,
    description: 'SEO-friendly, fast-loading websites with modern rendering patterns and thoughtful architecture.',
  },
  {
    title: 'Responsive Website Design',
    icon: FiMonitor,
    description: 'Fluid layouts tuned for phones, tablets, laptops, and wide screens without losing visual rhythm.',
  },
  {
    title: 'Landing Page Development',
    icon: FiLayers,
    description: 'Conversion-focused landing pages with sharp content hierarchy, rich visuals, and fast delivery.',
  },
  {
    title: 'Figma to HTML Conversion',
    icon: FiPenTool,
    description: 'Pixel-aware implementation from Figma using clean CSS, Tailwind, Bootstrap, or SCSS workflows.',
  },
  {
    title: 'UI Animation Integration',
    icon: HiOutlineSparkles,
    description: 'GSAP, ScrollTrigger, and Framer Motion animations that feel premium without hurting performance.',
  },
  {
    title: 'Performance Optimization',
    icon: FiZap,
    description: 'Sharper loading, lighter bundles, optimized assets, and smooth interactions across devices.',
  },
];

export const projects: Project[] = [
  {
    title: 'Techure - Modern Technology HTML Template',
    category: 'HTML',
    description:
      'A responsive technology-focused HTML template crafted with modern UI design, smooth animations, interactive sections, and clean frontend implementation for startup and agency websites.',
    stack: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    image: project1,
    live: 'https://techure.netlify.app/',
    repo: 'https://github.com/al-jabir/techure',
    accent: '#00D1FF',
  },
  {
    title: 'Hotel BD - Hotel Booking React Website',
    category: 'ReactJS',
    description:
      'A modern hotel booking web application built with ReactJS and Vite, featuring responsive layouts and reusable components.',
    stack: ['ReactJS', 'Vite', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: project2,
    live: 'https://hotel-bd.vercel.app/',
    repo: 'https://github.com/al-jabir/hotel-bd',
    accent: '#FFB400',
  },
  {
    title: 'Xiomi - Personal Portfolio HTML Template',
    category: 'HTML',
    description:
      'A modern personal portfolio HTML template featuring responsive layouts, smooth UI interactions, clean typography, and visually polished frontend design.',
    stack: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    image: project3,
    live: 'https://themeforest.net/item/xiomi-personal-portfolio-html-template/57826843?s_rank=17',
    repo: '#',
    accent: '#7C4DFF',
  },
  {
    title: 'Prozen - Business Consulting HTML Template',
    category: 'HTML',
    description:
      'A modern business consulting HTML template built with responsive layouts, clean UI structure, interactive sections, and professional frontend design.',
    stack: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    image: project4,
    live: 'https://themeforest.net/item/prozen-business-consulting-html-template/60481864?s_rank=8',
    repo: '#',
    accent: '#2ECC71',
  },
  {
    title: 'Travo - Tour Booking HTML Template',
    category: 'HTML',
    description:
      'A responsive travel booking HTML template crafted with modern UI design, interactive sections, smooth animations, and clean frontend implementation for tourism and booking platforms.',
    stack: ['HTML', 'SCSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    image: project5,
    live: 'https://themeforest.net/item/travo-tour-booking-html-template/57642881?s_rank=9',
    repo: '#',
    accent: '#FF6B6B',
  },
  {
    title: 'Modern Creative Agency Website',
    category: 'ReactJS',
    description: 'A responsive ReactJS agency website crafted with modern UI aesthetics and smooth interactions.',
    stack: ['ReactJS', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: project6,
    live: 'https://agency-websites.netlify.app/',
    repo: 'https://github.com/al-jabir/agency-website',
    accent: '#FF3D81',
  },
];

export const experiences = [
  {
    role: 'Junior Frontend Developer',
    company: 'ReactThemes',
    period: 'Sep 2025 - Present',
    points: [
      'Building modern responsive websites using HTML, CSS, SCSS, Bootstrap, JavaScript, and jQuery.',
      'Converting Figma designs into clean, responsive, and pixel-perfect frontend layouts.',
      'Creating interactive UI sections with smooth animations and basic GSAP effects.',
      'Improving responsive design, cross-browser compatibility, and frontend user experience.',
      'Working on business, agency, and modern landing page style frontend projects.',
    ],
  },

  {
    role: 'Frontend Developer Intern',
    company: 'PixelOne',
    period: 'Mar 2025 - May 2025',
    points: [
      'Converted Figma designs into fully responsive HTML, CSS, SCSS, Bootstrap, and JavaScript templates.',
      'Worked on ThemeForest-style business and agency HTML templates with pixel-perfect frontend implementation.',
      'Improved responsive layouts, cross-browser compatibility, and clean UI consistency across devices.',
      'Practiced real-world frontend workflow through design-to-code implementation and template customization.',
    ],
  },

  {
    role: 'Self Learning Journey',
    company: 'Frontend to Full Stack Path',
    period: '2021 - Ongoing',
    points: [
      'Started learning web development in 2021 with HTML, CSS, JavaScript, Bootstrap, SCSS, and responsive design fundamentals.',
      'Continuously improving frontend development skills through ReactJS, Next.js, TypeScript, Redux, and modern UI engineering.',
      'Practicing animation-focused frontend experiences using GSAP, ScrollTrigger, and interactive UI techniques.',
      'Currently exploring full-stack development with the MERN stack as a future career goal.',
      'Focused on building scalable, modern, and production-quality web applications through self-learning and real-world practice.',
    ],
  },
];

export const testimonials = [
  {
    name: 'Mariam Akter',
    role: 'Startup Founder',
    quote:
      'Al turned our rough concept into a polished React landing page with careful spacing, clean motion, and excellent mobile behavior.',
    rating: 5,
  },
  {
    name: 'Nayeem Hasan',
    role: 'Product Designer',
    quote:
      'His Figma-to-HTML work is thoughtful and precise. The final interface felt alive without becoming heavy or distracting.',
    rating: 5,
  },
  {
    name: 'Sadia Rahman',
    role: 'Project Lead',
    quote:
      'Reliable, detail-oriented, and strong with responsive layouts. He communicates clearly and ships frontend work with confidence.',
    rating: 5,
  },
];
