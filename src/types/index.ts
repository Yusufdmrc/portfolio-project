// Sanity content types
export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  body?: {
    _type: string;
    children: unknown[];
  }[];
  categories?: Category[];
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  images?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  content?: {
    _type: string;
    children: unknown[];
  }[];
}

export interface Category {
  _id: string;
  title: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
}

// Skills types
export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "tools" | "testing";
}

// Experience types
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

// Education types
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}
