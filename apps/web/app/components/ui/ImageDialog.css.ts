import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const content = style({
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '1200px',
  maxHeight: '90vh',
  padding: vars.space.md,
  zIndex: 1001,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':focus': {
    outline: 'none',
  },
});

export const image = style({
  maxWidth: '100%',
  maxHeight: 'calc(90vh - 4rem)',
  width: 'auto',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: vars.radius.md,
});

export const closeButton = style({
  position: 'absolute',
  top: vars.space.md,
  right: vars.space.md,
  width: '40px',
  height: '40px',
  borderRadius: vars.radius.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverse,
  border: 'none',
  cursor: 'pointer',
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  ':hover': {
    backgroundColor: vars.color.brand.secondary,
    transform: 'scale(1.1)',
  },
  ':focus': {
    outline: `2px solid ${vars.color.brand.primary}`,
    outlineOffset: '2px',
  },
});
