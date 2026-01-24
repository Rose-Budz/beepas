import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productImage = style({
  width: '100%',
  objectFit: 'cover',
  borderRadius: vars.radius.lg, // Rounded top corners to match card
  marginBottom: vars.space.md,
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  ':hover': {
    opacity: 0.9,
  },
});

export const productName = style({
  fontFamily: vars.fontFamily.body, // Montserrat
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.brand.primary,
  marginBottom: vars.space.sm,
});

export const productDescription = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
  marginBottom: vars.space.md,
});

export const productPrice = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.brand.secondary,
  marginBottom: vars.space.md,
});

export const productCategory = style({
  display: 'inline-block',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.color.background.tertiary,
  borderRadius: vars.radius.sm,
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: 'uppercase',
  marginBottom: vars.space.md,
  color: vars.color.brand.primary,
});

export const outOfStock = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
  fontStyle: 'italic',
});

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
