import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/chakra/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>My Contacts</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
