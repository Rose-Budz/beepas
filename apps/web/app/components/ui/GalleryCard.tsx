import type { ReactNode } from 'react';
import {
  card,
  cardButton,
  cardContent,
  cardTitle,
  cardDescription,
  playOverlay,
  playButton,
  durationBadge,
} from './GalleryCard.css';

interface GalleryCardProps {
  children: ReactNode;
  as?: 'div' | 'button';
  className?: string;
}

// Base card wrapper
export function GalleryCard({ children, as = 'div', className = '' }: GalleryCardProps) {
  const Component = as;
  const cardClass = as === 'button' ? cardButton : card;

  return (
    <Component
      className={`${cardClass} ${className}`}
      type={as === 'button' ? 'button' : undefined}
    >
      {children}
    </Component>
  );
}

// Card content container
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`${cardContent} ${className}`}>{children}</div>;
}

// Card title
interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h3 className={`${cardTitle} ${className}`}>{children}</h3>;
}

// Card description
interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return <p className={`${cardDescription} ${className}`}>{children}</p>;
}

// Video play overlay
export function VideoPlayOverlay() {
  return (
    <div className={playOverlay}>
      <div className={playButton}>▶</div>
    </div>
  );
}

// Video duration badge
interface DurationBadgeProps {
  duration: string;
}

export function DurationBadge({ duration }: DurationBadgeProps) {
  return <span className={durationBadge}>{duration}</span>;
}
