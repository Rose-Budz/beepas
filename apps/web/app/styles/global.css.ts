import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Seagull Bold font face
globalFontFace('Seagull Bold', {
  src: 'url("/fonts/Seagull-Bold.woff2") format("woff2"), url("Seagull-Bold.woff") format("woff")',

  fontWeight: 'bold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontFamily: vars.fontFamily.body,
  fontSize: '16px',
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.primary,
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  minHeight: '100vh',
  backgroundImage: 'url("/images/wood-background.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
});

globalStyle('h1', {
  fontFamily: vars.fontFamily.heading,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.brand.primary,
  textShadow: '1.5px 1.5px 0 #000',
  fontSize: vars.fontSize['5xl'],
  lineHeight: vars.lineHeight.tight,
  // add a small positive letter spacing for improved readability
  letterSpacing: '0.01em',
});

globalStyle('h2, h3, h4, h5, h6', {
  fontFamily: vars.fontFamily.body,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.brand.secondary,
});

globalStyle('h2', {
  fontSize: vars.fontSize['3xl'],
  lineHeight: vars.lineHeight.snug,
});

globalStyle('h3', {
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeight.snug,
});

globalStyle('h4', {
  fontSize: vars.fontSize.xl,
  lineHeight: vars.lineHeight.snug,
});

globalStyle('h5', {
  fontSize: vars.fontSize.lg,
});

globalStyle('h6', {
  fontSize: vars.fontSize.base,
});

globalStyle('p', {
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.relaxed,
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
  height: 'auto',
});

globalStyle('button', {
  cursor: 'pointer',
  fontFamily: vars.fontFamily.body,
});

globalStyle('::selection', {
  backgroundColor: vars.color.brand.primary,
  color: vars.color.text.inverse,
});
