import { button } from '@/styles/recipes.css';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button type={type} className={button({ variant, size })} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
