import React from 'react'
import { shallow } from 'enzyme'
import ButtonMore from '../styled'

describe('ButtonMore', () => {
  it('should render', () => {
    const btn = shallow(<ButtonMore>more</ButtonMore>)

    expect(btn).toMatchSnapshot()
  })
})
