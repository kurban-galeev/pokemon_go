import { constants } from "fs"
import { noop } from "lodash"
import styled from "styled-components"
import { Footer } from "./footer"

const Container = styled.div`
display: flex;
justify-content: space-between;

`
const ContainerImage = styled.div`
max-width: 793px;
max-height: 680px;
`

const Title = styled.span`
  padding: 0;
  margin: 0;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  color: ${props => props.theme.colors.black[0]};
`

const TitleSmall = styled(Title)`
  font-weight: 400;
`

const Description = styled.span`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
`
const Button = styled.button`
  margin-top: 64px;
  background: ${props => props.theme.colors.green[0]};
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  border-width: 0px;
  width: max-content;

  &:hover {
    cursor: pointer;

  }

  &:active {
    box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0.18);
    transform: translate(1px, 5%);

  }
`
const TextButton = styled.h1`
  margin: 0;
  padding: 17px 36px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  color: ${props => props.theme.colors.black[1]};
`
const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 120px;
  margin-left: 150px;

`



export const Body = () => {
  const pressOnSeePokemons = () => {
    noop()
  }
  return (
    <Container>
      <ContainerDescription >
        <Title>Find<TitleSmall> all your favorite</TitleSmall> Pokemon</Title>

        <div style={{marginTop: 64}}>
          <Description>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Description>
        </div>

        <Button onClick={pressOnSeePokemons}>
          <TextButton>See pokemons</TextButton>
        </Button>
      </ContainerDescription>
      <ContainerImage>
        <img src ='/banner.png'/>
      </ContainerImage>

    </Container>
  )
}
