import { Link } from 'react-router';
import { Dialog } from 'radix-ui';
import { overlay, content, closeButton, menuLinks, menuLink } from './MobileMenu.css';
import { visuallyHidden } from '@/styles/utils.css';

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  links: Array<{ to: string; label: string }>;
}

export function MobileMenu({ isOpen, onOpenChange, links }: MobileMenuProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content} aria-describedby={undefined}>
          <Dialog.Title className={visuallyHidden}>Navigation Menu</Dialog.Title>
          <Dialog.Close asChild>
            <button className={closeButton} aria-label="Close menu">
              ✕
            </button>
          </Dialog.Close>
          <ul className={menuLinks}>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={menuLink} onClick={() => onOpenChange(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
