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
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const profile = {
  name: 'Adhisha Samarasinghe',
  headline: 'Computer Science student building reliable, user-focused software.',
  location: 'Malabe, Sri Lanka',
  availability: 'Summer 2026 internships',
  photo: 'profile.jpg',
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
    { label: 'Resume', href: '/Adhisha-Samarasinghe-Resume.pdf' },
  ] satisfies SocialLink[],
} as const

export const ctas = {
  resumeLabel: 'Resume',
  resumeHref: '/Adhisha-Samarasinghe-Resume.pdf',
  primaryEmailLabel: 'Email',
} as const

export const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS'],
  Tools: ['Git', 'Docker', 'PostgreSQL', 'Linux', 'Figma'],
} as const

export const projects: Project[] = [
  {
    title: 'WorkzUp – Job Marketplace Platform',
    description:
      'A full-stack job marketplace platform connecting recruiters and job seekers with secure authentication, real-time communication, and payment integration.',
    highlights: [
      'Implemented secure authentication and role-based access control',
      'Built job posting, application, and real-time messaging features',
      'Integrated PayHere payment gateway for recruiter payments',
      'Optimized API calls and database queries for better performance',
      'Implemented form validation and efficient state management',
      'Deployed frontend and backend using Vercel and Railway',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/AdhishaSamarasinghe/workzup',
      live: 'https://www.workzup.lk/',
    },
  },
  {
    title: 'WaffleHut – Animated Waffle Shop Landing Page',
    description:
      'A cinematic animated waffle shop landing page featuring scroll-based storytelling, smooth transitions, and immersive dessert-themed interactions.',
    highlights: [
      'Built scroll-controlled PNG sequence animations using HTML5 Canvas',
      'Implemented cinematic scrollytelling with GSAP ScrollTrigger',
      'Designed responsive modern UI with playful branding',
      'Created interactive transitions using Framer Motion',
      'Optimized image preloading and rendering performance',
      'Developed mobile-friendly animated layouts',
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'TypeScript', 'HTML5 Canvas'],
    links: {
      github: 'https://github.com/AdhishaSamarasinghe/wafflehut',
      live: '#',
    },
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern responsive portfolio website showcasing projects, skills, and frontend development experience.',
    highlights: [
      'Built reusable UI components using modern frontend practices',
      'Designed clean and premium user experience',
      'Optimized performance and smooth navigation',
      'Deployed using Vercel for reliable hosting',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/AdhishaSamarasinghe/portfolio',
      live: '#',
    },
  },
  {
    title: 'Band Practice Booking System',
    description:
      'A full-stack booking platform for scheduling music studio sessions and managing band availability efficiently.',
    highlights: [
      'Implemented weekly availability tracking system',
      'Built session booking and practice fee calculation features',
      'Integrated backend APIs with PostgreSQL database',
      'Designed responsive user-friendly scheduling interface',
      'Structured efficient frontend-to-backend communication',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    links: {
      github: 'https://github.com/AdhishaSamarasinghe/band-practice-scheduler',
      live: '#',
    },
  },
  {
    title: 'Guitar Guide – Learning & Reference Platform',
    description:
      'A responsive educational platform designed for learning guitar fundamentals, techniques, and guitar types.',
    highlights: [
      'Designed structured learning-focused UI',
      'Built reusable frontend components',
      'Implemented responsive layouts for all devices',
      'Created intuitive navigation for better usability',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/AdhishaSamarasinghe/guitar-guide',
      live: '#',
    },
  },
  
]

export const contact = {
  email: 'adhishasamarasinghe0@gmail.com',
} as const