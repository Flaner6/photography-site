import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { PortfolioData, ProjectItem } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Alex Morgan",
  role: "Creative Developer & Visual Designer",
  location: "San Francisco & Remote",
  status: "Available for new projects",
  bio: "I design and build thoughtful digital products, interactive web experiences, and visual stories. Focused on clean aesthetics, fluid motion, and resilient architecture.",
  email: "alex.morgan@example.com",
  socials: [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Email", href: "mailto:alex.morgan@example.com", icon: Mail },
  ],
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "1",
    title: "Luminary Design System",
    category: "Design",
    description: "A minimal, accessible UI component library and design token architecture.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    year: "2025",
    link: "https://example.com",
    tags: ["Figma", "UI/UX", "Design Systems"],
  },
  {
    id: "2",
    title: "Aura Audio Interface",
    category: "Development",
    description: "Next-generation ambient sound synthesiser with WebGL audio visualizers.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    year: "2025",
    link: "https://example.com",
    tags: ["React", "WebGL", "Web Audio API"],
  },
  {
    id: "3",
    title: "Nordic Minimal Interiors",
    category: "Photography",
    description: "Curated architectural photo series capturing natural light and brutalist geometry.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    tags: ["Architecture", "Editorial", "35mm"],
  },
  {
    id: "4",
    title: "Mono Workspace Identity",
    category: "Branding",
    description: "Complete visual identity and bespoke typography for a modern co-working collective.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    link: "https://example.com",
    tags: ["Identity", "Typography", "Print"],
  },
  {
    id: "5",
    title: "Kinetic Motion Engine",
    category: "Development",
    description: "Physics-based micro-interaction library built for fluid touch and pointer events.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    link: "https://example.com",
    tags: ["TypeScript", "Canvas", "Physics"],
  },
  {
    id: "6",
    title: "Dusk in Tokyo Series",
    category: "Photography",
    description: "Night street photography documenting cinematic neon hues and quiet rain-slicked alleys.",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
    year: "2024",
    tags: ["Street", "Night", "Color Grading"],
  },
];
