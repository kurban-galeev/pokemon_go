import styled from "styled-components"
import { ListNavigation } from "../../utils/constants"
import { useRouter } from "next/router"
import { useGlobalContext } from "../context"

interface InterNavigation {
  id: number
  name: string
}

const Container = styled.div`
  margin-right: 66px;
`

const Title = styled.span<{ isActivePage: boolean, isLightTheme: boolean }>`
  margin-left: 66px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  color: ${props => props.isLightTheme ? props.theme.colors.black[0] : props.theme.colors.white[0]};
  border-bottom: ${props => props.isActivePage ? '3px solid #212121' : '0px solid #212121'};

    &:hover {
      cursor: pointer;
      }

`
interface PropsNav {
  pathname: string
}


export const Navigation = ({ pathname }: PropsNav) => {
  const router = useRouter()
  const { isLightTheme } = useGlobalContext()

  const pressOnTitle = (path: string) => {
    if (path === 'home') {
      router.push('/')
    } else {
      router.push(path)
    }
  }
  const getWordToUpperFirstChar = (word: string) => {
    return word[0].toUpperCase() + word.slice(1)
  }
  const underlineActiveHeading = (word: string) => {
    return pathname === word || pathname === '' && word === 'home'
  }

  return (
    <Container>
      {ListNavigation.map((item: InterNavigation) => (
        <Title onClick={() => pressOnTitle(item.name)} isActivePage={underlineActiveHeading(item.name)} key={item.name} isLightTheme={isLightTheme}>
          {getWordToUpperFirstChar(item.name)}
        </Title>
      ))}
    </Container>
  )
}
