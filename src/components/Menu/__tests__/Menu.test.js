import React from 'react'
import { shallow } from 'enzyme'
import { Menu } from '../'
import { NavItem } from '../styled'

describe('Menu', () => {
  it('should render', () => {
    const location = { pathname: '/' }
    const menu = shallow(<Menu location={location} />)

    expect(menu).toMatchSnapshot()
  })

  it('should menu item active', () => {
    const location = { pathname: '/' }
    const menu = shallow(<Menu location={location} />)
    const item = menu.find(NavItem).first()
    const { active } = item.props()

    expect(active).toBeTruthy()
  })
})
