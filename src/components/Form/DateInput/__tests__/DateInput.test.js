import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import { InputComponent } from '../../Input'
import { DateInputComponent } from '../'

describe('DateInput', () => {
  it('should render', () => {
    const input = shallow(<DateInputComponent name="a" onChange={jest.fn()} />)

    expect(input).toMatchSnapshot()
  })

  it('should display date picker', () => {
    const input = shallow(<DateInputComponent name="a" onChange={jest.fn()} />)
    const event = { preventDefault: jest.fn() }

    input.find(InputComponent).simulate('focus', event)

    const datePicker = input.find(DatePicker)

    expect(event.preventDefault).toHaveBeenCalled()
    expect(datePicker.exists()).toBeTruthy()
  })

  it('should handle onChange', () => {
    const onChange = jest.fn()
    const input = shallow(<DateInputComponent name="a" onChange={onChange} />)

    input.find(InputComponent).simulate('focus')
    input.find(DatePicker).simulate('change', moment())

    expect(onChange).toHaveBeenCalledWith('1970-01-01T00:00:00.000Z')
  })
})
