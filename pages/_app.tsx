import { JSXElementConstructor, ReactElement } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../src/components/layout";
import ProviderContext from "../src/context";
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


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <ProviderContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProviderContext>
      </ThemeProvider>

    </>
  );
}
export default App
