import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Auth } from "../components/Auth";
import theme from "../theme";
import { AppProps } from "next/app";
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        {Component.protected ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </SessionProvider>
  );
}

export default App;
