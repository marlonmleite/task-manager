import React, { Component } from 'react'
import PlusIcon from 'core/assets/svg/plus.svg'
import FabButtonStyled from './styled'

class FabButton extends Component {

  static defaultProps = {
    color: 'primary',
  }

  render() {
    return (
      <FabButtonStyled {...this.props}>
        <PlusIcon fill="#fff" />
      </FabButtonStyled>
    )
  }

}

export default FabButton
