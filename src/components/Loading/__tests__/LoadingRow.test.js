import React from 'react'
import { shallow } from 'enzyme'
import LoadingRow from '../LoadingRow'

describe('LoadingRow', () => {
  it('should render', () => {
    const loading = shallow(<LoadingRow />)

    expect(loading).toMatchSnapshot()
  })
})
