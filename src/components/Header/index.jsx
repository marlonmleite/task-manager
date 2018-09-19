import React, { PureComponent } from 'react'
import Logo from 'core/assets/svg/geru.svg'
import HeaderStyled from './styled'

class Header extends PureComponent {

  render() {
    return (
      <HeaderStyled>
        <Logo />
      </HeaderStyled>
    )
  }

}

export default Header
