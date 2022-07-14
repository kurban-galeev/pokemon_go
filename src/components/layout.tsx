import { ReactElement, ReactFragment, ReactNode } from "react"
import styled from "styled-components"
import { useGlobalContext } from "../context"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { AppProps } from "next/app"


const Container = styled.div<{ isLightTheme: boolean }>`
background: ${props => props.isLightTheme ? 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)' : props.theme.colors.grey[1]};
`
const Layout = ({ children }: any): ReactElement => {
  const { isLightTheme } = useGlobalContext()
  return (
    <>
      <Container isLightTheme={isLightTheme}>
        <Header />

        <main>{children}</main>

        <Footer />

      </Container>
    </>
  )
}


export default Layout
