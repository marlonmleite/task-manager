import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Logo from 'core/assets/svg/geru.svg'
import { Header as HeaderStyled, Title } from './styled'

class Header extends PureComponent {

  render() {
    const { title } = this.props

    return (
      <HeaderStyled>
        {/* <Logo /> */}
        <Title>{title}</Title>
      </HeaderStyled>
    )
  }

}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
