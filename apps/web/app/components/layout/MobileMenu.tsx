import { Link } from 'react-router';
import { overlay, menu, closeButton, menuLinks, menuLink } from './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ to: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <>
      <div className={overlay} data-open={isOpen} onClick={onClose} />
      <div className={menu} data-open={isOpen}>
        <button className={closeButton} onClick={onClose} aria-label="Close menu">
          ✕
        </button>
        <ul className={menuLinks}>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={menuLink} onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
