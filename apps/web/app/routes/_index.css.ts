import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const hero = style({
  textAlign: 'center',
  padding: `${vars.space['2xl']} ${vars.space.md}`,
  backgroundColor: vars.color.background.secondary,
});

export const heroTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontFamily: vars.fontFamily.heading,
  color: vars.color.brand.primary,
  marginBottom: vars.space.md,
  '@media': {
    '(max-width: 768px)': {
      fontSize: vars.fontSize['3xl'],
    },
  },
});

export const heroSubtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  marginBottom: vars.space.lg,
});

export const heroDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  maxWidth: '600px',
  margin: `0 auto ${vars.space.xl}`,
  lineHeight: 1.6,
});

export const ctaButtons = style({
  display: 'flex',
  gap: vars.space.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
});
