import type { Product } from '@/types/content';

export const products: Product[] = [
  {
    id: 'hot-sauce-original',
    name: "Beepa's Original Hot Sauce",
    description: 'A classic hot sauce with a perfect balance of heat and flavor',
    price: 8.99,
    image: 'https://via.placeholder.com/400x400/8B4513/FFF?text=Hot+Sauce',
    category: 'sauce',
    inStock: true,
  },
  {
    id: 'bbq-sauce-smoky',
    name: 'Smoky BBQ Sauce',
    description: 'Rich and smoky with a hint of sweetness',
    price: 9.99,
    image: 'https://via.placeholder.com/400x400/D2691E/FFF?text=BBQ+Sauce',
    category: 'sauce',
    inStock: true,
  },
  {
    id: 'pickled-mushrooms',
    name: 'Pickled Mushrooms',
    description: 'Tender mushrooms pickled in a savory brine with herbs',
    price: 12.99,
    image: 'https://via.placeholder.com/400x400/228B22/FFF?text=Pickled+Mushrooms',
    category: 'pickled',
    inStock: true,
  },
  {
    id: 'pickled-asparagus',
    name: 'Pickled Asparagus',
    description: 'Crisp asparagus spears with garlic and dill',
    price: 11.99,
    image: 'https://via.placeholder.com/400x400/228B22/FFF?text=Pickled+Asparagus',
    category: 'pickled',
    inStock: true,
  },
  {
    id: 'strawberry-preserve',
    name: 'Strawberry Preserve',
    description: 'Sweet strawberry preserve made from fresh berries',
    price: 10.99,
    image: 'https://via.placeholder.com/400x400/DC143C/FFF?text=Strawberry+Preserve',
    category: 'preserved',
    inStock: false,
  },
];
