import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.primary,
});

globalStyle('body', {
  minHeight: '100vh',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: vars.fontWeight.bold,
});

globalStyle('h1', {
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['4xl'],
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
});

globalStyle('h2, h3, h4, h5, h6', {
  fontFamily: vars.fontFamily.body, // Montserrat for all subheadings
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

globalStyle('h2', {
  fontSize: vars.fontSize['2xl'],
});

globalStyle('h3', {
  fontSize: vars.fontSize.xl,
});

globalStyle('h4', {
  fontSize: vars.fontSize.lg,
});

globalStyle('h5', {
  fontSize: vars.fontSize.base,
});

globalStyle('h6', {
  fontSize: vars.fontSize.sm,
});

globalStyle('a', {
  color: vars.color.brand.primary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
});

globalStyle('a:hover', {
  color: vars.color.brand.secondary,
});

globalStyle('img', {
  maxWidth: '100%',
  display: 'block',
});

globalStyle('button', {
  cursor: 'pointer',
  fontFamily: 'inherit',
});
