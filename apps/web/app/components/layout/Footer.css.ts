import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const footer = style({
  backgroundColor: vars.color.background.secondary,
  borderTop: `2px solid ${vars.color.border.medium}`,
  padding: `${vars.space.xl} ${vars.space.lg}`,
  marginTop: 'auto',
});

export const footerContent = style({
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center',
});

export const footerText = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.secondary,
  marginBottom: vars.space.sm,
});

export const socialLinks = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.md,
  marginTop: vars.space.md,
});

export const socialLink = style({
  color: vars.color.brand.primary,
  fontSize: vars.fontSize.xl,
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.brand.secondary,
  },
});
