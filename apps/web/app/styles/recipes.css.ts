import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const button = recipe({
  base: {
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radius.md,
    border: 'none',
    fontFamily: vars.fontFamily.body,
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
    lineHeight: vars.lineHeight.tight,
    letterSpacing: vars.letterSpacing.normal,
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
          color: vars.color.text.inverse,
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

export const imageContainer = recipe({
  base: {
    borderRadius: vars.radius.lg,
    overflow: 'hidden',
    display: 'block',
  },
  variants: {
    background: {
      // For images with white backgrounds, use white container
      white: {
        backgroundColor: vars.color.background.secondary,
        padding: vars.space.md,
      },
      // For images with transparent or matching backgrounds
      transparent: {
        backgroundColor: 'transparent',
      },
      // For images that need visual separation
      bordered: {
        border: `2px solid ${vars.color.border.medium}`,
        backgroundColor: vars.color.background.secondary,
        padding: vars.space.sm,
      },
      // Ornate frame style (mimicking the logo's gold oval frame)
      framed: {
        border: `4px double ${vars.color.brand.secondary}`,
        backgroundColor: vars.color.background.secondary,
        padding: vars.space.md,
        boxShadow: `inset 0 0 0 1px ${vars.color.border.light}`,
      },
    },
  },
  defaultVariants: {
    background: 'white',
  },
});
