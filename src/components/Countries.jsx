import styled from 'styled-components'
import { Link } from 'react-router-dom'

import useRequest from '../utils/useRequest'
import { Container } from '../utils/styled'

import Country from './Country'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 70px;
`

function App() {
  const { data, error } = useRequest(
    'all?fields=name;population;region;capital;flag'
  )

  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <Container>
      <Wrapper>
        {data.map((country, idx) => (
          <Link key={`country-${idx}`} to="/detail">
            <Country
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          </Link>
        ))}
      </Wrapper>
    </Container>
  )
}
export default App
