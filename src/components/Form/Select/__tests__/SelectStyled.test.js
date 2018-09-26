import React from 'react'
import { shallow } from 'enzyme'
import Select from '../styled'

describe('SelectStyled', () => {
  it('should render', () => {
    const select = shallow(<Select />)

    expect(select).toMatchSnapshot()
  })
})
