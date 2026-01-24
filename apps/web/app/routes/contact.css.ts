import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const pageTitle = style({
  textAlign: 'center',
  fontSize: vars.fontSize['4xl'],
  fontFamily: vars.fontFamily.heading,
  color: vars.color.brand.primary,
  marginBottom: vars.space.lg,
});

export const pageDescription = style({
  textAlign: 'center',
  fontSize: vars.fontSize.lg,
  color: vars.color.text.secondary,
  maxWidth: '700px',
  margin: `0 auto ${vars.space['2xl']}`,
  lineHeight: 1.6,
});

export const contactGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.space.xl,
  maxWidth: '900px',
  margin: '0 auto',
});

export const contactCard = style({
  textAlign: 'center',
  padding: vars.space.xl,
});

export const contactIcon = style({
  fontSize: vars.fontSize['4xl'],
  marginBottom: vars.space.md,
});

export const contactLabel = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.brand.primary,
  marginBottom: vars.space.sm,
});

export const contactValue = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
});
