import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const pageTitle = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.normal, // Alfa Slab One only has 400 weight
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  textAlign: 'center',
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
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
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
  backgroundColor: '#FFFFFF', // White background for images
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: `2px solid ${vars.color.border.medium}`,
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
  borderRadius: `${vars.radius.lg} ${vars.radius.lg} 0 0`, // Rounded top corners only
});

export const imageCaption = style({
  padding: vars.space.md,
  backgroundColor: vars.color.background.secondary,
});

export const imageCaptionText = style({
  fontFamily: vars.fontFamily.body, // Montserrat
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
});

// Video specific styles
export const videoCard = style({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  backgroundColor: '#FFFFFF', // White background for video thumbnails
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: `2px solid ${vars.color.border.medium}`,
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
  borderRadius: `${vars.radius.lg} ${vars.radius.lg} 0 0`, // Rounded top corners only
});

export const playButton = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60px',
  height: '60px',
  backgroundColor: 'rgba(242, 101, 34, 0.9)', // Brand orange with transparency
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
  fontFamily: vars.fontFamily.body, // Montserrat
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.brand.primary,
  marginBottom: vars.space.xs,
});

export const videoDescription = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
});
