import React from 'react'
import { shallow } from 'enzyme'
import FormGroup from '../'
import { ErrorStyled } from '../styled'

describe('FormGroup', () => {
  it('should render', () => {
    const component = shallow(<FormGroup label="Abc" name="abc">a</FormGroup>)

    expect(component).toMatchSnapshot()
  })

  it('should render with error', () => {
    const component = shallow(<FormGroup label="Abc" name="abc" error="asdf">a</FormGroup>)
    const error = component.find(ErrorStyled)

    expect(error.exists()).toBeTruthy()
  })
})
