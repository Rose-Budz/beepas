import { footer, footerContent, footerText, socialLinks, socialLink } from './Footer.css';
import { siteInfo } from '@/content/site';

export function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <p className={footerText}>© {new Date().getFullYear()} Beepa's. All rights reserved.</p>
        <p className={footerText}>Made Local. Made Right. | Beloit, Wisconsin</p>
        <div className={socialLinks}>
          {siteInfo.social?.facebook && (
            <a href={siteInfo.social.facebook} className={socialLink} aria-label="Facebook">
              f
            </a>
          )}
          {siteInfo.social?.instagram && (
            <a href={siteInfo.social.instagram} className={socialLink} aria-label="Instagram">
              📷
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
