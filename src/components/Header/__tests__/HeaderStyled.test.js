import React from 'react'
import { shallow } from 'enzyme'
import theme from 'core/constants/theme'
import { Header, Title } from '../styled'

describe('Header styled', () => {
  it('should render', () => {
    const header = shallow(<Header theme={theme} />)

    expect(header).toMatchSnapshot()
  })

  it('should title', () => {
    const title = shallow(<Title />)

    expect(title).toMatchSnapshot()
  })
})
