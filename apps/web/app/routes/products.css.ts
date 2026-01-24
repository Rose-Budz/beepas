import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productImage = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: vars.radius.md,
  marginBottom: vars.space.md,
});

export const productName = style({
  fontSize: vars.fontSize.xl,
  fontWeight: 700,
  marginBottom: vars.space.sm,
  color: vars.color.brand.primary,
});

export const productDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  marginBottom: vars.space.md,
  lineHeight: 1.6,
});

export const productPrice = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
  color: vars.color.brand.secondary,
  marginBottom: vars.space.md,
});

export const productCategory = style({
  display: 'inline-block',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.color.background.tertiary,
  borderRadius: vars.radius.sm,
  fontSize: vars.fontSize.xs,
  fontWeight: 600,
  textTransform: 'uppercase',
  marginBottom: vars.space.md,
  color: vars.color.brand.primary,
});

export const outOfStock = style({
  color: vars.color.text.secondary,
  fontStyle: 'italic',
  fontSize: vars.fontSize.sm,
});

export const pageTitle = style({
  textAlign: 'center',
  fontSize: vars.fontSize['4xl'],
  fontFamily: vars.fontFamily.heading,
  color: vars.color.brand.primary,
  marginBottom: vars.space.xl,
});
