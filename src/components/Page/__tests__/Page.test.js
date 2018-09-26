import React from 'react'
import { shallow } from 'enzyme'
import { Page, PageContent, PageFilter, PageTop, PageTitle } from '../'

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

  it('should render page top', () => {
    const page = shallow(<PageTop />)

    expect(page).toMatchSnapshot()
  })

  it('should render page title', () => {
    const page = shallow(<PageTitle />)

    expect(page).toMatchSnapshot()
  })
})
