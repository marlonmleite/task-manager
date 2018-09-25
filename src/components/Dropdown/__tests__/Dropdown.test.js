import React from 'react'
import { shallow } from 'enzyme'
import { Dropdown } from '../'
import { DropdownContent } from '../styled'

describe('Dropdown', () => {
  it('should render', () => {
    const dropdown = shallow(<Dropdown text="a"><span /></Dropdown>)

    expect(dropdown).toMatchSnapshot()
  })

  it('should hide menu', () => {
    const dropdown = shallow(<Dropdown text="a"><span /></Dropdown>)
    const menu = dropdown.find(DropdownContent)

    expect(menu.exists()).toBeFalsy()
  })

  it('should not open menu when default prevented', () => {
    const dropdown = shallow(<Dropdown text="a"><span /></Dropdown>)
    const button = dropdown.find('Button')

    button.simulate('click', { defaultPrevented: true })

    const menu = dropdown.find(DropdownContent)

    expect(menu.exists()).toBeFalsy()
  })

  it('should open menu', () => {
    const dropdown = shallow(<Dropdown text="a"><span /></Dropdown>)
    const button = dropdown.find('Button')

    button.simulate('click', {})

    const menu = dropdown.find(DropdownContent)

    expect(menu.exists()).toBeTruthy()
  })

  it('should open and hide menu', () => {
    const dropdown = shallow(<Dropdown text="a"><span /></Dropdown>)
    const button = dropdown.find('Button')

    button.simulate('click', {})
    button.simulate('click', {})

    const menu = dropdown.find(DropdownContent)

    expect(menu.exists()).toBeFalsy()
  })
})
