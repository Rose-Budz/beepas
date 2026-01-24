import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/_index.tsx'),
  route('products', './routes/products.tsx'),
  route('contact', './routes/contact.tsx'),
  route('gallery/images', './routes/gallery.images.tsx'),
  route('gallery/videos', './routes/gallery.videos.tsx'),
] satisfies RouteConfig;
