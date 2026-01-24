import { skeleton, skeletonText, skeletonImage, skeletonCard } from './LoadingSkeleton.css';

interface LoadingSkeletonProps {
  variant?: 'text' | 'image' | 'card';
  count?: number;
}

export function LoadingSkeleton({ variant = 'text', count = 1 }: LoadingSkeletonProps) {
  const getClassName = () => {
    switch (variant) {
      case 'text':
        return skeletonText;
      case 'image':
        return skeletonImage;
      case 'card':
        return skeletonCard;
      default:
        return skeleton;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={getClassName()} />
      ))}
    </>
  );
}
