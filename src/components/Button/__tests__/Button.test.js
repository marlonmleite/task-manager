import React from 'react'
import { shallow } from 'enzyme'
import Button from '../'

describe('Button', () => {
  it('should render Button', () => {
    const btn = shallow(<Button onClick={jest.fn()}>Ok</Button>)

    expect(btn).toMatchSnapshot()
  })

  it('should render with loading', () => {
    const btn = shallow(<Button onClick={jest.fn()} loading>Ok</Button>)

    expect(btn).toMatchSnapshot()
  })

  it('should handle onClick', () => {
    const onClick = jest.fn()
    const btn = shallow(<Button onClick={onClick}>Ok</Button>)

    btn.simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
