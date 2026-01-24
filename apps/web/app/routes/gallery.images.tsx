import { galleryImages } from '@/content/gallery-images';
import { container, section, grid } from '@/styles/utils.css';
import { ImageDialog } from '@/components/ui/ImageDialog';
import {
  pageTitle,
  tabNav,
  tabLink,
  activeTab,
  imageCard,
  image,
  imageCaption,
  imageCaptionText,
} from './gallery.css';

export default function GalleryImages() {
  // In SPA mode, we use data directly instead of loaders
  const images = galleryImages;

  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Gallery</h1>

        <div className={tabNav}>
          <a href="/gallery/images" className={`${tabLink} ${activeTab}`}>
            Images
          </a>
          <a href="/gallery/videos" className={tabLink}>
            Videos
          </a>
        </div>

        <div className={grid}>
          {images.map((img) => (
            <ImageDialog key={img.id} src={img.src} alt={img.alt}>
              <div className={imageCard}>
                <img src={img.src} alt={img.alt} className={image} />
                {img.caption && (
                  <div className={imageCaption}>
                    <p className={imageCaptionText}>{img.caption}</p>
                  </div>
                )}
              </div>
            </ImageDialog>
          ))}
        </div>
      </div>
    </div>
  );
}
