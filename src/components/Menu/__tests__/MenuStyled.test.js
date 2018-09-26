import React from 'react'
import { shallow } from 'enzyme'
import { Nav, NavMenu, NavItem, Link, HomeIcon, TaskIcon, TagIcon } from '../styled'

describe('MenuStyled', () => {
  it('should render NavMenu', () => {
    const nav = shallow(<NavMenu />)

    expect(nav).toMatchSnapshot()
  })

  it('should render Nav', () => {
    const nav = shallow(<Nav />)

    expect(nav).toMatchSnapshot()
  })

  it('should render NavItem', () => {
    const nav = shallow(<NavItem active />)

    expect(nav).toMatchSnapshot()
  })

  it('should render Link', () => {
    const link = shallow(<Link active />)

    expect(link).toMatchSnapshot()
  })

  it('should render HomeIcon', () => {
    const icon = shallow(<HomeIcon />)

    expect(icon).toMatchSnapshot()
  })

  it('should render TaskIcon', () => {
    const icon = shallow(<TaskIcon />)

    expect(icon).toMatchSnapshot()
  })

  it('should render TagIcon', () => {
    const icon = shallow(<TagIcon />)

    expect(icon).toMatchSnapshot()
  })
})
