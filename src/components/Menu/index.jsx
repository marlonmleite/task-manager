import React, { PureComponent } from 'react'
import { NavMenu, Nav, NavItem, Link, HomeIcon, TaskIcon, TagIcon } from './styled'

class Menu extends PureComponent {

  render() {
    return (
      <NavMenu>
        <Nav>
          <NavItem active>
            <Link to="/">
              <HomeIcon /> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/tasks">
              <TaskIcon /> Tasks
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/tags">
              <TagIcon /> Tags
            </Link>
          </NavItem>
        </Nav>
      </NavMenu>
    )
  }

}

export default Menu
