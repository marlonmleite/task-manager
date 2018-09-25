import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Loading } from 'components/Loading'
import { ButtonStyled, LoadingContainer } from './styled'

class Button extends PureComponent {

  static defaultProps = {
    color: 'primary',
    type: 'button',
    onClick: null,
    loading: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string,
    type: PropTypes.string,
    loading: PropTypes.bool,
  }

  render() {
    const { children, ...props } = this.props

    return (
      <ButtonStyled {...props}>
        <span>{children}</span>
        {props.loading && (
          <LoadingContainer>
            <Loading size="14px" color="secondary" />
          </LoadingContainer>
        )}
      </ButtonStyled>
    )
  }

}

export default Button
