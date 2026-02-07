import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/_index.tsx'),
  route('products', './routes/products.tsx'),
  route('contact', './routes/contact.tsx'),
  route('gallery', './routes/gallery.tsx'),
] satisfies RouteConfig;
