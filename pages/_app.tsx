import { JSXElementConstructor, ReactElement } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

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
const theme = {
  colors: {
    yelow: ["#F5DB13", "#F2B807"],
    black: ['#000000', '#212121'],
    green: ['#73D677']
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

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
