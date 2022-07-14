import styled from "styled-components"


interface PropsItem {
  name: string
}
const Container = styled.div`
  margin-right: 17px;
  margin-left: 17px;
  margin-top: 50px;
  width: 350px;
  height: 136px;
  background: ${props => props.theme.colors.white[2]};
  border-radius: 8px;

  &:hover {
    transform: rotate(0deg);
  }
`
const Name = styled.h3`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.colors.grey[1]};
  text-shadow: ${props => '4px 4px 4px' + props.theme.colors.boxShadow[1]};
`

export const Item = ({ name }: PropsItem) => {
  return (
    <>
      <Container>
        <Name>{name}</Name>
      </Container>
    </>
  )
}
