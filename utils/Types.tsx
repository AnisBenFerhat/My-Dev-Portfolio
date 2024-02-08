// Navigation
export interface NavigationProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

// Socials
export interface SocialIconProps {
  path: string;
  name: JSX.Element;
}

export interface SocialProps {
  containerStyles: string;
  iconsStyles: string;
}

// About

// Tech Icon Props
export interface TechIconProps {
  category: string;
  name: string;
  path: string;
}

// Soft Skills Props
export type SoftSkillProps = string;

// Also

// Hobbies Icon Props
export interface HobbiesIconProps {
  sports: Record<string, string>;
  leisure: Record<string, string>;
  culinary: Record<string, string>;
  literature: Record<string, string>;
  creative: Record<string, string>;
  [key: string]: Record<string, string>;
}

// Language Icon Props
export interface LanguageIconProps {
  bilingual: Record<string, string>;
  'basic understanding': Record<string, string>;
  learning: Record<string, string>;
  [key: string]: Record<string, string>;
}

export interface LearningIconProps {
  'web development': Record<string, string>;
  other: Record<string, string>;
  [key: string]: Record<string, string>;
}

// Experience & Education

export interface ExperienceData {
  company: string;
  position: string;
  duration: string;
  location: string;
  description?: string;
}

export interface EducationData {
  title: string;
  duration: string;
  school: string;
}

//  Work

export interface MyWorkData {
  id: number;
  title: string;
  description: string;
  github: string;
  screenshot: string;
}
