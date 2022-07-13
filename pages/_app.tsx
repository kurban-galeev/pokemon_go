import { JSXElementConstructor, ReactElement } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
interface AppProps {
  Component: () => ReactElement
  pageProps: ReactElement<any, string | JSXElementConstructor<any>>

}


export default function App({ Component, pageProps }: AppProps ) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
