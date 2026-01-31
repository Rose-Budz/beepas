import { galleryVideos } from '@/content/gallery-videos';
import { container, section, grid } from '@/styles/utils.css';
import {
  pageTitle,
  tabNav,
  tabLink,
  activeTab,
  videoCard,
  thumbnail,
  playButton,
  videoInfo,
  videoTitle,
  videoDescription,
} from './gallery.css';
import clsx from 'clsx';

export default function GalleryVideos() {
  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Gallery</h1>

        <div className={tabNav}>
          <a href="/gallery/images" className={tabLink}>
            Images
          </a>
          <a href="/gallery/videos" className={clsx(tabLink, activeTab)}>
            Videos
          </a>
        </div>

        <div className={grid}>
          {galleryVideos.map((video) => (
            <div key={video.id} className={videoCard}>
              <img src={video.thumbnail} alt={video.title} className={thumbnail} />
              <div className={playButton}>▶</div>
              <div className={videoInfo}>
                <h3 className={videoTitle}>{video.title}</h3>
                {video.description && <p className={videoDescription}>{video.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
