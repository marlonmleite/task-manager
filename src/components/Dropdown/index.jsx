import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Button from '../Button'
import { Dropdown as DropdownStyled, DropdownContent, DropdownButton, DropdownOption, CaretStyled } from './styled'

class Dropdown extends Component {

  state = {
    open: false,
  }

  toggle = (event) => {
    const { open } = this.state
    const nextOpen = !open

    if (event.defaultPrevented) {
      return
    }

    if (nextOpen) {
      window.document.addEventListener('click', this.toggle)
    } else {
      window.document.removeEventListener('click', this.toggle)
    }

    this.setState({ open: nextOpen })
  }


  render() {
    const { open } = this.state
    const { text, children, color, right } = this.props

    return (
      <DropdownStyled color={color}>
        <Button onClick={this.toggle} color={color}>
          <DropdownButton>
            <span>{text}</span>
            <CaretStyled color={color} />
          </DropdownButton>
        </Button>
        {open && (
          <DropdownContent right={right}>
            {children}
          </DropdownContent>
        )}
      </DropdownStyled>
    )
  }

}

Dropdown.defaultProps = {
  color: 'primary',
  right: false,
}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  right: PropTypes.bool,
}

export { Dropdown, DropdownOption }
