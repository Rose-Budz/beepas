import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Hero section with cream card overlay
export const hero = style({
  padding: `${vars.space['3xl']} ${vars.space.lg}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh',
});

export const heroCard = style({
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
  textAlign: 'center',
  maxWidth: '1000px',
  boxShadow: vars.shadow.xl,
  '@media': {
    '(max-width: 768px)': {
      padding: vars.space.xl,
    },
  },
});

export const heroTitle = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['5xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  color: vars.color.brand.primary,
  textShadow: '1.5px 1.5px 0 #000',
  marginBottom: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSize['4xl'],
    },
  },
});

export const heroSubtitle = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.secondary,
  marginBottom: vars.space.xl,
  maxWidth: '600px',
  margin: `0 auto ${vars.space.xl}`,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSize.lg,
    },
  },
});

export const ctaButtons = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

// Content sections
export const contentSection = style({
  padding: `${vars.space['2xl']} ${vars.space.lg}`,
});

export const contentCard = style({
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.radius.xl,
  padding: vars.space['2xl'],
  maxWidth: '1000px',
  margin: '0 auto',
  boxShadow: vars.shadow.lg,
  '@media': {
    '(max-width: 768px)': {
      padding: vars.space.xl,
    },
  },
});

export const sectionLabel = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.bold,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: 'uppercase',
  color: vars.color.brand.primary,
  textAlign: 'center',
  marginBottom: vars.space.sm,
});

export const sectionTitle = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  textAlign: 'center',
  color: vars.color.brand.secondary,
  marginBottom: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSize.xl,
    },
  },
});

export const storyGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1.5fr',
  gap: vars.space.xl,
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: vars.space.lg,
    },
  },
});

export const beepaImage = style({
  width: '100%',
  height: 'auto',
  padding: vars.space.sm,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.secondary,
  border: `1px solid ${vars.color.border.light}`,
  boxShadow: vars.shadow.md,
  display: 'block',
  objectFit: 'cover',
});

export const contentParagraph = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.primary,
  marginBottom: vars.space.md,
});

export const awardsContainer = style({
  display: 'flex',
  gap: vars.space.xl,
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginTop: vars.space.xl,
});

export const awardBadge = style({
  height: '100px',
  width: 'auto',
  padding: vars.space.sm,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.light}`,
  boxShadow: vars.shadow.md,
  backgroundColor: '#FFFFFF',
  '@media': {
    '(max-width: 768px)': {
      height: '80px',
    },
  },
});

// Awards section layout
export const awardsLayout = style({
  display: 'grid',
  gridTemplateColumns: '140px 1fr',
  gap: vars.space.xl,
  alignItems: 'start',
  marginTop: vars.space.lg,
  '@media': {
    '(max-width: 640px)': {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
    },
  },
});

export const awardsImageCol = style({
  display: 'flex',
  justifyContent: 'center',
});

export const awardsListCol = style({
  display: 'flex',
  flexDirection: 'column',
});

export const awardsList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const awardsSection = style({
  marginTop: vars.space.xl,
  paddingTop: vars.space.xl,
  borderTop: `1px solid ${vars.color.border.light}`,
});

// Principles list
export const principlesList = style({
  listStyle: 'none',
  padding: 0,
  margin: `${vars.space.lg} 0`,
});

export const principleItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space.sm,
  marginBottom: vars.space.sm,
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.normal,
});

export const principleBullet = style({
  flexShrink: 0,
  fontSize: vars.fontSize.lg,
});

export const tagline = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  fontStyle: 'italic',
  color: vars.color.brand.secondary,
  textAlign: 'center',
  marginTop: vars.space.xl,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSize.lg,
    },
  },
});

// Legacy compatibility exports
export const centeredContent = style({ textAlign: 'center' });
export const contentBold = style({ fontWeight: vars.fontWeight.bold });
