import React from 'react'
import { shallow } from 'enzyme'
import { Grid, GridItem, Remove, Finish, Edit } from '../styled'

describe('GridStyled', () => {
  it('should render grid', () => {
    const grid = shallow(<Grid />)

    expect(grid).toMatchSnapshot()
  })

  it('should render grid item', () => {
    const grid = shallow(<GridItem />)

    expect(grid).toMatchSnapshot()
  })

  it('should render remove icon', () => {
    const icon = shallow(<Remove />)

    expect(icon).toMatchSnapshot()
  })

  it('should render finish icon', () => {
    const icon = shallow(<Finish />)

    expect(icon).toMatchSnapshot()
  })

  it('should render edit icon', () => {
    const icon = shallow(<Edit />)

    expect(icon).toMatchSnapshot()
  })
})
