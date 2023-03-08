import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "smokyBlack.100",
        "&::-webkit-scrollbar": { width: "20px" },
        "&::-webkit-scrollbar-track": { background: "smokyBlack.100" },
        "&::-webkit-scrollbar-thumb": {
          borderWidth: "5px",
          borderStyle: "solid",
          borderColor: "smokyBlack.100",
          background: "hsla(0, 0%, 100%, 0.1)",
          borderRadius: "20px",
          boxShadow:
            "inset 1px 1px 0 hsla(0, 0%, 100%, 0.11), inset -1px -1px 0 hsla(0, 0%, 100%, 0.11)",
          backgroundClip: "padding-box",
          padding: "0 4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "hsla(0, 0%, 100%, 0.15)",
        },
      },
    }),
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    jet: {
      100: "#383838",
    },
    onyx: {
      100: "#2B2B2C",
    },
    eerieBlack: {
      100: "#202022",
      200: "#1E1E1F",
    },
    smokyBlack: {
      100: "#121212",
    },
    orangeYellowCrayola: {
      100: "#FFDB70",
    },
    vegasGold: {
      100: "#CEB15A",
    },
    lightGray: {
      100: "#D6D6D6",
      700: "rgba(214,214,214,0.7)",
    },
    bittersweetShimmer: {
      100: "#B84C4C",
    },
  },
});
