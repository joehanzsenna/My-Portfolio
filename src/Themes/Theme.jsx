import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxsizing: "border-box",
      },
    },
  },
};
export default extendTheme(theme);
