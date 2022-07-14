import { ReactElement, ReactFragment, ReactNode } from "react"
import styled from "styled-components"
import { useGlobalContext } from "../context"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { AppProps } from "next/app"
import { useRouter } from "next/router"

interface Props {
  children: ReactNode
}

const Container = styled.div<{ isLightTheme: boolean, isHomeScreen: boolean }>`
background: ${props => props.isLightTheme && props.isHomeScreen
    ?
    'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)'
    :
    !props.isHomeScreen && props.isLightTheme
      ? props.theme.colors.white[0] : props.theme.colors.grey[1]};
`
const Layout = ({ children }: Props): ReactElement => {
  const router = useRouter()
  const { isLightTheme } = useGlobalContext()
  return (
    <>
      <Container isLightTheme={isLightTheme} isHomeScreen={router.pathname === '/'}>
        <Header />

        <main>{children}</main>

        <Footer />

      </Container>
    </>
  )
}


export default Layout
