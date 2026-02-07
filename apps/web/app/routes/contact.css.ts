import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const pageDescription = style({
  textAlign: 'center',
  fontSize: vars.fontSize.lg,
  color: vars.color.text.secondary,
  maxWidth: '600px',
  margin: `0 auto ${vars.space.xl}`,
  lineHeight: vars.lineHeight.relaxed,
});

export const contactGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: vars.space.lg,
  maxWidth: '800px',
  margin: '0 auto',
});

export const contactCard = style({
  // Card-like visuals applied locally so this page doesn't import the shared card
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: vars.space.xl,
  backgroundColor: vars.color.background.secondary,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
  border: `1px solid ${vars.color.border.light}`,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.lg,
  },
});

export const contactIcon = style({
  fontSize: vars.fontSize['3xl'],
  marginBottom: vars.space.md,
});

export const contactLabel = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.brand.secondary,
  marginBottom: vars.space.sm,
});

export const contactValue = style({
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.normal,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.text.secondary,
});
