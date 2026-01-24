import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 200,
  display: 'none',
  selectors: {
    '&[data-open="true"]': {
      display: 'block',
    },
  },
});

export const menu = style({
  position: 'fixed',
  top: 0,
  right: '-100%',
  width: '80%',
  maxWidth: '300px',
  height: '100vh',
  backgroundColor: vars.color.background.primary,
  zIndex: 300,
  padding: vars.space.xl,
  transition: 'right 0.3s ease',
  boxShadow: vars.shadow.lg,
  selectors: {
    '&[data-open="true"]': {
      right: 0,
    },
  },
});

export const closeButton = style({
  background: 'none',
  border: 'none',
  fontSize: vars.fontSize['2xl'],
  color: vars.color.brand.primary,
  cursor: 'pointer',
  padding: vars.space.sm,
  marginBottom: vars.space.lg,
});

export const menuLinks = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const menuLink = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.primary,
  textDecoration: 'none',
  display: 'block',
  padding: vars.space.sm,
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.brand.primary,
  },
});
