import React from 'react'
import { shallow } from 'enzyme'
import LoadingFullscreen from '../LoadingFullscreen'

describe('LoadingFullscreen', () => {
  it('should render', () => {
    const loading = shallow(<LoadingFullscreen />)

    expect(loading).toMatchSnapshot()
  })
})
