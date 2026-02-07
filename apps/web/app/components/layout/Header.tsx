import { Link } from 'react-router';
import { header, nav, logo, logoImage, navLinks, navLink, mobileMenuButton } from './Header.css';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={header}>
      <nav className={nav}>
        <Link to="/" className={logo}>
          <img src="/logo/logo-horizontal.jpg" alt="Beepa's" className={logoImage} />
        </Link>

        <ul className={navLinks}>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onOpenChange={setMobileMenuOpen} links={links} />
    </header>
  );
}
