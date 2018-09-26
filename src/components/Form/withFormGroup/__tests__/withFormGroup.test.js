import React from 'react'
import { shallow } from 'enzyme'
import withFormGroup, { FormGroupHoc } from '../'

const CustomInput = props => <input {...props} />
const Input = FormGroupHoc(CustomInput)

describe('withFormGroup', () => {
  it('should render', () => {
    const InputHoc = withFormGroup(CustomInput)
    const input = shallow(<InputHoc />)

    expect(input).toMatchSnapshot()
  })

  it('should render input', () => {
    const form = { touched: {}, errors: {} }
    const props = { field: { name: 'fullName', value: 'hi' }, form }
    const input = shallow(<Input {...props} label="" />)
    const field = input.find(CustomInput)

    expect(field.prop('name')).toBe('fullName')
    expect(field.prop('value')).toBe('hi')
  })

  it('should render with label', () => {
    const form = { touched: {}, errors: {} }
    const props = { field: { name: 'a', value: 'b' }, form, label: 'Name' }
    const input = shallow(<Input {...props} />)
    const group = input.find('FormGroup')

    expect(group.prop('label')).toBe('Name')
  })

  it('should display error', () => {
    const form = { touched: { a: true }, errors: { a: 'Required' } }
    const props = { field: { name: 'a' }, form }
    const input = shallow(<Input {...props} label="" />)
    const group = input.find('FormGroup')

    expect(group.prop('error')).toBe('Required')
  })

  it('should handle onChange', () => {
    const onChange = jest.fn()
    const form = { touched: {}, errors: {} }
    const props = { field: { name: 'fullName', onChange }, form }
    const input = shallow(<Input {...props} label="" />)

    input.find(CustomInput).simulate('change', '🚀')

    expect(onChange).toHaveBeenCalledWith('🚀')
  })
})

