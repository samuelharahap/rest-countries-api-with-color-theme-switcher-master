import styled from 'styled-components'

import { Container } from '../utils/styled'

const Wrapper = styled.div`
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 10%);
  padding: 28px;
  margin-bottom: 44px;
`

const Logo = styled.a`
  font-size: 2em;
  font-weight: 800;
  color: black;
  text-decoration: none;
`

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo href="/">Where in the world?</Logo>
      </Container>
    </Wrapper>
  )
}

export default Header
