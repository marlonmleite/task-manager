import PropTypes from 'prop-types'
import React from 'react'
import withFormGroup from '../withFormGroup'
import SelectStyled from './styled'

export const SelectComponent = props => (
  <SelectStyled {...props} className={!props.value ? 'empty' : ''} />
)

SelectComponent.defaultProps = {
  value: '',
  multiple: false,
}

SelectComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  multiple: PropTypes.bool,
}

export const Select = withFormGroup(SelectComponent)
