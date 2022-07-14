import styled from "styled-components"
import { useGlobalContext } from "../context"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 33px;
`

const Text = styled.span<{ isLightTheme: boolean }>`
font-family: 'Karla';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: ${props => props.isLightTheme ? props.theme.colors.black[1] : props.theme.colors.white[0]};
align-items: center;

`



export const Footer = () => {
  const { isLightTheme } = useGlobalContext()
  return (
    <Container>
      <div style={{ marginLeft: 127 }}>
        <Text isLightTheme={isLightTheme}>Make with ❤️</Text>
      </div>
      <div style={{ marginRight: 220 }}>
        <Text isLightTheme={isLightTheme}>github</Text>
      </div>
    </Container>
  )
}
