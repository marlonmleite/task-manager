import React from 'react'
import { shallow } from 'enzyme'
import LoadingContent from '../LoadingContent'

describe('LoadingContent', () => {
  it('should render', () => {
    const loading = shallow(<LoadingContent />)

    expect(loading).toMatchSnapshot()
  })
})
