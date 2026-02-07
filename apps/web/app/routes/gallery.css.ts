import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Radix Tabs styles - rustic design
export const tabsList = style({
  // display: 'flex',
  display: 'none', // Hide tabs until we get video content
  justifyContent: 'center',
  gap: vars.space.sm,
  marginBottom: vars.space.xl,
});

export const tabsTrigger = style({
  padding: `${vars.space.sm} ${vars.space.xl}`,
  backgroundColor: 'transparent',
  color: vars.color.text.secondary,
  border: `2px solid ${vars.color.border.medium}`,
  borderRadius: vars.radius.md,
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: vars.color.background.tertiary,
    borderColor: vars.color.brand.secondary,
  },
  selectors: {
    '&[data-state="active"]': {
      backgroundColor: vars.color.brand.secondary,
      color: vars.color.text.inverse,
      borderColor: vars.color.brand.secondary,
    },
  },
});

export const tabsContent = style({
  ':focus': {
    outline: 'none',
  },
});
