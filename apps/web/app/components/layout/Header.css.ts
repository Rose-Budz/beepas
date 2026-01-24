import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const header = style({
  backgroundColor: vars.color.background.secondary,
  borderBottom: `2px solid ${vars.color.border.medium}`,
  padding: `${vars.space.md} ${vars.space.lg}`,
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: vars.shadow.sm,
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const logo = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.normal, // Alfa Slab One only has 400 weight
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  color: vars.color.brand.primary,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  ':hover': {
    opacity: 0.8,
  },
});

export const logoImage = style({
  height: '50px',
  width: 'auto',
  '@media': {
    '(max-width: 768px)': {
      height: '40px',
    },
  },
});

export const navLinks = style({
  display: 'flex',
  gap: vars.space.lg,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const navLink = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.primary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  ':hover': {
    color: vars.color.brand.primary,
  },
});

export const mobileMenuButton = style({
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
      background: 'none',
      border: 'none',
      fontSize: vars.fontSize['2xl'],
      color: vars.color.brand.primary,
      cursor: 'pointer',
      padding: vars.space.sm,
    },
  },
});
