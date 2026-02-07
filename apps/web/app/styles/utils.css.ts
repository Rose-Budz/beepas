import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const container = style({
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
    },
  },
});

export const section = style({
  paddingTop: vars.space['2xl'],
  paddingBottom: vars.space['2xl'],
  '@media': {
    '(min-width: 768px)': {
      paddingTop: vars.space['3xl'],
      paddingBottom: vars.space['3xl'],
    },
  },
});

// Section with cream background card
export const sectionCard = style({
  backgroundColor: vars.color.background.primary,
  borderRadius: vars.radius.xl,
  padding: vars.space.xl,
  boxShadow: vars.shadow.md,
  margin: `0 ${vars.space.md}`,
  '@media': {
    '(min-width: 768px)': {
      padding: vars.space['2xl'],
      margin: `0 ${vars.space.lg}`,
    },
  },
});

export const grid = style({
  display: 'grid',
  gap: vars.space.lg,
  '@media': {
    '(min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: vars.space.xl,
    },
  },
});

// Two-column grid variant for small product sets (e.g. 4 items)
export const gridTwo = style({
  display: 'grid',
  gap: vars.space.lg,
  '@media': {
    '(min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: vars.space.xl,
    },
  },
});

export const pageTitle = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  textAlign: 'center',
  color: vars.color.brand.primary,
  textShadow: '1.5px 1.5px 0 #000',
  marginBottom: vars.space.lg,
  '@media': {
    '(min-width: 768px)': {
      fontSize: vars.fontSize['5xl'],
      marginBottom: vars.space.xl,
    },
  },
});

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
