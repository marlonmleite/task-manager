import React from 'react'
import { shallow } from 'enzyme'
import theme from 'core/constants/theme'
import HeaderStyled from '../styled'

describe('Header styled', () => {
  it('should render', () => {
    const header = shallow(<HeaderStyled theme={theme} />)

    expect(header).toMatchSnapshot()
  })
})
