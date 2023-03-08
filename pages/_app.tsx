import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/lib/customTheme";
import Fonts from "@/components/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
