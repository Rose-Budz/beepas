import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    brand: {
      primary: null,
      secondary: null,
      accent: null,
    },
    background: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    text: {
      primary: null,
      secondary: null,
      inverse: null,
    },
    border: {
      light: null,
      medium: null,
      dark: null,
    },
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
  },
  fontSize: {
    xs: null,
    sm: null,
    base: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
  },
  fontFamily: {
    body: null,
    heading: null,
    subheading: null,
  },
  fontWeight: {
    light: null,
    normal: null,
    medium: null,
    semibold: null,
    bold: null,
  },
  lineHeight: {
    tight: null,
    snug: null,
    normal: null,
    relaxed: null,
    loose: null,
  },
  letterSpacing: {
    tight: null,
    normal: null,
    wide: null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    brand: {
      primary: '#F26522', // Brand Orange (from logo)
      secondary: '#704214', // Sepia Walnut
      accent: '#4A5D23', // Dill Green
    },
    background: {
      primary: '#F9F4ED', // Cream/Parchment
      secondary: '#FFFFFF', // White (for images with white backgrounds)
      tertiary: '#F5E6D3', // Slightly darker cream
    },
    text: {
      primary: '#2D2926', // Charcoal
      secondary: '#704214', // Sepia Walnut (for secondary text)
      inverse: '#F9F4ED', // Cream for text on dark backgrounds
    },
    border: {
      light: '#E8D5C4',
      medium: '#704214', // Sepia Walnut
      dark: '#2D2926', // Charcoal
    },
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  fontSize: {
    xs: '0.875rem', // Increased from 0.75rem
    sm: '1rem', // Increased from 0.875rem
    base: '1.125rem', // Increased from 1rem - better readability
    lg: '1.25rem', // Increased from 1.125rem
    xl: '1.5rem', // Increased from 1.25rem
    '2xl': '1.875rem', // Increased from 1.5rem
    '3xl': '2.25rem', // Increased from 1.875rem
    '4xl': '3rem', // Increased from 2.25rem
  },
  fontFamily: {
    body: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: '"Alfa Slab One", "Impact", "Arial Black", sans-serif',
    subheading:
      '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // Same as body
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.2',
    snug: '1.4',
    normal: '1.6',
    relaxed: '1.8',
    loose: '2',
  },
  letterSpacing: {
    tight: '0', // Removed negative spacing
    normal: '0.01em', // Slightly more open
    wide: '0.08em', // More open for uppercase
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(112, 66, 20, 0.1)',
    md: '0 4px 6px rgba(112, 66, 20, 0.15)',
    lg: '0 10px 15px rgba(112, 66, 20, 0.2)',
  },
});
