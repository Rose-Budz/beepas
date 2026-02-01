import { galleryImages } from '@/content/gallery-images';
import { container, section, grid } from '@/styles/utils.css';
import { ImageDialog } from '@/components/ui/ImageDialog';
import clsx from 'clsx';
import { Card } from '@/components/ui/Card';
import {
  pageTitle,
  tabNav,
  tabLink,
  activeTab,
} from './gallery.css';
import { productImage, productDescription } from './products.css';

export default function GalleryImages() {
  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Gallery</h1>

        <div className={tabNav}>
          <a href="/gallery/images" className={clsx(tabLink, activeTab)}>
            Images
          </a>
          <a href="/gallery/videos" className={tabLink}>
            Videos
          </a>
        </div>

        <div className={grid}>
          {galleryImages.map((img) => (
            <Card key={img.id} elevation="raised">
              <ImageDialog src={img.src} alt={img.alt} triggerClassName={productImage} />
              {img.caption && <p className={productDescription}>{img.caption}</p>}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
