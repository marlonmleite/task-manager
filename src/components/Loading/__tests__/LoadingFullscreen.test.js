import React from 'react'
import { shallow } from 'enzyme'
import LoadingFullscreen from '../LoadingFullscreen'
import { LoadingFullscreenStyled } from '../styled'

describe('LoadingFullscreen', () => {
  it('should render', () => {
    const loading = shallow(<LoadingFullscreen />)

    expect(loading).toMatchSnapshot()
  })

  it('should render styled', () => {
    const loading = shallow(<LoadingFullscreenStyled />)

    expect(loading).toMatchSnapshot()
  })
})
