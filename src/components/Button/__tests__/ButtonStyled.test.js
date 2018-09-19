import React from 'react'
import { shallow } from 'enzyme'
import theme from 'core/constants/theme'
import ButtonStyled from '../styled'

describe('ButtonStyled', () => {
  it('should render', () => {
    const btn = shallow(<ButtonStyled theme={theme}>Ok</ButtonStyled>)

    expect(btn).toMatchSnapshot()
  })

  it('should have primary color', () => {
    const btn = shallow(<ButtonStyled theme={theme} color="primary">Ok</ButtonStyled>)

    expect(btn).toHaveStyleRule('background-color', theme.colors.primary)
  })
})
