import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import ButtonStyled from './styled'

class Button extends PureComponent {

  render() {
    const { children, ...props } = this.props

    return (
      <ButtonStyled {...props}>
        {children}
      </ButtonStyled>
    )
  }

}

Button.defaultProps = {
  color: 'primary',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
}

export default Button
