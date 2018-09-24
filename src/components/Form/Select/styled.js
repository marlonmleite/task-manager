import styled from 'styled-components'
import { InputComponent } from '../Input'

const Select = InputComponent.withComponent('select')

const SelectStyled = styled(Select)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

export default SelectStyled
