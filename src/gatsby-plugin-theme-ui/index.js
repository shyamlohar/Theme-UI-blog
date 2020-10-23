import { toTheme } from "@theme-ui/typography"
import wp2016 from "typography-theme-wordpress-2016"
import merge from "deepmerge"

export default merge(toTheme(wp2016), {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
    tertiary: "#ff6e6c",
    modes: {
      dark: {
        text: "#94a1b2",
        heading: "#fffffe",
        background: "#16161a",
        primary: "#7f5af0",
        secondary: "#72757e",
        tertiary: "#2cb67d",
        cardBg: "#242629",
        tagBg: "#242629",
      },
    },
  },
  breakpoints: ["425px", "768px", "1024px"],
  sizes: [
    0,
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%",
  ],
  // fonts: {
  //   body: "system-ui, sans-serif",
  //   heading: "system-ui, sans-serif",
  //   monospace: "Menlo, monospace",
  // },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    semibold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
  links: {
    bold: {
      fontWeight: "bold",
    },
    nav: {
      fontWeight: "bold",
      color: "inherit",
      textDecoration: "none",
    },
  },
})
