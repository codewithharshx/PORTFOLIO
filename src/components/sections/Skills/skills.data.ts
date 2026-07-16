import { IconType } from 'react-icons';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiPython,
  SiJavascript,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiVite,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { SiRazorpay } from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Java', icon: FaJava, color: '#5382A1' },
  // Frontend
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  // Database
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  // Auth & APIs
  { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#d63aff' },
  { name: 'REST APIs', icon: SiNodedotjs, color: '#00C7B7' },
  // AI & Data Science
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Pandas', icon: SiPandas, color: '#E70488' },
  { name: 'NumPy', icon: SiNumpy, color: '#4DABCF' },
  // Tools
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Razorpay', icon: SiRazorpay, color: '#072654' },
];
