import React, { Component } from 'react'
import PlusIcon from 'core/assets/svg/plus.svg'
import FabButtonStyled from './styled'

class FabButton extends Component {

  render() {
    return (
      <FabButtonStyled {...this.props} color="primary">
        <PlusIcon fill="#fff" />
      </FabButtonStyled>
    )
  }

}

export default FabButton
