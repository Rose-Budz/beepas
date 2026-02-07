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
    '3xl': null,
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
    '5xl': null,
  },
  fontFamily: {
    body: null,
    heading: null,
    accent: null,
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
    xl: null,
    full: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    brand: {
      primary: '#F26522', // Bright orange (matching logo)
      secondary: '#5C4033', // Dark wood brown
      accent: '#2E5A1C', // Forest green
    },
    background: {
      primary: '#FDF8F3', // Warm cream
      secondary: '#FFFFFF', // Clean white for cards
      tertiary: '#F5EDE4', // Warm tan
    },
    text: {
      primary: '#2C2416', // Deep brown-black
      secondary: '#5C4033', // Wood brown
      inverse: '#FDF8F3', // Cream for dark backgrounds
    },
    border: {
      light: '#E8DDD0',
      medium: '#C9B8A5',
      dark: '#5C4033',
    },
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3.5rem',
  },
  fontFamily: {
    body: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Seagull Bold", "Georgia", serif',
    accent: '"Montserrat", sans-serif',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.1',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.7',
    loose: '2',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '20px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 3px rgba(44, 36, 22, 0.1)',
    md: '0 4px 12px rgba(44, 36, 22, 0.12)',
    lg: '0 8px 24px rgba(44, 36, 22, 0.15)',
    xl: '0 16px 48px rgba(44, 36, 22, 0.2)',
  },
});
