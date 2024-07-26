export const LAYOUT_SIZES = {
  navbar: 60,
  footer: 52,
};

export const LAYOUT_TOTAL_HEIGHT = LAYOUT_SIZES.navbar + LAYOUT_SIZES.footer;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
