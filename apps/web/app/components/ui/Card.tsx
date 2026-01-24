import { card } from '@/styles/recipes.css';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  elevation?: 'flat' | 'raised' | 'floating';
}

export function Card({ children, elevation = 'raised' }: CardProps) {
  return <div className={card({ elevation })}>{children}</div>;
}
