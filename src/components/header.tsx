import styled from "styled-components"
import { Checkbox } from "./checkbox"
import { Navigation } from "./navigation"
import { useRouter } from 'next/router'
import { ChangeTheme } from "./change-theme"
import { useGlobalContext } from "../context"

const Container = styled.div<{ isLightTheme: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  weight: 100%;
  height: 93px;
  background: ${(props) => props.isLightTheme ? props.theme.colors.yelow[0] : props.theme.colors.grey[2]};
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`

const ContainerLogo = styled.div`
  position: relative;
  z-index: 10;
  margin-left: 157px;
  width: 160px;
  height: 70px;
  &:hover {
    cursor: pointer;
  }
`




export const Header = () => {
  const router = useRouter()
  const { isLightTheme } = useGlobalContext()

  return (
    <Container isLightTheme={isLightTheme} >
      <ContainerLogo onClick={() => router.reload()}>
        <img src='/logo.svg' />
      </ContainerLogo>

      <Navigation />

      <ChangeTheme />

    </Container>
  )
}
