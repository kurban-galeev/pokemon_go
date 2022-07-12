import styled from "styled-components"
import {noop} from 'lodash'
import { ListNavigation } from "../../utils/constants"
import { useState } from "react"
import { useRouter } from "next/router"

interface InterNavigation {
  id: number
  name: string
}

const Container = styled.div`
  margin-right: 66px;
`
const Title = styled.span<{isActivePage: boolean}>`
  margin-left: 66px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  color: ${props=> props.theme.colors.black[0]};
  border-bottom: ${isActivePage => isActivePage ? '0px solid #212121': '3px solid #212121'};

    &:hover {
      cursor: pointer;
      }

`



export const Navigation = () => {
  const [isActivePage, setActivePage] = useState(false)
  const router = useRouter()
  const pressOnTitle = (path: string) => {
    setActivePage(true)
    if (path==='home') {
      router.push('/')
    } else {
      router.push(path)
    }
  }
   const getWordToUpperFirstChar = (word: string) => {
    return word[0].toUpperCase() + word.slice(1)
   }

  return (
    <Container>
      {ListNavigation.map((item: InterNavigation) => (
        <Title onClick={()=> pressOnTitle(item.name)} isActivePage={isActivePage}>
          {getWordToUpperFirstChar(item.name)}
        </Title>
      ))}
    </Container>
  )
}
