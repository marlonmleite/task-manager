import React from 'react'
import { shallow } from 'enzyme'
import theme from 'core/constants/theme'
import { InputComponent } from '../'

test('Input', () => {
  const input = shallow(<InputComponent value="abc" theme={theme} />)

  expect(input).toMatchSnapshot()
})

