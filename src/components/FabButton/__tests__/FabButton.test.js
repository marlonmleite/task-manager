import React from 'react'
import { shallow } from 'enzyme'
import FabButton from '../'

test('should render FabButton', () => {
  const fab = shallow(<FabButton>fab</FabButton>)

  expect(fab).toMatchSnapshot()
})
