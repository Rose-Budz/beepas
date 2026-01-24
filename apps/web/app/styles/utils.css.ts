import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  '@media': {
    '(min-width: 768px)': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
});

export const section = style({
  paddingTop: '3rem',
  paddingBottom: '3rem',
  '@media': {
    '(min-width: 768px)': {
      paddingTop: '5rem',
      paddingBottom: '5rem',
    },
  },
});

export const grid = style({
  display: 'grid',
  gap: '1.5rem',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
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
