import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { InputComponent } from '../Input'
import { convertDateToISO, convertISOToDate } from 'core/utils/date'
import withFormGroup from '../withFormGroup'
import DateStyled from './styled'
import 'react-datepicker/dist/react-datepicker.css'

export class DateInputComponent extends Component {

  static defaultProps = {
    value: '',
  }

  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    open: false,
  }

  onClickPortal = ({ target }) => {
    const portalClass = 'react-datepicker__portal'

    portalClass === target.classList.value && this.setOpen(false)
  }

  setOpen = open => this.setState({ open })

  toggleOpen = (event) => {
    event && event.preventDefault()

    this.setOpen(!this.state.open)
  }

  handleChange = (date) => {
    const { onChange } = this.props
    const value = convertDateToISO(date)

    this.setOpen(false)
    onChange(value)
  }

  render() {
    const { value, name } = this.props
    const { open } = this.state
    const selected = convertISOToDate(value)
    const formatted = selected ? selected.format('L HH:mm') : ''

    return (
      <Fragment>
        <InputComponent value={formatted} onFocus={this.toggleOpen} />
        {open && (
          <DateStyled onClick={this.onClickPortal}>
            <DatePicker
              name={name}
              selected={selected}
              onChange={this.handleChange}
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Hora"
              showTimeSelect
              withPortal
              inline
              fixedHeight
            />
          </DateStyled>
        )}
      </Fragment>
    )
  }

}

export const DateInput = withFormGroup(DateInputComponent)
