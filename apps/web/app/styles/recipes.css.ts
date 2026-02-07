import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const button = recipe({
  base: {
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radius.md,
    border: 'none',
    fontFamily: vars.fontFamily.body,
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.semibold,
    letterSpacing: vars.letterSpacing.wide,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space.sm,
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: vars.shadow.md,
    },
    ':active': {
      transform: 'translateY(0)',
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.brand.primary,
        color: vars.color.text.inverse,
        boxShadow: vars.shadow.sm,
        ':hover': {
          backgroundColor: '#A33D28',
          color: vars.color.text.inverse,
        },
      },
      secondary: {
        backgroundColor: vars.color.brand.secondary,
        color: vars.color.text.inverse,
        boxShadow: vars.shadow.sm,
        ':hover': {
          backgroundColor: '#4A3426',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: vars.color.brand.secondary,
        border: `2px solid ${vars.color.brand.secondary}`,
        ':hover': {
          backgroundColor: vars.color.brand.secondary,
          color: vars.color.text.inverse,
        },
      },
    },
    size: {
      sm: {
        padding: `${vars.space.xs} ${vars.space.md}`,
        fontSize: vars.fontSize.xs,
      },
      md: {
        padding: `${vars.space.sm} ${vars.space.lg}`,
        fontSize: vars.fontSize.sm,
      },
      lg: {
        padding: `${vars.space.md} ${vars.space.xl}`,
        fontSize: vars.fontSize.sm,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
