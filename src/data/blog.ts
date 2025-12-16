export type BlogCategory = 'development' | 'design' | 'career' | 'tutorials' | 'thoughts';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  featured?: boolean;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
}

export interface BlogCategoryInfo {
  key: BlogCategory | 'all';
  label: string;
  color: string;
}

export const blogCategories: BlogCategoryInfo[] = [
  { key: 'all', label: 'All Posts', color: '#737373' },
  { key: 'development', label: 'Development', color: '#3b82f6' },
  { key: 'design', label: 'Design', color: '#ec4899' },
  { key: 'tutorials', label: 'Tutorials', color: '#10b981' },
  { key: 'career', label: 'Career', color: '#f59e0b' },
  { key: 'thoughts', label: 'Thoughts', color: '#8b5cf6' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'scalable-react-architecture-for-modern-projects',
    title: 'Scalable React Architecture for Modern Personal Projects',
    excerpt: 'How I structure React applications like NexaOS and Agrest Website to stay scalable, modular, and easy to maintain.',
    content: `
## Introduction

When building personal projects that grow over time—like **NexaOS**, **Agrest Website**, or **Talkify**—you quickly realize that architecture matters as much as features.

In this article, I’ll share the patterns I personally use to keep my React projects scalable and maintainable.

## Component Architecture

### 1. Atomic Design (Practical Version)

I use a simplified version of Atomic Design:
- **Atoms**: Buttons, Inputs, Icons  
- **Molecules**: Cards, Modals  
- **Organisms**: Sections, Layouts  
- **Pages**: Route-level components  

This structure keeps everything clean and reusable.

### 2. Separation of Logic & UI

I separate:
- **UI components**  
- **Hooks for logic**  
- **Services for API**  

This makes testing and refactoring much easier.

### 3. Composition Over Inheritance

React is built for composition.  
I use:
- children props  
- render props  
- layout wrappers  

This keeps components flexible.

## State Management

I choose based on project size:

- **Local State** → small components  
- **Context** → theme, language  
- **Zustand** → global state (used in NexaOS)  

## Performance Optimization

Some techniques I use:

1. Code splitting with dynamic imports  
2. Memoization with useMemo/useCallback  
3. Lazy loading images  
4. Avoiding unnecessary re-renders  

## Conclusion

You don’t need enterprise-level architecture to build scalable apps.  
You just need **clear structure, reusable components, and consistent patterns**.
  `,
    category: 'development',
    tags: ['React', 'Architecture', 'TypeScript', 'NexaOS', 'Agrest Website'],
    image: '/images/blog/react-architecture.jpg',
    publishedAt: '2024-01-15',
    readTime: 7,
    featured: true,
    author: {
      name: 'Amirhossein Agrest',
      avatar: '/images/avatar.jpg',
      role: 'Frontend Architect',
    },
  },
  {
    id: 'post-2',
    slug: 'design-system-for-agrest-projects',
    title: 'How I Built a Design System for Agrest Projects',
    excerpt: 'A practical guide to building a design system like the one I created for Agrest Website and NexaOS.',
    content: `
## What is a Design System?

A design system is a collection of reusable components, tokens, and rules that help you build consistent UI across multiple projects.

I built my own design system for:
- **Agrest Website**
- **NexaOS**
- **AGgram**

## Getting Started

### 1. Define Your Principles

My core principles:
- Consistency  
- Accessibility  
- Simplicity  
- Reusability  

### 2. Design Tokens

I use tokens for:
- Colors  
- Typography  
- Spacing  
- Shadows  
- Border radius  

These tokens are shared across all components.

### 3. Component Library

I start with:
- Buttons  
- Inputs  
- Cards  
- Modals  
- Navigation  

Then I build more complex components.

## Documentation

I document:
- Usage examples  
- Props  
- Variants  
- Accessibility notes  

## Conclusion

A design system doesn’t need to be huge.  
It just needs to be **consistent, reusable, and easy to maintain**.
  `,
    category: 'design',
    tags: ['Design System', 'UI/UX', 'Agrest Website', 'NexaOS'],
    image: '/images/blog/design-system.jpg',
    publishedAt: '2024-01-10',
    readTime: 10,
    featured: true,
    author: {
      name: 'Amirhossein Agrest',
      avatar: '/images/avatar.jpg',
      role: 'Frontend Architect',
    },
  },
  {
    id: 'post-3',
    slug: 'typescript-patterns-i-use-in-my-projects',
    title: 'Advanced TypeScript Patterns I Use in My Projects',
    excerpt: 'A practical look at the TypeScript patterns I use in projects like NexaOS, Agrest Website, and AgrestChan.',
    content: `
## Introduction

TypeScript becomes truly powerful when you start using its advanced features.  
In my projects—like **NexaOS**, **Agrest Website**, and **AgrestChan**—I rely on several patterns to keep the codebase clean and scalable.

## Generic Constraints

I use generic constraints to build reusable hooks and utility functions.

## Conditional Types

Conditional types help me create flexible types for UI components and API responses.

## Template Literal Types

Template literal types are great for defining strict string patterns, especially for routing and component variants.

## Conclusion

These patterns aren't just "advanced"—they're practical tools that make real-world projects easier to maintain.
  `,
    category: 'tutorials',
    tags: ['TypeScript', 'Patterns', 'NexaOS', 'Agrest Website'],
    image: '/images/blog/typescript.jpg',
    publishedAt: '2024-01-05',
    readTime: 8,
    featured: false,
    author: {
      name: 'Amirhossein Agrest',
      avatar: '/images/avatar.jpg',
      role: 'Frontend Architect',
    },
  },
  {
    id: 'post-4',
    slug: 'how-i-grow-as-a-self-taught-developer',
    title: 'How I Grow as a Self‑Taught Developer',
    excerpt: 'My personal approach to improving as an independent developer through projects, consistency, and curiosity.',
    content: `
## My Journey

I didn’t follow a traditional path.  
I grew by building real projects like **Talkify**, **Velora Shop**, **AGgram**, and **NexaOS**.

## Technical Growth

I focus on:
- Deep understanding of React + TypeScript  
- Building real products  
- Learning architecture through practice  
- Studying open-source projects  

## Soft Skills

Even as an independent developer, soft skills matter:
- Communication  
- Planning  
- Problem solving  
- Consistency  

## Building My Brand

I share my work through:
- GitHub  
- My personal website  
- Open-source contributions  
- Writing blog posts like this one  

## Conclusion

Growth isn’t about titles.  
It’s about building, learning, and staying consistent.
  `,
    category: 'career',
    tags: ['Career', 'Self‑Taught', 'Growth', 'Projects'],
    image: '/images/blog/career.jpg',
    publishedAt: '2023-12-28',
    readTime: 6,
    featured: true,
    author: {
      name: 'Amirhossein Agrest',
      avatar: '/images/avatar.jpg',
      role: 'Independent Developer',
    },
  },
  {
    id: 'post-5',
    slug: 'minimalism-in-my-software-design',
    title: 'How I Use Minimalism in My Software Design',
    excerpt: 'A look at how minimalism shapes the UI and architecture of my projects like Agrest Website and NexaOS.',
    content: `
## Why Minimalism Matters

Minimalism helps reduce cognitive load and makes interfaces easier to use.

## Principles I Follow

1. Every component must have a purpose  
2. Remove unnecessary complexity  
3. Keep UI clean and readable  
4. Focus on clarity  

## Where I Apply It

- UI design in **Agrest Website**  
- Window system in **NexaOS**  
- Component structure in **AGgram**  
- API design in **Velora Shop**  

## Conclusion

Minimalism isn't about removing features—it's about removing noise.
  `,
    category: 'thoughts',
    tags: ['Minimalism', 'Design', 'UI/UX', 'NexaOS'],
    image: '/images/blog/minimalism.jpg',
    publishedAt: '2023-12-20',
    readTime: 5,
    featured: false,
    author: {
      name: 'Amirhossein Agrest',
      avatar: '/images/avatar.jpg',
      role: 'Frontend Architect',
    },
  },
  {
    id: 'post-6',
    slug: 'framer-motion-in-my-projects',
    title: 'How I Use Framer Motion to Create Smooth UI Animations',
    excerpt: 'A practical guide to the animation techniques I use in Agrest Website, NexaOS, and AGgram.',
    content: `
## Introduction

Animations can elevate the user experience when used correctly.  
I use **Framer Motion** in projects like **Agrest Website**, **NexaOS**, and **AGgram**.

## Key Concepts I Use

- Variants for reusable animations  
- Layout animations for smooth transitions  
- Gestures for interactive UI  
- Exit animations for modals and menus  

## Best Practices

1. Keep animations subtle  
2. Use motion to guide attention  
3. Respect reduced-motion preferences  
4. Test performance  

## Conclusion

Framer Motion makes it easy to create delightful, modern interfaces.
  `,
    category: 'tutorials',
    tags: ['Framer Motion', 'React', 'Animation', 'NexaOS'],
    image: '/images/blog/framer-motion.jpg',
    publishedAt: '2023-12-15',
    readTime: 8,
    featured: false,
    author: {
      name: 'Amirhossein Agrest',
      avatar: '/images/avatar.jpg',
      role: 'Frontend Developer',
    },
  },
  {
  id: 'post-7',
  slug: 'building-talkify-messaging-app',
  title: 'How I Built Talkify: Real‑Time Messaging Architecture',
  excerpt: 'A deep dive into the architecture behind Talkify, my real‑time messaging app inspired by Telegram.',
  content: `
## Introduction

Talkify started as a simple idea: build a clean, fast, real‑time messaging app with a modern UI.  
In this post, I’ll walk through the architecture and decisions behind it.

## Core Technologies

- React + TypeScript  
- Tailwind CSS  
- Node.js  
- WebSocket (Socket.io)  

## Real‑Time Messaging

I implemented WebSocket channels for:
- Sending messages  
- Receiving messages instantly  
- Typing indicators  
- Online/offline status  

## UI/UX Decisions

I focused on:
- Clean layout  
- Smooth animations  
- Minimalistic chat bubbles  
- Responsive design  

## Conclusion

Talkify taught me a lot about real‑time systems and scalable UI patterns.
  `,
  category: 'development',
  tags: ['Real‑Time', 'WebSocket', 'React', 'Talkify'],
  image: '/images/blog/talkify.jpg',
  publishedAt: '2024-02-01',
  readTime: 7,
  featured: true,
  author: {
    name: 'Amirhossein Agrest',
    avatar: '/images/avatar.jpg',
    role: 'Fullstack Developer',
  },
},
{
  id: 'post-8',
  slug: 'velora-shop-ecommerce-architecture',
  title: 'Building Velora Shop: My Fullstack E‑Commerce Architecture',
  excerpt: 'How I designed and built Velora Shop, a complete e‑commerce platform with admin panel, cart, and backend API.',
  content: `
## Introduction

Velora Shop is one of my biggest fullstack projects.  
It includes a complete shopping experience, admin dashboard, and backend API.

## Tech Stack

- Next.js  
- TypeScript  
- Node.js  
- MongoDB  
- Tailwind CSS  

## Key Features

- Product management  
- Cart system  
- Checkout flow  
- Admin dashboard  
- Authentication  

## Architecture

I used:
- API routes for backend  
- Server components for performance  
- Modular UI components  
- Clean folder structure  

## Conclusion

Velora Shop helped me understand fullstack architecture at a deeper level.
  `,
  category: 'development',
  tags: ['E‑Commerce', 'Fullstack', 'Next.js', 'Velora Shop'],
  image: '/images/blog/velora.jpg',
  publishedAt: '2024-02-05',
  readTime: 8,
  featured: true,
  author: {
    name: 'Amirhossein Agrest',
    avatar: '/images/avatar.jpg',
    role: 'Fullstack Developer',
  },
},
{
  id: 'post-9',
  slug: 'building-aggram-instagram-clone',
  title: 'Creating AGgram: A Mini Instagram Clone',
  excerpt: 'A look at how I built AGgram, a simplified Instagram‑style social platform with posts, likes, and profiles.',
  content: `
## Introduction

AGgram is a lightweight social media app inspired by Instagram.  
I built it to explore feed logic, UI patterns, and responsive design.

## Features

- Post feed  
- Likes  
- Profiles  
- Responsive layout  

## UI/UX

I focused on:
- Clean card layout  
- Smooth transitions  
- Minimalistic design  

## Architecture

- React + TypeScript  
- Tailwind CSS  
- Modular components  

## Conclusion

AGgram helped me improve my UI/UX thinking and component architecture.
  `,
  category: 'design',
  tags: ['UI/UX', 'Social Media', 'React', 'AGgram'],
  image: '/images/blog/aggram.jpg',
  publishedAt: '2024-02-10',
  readTime: 6,
  featured: false,
  author: {
    name: 'Amirhossein Agrest',
    avatar: '/images/avatar.jpg',
    role: 'Frontend Developer',
  },
},
{
  id: 'post-10',
  slug: 'building-agrestchan-blockchain',
  title: 'Building AgrestChan: My Custom Blockchain Project',
  excerpt: 'How I designed and implemented AgrestChan, a custom blockchain with wallet and exchange components.',
  content: `
## Introduction

AgrestChan is my custom blockchain project inspired by Bitcoin.  
It includes a blockchain core, wallet system, and simulated exchange.

## Blockchain Core

I implemented:
- Blocks  
- Hashing  
- Mining simulation  
- Transaction structure  

## Wallet System

Two versions:
- Web wallet  
- Browser extension wallet  

## Exchange

A simulated exchange with:
- Buy/sell  
- Staking  
- Random price engine  

## Conclusion

Building AgrestChan taught me the fundamentals of blockchain architecture.
  `,
  category: 'development',
  tags: ['Blockchain', 'Crypto', 'Node.js', 'AgrestChan'],
  image: '/images/blog/blockchain.jpg',
  publishedAt: '2024-02-12',
  readTime: 9,
  featured: true,
  author: {
    name: 'Amirhossein Agrest',
    avatar: '/images/avatar.jpg',
    role: 'Blockchain Developer',
  },
},
{
  id: 'post-11',
  slug: 'finger-control-opencv-mediapipe',
  title: 'Finger Control: Hand Tracking with Python, OpenCV, and MediaPipe',
  excerpt: 'How I built Finger Control, a tool that lets you control the mouse using your fingers and a phone camera.',
  content: `
## Introduction

Finger Control is an experimental project where I use computer vision to control the mouse cursor with hand gestures.

## Technologies

- Python  
- OpenCV  
- MediaPipe  

## How It Works

1. Detect hand landmarks  
2. Track finger movement  
3. Convert movement to cursor position  
4. Simulate clicks  

## Challenges

- Smoothing movement  
- Reducing noise  
- Handling different lighting conditions  

## Conclusion

This project opened the door for me to explore computer vision and gesture‑based interfaces.
  `,
  category: 'tutorials',
  tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
  image: '/images/blog/finger-control.jpg',
  publishedAt: '2024-02-15',
  readTime: 7,
  featured: false,
  author: {
    name: 'Amirhossein Agrest',
    avatar: '/images/avatar.jpg',
    role: 'AI/Computer Vision Developer',
  },
},
{
  id: 'post-12',
  slug: 'why-i-built-nexaos',
  title: 'Why I Built NexaOS and What I Learned About System Architecture',
  excerpt: 'A breakdown of the architecture behind NexaOS, my web‑based desktop environment.',
  content: `
## Introduction

NexaOS is one of my most ambitious projects: a fully interactive web desktop environment.

## Goals

- Window system  
- Taskbar  
- App launcher  
- Smooth animations  
- Modular architecture  

## Architecture

I used:
- React + TypeScript  
- Tailwind CSS  
- Framer Motion  
- Zustand for state  

## Lessons Learned

- How to structure large UI systems  
- How to manage complex state  
- How to design reusable components  

## Conclusion

NexaOS helped me grow as a frontend architect.
  `,
  category: 'development',
  tags: ['NexaOS', 'Architecture', 'React', 'Frontend'],
  image: '/images/blog/nexaos.jpg',
  publishedAt: '2024-02-18',
  readTime: 8,
  featured: true,
  author: {
    name: 'Amirhossein Agrest',
    avatar: '/images/avatar.jpg',
    role: 'Frontend Architect',
  },
},
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function getRelatedPosts(currentSlug: string, count: number = 2): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return [];

  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.category === current.category ||
          post.tags.some((tag) => current.tags.includes(tag)))
    )
    .slice(0, count);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}