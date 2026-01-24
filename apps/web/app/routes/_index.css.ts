import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const hero = style({
  textAlign: 'center',
  padding: `${vars.space['2xl']} ${vars.space.md}`,
  backgroundColor: vars.color.background.secondary,
});

export const heroTitle = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.normal, // Alfa Slab One only has 400 weight
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.brand.primary,
  marginBottom: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSize['3xl'],
    },
  },
});

export const heroSubtitle = style({
  fontFamily: vars.fontFamily.body, // Playfair Display
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.medium,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
  marginBottom: vars.space.lg,
});

export const heroDescription = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
  maxWidth: '600px',
  margin: `0 auto ${vars.space.xl}`,
});

export const ctaButtons = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const storyGrid = style({
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
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
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
  backgroundColor: '#FFFFFF', // White background for logo image
  padding: vars.space.md,
  border: `4px double ${vars.color.brand.secondary}`, // Ornate double border
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
  height: '120px',
  width: 'auto',
  backgroundColor: '#FFFFFF',
  padding: vars.space.sm,
  borderRadius: vars.radius.md,
  border: `2px solid ${vars.color.border.medium}`,
  '@media': {
    '(max-width: 768px)': {
      height: '80px',
    },
  },
});

// Section typography styles
export const sectionLabel = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.wide,
  textAlign: 'center',
  textTransform: 'uppercase',
  color: vars.color.brand.primary,
  marginBottom: vars.space.md,
});

export const sectionTitle = style({
  fontFamily: vars.fontFamily.body, // Montserrat for h2
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  textAlign: 'center',
  marginBottom: vars.space.xl,
});

export const contentParagraph = style({
  fontFamily: vars.fontFamily.body, // Montserrat for body text
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.relaxed,
  letterSpacing: vars.letterSpacing.normal,
  maxWidth: '800px',
  margin: '0 auto',
  whiteSpace: 'pre-line',
});

export const centeredContent = style({
  textAlign: 'center',
});

export const contentBold = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  marginBottom: vars.space.md,
});

export const principlesList = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  listStyle: 'none',
  padding: 0,
  marginBottom: vars.space.xl,
});

export const principleItem = style({
  paddingLeft: vars.space.lg,
  marginBottom: vars.space.sm,
  position: 'relative',
});

export const principleBullet = style({
  position: 'absolute',
  left: 0,
  color: vars.color.brand.primary,
});

export const tagline = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  fontStyle: 'italic',
  textAlign: 'center',
});

export const contentContainer = style({
  maxWidth: '800px',
  margin: '0 auto',
});
