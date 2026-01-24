import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const button = recipe({
  base: {
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radius.md,
    border: 'none',
    fontSize: vars.fontSize.base,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space.sm,
    ':hover': {
      transform: 'translateY(-1px)',
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
        ':hover': {
          backgroundColor: vars.color.brand.secondary,
        },
      },
      secondary: {
        backgroundColor: vars.color.background.secondary,
        color: vars.color.text.primary,
        border: `1px solid ${vars.color.border.medium}`,
        ':hover': {
          backgroundColor: vars.color.background.tertiary,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: vars.color.brand.primary,
        border: `2px solid ${vars.color.brand.primary}`,
        ':hover': {
          backgroundColor: vars.color.brand.primary,
          color: vars.color.text.inverse,
        },
      },
    },
    size: {
      sm: {
        padding: `${vars.space.xs} ${vars.space.md}`,
        fontSize: vars.fontSize.sm,
      },
      md: {
        padding: `${vars.space.sm} ${vars.space.lg}`,
        fontSize: vars.fontSize.base,
      },
      lg: {
        padding: `${vars.space.md} ${vars.space.xl}`,
        fontSize: vars.fontSize.lg,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export const card = recipe({
  base: {
    backgroundColor: vars.color.background.secondary,
    borderRadius: vars.radius.lg,
    padding: vars.space.lg,
    boxShadow: vars.shadow.sm,
    border: `1px solid ${vars.color.border.light}`,
  },
  variants: {
    elevation: {
      flat: {
        boxShadow: 'none',
      },
      raised: {
        boxShadow: vars.shadow.md,
      },
      floating: {
        boxShadow: vars.shadow.lg,
      },
    },
  },
  defaultVariants: {
    elevation: 'raised',
  },
});
