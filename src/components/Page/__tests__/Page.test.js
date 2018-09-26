import React from 'react'
import { shallow } from 'enzyme'
import { Page, PageContent, PageFilter } from '../'

describe('Page', () => {
  it('should render page', () => {
    const page = shallow(<Page />)

    expect(page).toMatchSnapshot()
  })

  it('should render page content', () => {
    const page = shallow(<PageContent />)

    expect(page).toMatchSnapshot()
  })

  it('should render page filter', () => {
    const page = shallow(<PageFilter />)

    expect(page).toMatchSnapshot()
  })
})
