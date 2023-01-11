import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const bagsNormal = defineStyle({
  backgroundColor: "#020202",
  color: "white",
  fontWeight: 700,
  borderRadius: "6px",
});

const bagsDesktop = defineStyle({
  backgroundColor: "#0051fe",
  color: "white",
  fontWeight: 700,
  borderRadius: "6px",
});

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1350px",
  "2xl": "1536px",
};

export const buttonTheme = defineStyleConfig({
  variants: { bagsNormal, bagsDesktop },
});

export const theme = extendTheme({
  breakpoints,
  components: {
    Button: buttonTheme,
  },
});
