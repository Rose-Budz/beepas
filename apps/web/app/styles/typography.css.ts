import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from './theme.css';

/**
 * Typography Design Tokens
 * Single source of truth for all text styles across the application
 *
 * Font Stack:
 * - Headings (h1): Alfa Slab One (bold display font)
 * - Body & Subheadings (h2-h6, paragraphs): Playfair Display (elegant serif)
 */

// Display styles (h1, hero titles, main headings)
export const displayLarge = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.normal, // Alfa Slab One only has 400
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
});

export const displayMedium = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
});

export const displaySmall = style({
  fontFamily: vars.fontFamily.heading,
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.normal,
});

// Heading styles (h2-h6, section titles) - Using Playfair Display
export const headingLarge = style({
  fontFamily: vars.fontFamily.body, // Playfair Display
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

export const headingMedium = style({
  fontFamily: vars.fontFamily.body, // Playfair Display
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

export const headingSmall = style({
  fontFamily: vars.fontFamily.body, // Playfair Display
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

// Body text styles - Using Playfair Display
export const bodyLarge = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
});

export const bodyMedium = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
});

export const bodySmall = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  letterSpacing: vars.letterSpacing.normal,
});

// UI element styles
export const labelLarge = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

export const labelMedium = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

export const labelSmall = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

// Navigation styles
export const navLink = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

export const navLinkMobile = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

// Button styles
export const buttonText = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.normal,
});

export const buttonTextSmall = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.normal,
});

export const buttonTextLarge = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.normal,
});

// Caption/metadata styles
export const caption = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.snug,
  letterSpacing: vars.letterSpacing.normal,
});

export const overline = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: 'uppercase',
});

// Utility styles for font weights
export const fontWeights = styleVariants({
  light: { fontWeight: vars.fontWeight.light },
  normal: { fontWeight: vars.fontWeight.normal },
  medium: { fontWeight: vars.fontWeight.medium },
  semibold: { fontWeight: vars.fontWeight.semibold },
  bold: { fontWeight: vars.fontWeight.bold },
});
