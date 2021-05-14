import { Link, useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from '../utils/styled'
import useRequest from '../utils/useRequest'

const Flex = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  line-height: 40px;
  box-shadow: 0 0 4px 1px rgb(0 0 0 / 10%);
  display: inline-block;
  border-radius: 4px;
  margin-top: 40px;
  margin-bottom: 80px;
  padding: 0 63px;
  font-size: 15px;
`

const Flag = styled.img`
  width: 560px;
  height: 400px;
  margin-right: 120px;
`

const InfoWrapper = styled.div`
  padding-top: 28px;
  flex-grow: 1;
`

const Title = styled.h1`
  font-size: 2.25em;
  letter-spacing: 0.65px;
  margin-bottom: 32px;
`

const Bold = styled.span`
  font-weight: 700;
`

const InfoList = styled.div`
  font-size: 1.1em;
  letter-spacing: 0.25px;
  display: grid;
  grid-template-columns: 58% 42%;
  line-height: 2.14em;
  margin-bottom: 71px;
`

const BorderCountriesLabel = styled(Bold)`
  font-size: 1.1em;
  letter-spacing: 0.2px;
  width: 143px;
`

const BorderCountriesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-block;
`

const BorderCountriesListItem = styled.li`
  display: inline-block;
  margin: 0 5px 5px 0;
`

const BorderCountriesLink = styled(Link)`
  text-decoration: none;
  color: #000;
  box-shadow: 0 0 4px 1px rgb(0 0 0 / 10%);
  padding: 5px 20px;
  border-radius: 5px;
  display: inline-block;
`

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Country() {
  const { countryCode } = useParams()
  const query = useQuery();
  const from = `/${query.get('from') || ''}`

  const { data: country, error } = useRequest(`alpha/${countryCode}`)

  if (error) return <h1>Something went wrong!</h1>
  if (!country) return <h1>Loading...</h1>

  return (
    <Container>
      <StyledLink to={from}>Back</StyledLink>
      <Flex>
        <Flag src={country.flag} alt={`${country.name}-flag`} />
        <InfoWrapper>
          <Title>{country.name}</Title>
          <InfoList>
            <div>
              <Bold>Native Name: </Bold> {country.nativeName}
            </div>
            <div>
              <Bold>Top Level Domain: </Bold> {country.topLevelDomain[0]}
            </div>
            <div>
              <Bold>Population: </Bold> {country.population}
            </div>
            <div>
              <Bold>Currencies: </Bold> {country.currencies[0].name}
            </div>
            <div>
              <Bold>Region: </Bold> {country.region}
            </div>
            <div>
              <Bold>Languages: </Bold>
              {country.languages.map((language) => language.name).join(', ')}
            </div>
            <div>
              <Bold>Sub Region: </Bold> {country.subregion}
            </div>
            <div style={{ gridColumn: 1 }}>
              <Bold>Capital: </Bold> {country.capital}
            </div>
          </InfoList>
          <Flex>
            <BorderCountriesLabel>Border Countries: </BorderCountriesLabel>{' '}
            <BorderCountriesList>
              {country.borders.map((border) => (
                <BorderCountriesListItem key={`border-country-${border}`}>
                  <BorderCountriesLink to={`/${border}?from=${countryCode}`}>
                    {border}
                  </BorderCountriesLink>
                </BorderCountriesListItem>
              ))}
            </BorderCountriesList>
          </Flex>
        </InfoWrapper>
      </Flex>
    </Container>
  )
}
export default Country
