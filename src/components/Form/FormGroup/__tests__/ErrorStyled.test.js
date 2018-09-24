import React from 'react'
import { shallow } from 'enzyme'
import { ErrorStyled } from '../styled'
import theme from 'core/constants/theme'

describe('ErrorStyled', () => {
  it('should render', () => {
    const error = shallow(<ErrorStyled theme={theme} />)

    expect(error).toMatchSnapshot()
  })
})
