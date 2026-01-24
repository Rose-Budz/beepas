import { card } from '@/styles/recipes.css';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  elevation?: 'flat' | 'raised' | 'floating';
}

export function Card({ children, elevation = 'raised', ...props }: CardProps) {
  return (
    <div className={card({ elevation })} {...props}>
      {children}
    </div>
  );
}
