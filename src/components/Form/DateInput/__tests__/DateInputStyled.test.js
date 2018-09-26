import React from 'react'
import { shallow } from 'enzyme'
import Date from '../styled'

describe('DateInputStyled', () => {
  it('should render', () => {
    const date = shallow(<Date />)

    expect(date).toMatchSnapshot()
  })
})
