import React from 'react'
import { Field } from 'formik'
import FormGroup from '../FormGroup'

const FormGroupHoc = Input => (props) => {
  const { label, field, form, ...otherProps } = props
  const { touched, errors } = form
  const error = touched[field.name] && errors[field.name]

  return (
    <FormGroup label={label} name={field.name} error={error}>
      <Input {...field} {...otherProps} />
    </FormGroup>
  )
}

const withFormGroup = (Input) => {
  const FieldComponent = FormGroupHoc(Input)

  return props => <Field {...props} component={FieldComponent} />
}

export default withFormGroup
export { FormGroupHoc }
