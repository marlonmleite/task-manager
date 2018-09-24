import PropTypes from 'prop-types'
import withFormGroup from '../withFormGroup'
import MultiselectComponent from './styled'

MultiselectComponent.defaultProps = {
  isMulti: true,
  classNamePrefix: 'multiselect',
}

MultiselectComponent.propTypes = {
  isMulti: PropTypes.bool,
}

const Multiselect = withFormGroup(MultiselectComponent)

export {
  MultiselectComponent,
  Multiselect,
}
