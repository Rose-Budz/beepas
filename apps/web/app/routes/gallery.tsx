import { Tabs } from 'radix-ui';
import { galleryImages } from '@/content/gallery-images';
import { galleryVideos } from '@/content/gallery-videos';
import { container, section, gridTwo, pageTitle, sectionCard } from '@/styles/utils.css';
import { ImageDialog } from '@/components/ui/ImageDialog';
import { VideoDialog } from '@/components/ui/VideoDialog';
import {
  GalleryCard,
  CardContent,
  CardTitle,
  CardDescription,
  VideoPlayOverlay,
  DurationBadge,
} from '@/components/ui/GalleryCard';
import { cardImage } from '@/components/ui/GalleryCard.css';
import { tabsList, tabsTrigger, tabsContent } from './gallery.css';

export default function Gallery() {
  return (
    <div className={section}>
      <div className={container}>
        <div className={sectionCard}>
          <h1 className={pageTitle}>Gallery</h1>

          <Tabs.Root defaultValue="images">
            <Tabs.List className={tabsList}>
              <Tabs.Trigger value="images" className={tabsTrigger}>
                Images
              </Tabs.Trigger>
              <Tabs.Trigger value="videos" className={tabsTrigger}>
                Videos
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="images" className={tabsContent}>
              <div className={gridTwo}>
                {galleryImages.map((img) => (
                  <GalleryCard key={img.id}>
                    <ImageDialog src={img.src} alt={img.alt} triggerClassName={cardImage} />
                    {img.caption && (
                      <CardContent>
                        <CardDescription>{img.caption}</CardDescription>
                      </CardContent>
                    )}
                  </GalleryCard>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="videos" className={tabsContent}>
              <div className={gridTwo}>
                {galleryVideos.map((video) => (
                  <VideoDialog key={video.id} src={video.src} title={video.title}>
                    <GalleryCard as="button">
                      <img src={video.thumbnail} alt={video.title} className={cardImage} />
                      <VideoPlayOverlay />
                      {video.duration && <DurationBadge duration={video.duration} />}
                      <CardContent>
                        <CardTitle>{video.title}</CardTitle>
                        {video.description && (
                          <CardDescription>{video.description}</CardDescription>
                        )}
                      </CardContent>
                    </GalleryCard>
                  </VideoDialog>
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}
