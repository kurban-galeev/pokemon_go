import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Container = styled.div`
  width: 80px;
  margin-right: 80px;
  height: 44px;
  background: ${props => props.theme.colors.grey[0]};
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.24), inset 0px 1px 1px rgba(0, 0, 0, 0.14);
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ContainerImage = styled.img<{ isLight: boolean }>`
  transform: ${({ isLight }) => isLight ? 'translate(35px, 1px)' : ' translate(0px, 1px)'};
`

export const ChangeTheme = () => {
  const { isLightTheme, setLightTheme } = useGlobalContext()
  return (
    <Container onClick={() => setLightTheme(!isLightTheme)}>
      {
        isLightTheme ?
          <ContainerImage src='/light-theme.svg' isLight={isLightTheme} />
          :
          <ContainerImage src='/dark-theme.svg' isLight={isLightTheme} />
      }
    </Container>
  )
}
