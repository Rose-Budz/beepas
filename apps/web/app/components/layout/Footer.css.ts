import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const footer = style({
  backgroundColor: vars.color.brand.secondary,
  padding: `${vars.space.xl} ${vars.space.lg}`,
  marginTop: 'auto',
});

export const footerContent = style({
  maxWidth: '1100px',
  margin: '0 auto',
  textAlign: 'center',
});

export const footerText = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.text.inverse,
  marginBottom: vars.space.sm,
  opacity: 0.9,
});

export const socialLinks = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.lg,
  marginTop: vars.space.md,
});

export const socialLink = style({
  color: vars.color.text.inverse,
  fontSize: vars.fontSize.xl,
  transition: 'all 0.2s ease',
  opacity: 0.8,
  ':hover': {
    opacity: 1,
    transform: 'scale(1.1)',
  },
});

export const socialIcon = style({
  width: '24px',
  height: '24px',
  display: 'inline-block',
});
