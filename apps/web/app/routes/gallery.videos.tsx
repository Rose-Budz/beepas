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

export default function GalleryVideos() {
  // In SPA mode, we use data directly instead of loaders
  const videos = galleryVideos;

  return (
    <div className={section}>
      <div className={container}>
        <h1 className={pageTitle}>Gallery</h1>

        <div className={tabNav}>
          <a href="/gallery/images" className={tabLink}>
            Images
          </a>
          <a href="/gallery/videos" className={`${tabLink} ${activeTab}`}>
            Videos
          </a>
        </div>

        <div className={grid}>
          {videos.map((video) => (
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
