export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  links: {
    github?: string
    live?: string
  }
}

export type Education = {
  school: string
  degree: string
  graduation: string
  highlights?: string[]
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const profile = {
  name: 'Adhisha Samarasinghe',
  headline: 'Computer Science student building reliable, user-focused software.',
  location: 'Malabe, Sri Lanka',
  availability: 'Summer 2026 internships',
  photo: '/profile.jpg',
  education: {
    school: 'university of westminster',
    degree: 'B.S. Computer Science',
    graduation: 'Expected 2027',
    highlights: ['Data Structures & Algorithms', 'Operating Systems', 'Databases'],
  } satisfies Education,
  summary:
    'I’m a CS student interested in full-stack development, systems, and practical ML. I enjoy taking projects from idea → clean UI → production-ready code.',
  social: [
    { label: 'GitHub', href: 'https://github.com/AdhishaSamarasinghe' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adhisha-samarasinghe-161991352/' },
    // Put your actual resume file at public/resume.pdf or replace with a hosted link.
    { label: 'Resume', href: '/resume.pdf' },
  ] satisfies SocialLink[],
} as const

export const ctas = {
  resumeLabel: 'Resume',
  resumeHref: '/resume.pdf',
  primaryEmailLabel: 'Email',
} as const

export const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS'],
  Tools: ['Git', 'Docker', 'PostgreSQL', 'Linux', 'Figma'],
} as const

export const projects: Project[] = [
  {
    title: 'Internship Tracker',
    description:
      'A fast, searchable tracker for applications with tags, reminders, and analytics. Built to stay lightweight and keyboard-friendly.',
    highlights: [
      'Designed a keyboard-first UI for fast data entry and review.',
      'Implemented tag + search filtering for quick recruiter-ready tracking.',
      'Added analytics view to summarize pipeline status over time.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'LocalStorage'],
    links: {
      github: 'https://github.com/your-handle/internship-tracker',
      live: 'https://your-demo-link.com',
    },
  },
  {
    title: 'Realtime Study Rooms',
    description:
      'Realtime rooms for focused co-working with timers, notes, and presence. Designed for mobile first, works great on slow networks.',
    highlights: [
      'Built realtime presence + rooms to support collaborative sessions.',
      'Optimized for mobile and degraded networks with efficient updates.',
      'Implemented simple room state management for predictable UX.',
    ],
    tech: ['React', 'WebSocket', 'Node.js'],
    links: {
      github: 'https://github.com/your-handle/study-rooms',
    },
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive visualizations for classic algorithms with step-through controls and explanations. Great for interview prep and teaching.',
    highlights: [
      'Created step-by-step controls and explanations for interview prep.',
      'Built reusable visualization primitives for multiple algorithms.',
      'Focused on clarity and performance for smooth animations.',
    ],
    tech: ['React', 'D3', 'TypeScript'],
    links: {
      github: 'https://github.com/your-handle/algorithm-visualizer',
    },
  },
]

export const contact = {
  email: 'you@example.com',
} as const
