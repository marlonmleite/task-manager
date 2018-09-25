import React from 'react'
import { shallow } from 'enzyme'
import AsyncImport from '../'

describe('AsyncImport', () => {
  it('should render', () => {
    const comp = shallow(<AsyncImport />)

    expect(comp).toMatchSnapshot()
  })
})
