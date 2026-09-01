import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  status: string;
  bio: string;
  email: string;
  socials: SocialLink[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Development' | 'Design' | 'Photography' | 'Branding' | string;
  description: string;
  imageUrl: string;
  year: string;
  link?: string;
  tags: string[];
}
