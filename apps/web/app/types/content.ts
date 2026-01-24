export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image: string;
  category: 'sauce' | 'pickled' | 'preserved';
  inStock?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface GalleryVideo {
  id: string;
  src: string;
  thumbnail: string;
  title: string;
  description?: string;
  duration?: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone?: string;
  address?: string;
  social?: {
    facebook?: string;
    instagram?: string;
  };
}
