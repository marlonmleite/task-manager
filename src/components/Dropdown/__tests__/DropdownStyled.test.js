import React from 'react'
import { shallow } from 'enzyme'
import theme from 'core/constants/theme'
import { Dropdown, DropdownContent, DropdownButton, DropdownOption, CaretStyled } from '../styled'

describe('DropdownStyled', () => {
  it('should render dropdown', () => {
    const dropdown = shallow(<Dropdown />)

    expect(dropdown).toMatchSnapshot()
  })

  it('should render dropdown menu', () => {
    const dropdown = shallow(<DropdownContent />)

    expect(dropdown).toMatchSnapshot()
  })

  it('should show dropdown menu in right', () => {
    const dropdown = shallow(<DropdownContent right />)

    expect(dropdown).toHaveStyleRule('left', 'auto')
    expect(dropdown).toHaveStyleRule('right', '0')
  })

  it('should render dropdown button', () => {
    const dropdown = shallow(<DropdownButton />)

    expect(dropdown).toMatchSnapshot()
  })

  it('should render dropdown option', () => {
    const dropdown = shallow(<DropdownOption />)

    expect(dropdown).toMatchSnapshot()
  })

  it('should dropdown option is selected', () => {
    const dropdown = shallow(<DropdownOption selected />)

    expect(dropdown).toMatchSnapshot()
  })

  it('should render caret', () => {
    const dropdown = shallow(<CaretStyled theme={theme} />)

    expect(dropdown).toMatchSnapshot()
  })
})
