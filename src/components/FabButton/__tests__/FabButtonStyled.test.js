import React from 'react'
import { shallow } from 'enzyme'
import FabButton from '../styled'

test('should render FabButton styled', () => {
  const fab = shallow(<FabButton>fab</FabButton>)

  expect(fab).toMatchSnapshot()
})
