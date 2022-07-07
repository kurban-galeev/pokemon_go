import styled from "styled-components"
import { Body } from "../components/body"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const Container = styled.div`
background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);`


export const WelcomeScreen = () => {
  return (
    <Container>
      <Header/>

      <Body/>

      <Footer/>
    </Container>
  )
}
