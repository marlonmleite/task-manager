import React from 'react'
import { shallow } from 'enzyme'
import Header from '../'

describe('Header', () => {
  it('should render', () => {
    const header = shallow(<Header />)

    expect(header).toMatchSnapshot()
  })
})
