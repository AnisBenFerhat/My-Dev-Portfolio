// Icon
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

// Types
import { SocialIconProps, TechIconProps } from './Types';

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
  { category: 'Design', name: 'figma', path: '/dev-icons/figma-plain.svg' },
  { category: 'Version Control', name: 'github', path: '/dev-icons/github-original.svg' },
  { category: 'APIs', name: 'graphql', path: '/dev-icons/graphql-plain.svg' },
  { category: 'Front End', name: 'html5', path: '/dev-icons/html5-plain.svg' },
  { category: 'Front End', name: 'javascript', path: '/dev-icons/javascript-original.svg' },
  { category: 'CI/CD', name: 'jenkins', path: '/dev-icons/jenkins-original.svg' },
  { category: 'Testing', name: 'jest', path: '/dev-icons/jest-plain.svg' },
  { category: 'Project Management', name: 'jira', path: '/dev-icons/jira-plain.svg' },
  { category: 'Front End', name: 'nextjs', path: '/dev-icons/nextjs-original.svg' },
  { category: 'Back End', name: 'nodejs', path: '/dev-icons/nodejs-original.svg' },
  { category: 'Databases', name: 'postgresql', path: '/dev-icons/postgresql-plain.svg' },
  { category: 'Front End', name: 'react', path: '/dev-icons/react-original.svg' },
  { category: 'Front End', name: 'tailwindcss', path: '/dev-icons/tailwindcss-plain.svg' },
  { category: 'Front End', name: 'typescript', path: '/dev-icons/typescript-original.svg' },
  { category: 'Tools', name: 'vscode', path: '/dev-icons/vscode-original.svg' },
];
