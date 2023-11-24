import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/lib/customTheme";
import Fonts from "@/components/Fonts";

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import 'katex/dist/katex.min.css'

import '@/styles/notion.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
