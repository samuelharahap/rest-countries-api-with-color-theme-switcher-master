import styled from 'styled-components'

import { Container } from '../utils/styled'

const Wrapper = styled.div`
  box-shadow: 0 0 5px 2px rgb(0 0 0 / 6%);
  line-height: 76px;
  margin-bottom: 152px;
  background-color: #fff;
`

const Logo = styled.a`
  font-size: 1.75em;
  letter-spacing: -0.2px;
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
