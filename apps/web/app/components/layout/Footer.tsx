import { footer, footerContent, footerText, socialLinks, socialLink } from './Footer.css';

export function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <p className={footerText}>
          © {new Date().getFullYear()} Beepa's Country Goods. All rights reserved.
        </p>
        <p className={footerText}>Handcrafted with love in the countryside</p>
        <div className={socialLinks}>
          <a href="https://facebook.com" className={socialLink} aria-label="Facebook">
            f
          </a>
          <a href="https://instagram.com" className={socialLink} aria-label="Instagram">
            📷
          </a>
        </div>
      </div>
    </footer>
  );
}
