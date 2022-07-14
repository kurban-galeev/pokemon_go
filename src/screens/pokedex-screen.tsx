import { ReactElement, useEffect, useState } from "react"
import styled from "styled-components"
import { getPokemon } from "../../pages/api"
import { Item } from "../components/pokedex"
import { useGlobalContext } from "../context"

interface pokemonsItems {
  name: string
  url: string
}

const Container = styled.div`
  display: flex;
  margin-top: 73px;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.span`
  font-family: 'Karla';
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  color: ${props => props.theme.colors.black[0]};
`
const StrongTitle = styled(Title)`
  font-weight: 700;
`
const Inpute = styled.input`
  margin: 24px 170px 36px 170px;
  background: ${props => props.theme.colors.white[1]};
  box-shadow: ${props => '4px 4px 16px' + props.theme.colors.boxShadow[0]};
  border-radius: 40px;
  border-width: 0px;
  padding: 16px 31px;
`
const ContainerItem = styled.div`
  display: flex;
  margin: 0 133px 30px 133px;
  flex-wrap: wrap;
`

const PokedexScreen = (): ReactElement => {
  const { fetchPokemons } = useGlobalContext()
  const [items, setItems] = useState<pokemonsItems[]>()
  useEffect(() => {
    fetchPokemons().then((data) => setItems(data.results))
    // getPokemon(items && items[0]?.url).then((data) => data)
    console.log(items)
  })

  return (
    <>
      <Container>
        <Title>
          800
          <StrongTitle> Pokemons </StrongTitle>
          for you to choose your favorite
        </Title>

        <Inpute placeholder="Encuentra tu pokémon..." />

        <ContainerItem>
          {items && items.map((item: pokemonsItems) => (
            <Item name={item.name} />
          ))}
        </ContainerItem>
      </Container>
    </>
  )
}

export default PokedexScreen
