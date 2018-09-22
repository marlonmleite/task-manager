import React from 'react'
import { shallow } from 'enzyme'
import { Loading } from '../styled'
import theme from 'core/constants/theme'

describe('Loading', () => {
  it('should render', () => {
    const loading = shallow(<Loading theme={theme} />)

    expect(loading).toMatchSnapshot()
  })
})
