import React from 'react'
import { shallow } from 'enzyme'
import { Row } from 'components/Layout'
import Pagination from '../'
import ButtonMore from '../styled'

describe('Pagination', () => {
  it('should render', () => {
    const pag = shallow(<Pagination page={1} onChange={jest.fn()} hasMore />)

    expect(pag).toMatchSnapshot()
  })

  it('should not have more pages', () => {
    const pag = shallow(<Pagination page={1} onChange={jest.fn()} hasMore={false} />)
    const hasContent = pag.find(Row).exists()

    expect(hasContent).toBeFalsy()
  })

  it('should handle onClick', () => {
    const onChange = jest.fn()
    const pag = shallow(<Pagination page={1} onChange={onChange} hasMore />)

    pag.find(ButtonMore).simulate('click')

    expect(onChange).toHaveBeenCalledWith(2)
  })

  it('should not handle onClick when loading', () => {
    const onChange = jest.fn()
    const pag = shallow(<Pagination page={1} onChange={onChange} loading hasMore />)

    pag.find(ButtonMore).simulate('click')

    expect(onChange).not.toHaveBeenCalled()
  })
})
