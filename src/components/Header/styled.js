import styled from 'styled-components'

export const Header = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 36px;
  padding: 10px;
  box-shadow: 0 0px 12px 0px #0006;
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 1rem;
  font-weight: normal;
  padding-left: 20px;
  margin: 0 0 0 20px;
  border-left: 1px solid #ffffff5e;
`
