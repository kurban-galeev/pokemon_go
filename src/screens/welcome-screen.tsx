import styled from "styled-components"
import { Body } from "../components/body"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { useGlobalContext } from "../context"

const Container = styled.div<{ isLightTheme: boolean }>`
background: ${props => props.isLightTheme ? 'linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)' : props.theme.colors.grey[1]};
`


export const WelcomeScreen = () => {
  const { isLightTheme } = useGlobalContext()
  return (
    <Container isLightTheme={isLightTheme}>
      <Header />
      <Body />

      <Footer />
    </Container>
  )
}
