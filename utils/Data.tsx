// Icon
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

// Types
import {
  EducationData,
  ExperienceData,
  HobbiesIconProps,
  LanguageIconProps,
  LearningIconProps,
  MyWorkData,
  SocialIconProps,
  SoftSkillProps,
  TechIconProps,
} from './Types';

// Navigation
export const links = [
  { path: '/', name: 'home' },
  { path: '#about', name: 'about' },
  { path: '#experience', name: 'experience' },
  { path: '#work', name: 'my work' },
  { path: '#contact', name: 'contact' },
];

// Socials
export const icons: SocialIconProps[] = [
  {
    path: 'https://www.linkedin.com/in/anis-ben-ferhat/',
    name: <FaLinkedinIn />,
  },
  {
    path: 'https://github.com/AnisBenFerhat?tab=overview&from=2024-01-01&to=2024-01-25',
    name: <IoLogoGithub />,
  },
];

// About

// Tech Icons
export const techIcons: TechIconProps[] = [
  { category: 'Front End', name: 'css3', path: '/dev-icons/css3-plain.svg' },
  { category: 'Design', name: 'figma', path: '/dev-icons/figma-original.svg' },
  { category: 'Version Control', name: 'github', path: '/dev-icons/github-original.svg' },
  { category: 'APIs', name: 'graphql', path: '/dev-icons/graphql-plain.svg' },
  { category: 'Front End', name: 'html5', path: '/dev-icons/html5-plain.svg' },
  { category: 'Front End', name: 'javascript', path: '/dev-icons/javascript-original.svg' },
  { category: 'Front End', name: 'typescript', path: '/dev-icons/typescript-original.svg' },
  { category: 'Front End', name: 'react', path: '/dev-icons/react-original.svg' },
  { category: 'Front End', name: 'nextjs', path: '/dev-icons/nextjs-original.svg' },
  { category: 'Front End', name: 'tailwindcss', path: '/dev-icons/tailwindcss-plain.svg' },
  { category: 'CI/CD', name: 'jenkins', path: '/dev-icons/jenkins-original.svg' },
  { category: 'Testing', name: 'jest', path: '/dev-icons/jest-plain.svg' },
  { category: 'Project Management', name: 'jira', path: '/dev-icons/jira-original.svg' },
  { category: 'Back End', name: 'nodejs', path: '/dev-icons/nodejs-original.svg' },
  { category: 'Databases', name: 'postgresql', path: '/dev-icons/postgresql-plain.svg' },
  { category: 'Tools', name: 'vscode', path: '/dev-icons/vscode-original.svg' },
];

// Soft Skills
export const softSkills: SoftSkillProps[] = [
  'Communication',
  'Teamwork',
  'Adaptability',
  'Problem Solving',
  'Time Management',
  'Leadership',
  'Creativity',
  'Empathy',
  'Conflict Resolution',
];

const hobbiesIcons: HobbiesIconProps = {
  sports: {
    football: '/assets/also/hobbies/ball-football-icon.svg',
    boxing: '/assets/also/hobbies/boxing-glove-icon.svg',
    running: '/assets/also/hobbies/running-icon.svg',
  },
  culinary: {
    cooking: '/assets/also/hobbies/cooking-chef-cap-icon.svg',
    cocktail: '/assets/also/hobbies/cocktail-drink-glass-icon.svg',
  },
  leisure: {
    'board game': '/assets/also/hobbies/casino-icon.svg',
    gaming: '/assets/also/hobbies/gaming-gamepad-icon.svg',
    programming: '/assets/also/hobbies/programmer-computer-icon.svg',
    yoga: '/assets/also/hobbies/meditation-yoga-icon.svg',
    meditation: '/assets/also/hobbies/flower-spa-icon.svg',
  },
  literature: {
    reading: '/assets/also/hobbies/book-icon.svg',
  },
  creative: {
    'interior design': '/assets/also/hobbies/paint-roller-bucket-icon.svg',
    // Add any other creative hobbies
  },
};

const languageIcons: LanguageIconProps = {
  bilingual: {
    french: '/assets/also/language/france-flag-icon.svg',
    english: '/assets/also/language/united-kingdom-flag-icon.svg',
  },
  'basic understanding': {
    spanish: '/assets/also/language/spain-country-flag-icon.svg',
    italian: '/assets/also/language/italy-flag-icon.svg',
  },
  learning: {
    japanese: '/assets/also/language/japan-flag-icon.svg',
  },
};

const learningIcons: LearningIconProps = {
  'web development': {
    'ux/ui': '/assets/also/learning/website-ui-ux-icon.svg',
    golang: '/assets/also/learning/go-programming-language-icon.svg',
    docker: '/assets/also/learning/docker-icon.svg',
    linux: '/assets/also/learning/linux-svgrepo-com.svg',
    'algebra/algorithm': '/assets/also/learning/formula-fx-icon.svg',
  },
  other: {
    astrology: '/assets/also/learning/virgo-symbol-icon.svg',
  },
};

export const alsoData = {
  hobbies: {
    title: 'Hobbies',
    icons: hobbiesIcons,
  },
  languages: {
    title: 'Language Skills',
    icons: languageIcons,
  },
  learning: {
    title: 'Learning',
    icons: learningIcons,
  },
  // Add more sections here based on subcategories
};

export const experienceData = [
  {
    company: 'Deezer',
    position: 'Frontend Engineer Intern',
    duration: 'Mar 2023 - Sept 2023 · 7 months',
    location: 'Paris, France',
  },
  {
    company: 'Le Creuset',
    position: 'Coach Manager',
    duration: 'Jun 2017 - Mar 2020 · 2 years 10 months',
    location: 'Paris, France',
  },
  {
    company: 'Le Creuset',
    position: 'Store Manager',
    duration: 'Nov 2013 - Mar 2020 · 6 years 5 months',
    location: 'Paris, France',
  },
  {
    company: 'MARIAGE FRÈRES - Selfridges',
    position: 'Assistant Manager',
    duration: 'Sept 2012 - Jun 2013 · 10 months',
    location: 'London, UK',
  },
];

export const educationData = [
  {
    title: 'Professional Title in Web and Mobile Web Developer, level 5 (Bac +2)',
    duration: 'Sept 2022 - Mar 2023',
    school: "O'clock School",
  },
  {
    title: 'Diploma of Practitioner in Naturopathy - Specialization in Coaching and Behavioral Psychology',
    duration: 'Sept 2020 - Oct 2023',
    school: 'Koréva Formation',
  },
  {
    title: 'Diploma in Therapeutic Shiatsu (4th Year)',
    duration: 'Sept 2019 - Sept 2023',
    school: 'School of Therapeutic Shiatsu, Bernard Bouheret',
  },
  {
    title: 'BTS - Management of Business Units',
    duration: '2005 - 2006',
    school: 'Guillaume Budé High School - Limeil-Brévannes',
  },
];

// Work

export const myWork: MyWorkData[] = [
  {
    id: 1,
    title: 'My Portfolio',
    description:
      'My portfolio website showcasing my projects and skills. Built with React, Next.js, Tailwind CSS and more.',
    github: 'https://github.com/AnisBenFerhat/My-Dev-Portfolio',
    screenshot: '/assets/work/portfolio-screenshot.png',
  },
  {
    id: 2,
    title: 'Nike Landing Page',
    description:
      'A landing page for Nike built with React, TypeScript, Tailwind CSS, framer-motion, and react-hook-form.',
    github: 'https://github.com/AnisBenFerhat/Nike-Clone',
    screenshot: '/assets/work/nike-screenshot.png',
  },
  {
    id: 3,
    title: 'Netflix Clone',
    description: 'A Netflix clone developed using React, TypeScript, and CSS Modules.',
    github: 'https://github.com/AnisBenFerhat/Netflix-Clone',
    screenshot: '/assets/work/netflix-screenshot.png',
  },
];
