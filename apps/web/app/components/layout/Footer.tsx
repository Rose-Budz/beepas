import {
  footer,
  footerContent,
  footerText,
  socialLinks,
  socialLink,
  socialIcon,
} from './Footer.css';
import { siteInfo } from '@/content/site';

export function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <p className={footerText}>© {new Date().getFullYear()} Beepa's. All rights reserved.</p>
        <p className={footerText}>Made Local. Made Right. | Beloit, Wisconsin</p>
        <div className={socialLinks}>
          {siteInfo.social?.facebook && (
            <a
              href={siteInfo.social.facebook}
              className={socialLink}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="Facebook" className={socialIcon} />
            </a>
          )}
          <a
            href="https://www.tiktok.com/@beepas11"
            className={socialLink}
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/tiktok.png" alt="TikTok" className={socialIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
