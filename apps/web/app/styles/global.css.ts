import { globalStyle } from '@vanilla-extract/css';
import { lightTheme, vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.primary,
});

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: 1.6,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.fontFamily.heading,
  lineHeight: 1.2,
  fontWeight: 700,
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
