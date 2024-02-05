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
}

// Language Icon Props
export interface LanguageIconProps {
  bilingual: Record<string, string>;
  'basic understanding': Record<string, string>;
  learning: Record<string, string>;
}

// Learning Icon Props
export interface LearningIconProps {
  'web development': Record<string, string>;
  other: Record<string, string>;
}
