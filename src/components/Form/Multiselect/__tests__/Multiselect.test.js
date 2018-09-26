import React from 'react'
import { shallow } from 'enzyme'
import Multiselect from '../styled'

describe('Multiselect', () => {
  it('should render', () => {
    const select = shallow(<Multiselect />)

    expect(select).toMatchSnapshot()
  })
})
