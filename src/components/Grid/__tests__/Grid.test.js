import React from 'react'
import { shallow } from 'enzyme'
import Grid from '../'
import { Edit, Remove, Finish } from '../styled'

describe('Grid', () => {

  const items = [{ id: 1, completed: false }, { id: 2, completed: true }]
  const singleItems = [items[0]]

  it('should render', () => {
    const grid = shallow(<Grid
      items={items}
      onRemove={jest.fn()}
      onEdit={jest.fn()}
      render={jest.fn()}
    />)

    expect(grid).toMatchSnapshot()
  })

  it('should item render prop call', () => {
    const render = jest.fn()
    const item = items[0]

    shallow(<Grid
      items={singleItems}
      onRemove={jest.fn()}
      onEdit={jest.fn()}
      render={render}
    />)

    expect(render).toHaveBeenCalledWith(item, 0)
  })

  it('should handle edit', () => {
    const onEdit = jest.fn()
    const grid = shallow(<Grid
      items={singleItems}
      onRemove={jest.fn()}
      onEdit={onEdit}
      render={jest.fn()}
    />)

    grid.find(Edit).simulate('click')

    expect(onEdit).toHaveBeenCalled()
  })

  it('should handle remove', () => {
    const onRemove = jest.fn()
    const grid = shallow(<Grid
      items={singleItems}
      onRemove={onRemove}
      onEdit={jest.fn()}
      render={jest.fn()}
    />)

    grid.find(Remove).simulate('click')

    expect(onRemove).toHaveBeenCalled()
  })

  it('should handle finish', () => {
    const onFinish = jest.fn()
    const grid = shallow(<Grid
      items={singleItems}
      onRemove={jest.fn()}
      onEdit={jest.fn()}
      onFinish={onFinish}
      render={jest.fn()}
    />)

    grid.find(Finish).simulate('click')

    expect(onFinish).toHaveBeenCalled()
  })


})
