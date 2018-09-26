import React from 'react'
import { shallow } from 'enzyme'
import { SelectComponent } from '../'

describe('Select', () => {
  it('should has empty class', () => {
    const select = shallow(<SelectComponent />)
    const { className } = select.props()

    expect(className).toBe('empty')
  })

  it('should not have empty class', () => {
    const select = shallow(<SelectComponent value="a" />)
    const { className } = select.props()

    expect(className).toBe('')
  })
})
