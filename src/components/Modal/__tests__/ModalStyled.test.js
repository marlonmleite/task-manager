import React from 'react'
import { shallow } from 'enzyme'
import { ModalBody, ModalContent, ModalFooter } from '../styled'

describe('Modal styled', () => {
  it('should render ModalBody', () => {
    const modal = shallow(<ModalBody />)

    expect(modal).toMatchSnapshot()
  })

  it('should render ModalContent', () => {
    const modal = shallow(<ModalContent />)

    expect(modal).toMatchSnapshot()
  })

  it('should render ModalFooter', () => {
    const modal = shallow(<ModalFooter />)

    expect(modal).toMatchSnapshot()
  })
})
