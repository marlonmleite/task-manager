import React from 'react'
import { shallow } from 'enzyme'
import HeaderStyled from '../styled'

describe('Header styled', () => {
  it('should render', () => {
    const header = shallow(<HeaderStyled />)

    expect(header).toMatchSnapshot()
  })
})
