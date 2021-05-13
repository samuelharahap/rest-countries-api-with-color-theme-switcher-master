import styled from 'styled-components'
import { useState } from 'react'

import useRequest from './utils/useRequest'
import { Container } from './utils/styled'

import Header from './components/Header'
import Country from './components/Country'

const Countries = styled.div`
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
    <main className="App">
      <Header />
      <Container>
        <Countries>
          {data.map((country, idx) => (
            <Country
              key={`country-${idx}`}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          ))}
        </Countries>
      </Container>
    </main>
  )
}
export default App
