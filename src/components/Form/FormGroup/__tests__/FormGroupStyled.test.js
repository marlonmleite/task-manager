import React from 'react'
import { shallow } from 'enzyme'
import theme from 'core/constants/theme'
import { FormGroupStyled } from '../styled'

describe('FormGroupStyled', () => {
  it('should render', () => {
    const form = shallow(<FormGroupStyled theme={theme} />)

    expect(form).toMatchSnapshot()
  })

  it('should render invalid', () => {
    const form = shallow(<FormGroupStyled theme={theme} invalid />)

    expect(form).toMatchSnapshot()
  })
})
