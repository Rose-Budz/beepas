import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Base card wrapper - rustic cream card
export const card = style({
  position: 'relative',
  display: 'block',
  width: '100%',
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.lg,
  padding: vars.space.sm,
  boxShadow: vars.shadow.md,
  border: `1px solid ${vars.color.border.light}`,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.lg,
  },
});

// Button variant for interactive cards (videos)
export const cardButton = style([
  card,
  {
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: 'inherit',
  },
]);

// Image - full width, square aspect ratio, rounded corners
export const cardImage = style({
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  display: 'block',
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.02)',
  },
});

// Content area with padding
export const cardContent = style({
  padding: vars.space.md,
  paddingBottom: vars.space.sm,
});

// Card title - brown Montserrat
export const cardTitle = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  color: vars.color.brand.secondary,
  marginBottom: vars.space.xs,
});

// Card description/caption
export const cardDescription = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.text.secondary,
  margin: 0,
});

// Video play button overlay - positioned over the image area
export const playOverlay = style({
  position: 'absolute',
  top: vars.space.sm,
  left: vars.space.sm,
  right: vars.space.sm,
  aspectRatio: '1 / 1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.md,
  background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 100%)',
  pointerEvents: 'none',
});

export const playButton = style({
  width: '60px',
  height: '60px',
  backgroundColor: vars.color.brand.primary,
  borderRadius: vars.radius.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.text.inverse,
  fontSize: vars.fontSize.xl,
  boxShadow: vars.shadow.md,
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  selectors: {
    [`${cardButton}:hover &`]: {
      transform: 'scale(1.1)',
      backgroundColor: vars.color.brand.secondary,
    },
  },
});

// Duration badge for videos - positioned on the image
export const durationBadge = style({
  position: 'absolute',
  bottom: `calc(${vars.space.sm} + ${vars.space.md} + 3rem)`,
  right: `calc(${vars.space.sm} + 8px)`,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  borderRadius: vars.radius.sm,
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: '#fff',
});
