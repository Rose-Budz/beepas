import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 200,
  animation: `${overlayShow} 150ms ease-out`,
});

export const content = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '280px',
  maxWidth: '85vw',
  backgroundColor: vars.color.brand.secondary,
  padding: vars.space.xl,
  zIndex: 201,
  boxShadow: vars.shadow.xl,
  display: 'flex',
  flexDirection: 'column',
  animation: `${contentShow} 200ms ease-out`,
  ':focus': {
    outline: 'none',
  },
});

export const closeButton = style({
  alignSelf: 'flex-end',
  background: 'rgba(255, 255, 255, 0.15)',
  border: 'none',
  borderRadius: vars.radius.md,
  color: vars.color.text.inverse,
  fontSize: vars.fontSize.xl,
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: vars.space.xl,
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.25)',
  },
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
  color: vars.color.text.inverse,
  textDecoration: 'none',
  padding: vars.space.md,
  borderRadius: vars.radius.md,
  transition: 'background 0.2s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.15)',
  },
});
