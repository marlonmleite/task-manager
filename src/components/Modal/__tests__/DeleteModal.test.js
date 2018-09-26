import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../Button'
import DeleteModal from '../DeleteModal'

describe('DeleteModal', () => {
  it('should render', () => {
    const modal = shallow(<DeleteModal onClose={jest.fn()} onConfirm={jest.fn()} />)

    expect(modal).toMatchSnapshot()
  })

  it('should close modal', () => {
    const onConfirm = jest.fn()
    const onClose = jest.fn()
    const modal = shallow(<DeleteModal onClose={onClose} onConfirm={onConfirm} />)

    modal.find(Button).last().simulate('click')

    expect(onConfirm).not.toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
  })

  it('should confirm and close modal', () => {
    const onConfirm = jest.fn()
    const onClose = jest.fn()
    const modal = shallow(<DeleteModal onClose={onClose} onConfirm={onConfirm} />)

    modal.find(Button).first().simulate('click')

    expect(onConfirm).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
  })
})
