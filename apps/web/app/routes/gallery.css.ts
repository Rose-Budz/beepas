import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const pageTitle = style({
  textAlign: 'center',
  fontSize: vars.fontSize['4xl'],
  fontFamily: vars.fontFamily.heading,
  color: vars.color.brand.primary,
  marginBottom: vars.space.xl,
});

export const tabNav = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.md,
  marginBottom: vars.space.xl,
});

export const tabLink = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.color.background.secondary,
  color: vars.color.text.primary,
  textDecoration: 'none',
  borderRadius: vars.radius.md,
  fontWeight: 600,
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: vars.color.background.tertiary,
  },
});

export const activeTab = style({
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverse,
  ':hover': {
    backgroundColor: vars.color.brand.secondary,
  },
});

// Image specific styles
export const imageCard = style({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  backgroundColor: vars.color.background.secondary,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.lg,
  },
});

export const image = style({
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  display: 'block',
});

export const imageCaption = style({
  padding: vars.space.md,
  backgroundColor: vars.color.background.secondary,
});

export const imageCaptionText = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  lineHeight: 1.4,
});

// Video specific styles
export const videoCard = style({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  backgroundColor: vars.color.background.secondary,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.lg,
  },
});

export const thumbnail = style({
  width: '100%',
  height: '250px',
  objectFit: 'cover',
  display: 'block',
});

export const playButton = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60px',
  height: '60px',
  backgroundColor: 'rgba(139, 69, 19, 0.9)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.text.inverse,
  fontSize: vars.fontSize['2xl'],
  transition: 'transform 0.2s ease',
  selectors: {
    [`${videoCard}:hover &`]: {
      transform: 'translate(-50%, -50%) scale(1.1)',
    },
  },
});

export const videoInfo = style({
  padding: vars.space.md,
  backgroundColor: vars.color.background.secondary,
});

export const videoTitle = style({
  fontSize: vars.fontSize.base,
  fontWeight: 700,
  color: vars.color.brand.primary,
  marginBottom: vars.space.xs,
});

export const videoDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  lineHeight: 1.4,
});
