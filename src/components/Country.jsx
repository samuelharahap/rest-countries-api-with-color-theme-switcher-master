import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 10%);
  border-radius: 4px;
  overflow: hidden;
`

const InfoWrapper = styled.div`
  padding: 20px 20px 30px;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 10px;
`

const Label = styled.span`
  font-weight: 700;
`

const Flag = styled.img`
  display: block;
  object-fit: cover;
  width: 250px;
  height: 150px;
`

function Country({ name, population, region, capital, flag }) {
  return (
    <Wrapper>
      <Flag src={flag} alt={`${name}'s flag`} />
      <InfoWrapper>
        <Title>{name}</Title>
        <div>
          <Label>Population:</Label> {population}
        </div>
        <div>
          <Label>Region:</Label> {region}
        </div>
        <div>
          <Label>Capital:</Label> {capital}
        </div>
      </InfoWrapper>
    </Wrapper>
  )
}
export default Country
