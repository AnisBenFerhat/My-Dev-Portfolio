// Icon
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

// Types
import { SocialIconProps } from './Types';

// Navigation
export const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/experience', name: 'experience' },
  { path: '/work', name: 'my work' },
  { path: '/contact', name: 'contact' },
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
