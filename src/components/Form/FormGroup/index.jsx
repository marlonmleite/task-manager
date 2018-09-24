import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FormGroupStyled, ErrorStyled } from './styled'

class FormGroup extends Component {

  static defaultProps = {
    error: '',
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    error: PropTypes.string,
  }

  render() {
    const { name, label, children, error } = this.props

    return (
      <FormGroupStyled invalid={!!error}>
        {children}
        <label htmlFor={name}>
          {label}
        </label>
        {error && (
          <ErrorStyled>
            {error}
          </ErrorStyled>
        )}
      </FormGroupStyled>
    )
  }

}

export default FormGroup
