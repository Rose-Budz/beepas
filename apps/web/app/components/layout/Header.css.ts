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
  fontSize: vars.fontSize['2xl'],
  fontFamily: vars.fontFamily.heading,
  fontWeight: 700,
  color: vars.color.brand.primary,
  textDecoration: 'none',
  ':hover': {
    color: vars.color.brand.secondary,
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
  color: vars.color.text.primary,
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: vars.fontSize.base,
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
