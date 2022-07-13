import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 190px;
  padding-bottom: 33px;
`

const Text = styled.span`
font-family: 'Karla';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: ${props => props.theme.colors.black[1]};
align-items: center;

`



export const Footer = () => {
  return (
    <Container>
      <div style={{ marginLeft: 127 }}>
        <Text>Make with ❤️</Text>
      </div>
      <div style={{ marginRight: 220 }}>
        <Text>github</Text>
      </div>
    </Container>
  )
}
