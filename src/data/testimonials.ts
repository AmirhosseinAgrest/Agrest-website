export interface Testimonial {
  id: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: {
      name: "Reza M.",
      role: "Frontend Developer",
      company: "Developer Community",
      avatar: "/images/testimonials/reza.jpg",
    },
    rating: 5,
    featured: true,
  },
  {
    id: "test-2",
    author: {
      name: "Sara K.",
      role: "UI/UX Designer",
      company: "Freelance",
      avatar: "/images/testimonials/sara.jpg",
    },
    rating: 5,
    featured: true,
  },
  {
    id: "test-3",
    author: {
      name: "Ali R.",
      role: "Software Engineer",
      company: "Open Source Community",
      avatar: "/images/testimonials/ali.jpg",
    },
    rating: 5,
    featured: true,
  },
  {
    id: "test-4",
    author: {
      name: "Nima A.",
      role: "Tech Lead",
      company: "Independent",
      avatar: "/images/testimonials/nima.jpg",
    },
    rating: 5,
  },
  {
    id: "test-5",
    author: {
      name: "Elina S.",
      role: "Product Designer",
      company: "Freelance",
      avatar: "/images/testimonials/elina.jpg",
    },
    rating: 5,
  },
  {
    id: "test-6",
    author: {
      name: "Mohammad T.",
      role: "Full‑Stack Developer",
      company: "Developer Network",
      avatar: "/images/testimonials/mohammad.jpg",
    },
    rating: 5,
  },
];

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}