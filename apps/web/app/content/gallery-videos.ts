import type { GalleryVideo } from '@/types/content';

export const galleryVideos: GalleryVideo[] = [
  {
    id: 'vid-1',
    src: '/videos/sauce-making.mp4',
    thumbnail: 'https://via.placeholder.com/600x400/8B4513/FFF?text=Sauce+Making+Video',
    title: 'How We Make Our Hot Sauce',
    description: 'A behind-the-scenes look at our sauce-making process',
    duration: '2:34',
  },
  {
    id: 'vid-2',
    src: '/videos/pickling-process.mp4',
    thumbnail: 'https://via.placeholder.com/600x400/228B22/FFF?text=Pickling+Process',
    title: 'Traditional Pickling Techniques',
    description: 'Learn about our time-honored pickling methods',
    duration: '3:12',
  },
  {
    id: 'vid-3',
    src: '/videos/farmers-market.mp4',
    thumbnail: 'https://via.placeholder.com/600x400/D2691E/FFF?text=Farmers+Market',
    title: "Meet Beepa at the Farmer's Market",
    description: 'Join us at the local farmers market',
    duration: '1:45',
  },
];
