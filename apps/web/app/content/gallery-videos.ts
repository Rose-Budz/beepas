import type { GalleryVideo } from '@/types/content';

// Using sample videos from various public sources for placeholder content
export const galleryVideos: GalleryVideo[] = [
  {
    id: 'vid-1',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://placehold.co/600x400/8B4513/FFF?text=Sauce+Making',
    title: 'How We Make Our Hot Sauce',
    description: 'A behind-the-scenes look at our sauce-making process',
    duration: '2:34',
  },
  {
    id: 'vid-2',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://placehold.co/600x400/228B22/FFF?text=Pickling+Process',
    title: 'Traditional Pickling Techniques',
    description: 'Learn about our time-honored pickling methods',
    duration: '3:12',
  },
  {
    id: 'vid-3',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://placehold.co/600x400/D2691E/FFF?text=Farmers+Market',
    title: "Meet Beepa at the Farmer's Market",
    description: 'Join us at the local farmers market',
    duration: '1:45',
  },
];
