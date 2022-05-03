const breakpoints = ["414px", "768px", "1024px", "1366px", "1920px"];
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.web = breakpoints[2];
breakpoints.hd = breakpoints[3];
breakpoints.fullhd = breakpoints[4];

const borderRadius = [0, 8, 20, 30];
borderRadius.none = borderRadius[0];
borderRadius.sm = borderRadius[1];
borderRadius.md = borderRadius[2];
borderRadius.lg = borderRadius[3];

const fonts = {
  default: "'Work Sans', sans-serif",
};

const fontSizes = [
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "25px",
  "8px",
];
fontSizes.xsmall = fontSizes[0];
fontSizes.small = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.default = fontSizes[3];
fontSizes.large = fontSizes[4];
fontSizes.xlarge = fontSizes[5];
fontSizes.xxlarge = fontSizes[6];
fontSizes.xxsmall = fontSizes[7];

const fontWeights = [400, 500, 600, 700];
fontWeights.regular = fontWeights[0];
fontWeights.medium = fontWeights[1];
fontWeights.semiBold = fontWeights[2];
fontWeights.bold = fontWeights[3];

const space = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100,
];

const colors = {
  primary: "#ffe81f",

  white: "#FFFFFF",
  "white-800": "#FAFAFA",

  black: " #000000",
  "gray-900": "#0F0F0F",
  "gray-500": "#303030",
  "gray-200": "#606060",
};

const defaultTheme = {
  borderRadius,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
};

export default defaultTheme;
