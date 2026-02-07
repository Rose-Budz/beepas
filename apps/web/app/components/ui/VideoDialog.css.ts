import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const content = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1001,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // No background, padding, or border
  background: 'transparent',
  border: 'none',
  padding: 0,
  ':focus': {
    outline: 'none',
  },
});

export const video = style({
  maxWidth: '95vw',
  maxHeight: '95vh',
  width: 'auto',
  height: 'auto',
  borderRadius: vars.radius.sm,
});

export const closeButton = style({
  position: 'fixed',
  top: vars.space.lg,
  right: vars.space.lg,
  width: '44px',
  height: '44px',
  borderRadius: vars.radius.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: vars.color.text.primary,
  border: 'none',
  cursor: 'pointer',
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  zIndex: 1002,
  ':hover': {
    backgroundColor: '#fff',
    transform: 'scale(1.1)',
  },
  ':focus': {
    outline: `2px solid ${vars.color.brand.primary}`,
    outlineOffset: '2px',
  },
});
