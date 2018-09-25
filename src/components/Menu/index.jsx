import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { NavMenu, Nav, NavItem, Link, HomeIcon, TaskIcon, TagIcon } from './styled'

class Menu extends PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    const { location: { pathname } } = this.props

    return (
      <NavMenu>
        <Nav>
          <NavItem active={pathname === '/'}>
            <Link to="/">
              <HomeIcon /> Home
            </Link>
          </NavItem>
          <NavItem active={pathname === '/tasks'}>
            <Link to="/tasks">
              <TaskIcon /> Tasks
            </Link>
          </NavItem>
          <NavItem active={pathname === '/tags'}>
            <Link to="/tags">
              <TagIcon /> Tags
            </Link>
          </NavItem>
        </Nav>
      </NavMenu>
    )
  }

}

export default withRouter(Menu)
