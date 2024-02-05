// Icon
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

// Types
import {
  HobbiesIconProps,
  LanguageIconProps,
  LearningIconProps,
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
