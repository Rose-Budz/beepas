import type { Product } from '@/types/content';

export const products: Product[] = [
  {
    id: 'spaghetti-sauce',
    name: "Beepa's Spaghetti Sauce",
    description:
      'Traditional Italian-style spaghetti sauce made with Wisconsin tomatoes and fresh herbs. Perfect for pasta night.',
    image: '/images/products/spaghetti-sauce.jpg',
    category: 'sauce',
  },
  {
    id: 'sloppy-joe-sauce',
    name: "Beepa's Sloppy Joe Sauce",
    description:
      'Classic sloppy joe sauce with a perfect blend of savory and sweet. Just add ground beef for an easy family meal.',
    image: '/images/products/sloppy-joe-sauce.jpg',
    category: 'sauce',
  },
  {
    id: 'chili-starter',
    name: "Beepa's Chili Starter",
    description:
      'All the seasonings and base you need for authentic Wisconsin chili. Just add your meat and beans.',
    image: '/images/products/chili-starter.jpg',
    category: 'sauce',
  },
  {
    id: 'goulash-starter',
    name: "Beepa's Goulash Starter",
    description:
      'Traditional goulash starter with rich tomato base and warming spices. A hearty comfort food classic.',
    image: '/images/products/goulash-starter.jpg',
    category: 'sauce',
  },
];
