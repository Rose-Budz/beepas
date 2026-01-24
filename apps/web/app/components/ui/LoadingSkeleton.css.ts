import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-1000px 0' },
  '100%': { backgroundPosition: '1000px 0' },
});

export const skeleton = style({
  backgroundColor: vars.color.background.secondary,
  backgroundImage: `linear-gradient(90deg, ${vars.color.background.secondary} 0px, ${vars.color.background.tertiary} 40px, ${vars.color.background.secondary} 80px)`,
  backgroundSize: '1000px 100%',
  animation: `${shimmer} 2s infinite linear`,
  borderRadius: vars.radius.md,
});

export const skeletonText = style([
  skeleton,
  {
    height: '1em',
    marginBottom: vars.space.sm,
  },
]);

export const skeletonImage = style([
  skeleton,
  {
    width: '100%',
    paddingBottom: '100%',
  },
]);

export const skeletonCard = style([
  skeleton,
  {
    padding: vars.space.lg,
    height: '300px',
  },
]);
