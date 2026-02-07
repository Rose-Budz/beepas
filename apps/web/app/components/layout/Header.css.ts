import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const header = style({
  backgroundColor: vars.color.brand.secondary,
  padding: `${vars.space.md} ${vars.space.lg}`,
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: vars.shadow.lg,
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.secondary,
  border: `1px solid ${vars.color.border.light}`,
  boxShadow: vars.shadow.md,
  transition: 'background-color 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
  overflow: 'hidden',
  ':hover': {
    opacity: 0.95,
  },
});

export const logoImage = style({
  height: '60px',
  width: 'auto',
  display: 'block',
  '@media': {
    '(max-width: 768px)': {
      height: '48px',
    },
  },
});

export const navLinks = style({
  display: 'flex',
  gap: vars.space.xl,
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
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: 'uppercase',
  color: vars.color.text.inverse,
  textDecoration: 'none',
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radius.md,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: vars.color.text.inverse,
  },
});

export const mobileMenuButton = style({
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255, 255, 255, 0.15)',
      border: 'none',
      borderRadius: vars.radius.md,
      padding: vars.space.sm,
      color: vars.color.text.inverse,
      fontSize: vars.fontSize.xl,
      width: '44px',
      height: '44px',
    },
  },
});
