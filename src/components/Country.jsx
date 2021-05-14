import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 3%);
  border-radius: 4px;
  overflow: hidden;
  max-width: 265px;
`

const InfoWrapper = styled.div`
  padding: 25px 24px 43px;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 13px;
  letter-spacing: -1.25px;
`

const Label = styled.span`
  font-weight: 700;
`

const Flag = styled.img`
  display: block;
  object-fit: cover;
  width: 265px;
  height: 160px;
`

function Country({ name, population, region, capital, flag }) {
  return (
    <Wrapper>
      <Flag src={flag} alt={`${name}'s flag`} />
      <InfoWrapper>
        <Title>{name}</Title>
        <div>
          <Label>Population: </Label> {population}
        </div>
        <div>
          <Label>Region: </Label> {region}
        </div>
        <div>
          <Label>Capital: </Label> {capital}
        </div>
      </InfoWrapper>
    </Wrapper>
  )
}
export default Country
