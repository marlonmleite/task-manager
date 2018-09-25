import React from 'react'
import { shallow } from 'enzyme'
import { Col, Row } from '../'

test('should render a Col', () => {
  const col = shallow(<Col size="20px" />)

  expect(col).toMatchSnapshot()
})

test('should render a Row', () => {
  const row = shallow(<Row />)

  expect(row).toMatchSnapshot()
})
