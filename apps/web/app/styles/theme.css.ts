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
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#228B22',
    },
    background: {
      primary: '#FFF8DC',
      secondary: '#F5E6D3',
      tertiary: '#FAEBD7',
    },
    text: {
      primary: '#2C1810',
      secondary: '#5C4033',
      inverse: '#FFFFFF',
    },
    border: {
      light: '#E8D5C4',
      medium: '#D2B48C',
      dark: '#8B7355',
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
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontFamily: {
    body: 'Georgia, serif',
    heading: '"Palatino Linotype", Palatino, serif',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
});
